> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilityschedulewithrunloop(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilityschedulewithrunloop(_:_:_:))

# SCNetworkReachabilityScheduleWithRunLoop(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Schedules the specified network target with the specified run loop and mode.

## Declaration

```swift
func SCNetworkReachabilityScheduleWithRunLoop(_ target: SCNetworkReachability, _ runLoop: CFRunLoop, _ runLoopMode: CFString) -> Bool
```

## Parameters

- `target`: The address or name that is set up for asynchronous notifications. Must not be `NULL`.
- `runLoop`: The run loop on which the target should be scheduled. Must not be `NULL`.
- `runLoopMode`: The mode in which to schedule the target. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

`TRUE` if the target is scheduled successfully; otherwise,  `FALSE`.

## See Also

### Preparing to Determine Reachability

- [SCNetworkReachabilityGetTypeID()](scnetworkreachabilitygettypeid%28%29.md): Deprecated. Returns the type identifier of all `SCNetworkReachability` instances.
- [SCNetworkReachabilitySetCallback(\_:\_:\_:)](scnetworkreachabilitysetcallback%28______%29.md): Deprecated. Assigns a client to the specified target, which receives callbacks when the reachability of the target changes.
- [SCNetworkReachabilityUnscheduleFromRunLoop(\_:\_:\_:)](scnetworkreachabilityunschedulefromrunloop%28______%29.md): Deprecated. Unschedules the specified target from the specified run loop and mode.
- [SCNetworkReachabilitySetDispatchQueue(\_:\_:)](scnetworkreachabilitysetdispatchqueue%28____%29.md): Deprecated. Schedules callbacks for the specified target on the specified dispatch queue.

# SCNetworkReachabilityScheduleWithRunLoop (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Schedules the specified network target with the specified run loop and mode.

## Declaration

```objectivec
Boolean SCNetworkReachabilityScheduleWithRunLoop(SCNetworkReachabilityRef target, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `target`: The address or name that is set up for asynchronous notifications. Must not be `NULL`.
- `runLoop`: The run loop on which the target should be scheduled. Must not be `NULL`.
- `runLoopMode`: The mode in which to schedule the target. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

`TRUE` if the target is scheduled successfully; otherwise,  `FALSE`.

## See Also

### Preparing to Determine Reachability

- [SCNetworkReachabilityGetTypeID](scnetworkreachabilitygettypeid%28%29.md): Deprecated. Returns the type identifier of all `SCNetworkReachability` instances.
- [SCNetworkReachabilitySetCallback](scnetworkreachabilitysetcallback%28______%29.md): Deprecated. Assigns a client to the specified target, which receives callbacks when the reachability of the target changes.
- [SCNetworkReachabilityUnscheduleFromRunLoop](scnetworkreachabilityunschedulefromrunloop%28______%29.md): Deprecated. Unschedules the specified target from the specified run loop and mode.
- [SCNetworkReachabilitySetDispatchQueue](scnetworkreachabilitysetdispatchqueue%28____%29.md): Deprecated. Schedules callbacks for the specified target on the specified dispatch queue.
