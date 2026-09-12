> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilitysetdispatchqueue(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilitysetdispatchqueue(_:_:))

# SCNetworkReachabilitySetDispatchQueue(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 17.4) · iPadOS 4.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.6+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Schedules callbacks for the specified target on the specified dispatch queue.

## Declaration

```swift
func SCNetworkReachabilitySetDispatchQueue(_ target: SCNetworkReachability, _ queue: dispatch_queue_t?) -> Bool
```

## Parameters

- `target`: The address or name that is set up for asynchronous notifications. Must not be `NULL`.
- `queue`: The libdispatch queue on which the target should run. Pass `NULL` to disable notifications and release the queue.

<a id="return-value"></a>

## Return Value

`TRUE` if the target is scheduled successfully; otherwise, `FALSE`.

## See Also

### Preparing to Determine Reachability

- [SCNetworkReachabilityGetTypeID()](scnetworkreachabilitygettypeid%28%29.md): Deprecated. Returns the type identifier of all `SCNetworkReachability` instances.
- [SCNetworkReachabilitySetCallback(\_:\_:\_:)](scnetworkreachabilitysetcallback%28______%29.md): Deprecated. Assigns a client to the specified target, which receives callbacks when the reachability of the target changes.
- [SCNetworkReachabilityScheduleWithRunLoop(\_:\_:\_:)](scnetworkreachabilityschedulewithrunloop%28______%29.md): Deprecated. Schedules the specified network target with the specified run loop and mode.
- [SCNetworkReachabilityUnscheduleFromRunLoop(\_:\_:\_:)](scnetworkreachabilityunschedulefromrunloop%28______%29.md): Deprecated. Unschedules the specified target from the specified run loop and mode.

# SCNetworkReachabilitySetDispatchQueue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 17.4) · iPadOS 4.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.6+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Schedules callbacks for the specified target on the specified dispatch queue.

## Declaration

```objectivec
Boolean SCNetworkReachabilitySetDispatchQueue(SCNetworkReachabilityRef target, dispatch_queue_t queue);
```

## Parameters

- `target`: The address or name that is set up for asynchronous notifications. Must not be `NULL`.
- `queue`: The libdispatch queue on which the target should run. Pass `NULL` to disable notifications and release the queue.

<a id="return-value"></a>

## Return Value

`TRUE` if the target is scheduled successfully; otherwise, `FALSE`.

## See Also

### Preparing to Determine Reachability

- [SCNetworkReachabilityGetTypeID](scnetworkreachabilitygettypeid%28%29.md): Deprecated. Returns the type identifier of all `SCNetworkReachability` instances.
- [SCNetworkReachabilitySetCallback](scnetworkreachabilitysetcallback%28______%29.md): Deprecated. Assigns a client to the specified target, which receives callbacks when the reachability of the target changes.
- [SCNetworkReachabilityScheduleWithRunLoop](scnetworkreachabilityschedulewithrunloop%28______%29.md): Deprecated. Schedules the specified network target with the specified run loop and mode.
- [SCNetworkReachabilityUnscheduleFromRunLoop](scnetworkreachabilityunschedulefromrunloop%28______%29.md): Deprecated. Unschedules the specified target from the specified run loop and mode.
