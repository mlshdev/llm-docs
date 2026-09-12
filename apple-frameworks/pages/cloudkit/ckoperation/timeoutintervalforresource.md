> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/timeoutintervalforresource](https://developer.apple.com/documentation/cloudkit/ckoperation/timeoutintervalforresource)

# timeoutIntervalForResource (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The maximum amount of time that a resource request can use.

> Use [timeoutIntervalForResource](configuration-swift.class/timeoutintervalforresource.md) instead.

## Declaration

```swift
var timeoutIntervalForResource: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

This property determines the resource timeout interval for this operation, which controls how long, in seconds, to wait for the entire operation to complete before stopping. The resource timer starts when the operation executes and counts until either the operation completes or this timeout interval occurs, whichever comes first.

The default value is `604800`, the number of seconds in 7 days.

## See Also

### Deprecated Properties

- [allowsCellularAccess](allowscellularaccess.md): Deprecated. A Boolean value that indicates whether the operation can send data over the cellular network.
- [container](container.md): Deprecated. The operation’s container.
- [isLongLived](islonglived.md): Deprecated. A Boolean value that indicates whether the operation is long-lived.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): Deprecated. The timeout interval when waiting for additional data.

# timeoutIntervalForResource (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The maximum amount of time that a resource request can use.

> Use [timeoutIntervalForResource](configuration-swift.class/timeoutintervalforresource.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign) NSTimeInterval timeoutIntervalForResource;
```

<a id="discussion"></a>

## Discussion

This property determines the resource timeout interval for this operation, which controls how long, in seconds, to wait for the entire operation to complete before stopping. The resource timer starts when the operation executes and counts until either the operation completes or this timeout interval occurs, whichever comes first.

The default value is `604800`, the number of seconds in 7 days.

## See Also

### Deprecated Properties

- [allowsCellularAccess](allowscellularaccess.md): Deprecated. A Boolean value that indicates whether the operation can send data over the cellular network.
- [container](container.md): Deprecated. The operation’s container.
- [longLived](islonglived.md): Deprecated. A Boolean value that indicates whether the operation is long-lived.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): Deprecated. The timeout interval when waiting for additional data.
