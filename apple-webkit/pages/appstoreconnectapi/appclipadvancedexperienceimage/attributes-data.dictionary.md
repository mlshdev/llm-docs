> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperienceimage/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperienceimage/attributes-data.dictionary)

# AppClipAdvancedExperienceImage.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The attributes that describe an Advanced App Clip Experience Images resource.

## Declaration

```
object AppClipAdvancedExperienceImage.Attributes
```

## Properties

- `assetDeliveryState` — `AppMediaAssetState`: The state of the App Clip card image asset you uploaded.
- `fileName` — `string`: The filename of the image asset that appears on the App Clip card for the advanced App Clip experience.
- `fileSize` — `integer`: The size of the image asset that appears on the App Clip card for the advanced App Clip experience.
- `imageAsset` — `ImageAsset`: The image asset that appears on the App Clip card of an advanced App Clip experience.
- `sourceFileChecksum` — `string`: A string that represents the MD5 checksum of the image asset you use for the App Clip card.
- `uploadOperations` — `[UploadOperation]`: Upload operations for the image asset that appears on the App Clip card for an advanced App Clip experience.
