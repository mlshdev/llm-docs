> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductsresponse](https://developer.apple.com/documentation/storekit/skproductsresponse)

# SKProductsResponse (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An App Store response to a request for information about a list of products.

> Get products using Product.products(for:).

## Declaration

```swift
class SKProductsResponse
```

## Topics

### Response Information

- [products](skproductsresponse/products.md): Deprecated. A list of products, one product for each valid product identifier provided in the original request.
- [invalidProductIdentifiers](skproductsresponse/invalidproductidentifiers.md): Deprecated. An array of product identifier strings that the App Store doesn’t recognize.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Product information

- [Loading in-app product identifiers](loading-in-app-product-identifiers.md): Load the unique identifiers for your in-app products to retrieve product information from the App Store.
- [Fetching product information from the App Store](fetching-product-information-from-the-app-store.md): Retrieve up-to-date information about the products for sale in your app to display to your customers.
- [SKProductsRequest](skproductsrequest.md): Deprecated. An object that can retrieve localized information from the App Store about a specified list of products.
- [SKProduct](skproduct.md): Deprecated. Information about a registered product in App Store Connect.

# SKProductsResponse (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An App Store response to a request for information about a list of products.

> Get products using Product.products(for:).

## Declaration

```objectivec
@interface SKProductsResponse : NSObject
```

## Topics

### Response Information

- [products](skproductsresponse/products.md): Deprecated. A list of products, one product for each valid product identifier provided in the original request.
- [invalidProductIdentifiers](skproductsresponse/invalidproductidentifiers.md): Deprecated. An array of product identifier strings that the App Store doesn’t recognize.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Product information

- [Loading in-app product identifiers](loading-in-app-product-identifiers.md): Load the unique identifiers for your in-app products to retrieve product information from the App Store.
- [Fetching product information from the App Store](fetching-product-information-from-the-app-store.md): Retrieve up-to-date information about the products for sale in your app to display to your customers.
- [SKProductsRequest](skproductsrequest.md): Deprecated. An object that can retrieve localized information from the App Store about a specified list of products.
- [SKProduct](skproduct.md): Deprecated. Information about a registered product in App Store Connect.
