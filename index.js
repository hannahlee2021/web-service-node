import express from 'express'
import * as kaokun from 'kaokun'
import { random as randomKao } from 'kaokun';
import { happy as happyKao } from 'kaokun';
const app = express();
app.use(express.json())



const port = process.env.PORT || 5501

app.get("/", (req,res) => {
    console.log("working")
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}` )
  })


// let cafe = {
//     "drinks": {
//         "espresso": {
//             espresso: 1,
//             hotWater: 0,
//             steamMilk: 0,
//             milkFoam: 0
//         },
//         "americano": {
//             espresso: 1,
//             hotWater: 1,
//             steamMilk: 0,
//             milkFoam:0
//         },
//         "cappuccino": {
//             espresso: 1,
//             hotWater: 0,
//             steamMilk: 0.5,
//             milkFoam: 1
//         },
//         "macchiato": {
//             espresso: 1,
//             hotWater: 0,
//             steamMilk: 0,
//             milkFoam: 1
//         },
//         "latte": {
//             espresso: 1,
//             hotWater: 0,
//             steamMilk: 1,
//             milkFoam: 0.5
//         },
//         "flatWhite": {
//             espresso: 1,
//             hotWater: 0,
//             steamMilk: 1,
//             milkFoam: 0
//         }
//     }
    
  

// }

// let drinks = {
    
//         "espresso": {
//             espresso: 1,
//             hotWater: 0,
//             steamMilk: 0,
//             milkFoam: 0
//         },
//         "americano": {
//             espresso: 1,
//             hotWater: 1,
//             steamMilk: 0,
//             milkFoam:0
//         },
//         "cappuccino": {
//             espresso: 1,
//             hotWater: 0,
//             steamMilk: 0.5,
//             milkFoam: 1
//         },
//         "macchiato": {
//             espresso: 1,
//             hotWater: 0,
//             steamMilk: 0,
//             milkFoam: 1
//         },
//         "latte": {
//             espresso: 1,
//             hotWater: 0,
//             steamMilk: 1,
//             milkFoam: 0.5
//         },
//         "flatWhite": {
//             espresso: 1,
//             hotWater: 0,
//             steamMilk: 1,
//             milkFoam: 0
//         }
//     }

let drinks ={
    
        "espresso": {
            drinkName: "espresso",
            recipe: {
                espresso: 1,
                hotWater: 0,
                steamMilk: 0,
                milkFoam: 0
            }
           
        },
        
        "americano": {
            drinkName: "americano",
            recipe: {
                espresso: 1,
                hotWater: 1,
                steamMilk: 0,
                milkFoam: 0
            }
           
        },

        "cappuccino": {
            drinkName: "cappuccino",
            recipe: {
                espresso: 1,
                hotWater: 0,
                steamMilk: 0.5,
                milkFoam: 1
            }
        },

        "macchiato": {
            drinkName: "macchiato",
            recipe: {
                espresso: 1,
                hotWater: 0,
                steamMilk: 0,
                milkFoam: 1
            }
        },

        "latte": {
            drinkName: "latte",
            recipe: {
                espresso: 1,
                hotWater: 0,
                steamMilk: 1,
                milkFoam: 0.5
            }
        },

        "flat-white": {
            drinkName: "flatWhite",
            recipe: {
                espresso: 1,
                hotWater: 0,
                steamMilk: 1,
                milkFoam: 0
            }
        }


    
       
    }


    
  





app.get('/drinkName/:drinkName', (req,res) => {
    let recipe = [];
   
    Object.keys(drinks).forEach((key,value) => {
        let n = `:${drinks[key].drinkName}`
        if(req.params.drinkName == n){
            // console.log(drinks[key].recipe)
            recipe.push(drinks[key].recipe)
            
        }
        // res.send(`${drinkName}: ${drinks.recipe} `)
        
    })
    res.send(recipe)
})

// app.get("/kaokun", (req,res) => {
//     const happy = kaokun.happy();
//     res.send(happy)
// } )



