> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectionschedulewithrunloop(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectionschedulewithrunloop(_:_:_:))

# SCNetworkConnectionScheduleWithRunLoop(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Schedules the specified connection with the specified run loop.

## Declaration

```swift
func SCNetworkConnectionScheduleWithRunLoop(_ connection: SCNetworkConnection, _ runLoop: CFRunLoop, _ runLoopMode: CFString) -> Bool
```

## Parameters

- `connection`: The network connection to schedule.
- `runLoop`: The run loop with which to schedule the network connection.
- `runLoopMode`: The run loop mode.

<a id="return-value"></a>

## Return Value

`TRUE` if the connection is scheduled successfully; `FALSE` (use the [SCError()](scerror%28%29.md) function to retrieve the specific error).

## See Also

### Scheduling a Connection Reference on a Run Loop

- [SCNetworkConnectionUnscheduleFromRunLoop(\_:\_:\_:)](scnetworkconnectionunschedulefromrunloop%28______%29.md): Unschedules the specified connection from the specified run loop.

# SCNetworkConnectionScheduleWithRunLoop (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Schedules the specified connection with the specified run loop.

## Declaration

```objectivec
Boolean SCNetworkConnectionScheduleWithRunLoop(SCNetworkConnectionRef connection, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `connection`: The network connection to schedule.
- `runLoop`: The run loop with which to schedule the network connection.
- `runLoopMode`: The run loop mode.

<a id="return-value"></a>

## Return Value

`TRUE` if the connection is scheduled successfully; `FALSE` (use the [SCError](scerror%28%29.md) function to retrieve the specific error).

## See Also

### Scheduling a Connection Reference on a Run Loop

- [SCNetworkConnectionUnscheduleFromRunLoop](scnetworkconnectionunschedulefromrunloop%28______%29.md): Unschedules the specified connection from the specified run loop.
