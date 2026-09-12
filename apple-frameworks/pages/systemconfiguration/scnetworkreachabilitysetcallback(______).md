> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilitysetcallback(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilitysetcallback(_:_:_:))

# SCNetworkReachabilitySetCallback(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Assigns a client to the specified target, which receives callbacks when the reachability of the target changes.

## Declaration

```swift
func SCNetworkReachabilitySetCallback(_ target: SCNetworkReachability, _ callout: SCNetworkReachabilityCallBack?, _ context: UnsafeMutablePointer<SCNetworkReachabilityContext>?) -> Bool
```

## Parameters

- `target`: The network reference associated with the address or name to be checked for reachability.
- `callout`: The function to be called when the reachability of the target changes. If `NULL`, the current client for the target is removed.
- `context`: The reachability context associated with the callout. This value may be `NULL`.

<a id="return-value"></a>

## Return Value

`TRUE` if the notification client was successfully set; otherwise, `FALSE`.

## See Also

### Preparing to Determine Reachability

- [SCNetworkReachabilityGetTypeID()](scnetworkreachabilitygettypeid%28%29.md): Deprecated. Returns the type identifier of all `SCNetworkReachability` instances.
- [SCNetworkReachabilityScheduleWithRunLoop(\_:\_:\_:)](scnetworkreachabilityschedulewithrunloop%28______%29.md): Deprecated. Schedules the specified network target with the specified run loop and mode.
- [SCNetworkReachabilityUnscheduleFromRunLoop(\_:\_:\_:)](scnetworkreachabilityunschedulefromrunloop%28______%29.md): Deprecated. Unschedules the specified target from the specified run loop and mode.
- [SCNetworkReachabilitySetDispatchQueue(\_:\_:)](scnetworkreachabilitysetdispatchqueue%28____%29.md): Deprecated. Schedules callbacks for the specified target on the specified dispatch queue.

# SCNetworkReachabilitySetCallback (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Assigns a client to the specified target, which receives callbacks when the reachability of the target changes.

## Declaration

```objectivec
Boolean SCNetworkReachabilitySetCallback(SCNetworkReachabilityRef target, SCNetworkReachabilityCallBack callout, SCNetworkReachabilityContext *context);
```

## Parameters

- `target`: The network reference associated with the address or name to be checked for reachability.
- `callout`: The function to be called when the reachability of the target changes. If `NULL`, the current client for the target is removed.
- `context`: The reachability context associated with the callout. This value may be `NULL`.

<a id="return-value"></a>

## Return Value

`TRUE` if the notification client was successfully set; otherwise, `FALSE`.

## See Also

### Preparing to Determine Reachability

- [SCNetworkReachabilityGetTypeID](scnetworkreachabilitygettypeid%28%29.md): Deprecated. Returns the type identifier of all `SCNetworkReachability` instances.
- [SCNetworkReachabilityScheduleWithRunLoop](scnetworkreachabilityschedulewithrunloop%28______%29.md): Deprecated. Schedules the specified network target with the specified run loop and mode.
- [SCNetworkReachabilityUnscheduleFromRunLoop](scnetworkreachabilityunschedulefromrunloop%28______%29.md): Deprecated. Unschedules the specified target from the specified run loop and mode.
- [SCNetworkReachabilitySetDispatchQueue](scnetworkreachabilitysetdispatchqueue%28____%29.md): Deprecated. Schedules callbacks for the specified target on the specified dispatch queue.
