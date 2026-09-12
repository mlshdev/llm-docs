> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/storefront](https://developer.apple.com/documentation/appstoreserverapi/storefront)

# storefront

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.8+

The three-letter code that represents the country or region associated with the App Store storefront of the purchase.

## Declaration

```
string storefront
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

This property uses the ISO 3166-1 alpha-3 country code representation. This property is the same as the [countryCode](../storekit/storefront/countrycode.md) in StoreKit.

## See Also

### Storefront information

- [storefrontId](storefrontid.md): An Apple-defined value that uniquely identifies an App Store storefront.
