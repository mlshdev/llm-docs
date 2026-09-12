> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mpremoteprocedure](https://developer.apple.com/documentation/coreservices/mpremoteprocedure)

# MPRemoteProcedure

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines a remote procedure call.

## Declaration

```objectivec
typedef void *(*MPRemoteProcedure)(void *parameter);
```

## Parameters

- `parameter`: A pointer to the application-defined value you passed to the function [MPRemoteCallCFM](1585757-mpremotecallcfm.md). For example, this value could point to a data structure or a memory location.

<a id="discussion"></a>

## Discussion

For example, this is how you would declare the application-defined function if you were to name the function `MyRemoteProcedure`:

## See Also

### Callbacks

- [TaskProc](taskproc.md): Defines the entry point of a task.
