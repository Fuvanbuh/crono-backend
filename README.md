# 6pack

<br>

## Description

Es una app para controlar el tiempo de una manera intuitiva, saber que son 6 segundos es una tarea relaitva.

## User Stories

- **ANON:**
    - **Home:** Pagina en la que se desarrolla la app, incia la cuenta y en el caso de ser ganador podras enviar tus datos, para el ranking.
    - **Ranking:** Lista de todos los ganadores, junto con la de los 3 mejores.
    - **404:** Se te mostrara una pagina 404, cuando intentes entrar en una pagina que no este disponible.

## Backlog




<br>


# Client / Frontend

## Routes
| Path | Component | Permissions | Behavior |
| - | - | - | - |
| `/home` | CronoPage | public | Crono page |
| `/home` | InscriptionWindow | public | Insctiption Window |
| `/not-found` | NotFoundPage | public | Not found page |
| `/ranking` | RankingPage | public | Ranking winners |
| `/ranking` | RankingPage | public | Ranking best 3 winners |


## Components

### Pages
  - Home
  - Ranking



### Components
  - Cronometro
  - Inscripcion
  - Mejores 3
  - Ganadores

## Services
- Users
  - getBestThree()
  - getAllWinners()
  - AddWinner()
  - UpdateWinner()
   
<br>


# Server / Backend


## Models

Winner model

```javascript
{
  winnerName:String,
  e-mail: String,
  wins: Number,

  
  
}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL | Request Body | Success status | Error Status | Description |
| - | - | - | - | - | - |
| GET | /allwinners | | 201 | 404 | recibe todos los ganadores |
| POST | /winner | {name, email, } | 201 | 404 | guardamos los datos del ganador |
| PUT | /edit/winner |  | 200 | 401 | Mira si existe el ganador si es asi le suma una victoria |

<br>


## Links

### Trello/Kanban


### Git

[Server repository Link](https://github.com/Fuvanbuh/crono-backend)

[Client repository Link](https://github.com/Fuvanbuh/crono-frontend)
