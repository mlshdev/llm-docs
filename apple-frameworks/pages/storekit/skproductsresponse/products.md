> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductsresponse/products](https://developer.apple.com/documentation/storekit/skproductsresponse/products)

# products (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A list of products, one product for each valid product identifier provided in the original request.

> Get products using Product.products(for:).

## Declaration

```swift
var products: [SKProduct] { get }
```

<a id="Discussion"></a>

## Discussion

The array consists of a list of [SKProduct](../skproduct.md) objects.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Response Information

- [invalidProductIdentifiers](invalidproductidentifiers.md): Deprecated. An array of product identifier strings that the App Store doesn’t recognize.

# products (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A list of products, one product for each valid product identifier provided in the original request.

> Get products using Product.products(for:).

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SKProduct *> * products;
```

<a id="Discussion"></a>

## Discussion

The array consists of a list of [SKProduct](../skproduct.md) objects.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Response Information

- [invalidProductIdentifiers](invalidproductidentifiers.md): Deprecated. An array of product identifier strings that the App Store doesn’t recognize.
