import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "title1": "Collection of Ghibli",
      "description1_1": "This is collection of Ghibli movies to acquire a way to utilize an API ",
      "description1_2": "There aren't images in API employed,",
      "description1_3": "In main page, it is randomly composed by data which includes images and titles.",
      "title2": "Collection of movies",
      "description2_1": "Utilising an API about information of cinema,",
      "description2_2": "there is a page of introducing movies listed by higher rating.",
      "description2_3": "It is included an async considering pace to take data.",
      "title3": "Site responsive 'Book of Millie'",
      "description3_1": "This page is considered various devices.",
      "description3_2": "There is also some pages about site renewal of 'book of Millie.",
      "description3_3": "API of kakao login is utilised by JavaScript.",
      "description3_4": "And other additional function is made use of jQuery,",
      "description3_5": "this page is distributed by Netlify.",
      "title4": "UI mobile design of 'Sungwoo Hitech'",
      "description4_1": "UI design for renew web site of 'Sungwoo Hitech.",
      "description4_2": "As team project, I took part of product section.",
      "description4_3": "It is made only for mobile.",
      "title5": "UI PC design of 'Sungwoo Hitech'",
      "description5_1": "UI design for renew web site of 'Sungwoo Hitech.",
      "description5_2": "As team project, I took part of product section.",
      "description5_3": "It is made only for PC.",
      "title6": "The project architecture proposal of 'Le Labo'",
      "description6_1": "The object of this personal project is for dedicated mobile renewal page of Le Labo.",
      "description6_2": "It is took account of a characteristic of devices, UI/UX for users and references.",
      "description6_3": "And also it contains a concept of visual and direction of framework."
    }
  },
  ko: {
    translation: {
      "title1": "지브리 서랍장",
      "description1_1": "API 활용 방법을 습득하기 위해 연습 삼아 만든 지브리 영화 콜렉션입니다.",
      "description1_2": "사용한 API 데이터 내에 이미지가 따로 없어서,",
      "description1_3": "메인 페이지는 임의로 이미지와 타이틀을 데이터로 묶어서 사용했습니다.",
      "title2": "영화 콜렉션",
      "description2_1": "cinema 정보가 포함된 API를 활용하여",
      "description2_2": "평점 순으로 나열된 영화 소개 페이지를 만들었습니다.",
      "description2_3": "데이터를 받아오는 속도를 고려해 비동기 작업을 포함시켰습니다.",
      "title3": "반응형 사이트 '밀리의 서재'",
      "description3_1": "다양한 디바이스를 고려한 반응형 페이지입니다.",
      "description3_2": "'밀리의 서재' 사이트 리뉴얼을 주제로 세부 페이지도 구현했습니다.",
      "description3_3": "카카오 로그인 API 구현은 JavaScript를 활용했습니다.",
      "description3_4": "이외 부가적인 기능은 jQuery를 사용했으며",
      "description3_5": "배포는 Netlify를 이용했습니다.",
      "title4": "성우 하이텍 모바일 UI 디자인",
      "description4_1": "성우 하이텍 홈페이지 리뉴얼을 위해 만든 UI 디자인입니다.",
      "description4_2": "팀 프로젝트로 진행했으며, 제품 소개 부분을 맡았습니다.",
      "description4_3": "모바일 전용으로 구성되었습니다.",
      "title5": "성우 하이텍 PC UI 디자인",
      "description5_1": "성우 하이텍 홈페이지 리뉴얼을 위해 만든 UI 디자인입니다.",
      "description5_2": "팀 프로젝트로 진행했으며, 제품 소개 부분을 맡았습니다.",
      "description5_3": "PC 전용으로 구성되었습니다.",
      "title6": "르라보 아키텍처 기획서",
      "description6_1": "향수 브랜드 르라보의 한국 사이트 리뉴얼과 관련하여,",
      "description6_2": "사용자 분석, 레퍼런스 조사, 그리고 와이어 프레임 등",
      "description6_3": "종합적인 관점에서 분석한 기획서입니다."
    }
  },
  fr: {
    translation: {
      "title1": "Une collection de Ghibli",
      "description1_1": "C'est une collection de Ghibli cinéma pour acquérir une manière d'utiliser un API",
      "description1_2": "Il y a pas d'images dans cet API,",
      "description1_3": "À une page première, je crée arbitrairement un data inclusif des images et titres.",
      "title2": "Collection of cinéma",
      "description2_1": "Utiliser un API de cinéma,",
      "description2_2": "c'est une page concernant des cinémas énumérés par des notes hautes.",
      "description2_3": "Il y a également une fonction d'un asynchronisme en tenant compte de vitesse à recevoir des données.",
      "title3": "Une site réactive 'Livre de Millie'",
      "description3_1": "En considérant des appareils variés,",
      "description3_2": "ce site inclure une fonction réactive et des pages détaillées au sujet de 'Livre de Millie.'",
      "description3_3": "Une connexion de Kakao API est exploitée par JavaScript.",
      "description3_4": "De plus, des secondaires fonctions est utilisées par jQuery,",
      "description3_5": "une distribution est réalisée par Netlify.",
      "title4": "Un UI mobile design de 'Sungwoo Hitech'",
      "description4_1": "Cette page a pour but de recréer une web-site 'Sungwoo Hitech'.",
      "description4_2": "En tant qu'un projet groupe, j'ai pris une section de production.",
      "description4_3": "C'est uniquement pour mobile.",
      "title5": "Un UI PC design de 'Sungwoo Hitech",
      "description5_1": "Cette page a pour but de recréer une web-site 'Sungwoo Hitech'.",
      "description5_2": "En tant qu'un projet groupe, j'ai pris une section de production.",
      "description5_3": "C'est uniquement pour PC.",
      "title6": "Un document stragégique de 'Le Labo'",
      "description6_1": "Ce projet est à l'intention de reformer le site de 'Le Labo' à celui dédié mobile.",
      "description6_2": "En cherchant des particularités des accueils, UI/UX des utilisateurs et références,",
      "description6_3": "Il permet de structurer le concept de visual et une direction de framework."
    }
  }
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko",
  });
export default i18n;
