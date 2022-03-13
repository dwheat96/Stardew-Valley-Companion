import React, { useState } from 'react';
import './CraftsRoom.css';
import { Checkbox } from './Checkbox';

function CraftsRoom() {
const [checked, setChecked] = React.useState(false);

const handleChange = () => {
  setChecked(!checked);
};

  return (
    <div>
      <h1 className="heading">
        Crafts Room
      </h1>

      {/* <div>
        <Checkbox 
          label="checkbox"
          value={!checked}
          onChange={handleChange}
          
        /> console.log("poop")
      </div>  */}



      {/* 
      <h3 className="bundleNames">

      </h3>
      <div className="bundles">
        <label>
          <input type="checkbox" />

        </label>

      </div> 
      */}
      

      <h3 className="bundleNames">
        Spring Foraging Bundle
      </h3>
      <div className="bundles">
        <label>
          <input type="checkbox" />
          Wild Horseradish
        </label>

        <label>
          <input type="checkbox" />
          Daffodil
        </label>

        <label>
          <input type="checkbox" />
          Leek
        </label>

        <label>
          <input type="checkbox" />
          Dandelion
        </label>

      </div>

      <h3 className="bundleNames">
        Summer Foraging Bundle
      </h3>
      <div className="bundles">
        <label>
          <input type="checkbox" />
              Grape
        </label>

        <label>
          <input type="checkbox" />
            Spice Berry
        </label>

        <label>
          <input type="checkbox" />
            Sweet Pea
        </label>

        
        <h3 className="bundleNames">
          Fall Foraging Bundle
        </h3>
            <div className="bundles">
              <label>
                <input type="checkbox" />
                  Common Mushroom
              </label>

              <label>
                <input type="checkbox" />
                  Wild Plum
              </label>

              <label>
                <input type="checkbox" />
                  Hazlenut
              </label>

              <label>
                <input type="checkbox" />
                  Blackberry
              </label>
            </div>


          <h3 className="bundleNames">
              Winter Foraging Bundle
          </h3>
              <div className="bundles">
                <label>
                  <input type="checkbox" />
                      Winter Root
                </label>

                <label>
                  <input type="checkbox" />
                      Crystal Fruit
                </label>

                <label>
                  <input type="checkbox" />
                      Snow Yam
                </label>

                <label>
                  <input type="checkbox" />
                      Crocus
                </label>


              </div>


          <h3 className="bundleNames">
              Construction Bundle
          </h3>
                <div className="bundles">
                  <label>
                    <input type="checkbox" />
                      Wood x99
                  </label>

                  <label>
                    <input type="checkbox" />
                      wood x99
                  </label>

                  <label>
                    <input type="checkbox" />
                      stone x99
                  </label>

                  <label>
                    <input type="checkbox" />
                      Hardwood x10
                  </label>

                </div>

          <h3 className="bundleNames">
              Exotic Foraging Bundle
          </h3>
          <div className="subtext">needs 5 items. 1 of ecah.</div>
            <div className="bundles">
                <label>
                  <input type="checkbox" />
                    Coconut
                </label>

                <label>
                  <input type="checkbox" />
                    Cactus Fruit
                </label>

                <label>
                  <input type="checkbox" />
                    Cave Carrot
                </label>

                <label>
                  <input type="checkbox" />
                    Red Mushroom
                </label>

                <label>
                  <input type="checkbox" />
                    Purple Mushroom
                </label>

                <label>
                  <input type="checkbox" />
                    Maple Syrup
                </label>

                <label>
                  <input type="checkbox" />
                    Oak Resin
                </label>

                <label>
                  <input type="checkbox" />
                    Pine Tar
                </label>

                <label>
                  <input type="checkbox" />
                    Morel
                </label>

              </div>
      </div>
    </div>
  )
}

export default CraftsRoom