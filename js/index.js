/* create header & footer element*/
const footer = document.getElementById('footer'),
    header = document.getElementById('header');


function f() {
header.innerHTML =`
<div class="header mb-5 position-relative">
    <div class="bg">
      <img src="./img/bg.jpg" alt="">
    </div>
    <nav class="my-nav navbar navbar-expand-lg">
      <div class="container ">
        <a class="fs-1 font-f navbar-brand" href="./home.html">feane</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fs-1 fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="l1 navbar-nav align-items-center m-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="home.html">home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./menu.html">menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./info.html">about</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./inputs.html">book table</a>
            </li>
          </ul>
          <div class="nav-sign d-flex justify-content-center">
            <p>
                <i class="fa-solid fa-user" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"></i>
            </p>
            <p>
                <i class="fa-solid fa-shopping-cart"></i>
            </p>
            <p class="">
                <i class="fa-solid fa-search" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo"></i>
            </p>
            <p class="main-btn">order online</p>
           </div>
        </div>
      </div>
    </nav>

</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">sign in</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="mb-3">
          <label for="recipient-name" class="col-form-label">email:</label>
          <input type="email" class="form-control" id="recipient-name" placeholder="example@gmail.com">

        </div>
        <div class="mb-3">
          <label for="message-text" class="col-form-label">password:</label>
          <input type="password" class="form-control" id="message-text" placeholder="enter your password"></input>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Sign</button>
    </div>
  </div>
</div>
</div>
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">search</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="mb-3">
          <label for="recipient-name" class="col-form-label">search:</label>
          <input type="text" class="form-control position-relative" id="recipient-name" placeholder="search here">
          <!-- <i class="fa-solid fa-search position-absolute searchs" ></i> -->
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Search</button>
    </div>
  </div>
</div>
</div>
`;


footer.innerHTML =`
              <div class="container  ">
                <div class="row mb-5 d-flex align-items-center justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="contact">
                            <h2 class="mb-4 font-f">contact us</h2>
                            <div>
                                <div>
                                    <p><i class="pe-3 fa-solid fa-location-dot"></i></i>location</p>
                                </div>
                                <div>
                                    <p><i class="pe-3 fa-solid fa-phone"></i>cal +01 123456</p>
                                </div>
                                <div>
                                    <p><i class="pe-3 fa-solid fa-envelope"></i>email@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="feane col-md-6 col-lg-4">
                        <div class="text-center">
                            <h2 class="mb-4 font-f">feane</h2>
                            <p class="text-white-50">Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                            <ul class="l4 fs-3 d-flex justify-content-center">
                                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="hours text-center col-md-6 col-lg-4">
                        <h2 class="mb-4 font-f">Opening Hours</h2>
                        <p class="text-white-50">everyday</p>
                        <p class="text-white-50">10.00 Am - 10.00 Pm</p>
                    </div>
                </div>
                
                <p>© 2022 All Rights Reserved By Free Html Templates</p>
                <p class="pb">© Distributed By ThemeWagon</p>
                </div>
`;
}

f();