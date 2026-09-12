> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/allowscellularaccess](https://developer.apple.com/documentation/cloudkit/ckoperation/allowscellularaccess)

# allowsCellularAccess (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

A Boolean value that indicates whether the operation can send data over the cellular network.

> Use [allowsCellularAccess](configuration-swift.class/allowscellularaccess.md) instead.

## Declaration

```swift
var allowsCellularAccess: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When you send or receive many records, or when you send records with large assets, you might set this property to [false](https://developer.apple.com/documentation/swift/false) to avoid consuming too much of the user’s cellular data bandwidth. The default value is [true](https://developer.apple.com/documentation/swift/true).

When this property is [false](https://developer.apple.com/documentation/swift/false), the operation fails if Wi-Fi isn’t available.

## See Also

### Deprecated Properties

- [container](container.md): Deprecated. The operation’s container.
- [isLongLived](islonglived.md): Deprecated. A Boolean value that indicates whether the operation is long-lived.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): Deprecated. The timeout interval when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): Deprecated. The maximum amount of time that a resource request can use.

# allowsCellularAccess (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

A Boolean value that indicates whether the operation can send data over the cellular network.

> Use [allowsCellularAccess](configuration-swift.class/allowscellularaccess.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsCellularAccess;
```

<a id="discussion"></a>

## Discussion

When you send or receive many records, or when you send records with large assets, you might set this property to [false](https://developer.apple.com/documentation/swift/false) to avoid consuming too much of the user’s cellular data bandwidth. The default value is [true](https://developer.apple.com/documentation/swift/true).

When this property is [false](https://developer.apple.com/documentation/swift/false), the operation fails if Wi-Fi isn’t available.

## See Also

### Deprecated Properties

- [container](container.md): Deprecated. The operation’s container.
- [longLived](islonglived.md): Deprecated. A Boolean value that indicates whether the operation is long-lived.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): Deprecated. The timeout interval when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): Deprecated. The maximum amount of time that a resource request can use.
