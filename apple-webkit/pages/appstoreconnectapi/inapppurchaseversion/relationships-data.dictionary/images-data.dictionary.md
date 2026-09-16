> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseversion/relationships-data.dictionary/images-data.dictionary

# InAppPurchaseVersion.Relationships.Images

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The review images for the in-app purchase version.

## Declaration

```
object InAppPurchaseVersion.Relationships.Images
```

## Properties

- `links` — `RelationshipLinks`:
- `meta` — `PagingInformation`:
- `data` — `[InAppPurchaseVersion.Relationships.Images.Data]`:

## Topics

### Objects

- [InAppPurchaseVersion.Relationships.Images.Data](images-data.dictionary/data-data.dictionary.md): The type and ID of a related resource.

## See Also

### Objects

- [InAppPurchaseVersion.Relationships.InAppPurchase](inapppurchase-data.dictionary.md): The in-app purchase for the in-app purchase version.
- [InAppPurchaseVersion.Relationships.Image](image-data.dictionary.md): The review image for the in-app purchase version.
- [InAppPurchaseVersion.Relationships.Localizations](localizations-data.dictionary.md): The localizations for the in-app purchase version.
