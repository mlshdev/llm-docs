> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductsrequest](https://developer.apple.com/documentation/storekit/skproductsrequest)

# SKProductsRequest (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An object that can retrieve localized information from the App Store about a specified list of products.

> Use Product.products(for:).

## Declaration

```swift
class SKProductsRequest
```

## Mentioned In

- [Fetching product information from the App Store](fetching-product-information-from-the-app-store.md)
- [Implementing introductory offers in your app](implementing-introductory-offers-in-your-app.md)
- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)
- [Testing a product request](testing-a-product-request.md)

<a id="overview"></a>

## Overview

Your app uses an [SKProductsRequest](skproductsrequest.md) object to present localized prices and other information to the user without having to maintain that list of product information itself.

To use an [SKProductsRequest](skproductsrequest.md) object, you initialize it with a list of product identifier strings, attach a delegate, and then call the request’s [start()](skrequest/start%28%29.md) method. When the request completes, your delegate receives an [SKProductsResponse](skproductsresponse.md) object.

> **Note**

>  Be sure to keep a strong reference to the request object; otherwise, the system might deallocate the request before it can complete.

## Topics

### Initializing a Products Request

- [init(productIdentifiers:)](skproductsrequest/init%28productidentifiers_%29.md): Deprecated. Initializes the request with the set of product identifiers.

### Setting the Delegate

- [delegate](skproductsrequest/delegate.md): Deprecated. The delegate that receives the response of the app’s products request.
- [SKProductsRequestDelegate](skproductsrequestdelegate.md): Deprecated. A set of methods the delegate implements so it receives the product information your app requests.

## Relationships

### Inherits From

- [SKRequest](skrequest.md)

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
- [SKProductsResponse](skproductsresponse.md): Deprecated. An App Store response to a request for information about a list of products.
- [SKProduct](skproduct.md): Deprecated. Information about a registered product in App Store Connect.

# SKProductsRequest (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An object that can retrieve localized information from the App Store about a specified list of products.

> Use Product.products(for:).

## Declaration

```objectivec
@interface SKProductsRequest : SKRequest
```

## Mentioned In

- [Fetching product information from the App Store](fetching-product-information-from-the-app-store.md)
- [Implementing introductory offers in your app](implementing-introductory-offers-in-your-app.md)
- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)
- [Testing a product request](testing-a-product-request.md)

<a id="overview"></a>

## Overview

Your app uses an [SKProductsRequest](skproductsrequest.md) object to present localized prices and other information to the user without having to maintain that list of product information itself.

To use an [SKProductsRequest](skproductsrequest.md) object, you initialize it with a list of product identifier strings, attach a delegate, and then call the request’s [start](skrequest/start%28%29.md) method. When the request completes, your delegate receives an [SKProductsResponse](skproductsresponse.md) object.

> **Note**

>  Be sure to keep a strong reference to the request object; otherwise, the system might deallocate the request before it can complete.

## Topics

### Initializing a Products Request

- [initWithProductIdentifiers:](skproductsrequest/init%28productidentifiers_%29.md): Deprecated. Initializes the request with the set of product identifiers.

### Setting the Delegate

- [delegate](skproductsrequest/delegate.md): Deprecated. The delegate that receives the response of the app’s products request.
- [SKProductsRequestDelegate](skproductsrequestdelegate.md): Deprecated. A set of methods the delegate implements so it receives the product information your app requests.

## Relationships

### Inherits From

- [SKRequest](skrequest.md)

## See Also

### Product information

- [Loading in-app product identifiers](loading-in-app-product-identifiers.md): Load the unique identifiers for your in-app products to retrieve product information from the App Store.
- [Fetching product information from the App Store](fetching-product-information-from-the-app-store.md): Retrieve up-to-date information about the products for sale in your app to display to your customers.
- [SKProductsResponse](skproductsresponse.md): Deprecated. An App Store response to a request for information about a list of products.
- [SKProduct](skproduct.md): Deprecated. Information about a registered product in App Store Connect.
