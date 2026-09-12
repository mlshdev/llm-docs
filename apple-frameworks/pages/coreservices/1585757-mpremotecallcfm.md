> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585757-mpremotecallcfm](https://developer.apple.com/documentation/coreservices/1585757-mpremotecallcfm)

# MPRemoteCallCFM

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Calls a non-reentrant function and blocks the current task.

## Declaration

```objectivec
void * MPRemoteCallCFM(MPRemoteProcedure remoteProc, void *parameter, MPRemoteContext context);
```

## Parameters

- `remoteProc`: A pointer to the application-defined CFM (Code Fragment Manager) function you want to call. See [MPRemoteProcedure](mpremoteprocedure.md) for more information about the form of this function.
- `parameter`: A pointer to a parameter to pass to the application-defined function. For example, this value could point to a data structure or a memory location.
- `context`: This parameter is ignored; specify `kMPOwningProcessRemoteContext`.

<a id="return_value"></a>

## Return Value

The value that your remote procedure callback returned.

<a id="discussion"></a>

## Discussion

You use this function to execute code on your application’s main task. The `remoteProc` function is scheduled on the application’s main run loop and run in the default mode (`kCFRunloopDefaultMode`). If you call this function from your application’s main task, the `remoteProc` function is executed immediately in the current mode without blocking the task; otherwise, calling this function blocks the current task until the remote call completes.

## See Also

### Remote Calling Functions

- [MPRemoteCall](1585652-mpremotecall.md): Deprecated. Calls a non-reentrant function and blocks the current task.
