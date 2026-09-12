> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductsrequestdelegate/productsrequest(_:didreceive:)](https://developer.apple.com/documentation/storekit/skproductsrequestdelegate/productsrequest(_:didreceive:))

# productsRequest(\_:didReceive:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Accepts the App Store response that contains the app-requested product information.

> Get products using Product.products(for:).

## Declaration

```swift
func productsRequest(_ request: SKProductsRequest, didReceive response: SKProductsResponse)
```

## Parameters

- `request`: The product request sent to the Apple App Store.
- `response`: Detailed information about the list of products.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

# productsRequest:didReceiveResponse: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Accepts the App Store response that contains the app-requested product information.

> Get products using Product.products(for:).

## Declaration

```objectivec
- (void) productsRequest:(SKProductsRequest *) request didReceiveResponse:(SKProductsResponse *) response;
```

## Parameters

- `request`: The product request sent to the Apple App Store.
- `response`: Detailed information about the list of products.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)
