> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/skproductsrequest/delegate

# delegate (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The delegate that receives the response of the app’s products request.

> Use Product.products(for:).

## Declaration

```swift
weak var delegate: (any SKProductsRequestDelegate)? { get set }
```

## See Also

### Setting the Delegate

- [SKProductsRequestDelegate](../skproductsrequestdelegate.md): Deprecated. A set of methods the delegate implements so it receives the product information your app requests.

# delegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The delegate that receives the response of the app’s products request.

> Use Product.products(for:).

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<SKProductsRequestDelegate> delegate;
```

## See Also

### Setting the Delegate

- [SKProductsRequestDelegate](../skproductsrequestdelegate.md): Deprecated. A set of methods the delegate implements so it receives the product information your app requests.
