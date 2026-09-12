> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585573-mpregisterdebugger](https://developer.apple.com/documentation/coreservices/1585573-mpregisterdebugger)

# MPRegisterDebugger

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Registers a debugger.

## Declaration

```objectivec
OSStatus MPRegisterDebugger(MPQueueID queue, MPDebuggerLevel level);
```

## Parameters

- `queue`: The ID of the queue to which you want exception messages and other information to be sent.
- `level`: The level of this debugger with respect to other debuggers. Exceptions and informational messages are sent first to the debugger with the highest level. If more than one debugger attempts to register at a particular level, only the first debugger is registered. Other attempts return an error.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

In macOS, this function is available but is not implemented. Use system debugging services to write a debugger for macOS.

## See Also

### Debugger Support Functions

- [MPUnregisterDebugger](1585598-mpunregisterdebugger.md): Deprecated. Unregisters a debugger.
