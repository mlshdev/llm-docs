> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductsrequestdelegate](https://developer.apple.com/documentation/storekit/skproductsrequestdelegate)

# SKProductsRequestDelegate (Swift)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A set of methods the delegate implements so it receives the product information your app requests.

> Get products using Product.products(for:).

## Declaration

```swift
protocol SKProductsRequestDelegate : SKRequestDelegate
```

## Mentioned In

- [Fetching product information from the App Store](fetching-product-information-from-the-app-store.md)

<a id="overview"></a>

## Overview

The [SKProductsRequestDelegate](skproductsrequestdelegate.md) protocol declares methods that are implemented by the delegate of an [SKProductsRequest](skproductsrequest.md) object. The delegate receives the product information that the product request referred to. Your app uses this information when presenting products to users in its in-app store.

> **Warning**

>  Responses received by the `SKProductsRequestDelegate` may not be returned on a specific thread. If you make assumptions about which queue will handle delegate responses, you may encounter unintended performance and compatibility issues in the future.

## Topics

### Receiving the Response

- [productsRequest(\_:didReceive:)](skproductsrequestdelegate/productsrequest%28__didreceive_%29.md): Deprecated. Accepts the App Store response that contains the app-requested product information.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [SKRequestDelegate](skrequestdelegate.md)

## See Also

### Setting the Delegate

- [delegate](skproductsrequest/delegate.md): Deprecated. The delegate that receives the response of the app’s products request.

# SKProductsRequestDelegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A set of methods the delegate implements so it receives the product information your app requests.

> Get products using Product.products(for:).

## Declaration

```objectivec
@protocol SKProductsRequestDelegate <SKRequestDelegate>
```

## Mentioned In

- [Fetching product information from the App Store](fetching-product-information-from-the-app-store.md)

<a id="overview"></a>

## Overview

The [SKProductsRequestDelegate](skproductsrequestdelegate.md) protocol declares methods that are implemented by the delegate of an [SKProductsRequest](skproductsrequest.md) object. The delegate receives the product information that the product request referred to. Your app uses this information when presenting products to users in its in-app store.

> **Warning**

>  Responses received by the `SKProductsRequestDelegate` may not be returned on a specific thread. If you make assumptions about which queue will handle delegate responses, you may encounter unintended performance and compatibility issues in the future.

## Topics

### Receiving the Response

- [productsRequest:didReceiveResponse:](skproductsrequestdelegate/productsrequest%28__didreceive_%29.md): Deprecated. Accepts the App Store response that contains the app-requested product information.

## Relationships

### Inherits From

- [SKRequestDelegate](skrequestdelegate.md)

## See Also

### Setting the Delegate

- [delegate](skproductsrequest/delegate.md): Deprecated. The delegate that receives the response of the app’s products request.
