import { createStore, combineReducers } from 'redux';

const INITIAL_STATE = {
    data: [
        'Matemática',
        'Física',
        'Estudos Bolivianos'
    ],
};

const INITIAL_STATE_2 = {
    data: [
        'Prova',
        'trabalho'
    ],
};

function courses(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_COURSE':
            return {...state, data:[...state.data, action.title]};
        default:
            return state;
    }
}

function assessments(state = INITIAL_STATE_2, action) {
    switch (action.type) {
        case 'ADD_ASSESSMENT':
            return {...state, data: [...state.data, action.title]};
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    courses: courses,
    assessments: assessments
});

const store  = createStore(rootReducers);

export default store;