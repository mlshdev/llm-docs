> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/taskproc](https://developer.apple.com/documentation/coreservices/taskproc)

# TaskProc

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines the entry point of a task.

## Declaration

```objectivec
typedef OSStatus (*TaskProc)(void *parameter);
```

## Parameters

- `parameter`: A pointer to the application-defined value you passed to the function [MPCreateTask](1585779-mpcreatetask.md). For example, this value could point to a data structure or a memory location.

<a id="discussion"></a>

## Discussion

For example, this is how you would declare the application-defined function if you were to name the function `MyTaskProc`:

## See Also

### Callbacks

- [MPRemoteProcedure](mpremoteprocedure.md): Defines a remote procedure call.
