> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductsresponse/invalidproductidentifiers](https://developer.apple.com/documentation/storekit/skproductsresponse/invalidproductidentifiers)

# invalidProductIdentifiers (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An array of product identifier strings that the App Store doesn’t recognize.

> Get products using Product.products(for:).

## Declaration

```swift
var invalidProductIdentifiers: [String] { get }
```

## Mentioned In

- [Fetching product information from the App Store](../fetching-product-information-from-the-app-store.md)

<a id="Discussion"></a>

## Discussion

The App Store may not recognize your product identifiers unless you meet following criteria, as applicable:

- Agree to the latest Apple Developer Program License Agreement.
- Complete all the financial agreements as described in the [Agreements, Tax, and Banking Overview](https://help.apple.com/itunes-connect/developer/#/devb6df5ee51). When you renew your developer membership, see if you need to make updates to your agreements. When your developer membership expires, your financial agreements expire as well.
- Your app uses an explicit App ID.
- Clear the in-app purchases for sale in App Store Connect. See [Set availability for in-app purchase](https://help.apple.com/app-store-connect/#/dev360aba524).
- Modified in-app purchases are available to the App Store servers.
- The product identifier specified in App Store Connect matches the identifier used by the [SKProductsRequest](../skproductsrequest.md) object in your app.
- Upload the content of your product to App Store Connect.  See [Upload in-app purchase content to App Store Connect](https://help.apple.com/xcode/mac/current/#/dev285fb60ce).

For more troubleshooting information, see [Fetching product information from the App Store](../fetching-product-information-from-the-app-store.md).

## See Also

### Response Information

- [products](products.md): Deprecated. A list of products, one product for each valid product identifier provided in the original request.

# invalidProductIdentifiers (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An array of product identifier strings that the App Store doesn’t recognize.

> Get products using Product.products(for:).

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * invalidProductIdentifiers;
```

## Mentioned In

- [Fetching product information from the App Store](../fetching-product-information-from-the-app-store.md)

<a id="Discussion"></a>

## Discussion

The App Store may not recognize your product identifiers unless you meet following criteria, as applicable:

- Agree to the latest Apple Developer Program License Agreement.
- Complete all the financial agreements as described in the [Agreements, Tax, and Banking Overview](https://help.apple.com/itunes-connect/developer/#/devb6df5ee51). When you renew your developer membership, see if you need to make updates to your agreements. When your developer membership expires, your financial agreements expire as well.
- Your app uses an explicit App ID.
- Clear the in-app purchases for sale in App Store Connect. See [Set availability for in-app purchase](https://help.apple.com/app-store-connect/#/dev360aba524).
- Modified in-app purchases are available to the App Store servers.
- The product identifier specified in App Store Connect matches the identifier used by the [SKProductsRequest](../skproductsrequest.md) object in your app.
- Upload the content of your product to App Store Connect.  See [Upload in-app purchase content to App Store Connect](https://help.apple.com/xcode/mac/current/#/dev285fb60ce).

For more troubleshooting information, see [Fetching product information from the App Store](../fetching-product-information-from-the-app-store.md).

## See Also

### Response Information

- [products](products.md): Deprecated. A list of products, one product for each valid product identifier provided in the original request.
