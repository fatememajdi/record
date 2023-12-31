import Medicine from '../images/medicine.svg';
// import Calandar from '../images/calandar.svg';
// import Chart from '../images/chart.svg';
// import Diapers_fill from '../images/diapers_fill.svg';
// import Family2 from '../images/family2.svg';
// import Groth_fill from '../images/groth_fill.svg';
// // import Milk-bottle-fill from '../images/milk-bottle-fill.svg';
// import Sleeping_fill from '../images/sleeping_fill.svg';
// import Sound from '../images/sound.svg';
// import Temprature_fill from '../images/temprature_fill.svg';
// // import Tooth-fill from '../images/tooth-fill.svg';
// import Vaccin_fill from '../images/vaccin_fill.svg'

export const respons = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items:1,
    slidesToSlide: 3
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 1,
  },
  tablet: {
    breakpoint: { max:800, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const sliderData = [
  {
    id: 1,
    imageurl:Medicine,
    description: " با ثبت داروهای مصرفی کودک و آثار مثبت یا منفی (عوارض) آنها بر روی کودک، یک تاریخچه دارویی دقیق ساخته میشود که به والدین و پزشک کودک امکان پیشگیری از اشتباهات بعدی را میدهد.",
  },
  {
    id: 2,
    imageurl:Medicine,
    description: "با استفاده از این ابزار، شما میتوانید فرآیند درآمدن دندانهای کودک خود را پیگیری کنید و در صورت تاخیر در رویش دندانها با دندانپزشک کودک خود مشاوره نمایید. ویژگیهای جدیدتری در نسخه های بعدی درراهند.",
  },
  {
    id: 3,
    imageurl: Medicine,
    name: "تغذیه کودک",
    description: "ابزار تغذیه کودک به والدین امکان ثبت تعداد دفعات تغذیه، حجم و نوع ماده غذایی (شیر مادر، شیر خشک) در ماههای ابتدایی تولد، و ثبت غذای کمکی کودک پس از شروع تغذیه کمکی را میدهد.",
  },
  {
    id: 4,
    imageurl:Medicine,
    name: "رشد",
    description: "بخش رشد در اپلیکیشن دلبندم به شما امکان ثبت وزن، قد ، و اندازه دور سر کودک را میدهد. با استفاده از این ابزار، شما میتوانید رشد کودک خود را با نمودارهای استاندارد رشد مقایسه کرده و در جریان کیفیت رشد او باشید. ",
  },
  {
    id: 5,
    imageurl:Medicine,
    name: "خواب",
    description: "ثبت دوره های خواب و بیداری کودک و نیز مدت زمان هر خواب یکی از داده های مهم سلامت کودکان است. به مرور زمان الگوی خواب کودک به والدین کمک میکند تا بتوانند برای خود برنامه ریزی کنند و یا اختلالات خواب کودک را با کمک متخصصین ارزیابی و درمان کنند ",
  },
  {
    id: 6,
    imageurl:Medicine,
    name: "پوشک",
    description: "ثبت تعداد دفعات و قوام، رنگ و فرم مدفوع در نوزادان از اهمیت بسزایی برخوردار است. والدین با استفاده از این ابزار ضمن ثبت اطلاعات مربوطه امکان دسترسی به توصیه های علمی در مورد وضعیت دفع مدفوع و ادرار نوزاد خود را دارند.",
  },
  {
    id: 7,
    imageurl:Medicine,
    name: "واکسن",
    description: "این ابزار به والدین امکان ثبت دقیق واکسنهایی که نوزاد آنها دریافت کرده است را میدهد. همچنین امکان ثبت علایم و عوارض ناشی از واکسن وجود دارد. دسترسی به جدول واکسیناسیون و نیز ثبت و یادآوری نوبت واکسن از دیگر امکانات این ابزار میباشد.",
  },
  {
    id: 8,
    imageurl:Medicine,
    name: "درجه حرارت ",
    description: "ثبت درجه حرارت بدن نوزاد و تغییرات آن و نیز ارتباط تب و بیماریهای کودک توسط این ابزار برای والدین فراهم شده است. این امر به خصوص در هنگامی که نوزاد به بیماری مبتلا شده است به والدین و پزشک امکان بررسی اثر بخشی درمان را میدهد.",
  },
  {
    id: 9,
    imageurl:Medicine,
    name: "گالری عکس، موسیقی",
    description: " با استفاده از گالری عکس شما میتوانید لحظات خاص کودک خود را ثبت و ذخیره کنید و آنها را در آلبومهای خاص قرار دهید. بخش موسیقی اپ به شما امکان ذخیره و پخش موسیقی خاص کودک مانند لالاییها، و یا صدای خودتان را میدهد. علاوه بر این، امکان پخش صدای سفید برای آرام کردن کودک وجود دارد.",
  },
  {
    id: 10,
    imageurl:Medicine,
    name: "تقویم",
    description: " ابزار تقویم به شما امکان ثبت قرارهای مربوط به نوزاد مانند وقت واکسیناسیون، وقت دکتر، و غیره را میدهد. علاوه بر این با ثبت هر رخداد امکان تنظیم یادآور برای آن در اختیار شما قرار میگیرد. ",
  },
  {
    id: 11,
    imageurl:Medicine,
    name: "تیم مراقبت کننده",
    description: " شما میتوانید افراد مختلفی را به تیم مراقبت کننده کودک بیفزایید. این ابزار به شما امکان تعیین سطح دسترسی به اطلاعات کودک را میدهد. مادر بزرگها، پدر بزرگها، عمو، عمه، خاله و دایی کودک میتوانند از راه دور در جریان رشد بچه قرار گرفته و عکسهای اورا مشاهده کنند.",
  },

{
  id: 12,
  imageurl:Medicine,
  name: "نمودار",
  description: " بخش نمودارهای اپلیکیشن دلبندم به پدر و مادر امکان مشاهده داده های کودک را در طول زمان میدهد. مشاهده نمودار رشد و مقایسه آن با مقادیر طبیعی، امکان دسترسی به نمودارهای متنوع و به اشتراک گذاری آنها با پزشک کودک از دیگر امکانات این بخش است.",
},


];


