> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductviewcontroller/loadproduct(withparameters:impression:completionblock:)](https://developer.apple.com/documentation/storekit/skstoreproductviewcontroller/loadproduct(withparameters:impression:completionblock:))

# loadProduct(withParameters:impression:completionBlock:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

## Declaration

```swift
func loadProduct(withParameters parameters: [String : Any], impression: SKAdImpression, completionBlock block: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func loadProduct(withParameters parameters: [String : Any], impression: SKAdImpression) async throws -> Bool
```

## See Also

### Loading a new product screen

- [Offering media for sale in your app](../offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [loadProduct(withParameters:completionBlock:)](loadproduct%28withparameters_completionblock_%29.md): Loads a new product screen to display.
- [loadProduct(parameters:impression:)](loadproduct%28parameters_impression_%29.md)
- [loadProduct(parameters:impression:reengagementURL:)](loadproduct%28parameters_impression_reengagementurl_%29.md)
- [Product Dictionary Keys](../product-dictionary-keys.md): Keys for identifying products and the tokens for affiliates and campaigns.

# loadProductWithParameters:impression:completionBlock: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

## Declaration

```objectivec
- (void) loadProductWithParameters:(NSDictionary<NSString *,id> *) parameters impression:(SKAdImpression *) impression completionBlock:(void (^)(BOOL result, NSError *error)) block;
```

## See Also

### Loading a new product screen

- [Offering media for sale in your app](../offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [loadProductWithParameters:completionBlock:](loadproduct%28withparameters_completionblock_%29.md): Loads a new product screen to display.
- [Product Dictionary Keys](../product-dictionary-keys.md): Keys for identifying products and the tokens for affiliates and campaigns.
