> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildicon](https://developer.apple.com/documentation/appstoreconnectapi/buildicon)

# BuildIcon

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

A PNG icon image extracted from a build, used for display in App Store Connect and TestFlight.

## Declaration

```
object BuildIcon
```

## Properties

- `attributes` — `BuildIcon.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `buildIcons`

## Topics

### Objects

- [BuildIcon.Attributes](buildicon/attributes-data.dictionary.md): Attributes that describe a Build Icons resource.

## See Also

### Objects and types

- [BuildIconsResponse](buildiconsresponse.md): A response containing a list of icon images for a build.
- [BuildIconsWithoutIncludesResponse](buildiconswithoutincludesresponse.md): A response containing a list of build icons, without related resources.
- [ImageAsset](imageasset.md): An image asset, including its height, width, and template URL.
- [IconAssetType](iconassettype.md): String that represents the type of icon contained in the build.
