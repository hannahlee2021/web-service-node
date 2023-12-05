import express from 'express'
import * as kaokun from 'kaokun'
import cors from 'cors'
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

  app.use(cors({
    origin: '*'
}));


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
            }
           
        },
        
        "americano": {
            drinkName: "americano",
            recipe: {
                espresso: 1,
                hotWater: 2,
            }
           
        },

        "cappuccino": {
            drinkName: "cappuccino",
            recipe: {
                espresso: 1,
                steamMilk: 0.5,
                milkFoam: 1
            }
        },

        "macchiato": {
            drinkName: "macchiato",
            recipe: {
                espresso: 1,
                milkFoam: 4
            }
        },

        "latte": {
            drinkName: "latte",
            recipe: {
                espresso: 1,
                steamMilk: 2,
                milkFoam: 0.5
            }
        },

        "flat-white": {
            drinkName: "flatWhite",
            recipe: {
                espresso: 1,
                steamMilk: 2,
            }
        },
        "mocha": {
            drinkName: "mocha",
            recipe: {
                espresso: 1,
                chocolate: 0.25,
                steamMilk: 1,
            }
        },

        "cortado": {
            drinkName: "cortado",
            recipe: {
                espresso:1,
                steamMilk:1,
                honey: 0.25,
                vanilla: 0.25
            }
        },

        "affogato": {
            drinkName: "affogato",
            recipe: {
                espresso: 1,
                iceCream: 2
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
        else if (req.params.drinkName == ":espresso") {
            app.get("/kaokun", (req,res) => {
                const greeting = kaokun.greeting()
                
                // const random = kaokun.random();
                res.json(greeting)
            } )
        }
        else if (req.params.drinkName == ":americano") {
            app.get("/kaokun", (req,res) => {
                
                const bored = kaokun.bored()
                // const random = kaokun.random();
                res.json(bored)
            } )
        }
        else if (req.params.drinkName == ":cappuccino") {
            app.get("/kaokun", (req,res) => {
                
                const sad = kaokun.sad()
                // const random = kaokun.random();
                res.json(sad)
            } )
        }
        else if (req.params.drinkName == ":macchiato") {
            app.get("/kaokun", (req,res) => {
                
                const love = kaokun.love()
                // const random = kaokun.random();
                res.json(love)
            } )
        }
        else if (req.params.drinkName == ":latte") {
            app.get("/kaokun", (req,res) => {
                
                const happy = kaokun.happy()
                // const random = kaokun.random();
                res.json(happy)
            } )
        }
        else if (req.params.drinkName == ":flatWhite") {
            app.get("/kaokun", (req,res) => {
                
                const hurt = kaokun.hurt()
                // const random = kaokun.random();
                res.json(hurt)
            } )
        }
        else if (req.params.drinkName == ":mocha") {
            app.get("/kaokun", (req,res) => {
                
                const cute = kaokun.cute()
                // const random = kaokun.random();
                res.json(cute)
            } )
        }
        else if (req.params.drinkName == ":cortado") {
            app.get("/kaokun", (req,res) => {
                
                const silly = kaokun.silly()
                // const random = kaokun.random();
                res.json(silly)
            } )
        }
        else if (req.params.drinkName == ":affogato") {
            app.get("/kaokun", (req,res) => {
                
                const fun = kaokun.fun()
                // const random = kaokun.random();
                res.json(fun)
            } )
        }
       
        
    })
    res.json(recipe)
})

// app.get("/kaokun", (req,res) => {
//     const greeting = kaokun.greeting()
//     const happy = kaokun.greeting()
//     // const random = kaokun.random();
//     res.send(happy)
// } )



