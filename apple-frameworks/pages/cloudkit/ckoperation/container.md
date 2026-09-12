> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/container](https://developer.apple.com/documentation/cloudkit/ckoperation/container)

# container (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The operation’s container.

> Use [container](configuration-swift.class/container.md) instead.

## Declaration

```swift
var container: CKContainer? { get set }
```

<a id="discussion"></a>

## Discussion

The container defines where the operation executes. The [add(\_:)](../ckcontainer/add%28__%29.md) method of the [CKContainer](../ckcontainer.md) and [CKDatabase](../ckdatabase.md) classes implicitly set this property to their container.

If you execute the operation yourself, either directly or using a custom operation queue, set the value of this property explicitly. If the value is `nil` when you execute an operation, the operation implicitly executes in your app’s default container.

## See Also

### Deprecated Properties

- [allowsCellularAccess](allowscellularaccess.md): Deprecated. A Boolean value that indicates whether the operation can send data over the cellular network.
- [isLongLived](islonglived.md): Deprecated. A Boolean value that indicates whether the operation is long-lived.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): Deprecated. The timeout interval when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): Deprecated. The maximum amount of time that a resource request can use.

# container (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The operation’s container.

> Use [container](configuration-swift.class/container.md) instead.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CKContainer * container;
```

<a id="discussion"></a>

## Discussion

The container defines where the operation executes. The [addOperation:](../ckcontainer/add%28__%29.md) method of the [CKContainer](../ckcontainer.md) and [CKDatabase](../ckdatabase.md) classes implicitly set this property to their container.

If you execute the operation yourself, either directly or using a custom operation queue, set the value of this property explicitly. If the value is `nil` when you execute an operation, the operation implicitly executes in your app’s default container.

## See Also

### Deprecated Properties

- [allowsCellularAccess](allowscellularaccess.md): Deprecated. A Boolean value that indicates whether the operation can send data over the cellular network.
- [longLived](islonglived.md): Deprecated. A Boolean value that indicates whether the operation is long-lived.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): Deprecated. The timeout interval when waiting for additional data.
- [timeoutIntervalForResource](timeoutintervalforresource.md): Deprecated. The maximum amount of time that a resource request can use.
