/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";


import { useEffect, useState } from "react";

// import { getDatabase } from "firebase/database";
import { getDatabase, ref, onValue} from "firebase/database";

import team1 from "assets/images/team-1.jpg";

import firebase from 'firebase/app';
import app from "../../firebase/firebaseCon";



// import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
const database = getDatabase();



function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  const [firebasedata, setfirebasedata] = useState({
    SensorData:{}
  });

  useEffect(()=>{

    const db = getDatabase();
    const starCountRef = ref(db, '/');

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setfirebasedata(data);
      // updateStarCount(postElement, data);
    });

  },[])

//   strdhtc: "26.00"
// strdhthumidity: "79.00"

// strph: "0.00"
// strtds: "0.00"
// strwatertmp: "30.00"

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>

              <ComplexStatisticsCard
                color="dark"
                icon="Temperature"
                title="Atmostpheric Temperature"
                count={firebasedata.SensorData.strdhtc}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />

            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              
              <ComplexStatisticsCard
                icon="Humidity"
                title="Atmostpheric Humidity"
                count={firebasedata.SensorData.strdhthumidity}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />

            </MDBox>
          </Grid>
        </Grid>









{/* row 2 */}

  <Grid container spacing={3} marginTop={3} >
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>

              <ComplexStatisticsCard
                color="dark"
                icon="PH"
                title="Water pH"
                count={firebasedata.SensorData.strph}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />

            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              
              <ComplexStatisticsCard
                icon="TDS"
                title="Water Quality"
                count={firebasedata.SensorData.strtds}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />

            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              
              <ComplexStatisticsCard
                color="success"
                icon="Temperature"
                title="Water Temperature"
                count={firebasedata.SensorData.strwatertmp}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
              
            </MDBox>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid> */}
        </Grid>
{/* row 2 */}

























{/* graph row 1  */}    
        <MDBox mt={8.5}  >
          <Grid container spacing={3}>

            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Atmostpheric Temperature"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  // labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  // datasets: { label: "Mobile apps", data: [50, 40, 300, 320, 500, 350, 200, 230, 500] },
                  chart={{
                          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                          datasets: { label: "Mobile apps", data: [50, 40, 300, 320, 500, 350, 200, 230, 500] },
                        }}
                />
              </MDBox>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Atmostpheric Humidity"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid> */}
          </Grid>
        </MDBox>
{/* graph row 1  */}










{/* graph row 2  */}    
<MDBox mt={4.5}>
          <Grid container spacing={3}>

            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Water pH"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Water Quality "
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Water Temperature"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
{/* graph row 2 */}











      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
