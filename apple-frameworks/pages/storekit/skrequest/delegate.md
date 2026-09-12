> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skrequest/delegate](https://developer.apple.com/documentation/storekit/skrequest/delegate)

# delegate (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The delegate of the request object.

> No longer supported.

## Declaration

```swift
weak var delegate: (any SKRequestDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [SKRequestDelegate](../skrequestdelegate.md) protocol, although most subclasses of [SKRequest](../skrequest.md) provide a more specific protocol to implement.

## See Also

### Accessing the Delegate

- [SKRequestDelegate](../skrequestdelegate.md): Deprecated. Common methods that are implemented by delegates for any subclass of the `SKRequest` abstract class.

# delegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The delegate of the request object.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<SKRequestDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [SKRequestDelegate](../skrequestdelegate.md) protocol, although most subclasses of [SKRequest](../skrequest.md) provide a more specific protocol to implement.

## See Also

### Accessing the Delegate

- [SKRequestDelegate](../skrequestdelegate.md): Deprecated. Common methods that are implemented by delegates for any subclass of the `SKRequest` abstract class.
