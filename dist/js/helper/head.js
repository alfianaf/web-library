var path = window.location.pathname;
var page = path.split("/").pop();
function footer() {
    let ee = `
<div>
<strong>Copyright 2021 <a href="http://adminlte.io ">KreasiTech</a>.</strong> All rights reserved.
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 1.0
    </div>
</div>
`;
    const footertag = document.getElementById("footerkonten");
    footertag.innerHTML = ee;
    console.log(footertag)
}
function head(halaman) {
    if (page == "index.html") {
        halaman = "Dashboard"
    } else if (page == "daftaruser.html") {
        halaman = "Daftar User"

    }
    let head = `
    <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>AdminLTE 3 | ${halaman}</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  `;

    const headtag = document.getElementById("headkonten");
    headtag.innerHTML = head;


}
function href(){
    document.location.href('/');
}
function sidebar(index) {
    
    if (page == "daftaruser.html") {
        active = 1;

        active1 = ``
        active2 = `active`
        active3 = ``
        active4 = ``
        active5 = ``
        active6 = ``

    } else if (page == "index.html") {
        active1 = `active`
        active2 = ``
        active3 = ``
        active4 = ``
        active5 = ``
        active6 = ``

    }
    else if (page == "daftarbuku.html") {
        active1 = ``
        active2 = ``
        active3 = ``
        active4 = `active`
        active5 = ``
        active6 = ``
    }else if (page == "tambahsewa.html") {
        active1 = ``
        active2 = ``
        active3 = ``
        active4 = ``
        active5 = ``
        active6 = `active`
    }else if (page == "tambahbuku.html") {
        active1 = ``
        active2 = ``
        active3 = ``
        active4 = ``
        active5 = `active`
        active6 = ``
    }else if (page == "tambahuser.html") {
        active1 = ``
        active2 = ``
        active3 = `active`
        active4 = ``
        active5 = ``
        active6 = ``
    }
    
        let sidebar = `
    <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-header">DASHBOARD</li>
            <li class="nav-item ">
              <a href="index.html" class="nav-link ${active1}">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li class="nav-header">USER</li>
            <li class="nav-item">
              <a href="daftaruser.html" class="nav-link ${active2}">
                <i class="far fa-circle nav-icon"></i>
                <p>Daftar User</p>
              </a>
            </li>
            
            <li class="nav-item">
              <a href="tambahuser.html" class="nav-link ${active3}">
                <i class="far fa-circle nav-icon"></i>
                <p>Tambah User</p>
              </a>
            </li>
            
            <li class="nav-header">BUKU</li>
            <li class="nav-item">
              <a href="daftarbuku.html" class="nav-link ${active4}">
                <i class="far fa-circle nav-icon"></i>
                <p>Daftar Buku</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="tambahbuku.html" class="nav-link ${active5}">
                <i class="far fa-circle nav-icon"></i>
                <p>Tambah Buku</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="tambahsewa.html" class="nav-link ${active6}">
                <i class="far fa-circle nav-icon"></i>
                <p>Sewa Buku</p>
              </a>
            </li>          
          </ul>
        </nav>`;
        const sidebartag = document.getElementById("sidebarkonten");
        sidebartag.innerHTML = sidebar;
    }
    sidebar();
    footer();
