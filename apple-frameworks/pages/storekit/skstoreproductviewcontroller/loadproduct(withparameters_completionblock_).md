> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductviewcontroller/loadproduct(withparameters:completionblock:)](https://developer.apple.com/documentation/storekit/skstoreproductviewcontroller/loadproduct(withparameters:completionblock:))

# loadProduct(withParameters:completionBlock:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

Loads a new product screen to display.

## Declaration

```swift
func loadProduct(withParameters parameters: [String : Any], completionBlock block: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func loadProduct(withParameters parameters: [String : Any]) async throws -> Bool
```

## Parameters

- `parameters`: A dictionary describing the content you want the view controller to display. See [Product Dictionary Keys](../product-dictionary-keys.md) for keys that describe the product. See [Ad network install-validation keys](../ad-network-install-validation-keys.md) for keys that describe an impression in an advertising campaign.
- `block`: A block to be called when the product information has been loaded from the App Store. The completion block is called on the main thread and receives the following parameters:

  - **`result`**: [true](https://developer.apple.com/documentation/swift/true) if the product information was successfully loaded, otherwise [false](https://developer.apple.com/documentation/swift/false).
  - **`error`**: If an error occurred, this object describes the error. If the product information was successfully loaded, this value is `nil`.

## Mentioned In

- [Generating the signature to validate StoreKit-rendered ads](../generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Signing and providing ads](../signing-and-providing-ads.md)

<a id="Discussion"></a>

## Discussion

For a seamless user experience, load the product information before presenting the [SKStoreProductViewController](../skstoreproductviewcontroller.md) view controller. However, if you load the product information while presenting the view controller, once loaded, the product data replaces the contents of the view controller.

## See Also

### Loading a new product screen

- [Offering media for sale in your app](../offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [loadProduct(withParameters:impression:completionBlock:)](loadproduct%28withparameters_impression_completionblock_%29.md)
- [loadProduct(parameters:impression:)](loadproduct%28parameters_impression_%29.md)
- [loadProduct(parameters:impression:reengagementURL:)](loadproduct%28parameters_impression_reengagementurl_%29.md)
- [Product Dictionary Keys](../product-dictionary-keys.md): Keys for identifying products and the tokens for affiliates and campaigns.

# loadProductWithParameters:completionBlock: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

Loads a new product screen to display.

## Declaration

```objectivec
- (void) loadProductWithParameters:(NSDictionary<NSString *,id> *) parameters completionBlock:(void (^)(BOOL result, NSError *error)) block;
```

## Parameters

- `parameters`: A dictionary describing the content you want the view controller to display. See [Product Dictionary Keys](../product-dictionary-keys.md) for keys that describe the product. See [Ad network install-validation keys](../ad-network-install-validation-keys.md) for keys that describe an impression in an advertising campaign.
- `block`: A block to be called when the product information has been loaded from the App Store. The completion block is called on the main thread and receives the following parameters:

  - **`result`**: [true](https://developer.apple.com/documentation/swift/true) if the product information was successfully loaded, otherwise [false](https://developer.apple.com/documentation/swift/false).
  - **`error`**: If an error occurred, this object describes the error. If the product information was successfully loaded, this value is `nil`.

## Mentioned In

- [Generating the signature to validate StoreKit-rendered ads](../generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Signing and providing ads](../signing-and-providing-ads.md)

<a id="Discussion"></a>

## Discussion

For a seamless user experience, load the product information before presenting the [SKStoreProductViewController](../skstoreproductviewcontroller.md) view controller. However, if you load the product information while presenting the view controller, once loaded, the product data replaces the contents of the view controller.

## See Also

### Loading a new product screen

- [Offering media for sale in your app](../offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [loadProductWithParameters:impression:completionBlock:](loadproduct%28withparameters_impression_completionblock_%29.md)
- [Product Dictionary Keys](../product-dictionary-keys.md): Keys for identifying products and the tokens for affiliates and campaigns.
