const uid = () => Math.random().toString(34).slice(2);

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: uid(),
        text
    }
};