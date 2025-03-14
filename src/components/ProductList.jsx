import React from "react";
import ProductCard from "./ProductCard";

const shirts = [
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/94gg8d7ilf3rxtet4lt1t/307078140_1.jpg?rlkey=ib07o442b4txab5eg7k2n50dy&st=ycczwu9e&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1858744338/?at=jYtZ0Jly2U1JOR2xIOPoPg7f32gYRrSGR8wA8c1Jo6Q8",
    wbLink:
      "https://www.wildberries.ru/catalog/307078140/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/1kaznt0ycopy4yj5yby3g/138023607_1.jpg?rlkey=dodytjiay2sls3ysvz5u3lpw7&st=h9972q33&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1651879330/?at=qQtJvrL7Dcw0Ng9yt514y6KSwOxgqOSNkDzOAHxAnKrL",
    wbLink:
      "https://www.wildberries.ru/catalog/138023607/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/np3txhak7n24j8yisyfs7/307078142_1.jpg?rlkey=57tfmzs612aqfomy03mx7lbi4&st=a7t0au6c&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1858760376/?at=36tWvM7RwF7PnoXnCKK38PMHO5174zC8681w3iQ2ZPMo",
    wbLink:
      "https://www.wildberries.ru/catalog/307078142/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/82zclf3yluzol7cfo21px/307078144_1.jpg?rlkey=95p1kkzpx6rad0g85sf1b68ig&st=kahexyjq&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1858785650/?at=XQtkZNBM1FpRl3NXcvR553kTg7lAD1i5o7xJQcxm7gZW",
    wbLink:
      "https://www.wildberries.ru/catalog/307078144/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/yxnemg4l0ogevu795ij7k/138023608_1.jpg?rlkey=w6taw30b91agp00ml3v76n3jd&st=azogue9h&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1735013435/?at=qQtJvrL7DclXXZAlSXrzzkktYDq1BEHwnLo06hOBZMzQ",
    wbLink: "https://www.wildberries.ru/catalog/138023608/detail.aspx",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/az49b606lxp5d1w6cut7m/307078143_1.jpg?rlkey=r4016upz8g92xhxbt35b6p44x&st=gm4wa5uf&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1858765237/?at=w0tgnQ0R7IQzXA1XsBjN6yDIqn7JQqso7W3vKh6p5PZp",
    wbLink:
      "https://www.wildberries.ru/catalog/307078143/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/b4h4jazdjryt4dm6if18p/307078141_1.jpg?rlkey=49j5u3amj5g7lxtu2c0rgz2ir&st=mfa1a27n&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1858751744/?at=lRt6lKOzyujz8llgT0lw4Wgt8EOj8zCw0My8t1B2PPq",
    wbLink:
      "https://www.wildberries.ru/catalog/307078141/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/uaw93u0or7mqjdaogsiy5/156345633_1.jpg?rlkey=f7q3dpmts0tow612g4f2or0c2&st=x6jpn7vz&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1650857493/?at=vQtrZgOyGIzW4qBxsGDwyE4T0Bz1ooF7EgL4jFAgB5Xp",
    wbLink:
      "https://www.wildberries.ru/catalog/156345633/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/w63yq72nw2ldmmjn65gnp/307078139_1.jpg?rlkey=gwgr4zhg5kqsuu2mi06m934oz&st=vmdqwrac&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1858744323/?at=x6tPj0mQyC0M7XMWIWzV3LgC28JMDji4rB3nBfwEjY4",
    wbLink:
      "https://www.wildberries.ru/catalog/307078139/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/n9001fu5pj3t828btdl3m/170092053_1.jpg?rlkey=b4h4n03qwkmau14ckiabhlq2k&st=wf7q9kc6&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1823148558/?at=k2tov0Yq7u0JpzMJUq5P9Z3IQ6yNMxhmoZQmoCNDNV3n",
    wbLink:
      "https://www.wildberries.ru/catalog/170092053/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/smm63ioqadw3sicd9cyzc/172056221_1.jpg?rlkey=rvvby5k9j5f6z5wcgiof0xyew&st=4v5uoz1w&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1735100467/?at=qQtJvrL7DcNB4oMKixoW7AgCN2kOPQs71QqQBt5v6X9m",
    wbLink:
      "https://www.wildberries.ru/catalog/172056221/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/otpu5fqi176zocxq24qan/262764495_1.jpg?rlkey=mtd1xu4tzt9o2sje1dvu103xz&st=xebsw106&dl=0",
    ozonLink: "#",
    wbLink:
      "https://www.wildberries.ru/catalog/262764495/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/2uyrr8nq2o3l4gftw1vph/172055561_1.jpg?rlkey=63bz45uz1e42yw1wzkx4furr6&st=f9wn4em7&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1653036154/?at=vQtrZgOyGIQEg0WoIP1PVANFowlAPNIKjyMARhlRjgvg",
    wbLink:
      "https://www.wildberries.ru/catalog/172055561/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/unwvetq7wf8orbtxe7nub/262764494_1.jpg?rlkey=dbttzpf2lkmnj6tp6szk2fryl&st=hkzs82xg&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1735164374/?at=XQtkZNBM1FQo6YDLsyg5nz4FWQKxV2Swv765OSEMD8z4",
    wbLink:
      "https://www.wildberries.ru/catalog/262764494/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 3 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/mxis7evv3fn9vmxxh6ry7/172055811_1.jpg?rlkey=jogz9rkic7m4o6dpluo35x8zy&st=xh0j4qt3&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1653076828/?at=qQtJvrL7Dc9GB1EzcGoMzrYCGLJ4LDhZngWgzTVD1GxL",
    wbLink:
      "https://www.wildberries.ru/catalog/172055811/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 5 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/61vv86g104d40kqm566t1/236250193_1.jpg?rlkey=ikgqtyxpdisn7vo3ylggh26gx&st=ud89e6i8&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1659471369/?at=nRtrVLl6zI1rRMVLsYMjNY8TgJmENpsm6XA3pI1P9Nq",
    wbLink:
      "https://www.wildberries.ru/catalog/236250193/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 5 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/fw5wdh6wh79nkvk35zlkn/262764496_1.jpg?rlkey=c1b5ed9s9e4tkokn9gzqw95it&st=9ql496kw&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1735234992/?at=oZt6mGlKMu2r1gvzujLM0VMFL2YD1YilgwN2xCym52jW",
    wbLink:
      "https://www.wildberries.ru/catalog/262764496/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 5 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/xqoq5d4k6j4wape87q6j2/223646707_1.jpg?rlkey=3sdee0ts541ibt2a195pj4zdi&st=xauntq1v&dl=0",
    ozonLink: "#",
    wbLink:
      "https://www.wildberries.ru/catalog/223646707/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 4 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/0baldt82ccoz7z7b3rfw7/307078145_1.jpg?rlkey=ojhbwtn4kyka16qy83n66cw4d&st=lary2dgy&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1858692950/?at=vQtrZgOyGIlDy97MFVm7LElh6oWWExuPgY1jZSoAQjy",
    wbLink:
      "https://www.wildberries.ru/catalog/307078145/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 4 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/aw2x6di017tlw4l8vmfdi/307078146_1.jpg?rlkey=6jzat539ecdbyjnm2t0mmythc&st=cqpnpcm9&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1858692982/?at=DqtDZmjO1t0K4Z7XCoNDkN3fjK3OyBHwZ4GYAc4VAgG9",
    wbLink:
      "https://www.wildberries.ru/catalog/307078146/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 6 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/1ufrd3ndadszt2cgsnfgw/156345634_1.jpg?rlkey=itvdrful7jrqvo1tbz55dtmxo&st=pdzvjv7b&dl=0",
    ozonLink:
      "https://www.ozon.ru/product/futbolka-cottonworld-nabor-1652860850/?at=57tw1KgWocDWXYZ8h8QALXzspmlqGmHzAq4jMuL2ZQMB",
    wbLink:
      "https://www.wildberries.ru/catalog/156345634/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 6 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/fuszwhuqblskkahcb6gsc/138023611_1.jpg?rlkey=q57rkchmckb0jdd6xesbt0uj3&st=z5l2c3kw&dl=0",
    ozonLink: "#",
    wbLink:
      "https://www.wildberries.ru/catalog/138023611/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 6 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/0n9w28plb7yb30rpku9zq/170091508_1.jpg?rlkey=yf9i738f3xpphzv7sqij3g59c&st=xfp53alq&dl=0",
    ozonLink: "#",
    wbLink:
      "https://www.wildberries.ru/catalog/170091508/detail.aspx?targetUrl=SP",
  },
  {
    name: "Набор футболок",
    description: "Футболка хлопок набор 6 шт",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/atulv3gbge6nq2mxmm94u/138023606_1.jpg?rlkey=1gnapky66jc2yhaleeg1hkdq5&st=541w1xt6&dl=0",
    ozonLink: "#",
    wbLink:
      "https://www.wildberries.ru/catalog/138023606/detail.aspx?targetUrl=SP",
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-6 w-full max-w-[700px] mx-auto">
      {shirts.map((shirt, index) => (
        <ProductCard key={index} shirt={shirt} />
      ))}
    </div>
  );
};

export default ProductList;
