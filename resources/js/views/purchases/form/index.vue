<template>
  <div>
    <div class="o_control_panel">
      <div>
        <ol class="breadcrumb" role="navigation">
          <li class="breadcrumb-item" accesskey="b">
            <router-link class="text-primary" :to="{ name:'purchases_index' }">Purchases</router-link>
          </li>
        </ol>
        <div class="o_cp_searchview" role="search">
          <div class="o_searchview" role="search" aria-autocomplete="list">
            <button
              class="o_searchview_more fa fa-search-minus"
              title="Advanced Search..."
              role="img"
              aria-label="Advanced Search..."
              type="submit"
            ></button>

            <div class="o_searchview_input_container">
              <input
                type="text"
                class="o_searchview_input"
                v-model="search"
                placeholder="Search..."
                name="value"
              />
              <div class="dropdown-menu o_searchview_autocomplete" role="menu"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="o_cp_left">
          <div class="o_cp_buttons" role="toolbar" aria-label="Control panel toolbar">
            <div>
              <router-link
                type="button"
                class="btn btn-primary text-white o-kanban-button-new"
                :to="{ name:'purchases_create' }"
              >Create</router-link>
              <button type="button" class="btn btn-secondary o_button_import">Import</button>
            </div>
          </div>
        </div>
        <div class="o_cp_right">
          <nav class="o_cp_pager" role="search" aria-label="Pager">
            <div class="o_pager o_hidden">
              <span class="o_pager_counter">
                <span class="o_pager_value"></span>
                {{pagination.from}}-{{pagination.to}} /
                <span class="o_pager_limit"></span>
                {{pagination.total}}
              </span>

              <span class="btn-group" aria-atomic="true">
                <a
                  v-if="pagination.prevPage"
                  @click="--pagination.currentPage"
                  type="button"
                  class="fa fa-chevron-left btn o_pager_previous"
                ></a>
                <a v-else type="button" class="fa fa-chevron-left btn o_pager_previous"></a>
                <a
                  v-if="pagination.nextPage"
                  @click="++pagination.currentPage"
                  type="button"
                  class="fa fa-chevron-right btn o_pager_next"
                ></a>
                <a v-else type="button" disabled class="fa fa-chevron-right btn o_pager_next"></a>
              </span>
              <span class="btn-group d-none" aria-atomic="true">
                <button
                  type="button"
                  class="fa fa-chevron-left btn btn-secondary o_pager_previous"
                  accesskey="p"
                  aria-label="Previous"
                  title="Previous"
                  tabindex="-1"
                ></button>
                <button
                  type="button"
                  class="fa fa-chevron-right btn btn-secondary o_pager_next"
                  accesskey="n"
                  aria-label="Next"
                  title="Next"
                  tabindex="-1"
                ></button>
              </span>
            </div>
          </nav>
          <nav
            class="btn-group o_cp_switch_buttonsnav nav"
            role="toolbar"
            aria-label="View switcher"
          >
            <a
              data-toggle="tab"
              disable_anchor="true"
              href="#notebook_page_511"
              class="nav-link btn btn-secondary fa fa-lg fa-list-ul o_cp_switch_list active"
              role="tab"
              aria-selected="true"
            ></a>
            <a
              data-toggle="tab"
              disable_anchor="true"
              href="#notebook_page_521"
              class="nav-link btn btn-secondary fa fa-lg fa-th-large o_cp_switch_kanban"
              role="tab"
            ></a>
          </nav>
        </div>
      </div>
    </div>
    <div class="o_content">
      <div class="o_list_view o_purchase_order o_list_optional_columns">
        <div class="o_purchase_dashboard container">
          <div class="row">
            <div class="col-sm-5">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <td class="o_text">
                      <div>All RFQs</div>
                    </td>
                    <td
                      class="o_main o_dashboard_action"
                      title="All Draft RFQs"
                      name="purchase.purchase_action_dashboard"
                      context="{&quot;search_default_draft_rfqs&quot;: true}"
                    >
                      <a href="#">
                        7
                        <br />To Send
                      </a>
                    </td>
                    <td
                      class="o_main o_dashboard_action"
                      title="All Waiting RFQs"
                      name="purchase.purchase_action_dashboard"
                      context="{&quot;search_default_waiting_rfqs&quot;: true}"
                    >
                      <a href="#">
                        0
                        <br />Waiting
                      </a>
                    </td>
                    <td
                      class="o_main o_dashboard_action"
                      title="All Late RFQs"
                      name="purchase.purchase_action_dashboard"
                      context="{&quot;search_default_late_rfqs&quot;: true}"
                    >
                      <a href="#">
                        7
                        <br />Late
                      </a>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="o_text">
                      <div>My RFQs</div>
                    </td>
                    <td
                      class="o_main o_dashboard_action"
                      title="My Draft RFQs"
                      name="purchase.purchase_action_dashboard"
                      context="{&quot;search_default_draft_rfqs&quot;: true, &quot;search_default_my_purchases&quot;: true}"
                    >
                      <a href="#">7</a>
                    </td>
                    <td
                      class="o_main o_dashboard_action"
                      title="My Waiting RFQs"
                      name="purchase.purchase_action_dashboard"
                      context="{&quot;search_default_waiting_rfqs&quot;: true, &quot;search_default_my_purchases&quot;: true}"
                    >
                      <a href="#">0</a>
                    </td>
                    <td
                      class="o_main o_dashboard_action"
                      title="My Late RFQs"
                      name="purchase.purchase_action_dashboard"
                      context="{&quot;search_default_late_rfqs&quot;: true, &quot;search_default_my_purchases&quot;: true}"
                    >
                      <a href="#">7</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="col-sm-7">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <td class="o_text">Avg Order Value (Rp)</td>
                    <td>
                      <span>0</span>
                    </td>
                    <td class="o_text">Purchased Last 7 Days (Rp)</td>
                    <td>
                      <span>0</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="o_text">Lead Time to Purchase</td>
                    <td>
                      <span>0 &nbsp;Days</span>
                    </td>
                    <td class="o_text">RFQs Sent Last 7 Days</td>
                    <td>
                      <span>0</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="tab-content">
          <div class="tab-pane active" id="notebook_page_511">
            <div class="panel-body ml-2">
              <div class="table-responsive">
                <table
                  class="o_list_table table table-sm table-hover table-striped o_list_table_ungrouped"
                  style="table-layout: fixed;"
                >
                  <thead>
                    <tr>
                      <th
                        v-for="column in columns"
                        :key="column.name"
                        @click="sortBy(column.name)"
                        :class="sortKey === column.name ? (sortOrders[column.name] > 0 ? 'o-sort-down o_column_sortable' : 'o-sort-up o_column_sortable') : 'sorting'"
                        style="cursor:pointer;"
                      >{{column.label}}</th>
                    </tr>
                  </thead>
                  <tbody class>
                    <tr
                      v-for="row in paginatedata"
                      :key="row.id"
                      class="o_data_row"
                      @click="show(row)"
                    >
                      <td
                        class="o_data_cell o_field_cell o_list_char o_readonly_modifier o_required_modifier text-bf"
                      >{{row.order_no}}</td>
                      <td class="o_data_cell o_field_cell o_date_cell o_readonly_modifier">
                        <span
                          class="o_field_date o_field_widget o_readonly_modifier"
                        >{{row.order_date}}</span>
                      </td>
                      <td class="o_data_cell o_field_cell o_date_cell o_readonly_modifier">
                        <span
                          class="o_field_date o_field_widget o_readonly_modifier"
                        >{{row.confirm_date}}</span>
                      </td>
                      <td
                        class="o_data_cell o_field_cell o_list_many2one o_readonly_modifier o_required_modifier"
                      >{{row.partner.name}}</td>
                      <td
                        class="o_data_cell o_field_cell o_list_many2one o_many2one_avatar_user_cell"
                      >
                        <div class="o_field_many2one_avatar o_clickable_m2o_avatar o_field_widget">
                          <img
                            v-if="row.merchandises.photo != null"
                            v-bind:src="'/uploads/Employees/'+row.merchandises.photo"
                            class="o_m2o_avatar"
                          />
                          <img v-else v-bind:src="'/images/icons/avatar.png'" class="o_m2o_avatar" />
                          <span>{{row.merchandises.employee_name}}</span>
                        </div>
                      </td>
                      <td
                        class="o_data_cell o_field_cell o_list_many2one o_readonly_modifier o_required_modifier"
                      >{{row.company.company_name}}</td>
                      <td
                        class="o_data_cell o_field_cell o_list_number o_monetary_cell o_readonly_modifier"
                      >
                        <span
                          v-if="row.partner.currency.position == 'before'"
                          class="o_field_monetary o_field_number o_field_widget text-bf o_readonly_modifier"
                        >{{row.partner.currency.symbol}}&nbsp;{{formatPrice(row.grand_total)}}</span>
                        <span
                          v-if="row.partner.currency.position == 'after'"
                          class="o_field_monetary o_field_number o_field_widget text-bf o_readonly_modifier"
                        >{{formatPrice(row.grand_total)}}&nbsp;{{row.partner.currency.symbol}}</span>
                      </td>
                      <td
                        class="o_data_cell o_field_cell o_badge_cell o_readonly_modifier"
                        tabindex="-1"
                      >
                        <span
                          v-if="row.state == 'purchase'"
                          class="badge badge-pill o_field_badge o_field_widget o_readonly_modifier bg-success"
                        >Purchase Order</span>
                        <span
                          v-else
                          class="badge badge-pill o_field_badge o_field_widget o_readonly_modifier bg-alpha"
                        >RFQ</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td class="o_list_number" title="Total Tax Included">0</td>
                      <td></td>
                    </tr>
                  </tfoot>
                  <i class="o_optional_columns_dropdown_toggle fa fa-ellipsis-v"></i>
                </table>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="notebook_page_521">
            <div class="panel-body">
              <div class="o_kanban_view o_kanban_mobile o_kanban_ungrouped">
                <div
                  v-for="row in paginatedata"
                  :key="row.id"
                  class="oe_kanban_card oe_kanban_global_click o_kanban_record"
                >
                  <div class="o_kanban_record_top mb16" modifiers="{}">
                    <div class="o_kanban_record_headings mt4" modifiers="{}">
                      <strong class="o_kanban_record_title" modifiers="{}">
                        <span modifiers="{}">{{row.partner.name}}</span>
                      </strong>
                    </div>
                    <strong v-if="row.partner.currency.position == 'before'">
                      <span
                        class="o_field_monetary o_field_number o_field_widget"
                        name="amount_total"
                      >{{row.partner.currency.symbol}}&nbsp;{{formatPrice(row.grand_total)}}</span>
                    </strong>
                    <strong v-if="row.partner.currency.position == 'after'">
                      <span
                        class="o_field_monetary o_field_number o_field_widget"
                        name="amount_total"
                      >{{formatPrice(row.grand_total)}}&nbsp;{{row.partner.currency.symbol}}</span>
                    </strong>
                  </div>
                  <a class="o_kanban_record_bottom">
                    <div class="oe_kanban_bottom_left text-muted" modifiers="{}">
                      <span modifiers="{}">
                        {{row.order_no}}
                        <br />
                        {{row.order_date}}
                      </span>
                      <div
                        class="o_kanban_inline_block dropdown o_kanban_selection o_mail_activity o_field_widget"
                        name="activity_ids"
                      ></div>
                    </div>
                    <div class="oe_kanban_bottom_right" modifiers="{}">
                      <div name="state" class="o_field_widget badge badge-default">
                        <div
                          v-if="row.state == 'purchase'"
                          class="mb-2 mr-2 badge badge-pill o_field_badge o_field_widget o_readonly_modifier bg-success"
                        >
                          <span style="font-size:10px;">Purchase Order</span>
                        </div>
                        <div
                          v-else
                          class="mb-2 mr-2 badge badge-pill o_field_badge o_field_widget o_readonly_modifier bg-alpha"
                        >
                          <span style="font-size:10px;">RFQ</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div v-for="row in ghost" :key="row.id" class="o_kanban_record o_kanban_ghost" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.fetchPurchaseOrder();
    console.log("ok");
  },
  data() {
    let sortOrders = {};
    let columns = [
      { label: "Number", name: "order_no" },
      { label: "Creation Date", name: "order_date" },
      { label: "Confirm Date", name: "confirm_date" },
      { label: "Customer", name: "vendor" },
      { label: "Purchase Representative", name: "merchandise" },
      { label: "Company", name: "company_id" },
      { label: "Total", name: "grand_total" },
      { label: "Status", name: "state" },
    ];
    columns.forEach((column) => {
      sortOrders[column.name] = -1;
    });
    return {
      data: [],
      columns: columns,
      sortKey: "",
      sortOrders: sortOrders,
      length: 10,
      search: "",
      tableShow: {
        showdata: true,
      },
      pagination: {
        currentPage: 1,
        total: "",
        nextPage: "",
        prevPage: "",
        from: "",
        to: "",
      },
    };
  },
  methods: {
    fetchPurchaseOrder() {
      axios
        .get("/api/purchase/list")
        .then((response) => {
          this.data = response.data.data;
          this.pagination.total = this.data.length;
        })
        .catch((error) => console.error(error));
    },
    paginate(array, length, pageNumber) {
      this.pagination.from = array.length ? (pageNumber - 1) * length + 1 : " ";
      this.pagination.to =
        pageNumber * length > array.length ? array.length : pageNumber * length;
      this.pagination.prevPage = pageNumber > 1 ? pageNumber : "";
      this.pagination.nextPage =
        array.length > this.pagination.to ? pageNumber + 1 : "";
      this.ghost = this.length - this.pagination.to;
      return array.slice((pageNumber - 1) * length, pageNumber * length);
    },
    resetPagination() {
      this.pagination.currentPage = 1;
      this.pagination.prevPage = "";
      this.pagination.nextPage = "";
    },
    sortBy(key) {
      this.resetPagination();
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    getIndex(array, key, value) {
      return array.findIndex((i) => i[key] == value);
    },
    show(row) {
      this.$router.push({
        name: "purchases_view",
        params: { id: btoa(row.id) },
      });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  computed: {
    filterdata() {
      let uom = this.data;
      if (this.search) {
        uom = uom.filter((row) => {
          return Object.keys(row).some((key) => {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(this.search.toLowerCase()) > -1
            );
          });
        });
      }
      let sortKey = this.sortKey;
      let order = this.sortOrders[sortKey] || 1;
      if (sortKey) {
        uom = uom.slice().sort((a, b) => {
          let index = this.getIndex(this.columns, "name", sortKey);
          a = String(a[sortKey]).toLowerCase();
          b = String(b[sortKey]).toLowerCase();
          if (this.columns[index].type && this.columns[index].type === "date") {
            return (
              (a === b
                ? 0
                : new Date(a).getTime() > new Date(b).getTime()
                ? 1
                : -1) * order
            );
          } else if (
            this.columns[index].type &&
            this.columns[index].type === "number"
          ) {
            return (+a === +b ? 0 : +a > +b ? 1 : -1) * order;
          } else {
            return (a === b ? 0 : a > b ? 1 : -1) * order;
          }
        });
      }
      return uom;
    },
    paginatedata() {
      return this.paginate(
        this.filterdata,
        this.length,
        this.pagination.currentPage
      );
    },
  },
};
</script>