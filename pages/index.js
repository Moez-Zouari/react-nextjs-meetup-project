import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 5, 123456 Some City",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 5, 123456 Some City",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
// }
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
// Special Function execute avant tt seulement dans pages
export async function getStaticProps() {
  // Fetch Data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
