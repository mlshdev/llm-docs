> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectionunschedulefromrunloop(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectionunschedulefromrunloop(_:_:_:))

# SCNetworkConnectionUnscheduleFromRunLoop(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Unschedules the specified connection from the specified run loop.

## Declaration

```swift
func SCNetworkConnectionUnscheduleFromRunLoop(_ connection: SCNetworkConnection, _ runLoop: CFRunLoop, _ runLoopMode: CFString) -> Bool
```

## Parameters

- `connection`: The network connection to unschedule.
- `runLoop`: The run loop from which to unschedule the network connection.
- `runLoopMode`: The run loop mode.

<a id="return-value"></a>

## Return Value

`TRUE` if the connection is unscheduled successfully; `FALSE` (use the [SCError()](scerror%28%29.md) function to retrieve the specific error).

## See Also

### Scheduling a Connection Reference on a Run Loop

- [SCNetworkConnectionScheduleWithRunLoop(\_:\_:\_:)](scnetworkconnectionschedulewithrunloop%28______%29.md): Schedules the specified connection with the specified run loop.

# SCNetworkConnectionUnscheduleFromRunLoop (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Unschedules the specified connection from the specified run loop.

## Declaration

```objectivec
Boolean SCNetworkConnectionUnscheduleFromRunLoop(SCNetworkConnectionRef connection, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `connection`: The network connection to unschedule.
- `runLoop`: The run loop from which to unschedule the network connection.
- `runLoopMode`: The run loop mode.

<a id="return-value"></a>

## Return Value

`TRUE` if the connection is unscheduled successfully; `FALSE` (use the [SCError](scerror%28%29.md) function to retrieve the specific error).

## See Also

### Scheduling a Connection Reference on a Run Loop

- [SCNetworkConnectionScheduleWithRunLoop](scnetworkconnectionschedulewithrunloop%28______%29.md): Schedules the specified connection with the specified run loop.
