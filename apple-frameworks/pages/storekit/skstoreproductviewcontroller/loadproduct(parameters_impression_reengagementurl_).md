> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductviewcontroller/loadproduct(parameters:impression:reengagementurl:)](https://developer.apple.com/documentation/storekit/skstoreproductviewcontroller/loadproduct(parameters:impression:reengagementurl:))

# loadProduct(parameters:impression:reengagementURL:)

**Framework:** AdAttributionKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

## Declaration

```swift
@MainActor @preconcurrency func loadProduct(parameters: [String : Any], impression: AppImpression, reengagementURL: URL) async throws
```

## See Also

### Loading a new product screen

- [Offering media for sale in your app](../offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [loadProduct(withParameters:completionBlock:)](loadproduct%28withparameters_completionblock_%29.md): Loads a new product screen to display.
- [loadProduct(withParameters:impression:completionBlock:)](loadproduct%28withparameters_impression_completionblock_%29.md)
- [loadProduct(parameters:impression:)](loadproduct%28parameters_impression_%29.md)
- [Product Dictionary Keys](../product-dictionary-keys.md): Keys for identifying products and the tokens for affiliates and campaigns.
