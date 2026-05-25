export function createTask(title, priority) {
  return {
    title,
    priority,
    done: false
  };
}

export function formatTask(task) {
  return `${task.title} has ${task.priority} priority.`;
}

const task = createTask("Review pull request", "high");

console.log(formatTask(task));
