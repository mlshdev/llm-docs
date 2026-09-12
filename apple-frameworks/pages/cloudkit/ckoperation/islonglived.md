> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/islonglived](https://developer.apple.com/documentation/cloudkit/ckoperation/islonglived)

# isLongLived (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ (deprecated in 11.0) · iPadOS 9.3+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 9.2+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

A Boolean value that indicates whether the operation is long-lived.

> Use [isLongLived](configuration-swift.class/islonglived.md) instead.

## Declaration

```swift
var isLongLived: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to make the operation long-lived. The default value is [false](https://developer.apple.com/documentation/swift/false). If you change this property’s value after you execute the operation, the change has no effect.

For more information, see [Long-Lived Operations](../ckoperation.md#Long-Lived-Operations).

## See Also

### Deprecated Properties

- [allowsCellularAccess](allowscellularaccess.md): Deprecated. A Boolean value that indicates whether the operation can send data over the cellular network.
- [container](container.md): Deprecated. The operation’s container.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): Deprecated. The timeout interval when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): Deprecated. The maximum amount of time that a resource request can use.

# longLived (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ (deprecated in 11.0) · iPadOS 9.3+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 9.2+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

A Boolean value that indicates whether the operation is long-lived.

> Use [longLived](configuration-swift.class/islonglived.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isLongLived) BOOL longLived;
```

<a id="discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to make the operation long-lived. The default value is [false](https://developer.apple.com/documentation/swift/false). If you change this property’s value after you execute the operation, the change has no effect.

For more information, see [Long-Lived Operations](../ckoperation.md#Long-Lived-Operations).

## See Also

### Deprecated Properties

- [allowsCellularAccess](allowscellularaccess.md): Deprecated. A Boolean value that indicates whether the operation can send data over the cellular network.
- [container](container.md): Deprecated. The operation’s container.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): Deprecated. The timeout interval when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): Deprecated. The maximum amount of time that a resource request can use.
