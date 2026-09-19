> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreservernotifications/storefront

# storefront

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.8+

The three-letter code that represents the country or region associated with the App Store storefront for the purchase.

## Declaration

```
string storefront
```

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)

<a id="Discussion"></a>

## Discussion

This property uses the ISO 3166-1 alpha-3 country code representation. This property is the same as the [countryCode](../storekit/storefront/countrycode.md) in StoreKit.

## See Also

### Storefront information

- [storefrontId](storefrontid.md): An Apple-defined value that uniquely identifies an App Store storefront.
