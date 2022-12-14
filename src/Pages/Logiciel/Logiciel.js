import React from 'react'
import InfoLogicielCard from '../../Components/InfoLogicielCard';
import AvantageCard from '../../Components/AvantageCard';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Button, Typography } from '@material-ui/core';
import logicielImg from './logiciel.png';

const useStyles = makeStyles({
    topContainer: {
        height: "70vh",
        maxWidth: "100%",
        backgroundColor: "#020611"



    },
    imageContainer: {
        backgroundImage: `url(${logicielImg})`,
        backgroundSize: "cover",
        width: "48vw",
        height: "80vh",
        position: "absolute",
        top: "12vh",
        right: "0vw",
        '@media(max-width: 810px)': {
            display: "none"
        }
    },
    title: {
        color: "white",
        marginTop: "10vh",
        fontSize: "50px",
        marginLeft: "14vw",



        '@media(max-width: 810px)': {
            marginTop: "5vh",
            display: "block"

        }
    },
    button: {
        color: 'white',
        backgroundColor: '#0451e1',
        marginLeft: "14vw",
        marginTop: "15vh",
        fontSize: "20px",
        '@media(max-width: 810px)': {
            maxWidth: "100rem",
            display: 'block',
            marginRight: "50px"
        }
    },
    secondContainer: {
        backgroundColor: "#F2F5F6",
        width: "100%",
        height: "80vh",
        display: "flex",
        '@media(max-width: 1313px)': {
            height: "145vh",
        },
        '@media(max-width: 774px)': {
            height: "225vh",
        }
    },
    avantageContainer: {
        display: "flex",
        height: "50vh",
        marginTop: "12vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap",
        '@media(max-width: 1313px)': {
            height: "120vh",
        },
        '@media(max-width: 774px)': {
            height: "200vh",
        }
    }
})
export default function Logiciel() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.topContainer}>
                <div style={{ paddingTop: "10vh" }}>
                    <Zoom right cascade collapse className={{ marginTop: "16vh", display: "flex", flexDirection: "center" }}>
                        <Typography className={classes.title}>Logiciel comptabilit?? </Typography>
                        <Button className={classes.button} variant="contained" color="primary">R??servez votre logiciel D??s maintenant!</Button>
                    </Zoom>
                </div>
                <div className={classes.imageContainer} />
            </div>
            <Fade>
                <InfoLogicielCard
                    flexDirection="row"
                    marginLeft="10vw"
                    marginRight="0"
                    image="Assets/capture.png"
                    title="Une gestion des cong??s adapt??e ?? votre structure"
                    description="Besoin de simplifier, automatiser vos processus RH et d??mat??rialiser les donn??es de vos salari??s ? Sage Espace Employ??s vous permet rapidement le suivi et la gestion des cong??s et absences de vos salari??s, de la demande de cong??s, jusqu????? l???envoi des donn??es en paye pour la pr??paration des bulletins de salaire."
                />
            </Fade>
            {/* <Fade>
                <InfoLogicielCard
                    flexDirection="row-reverse"
                    marginLeft="0"
                    marginRight="10vw"
                    image={capture}
                    title="Une vraie souplesse d???utilisation"
                    description="Gr??ce ?? son circuit de validation largement param??trable, vos responsables d?????quipes valident les demandes d???absences en ??tant au bureau ou depuis leur mobile. Sage Espace Employ??s s???adapte ?? votre organisation de la plus simple ?? la plus complexe, en France ou ?? l???international.
                    Vos compteurs et soldes de cong??s pay??s, RTT, heures de r??cup??ration, absence maladie sont ?? jour en temps r??el. Les contr??les sont automatiquement faits lors de la prise de cong??s par vos salari??s."
                />
            </Fade> */}
            {/* <Fade>
                <InfoLogicielCard
                    flexDirection="row"
                    marginLeft="10vw"
                    marginRight="0"
                    image={capture}
                    title="Le planning des cong??s en temps r??el et partag??"
                    description="Oubliez les files d???attentes dans le bureau pour demander l?????tat de ses cong??s, les d??lais trop longs de pr??paration des donn??es pour la paie, le planning Excel, difficile ?? maintenir et non partag??.
                    Vous g??rez d??sormais le planning de pr??sence de vos salari??s et automatisez tout le processus de gestion des cong??s et des absences , du plus simple au plus complexe."
                />
            </Fade>
            <Fade>
                <InfoLogicielCard
                    flexDirection="row-reverse"
                    marginLeft="0"
                    marginRight="10vw"
                    image={capture}
                    title="Une paie pr??te dans les d??lais"
                    description="En fin de mois, vous allez gagner un temps pr??cieux et vous ??viter le stress de la paie en retard.
                    Il vous suffit d???exporter en un clic les donn??es de cong??s et d???absences de Sage Espace Employ??s vers votre service de paie, interne ou externalis??e, vers Sage 100cloud Paie & RH !"
                />
            </Fade> */}
            <div className={classes.secondContainer}>
                <div className={classes.avantageContainer}>
                    <AvantageCard
                        title="Rapidit??"
                        description="Ripidit?? unique!Ripidit?? unique!Ripidit?? unique!"
                        image="https://www.broadbandgenie.co.uk/images/fckImages/stock/connectionspeed_450x300.jpg" />
                    <AvantageCard
                        title="Simplicit??"
                        description="Simplicit?? unique!Simplicit?? unique!Simplicit?? unique!Simplicit?? unique!Simplicit?? unique!"
                        image="http://happycoaching.fr/wp-content/uploads/2018/01/simplicit%C3%A9-2-1.jpg"
                    />
                    <AvantageCard
                        title="Puissance"
                        description="Puissance unique!Puissance unique!Puissance unique!Puissance unique!Puissance unique!Puissance unique!Puissance unique!"
                        image="https://yt3.ggpht.com/ytc/AAUvwnhDDj07HGlPDUlQPdgjeobT37h8kfZ3gAyn3b0c=s900-c-k-c0x00ffffff-no-rj"
                    />
                </div>
            </div>
        </div>
    )
}
