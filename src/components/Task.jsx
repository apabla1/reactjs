import "./Task.css"

export default function Task({ task, onChange }) { /* Returns this portion of the UI back */
  return <div className={`task-card ${task.completed ? 'task-card-complete' : ''}`}>
      <p className={`task-title ${task.completed ? 'task-title-complete' : ''} `}>
        {task.value}
      </p>
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.value)}
        className="task-check"
        />
  </div>
}
