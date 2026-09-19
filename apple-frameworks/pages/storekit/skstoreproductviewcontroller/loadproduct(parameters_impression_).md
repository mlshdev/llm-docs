> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/skstoreproductviewcontroller/loadproduct(parameters:impression:)

# loadProduct(parameters:impression:)

**Framework:** AdAttributionKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

## Declaration

```swift
@MainActor @preconcurrency func loadProduct(parameters: [String : Any], impression: AppImpression) async throws
```

## See Also

### Loading a new product screen

- [Offering media for sale in your app](../offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [loadProduct(withParameters:completionBlock:)](loadproduct%28withparameters_completionblock_%29.md): Loads a new product screen to display.
- [loadProduct(withParameters:impression:completionBlock:)](loadproduct%28withparameters_impression_completionblock_%29.md)
- [loadProduct(parameters:impression:reengagementURL:)](loadproduct%28parameters_impression_reengagementurl_%29.md)
- [Product Dictionary Keys](../product-dictionary-keys.md): Keys for identifying products and the tokens for affiliates and campaigns.
