# Icterid schema for various types

They're defined in TypeScript for simplicity

## Workflow

```typescript
class Identifiable
{
  id: GUID;
  name: string;
}

class User
{
  id: GUID;
  firstName: string;
  lastName: string;
  username: string;
  role: string;
}

class Workflow extends Identifiable
{
  processes: Process[];
  owner: User;
}

class Process extends Identifiable
{
  completed: bool;
  previous: Process[];
  steps: Step[];
  next: Process[]; // if empty or null, it's an exit process
}

class Step extends Identifiable
{
  completed: bool;
  stepType: Action|Condition;
}
```