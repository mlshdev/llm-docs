> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilitygettypeid()](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilitygettypeid())

# SCNetworkReachabilityGetTypeID() (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Returns the type identifier of all `SCNetworkReachability` instances.

## Declaration

```swift
func SCNetworkReachabilityGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier of all `SCNetworkReachability` instances.

## See Also

### Preparing to Determine Reachability

- [SCNetworkReachabilitySetCallback(\_:\_:\_:)](scnetworkreachabilitysetcallback%28______%29.md): Deprecated. Assigns a client to the specified target, which receives callbacks when the reachability of the target changes.
- [SCNetworkReachabilityScheduleWithRunLoop(\_:\_:\_:)](scnetworkreachabilityschedulewithrunloop%28______%29.md): Deprecated. Schedules the specified network target with the specified run loop and mode.
- [SCNetworkReachabilityUnscheduleFromRunLoop(\_:\_:\_:)](scnetworkreachabilityunschedulefromrunloop%28______%29.md): Deprecated. Unschedules the specified target from the specified run loop and mode.
- [SCNetworkReachabilitySetDispatchQueue(\_:\_:)](scnetworkreachabilitysetdispatchqueue%28____%29.md): Deprecated. Schedules callbacks for the specified target on the specified dispatch queue.

# SCNetworkReachabilityGetTypeID (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 17.4) · iPadOS 2.0+ (deprecated in 17.4) · Mac Catalyst 13.1+ (deprecated in 17.4) · macOS 10.3+ (deprecated in 14.4) · tvOS  (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Returns the type identifier of all `SCNetworkReachability` instances.

## Declaration

```objectivec
CFTypeID SCNetworkReachabilityGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier of all `SCNetworkReachability` instances.

## See Also

### Preparing to Determine Reachability

- [SCNetworkReachabilitySetCallback](scnetworkreachabilitysetcallback%28______%29.md): Deprecated. Assigns a client to the specified target, which receives callbacks when the reachability of the target changes.
- [SCNetworkReachabilityScheduleWithRunLoop](scnetworkreachabilityschedulewithrunloop%28______%29.md): Deprecated. Schedules the specified network target with the specified run loop and mode.
- [SCNetworkReachabilityUnscheduleFromRunLoop](scnetworkreachabilityunschedulefromrunloop%28______%29.md): Deprecated. Unschedules the specified target from the specified run loop and mode.
- [SCNetworkReachabilitySetDispatchQueue](scnetworkreachabilitysetdispatchqueue%28____%29.md): Deprecated. Schedules callbacks for the specified target on the specified dispatch queue.
