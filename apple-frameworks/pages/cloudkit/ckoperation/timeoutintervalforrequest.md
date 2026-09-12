> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/timeoutintervalforrequest](https://developer.apple.com/documentation/cloudkit/ckoperation/timeoutintervalforrequest)

# timeoutIntervalForRequest (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The timeout interval when waiting for additional data.

> Use [timeoutIntervalForRequest](configuration-swift.class/timeoutintervalforrequest.md) instead.

## Declaration

```swift
var timeoutIntervalForRequest: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

This property determines the request timeout interval for the operation, which controls how long, in seconds, the operation waits for additional data to arrive before stopping. The timer for this value resets whenever new data arrives. When the timer reaches the interval without receiving any new data, it triggers a timeout.

The default value is `60`.

## See Also

### Deprecated Properties

- [allowsCellularAccess](allowscellularaccess.md): Deprecated. A Boolean value that indicates whether the operation can send data over the cellular network.
- [container](container.md): Deprecated. The operation’s container.
- [isLongLived](islonglived.md): Deprecated. A Boolean value that indicates whether the operation is long-lived.
- [timeoutIntervalForResource](timeoutintervalforresource.md): Deprecated. The maximum amount of time that a resource request can use.

# timeoutIntervalForRequest (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The timeout interval when waiting for additional data.

> Use [timeoutIntervalForRequest](configuration-swift.class/timeoutintervalforrequest.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign) NSTimeInterval timeoutIntervalForRequest;
```

<a id="discussion"></a>

## Discussion

This property determines the request timeout interval for the operation, which controls how long, in seconds, the operation waits for additional data to arrive before stopping. The timer for this value resets whenever new data arrives. When the timer reaches the interval without receiving any new data, it triggers a timeout.

The default value is `60`.

## See Also

### Deprecated Properties

- [allowsCellularAccess](allowscellularaccess.md): Deprecated. A Boolean value that indicates whether the operation can send data over the cellular network.
- [container](container.md): Deprecated. The operation’s container.
- [longLived](islonglived.md): Deprecated. A Boolean value that indicates whether the operation is long-lived.
- [timeoutIntervalForResource](timeoutintervalforresource.md): Deprecated. The maximum amount of time that a resource request can use.
