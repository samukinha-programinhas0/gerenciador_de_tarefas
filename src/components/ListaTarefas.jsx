import { useState } from 'react';

function ListaTarefas() {   
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === '') return;
        setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa, concluida: false }]);
        setNovaTarefa('');
    }

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    }

    const marcarConcluida = (id) => {
        setTarefas(tarefas.map(tarefa => tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa));
    }

    return (
        <div className="lista-tarefas">
            <h2>Lista de Tarefas</h2>
            <input 
                type="text" 
                value={novaTarefa} 
                onChange={(e) => setNovaTarefa(e.target.value)} 
                placeholder="digite uma nova tarefa" 
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id} className={tarefa.concluida ? 'concluida' : ''}>
                        <span>{tarefa.texto}</span>
                        <button onClick={() => marcarConcluida(tarefa.id)}>
                            {tarefa.concluida ? 'Desmarcar' : 'Concluir'}
                        </button>
                        <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ListaTarefas;