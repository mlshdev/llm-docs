> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585598-mpunregisterdebugger](https://developer.apple.com/documentation/coreservices/1585598-mpunregisterdebugger)

# MPUnregisterDebugger

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Unregisters a debugger.

## Declaration

```objectivec
OSStatus MPUnregisterDebugger(MPQueueID queue);
```

## Parameters

- `queue`: The ID of the queue whose debugger you want to unregister.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

In macOS, this function is available but is not implemented. Use system debugging services to write a debugger for macOS.

## See Also

### Debugger Support Functions

- [MPRegisterDebugger](1585573-mpregisterdebugger.md): Deprecated. Registers a debugger.
