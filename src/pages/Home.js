import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return   <div class ="home-menu">
    <div class="title-container">
        <img src="/design-principles/images/InfinityPies.gif" width="600" height="428" alt="" class="title-image"></img>
        <div class="title-text">
            <img src="/design-principles/images/BorderRed.png" width="250" alt="" ></img>
            <h1>The Infinity Pies</h1>
            <p>A mystical arifact within your reach</p>
            <img src="/design-principles/images/BorderRedUpsidedown.png" width="250" alt="" ></img>
            <button class="btn btn-sm btn-outline-danger" type="button"><a class= "nav-link" href="/creativeproj1/buy.html">Get them!</a></button>
        
        </div>
    </div>
    <div class="helper-menu">
        <Link to="/square">
          <div class="helper-tile">
            <img src="/design-principles/images/Picon1.svg" width="160" alt=""></img>
            <p>Research the activity<br />
            of pie obtaining with our<br />
            expansive pie database!</p>
          </div>
        </Link>
        <a href="/creativeproj1/products.html">
          <div class="helper-tile">
            <img src="/design-principles/images/Picon3.svg" width="160" alt=""></img>
            <p>Meet with an expert<br />
            Pastrymancer for a <br />
            free consultation!
            </p>
          </div>
        </a>
        <a href="/creativeproj1/products.html">
          <div class="helper-tile">
            <img src="/design-principles/images/Picon2.svg" width="160" alt="" ></img>
                <p>Review affordable<br />
                prices for to get the<br />
                best pie for your needs!</p>
          </div>
        </a>
    </div>
    
    
  
  </div>;
};

export default Home;