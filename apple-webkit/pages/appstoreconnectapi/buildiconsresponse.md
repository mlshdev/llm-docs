> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildiconsresponse](https://developer.apple.com/documentation/appstoreconnectapi/buildiconsresponse)

# BuildIconsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

A response containing a list of icon images for a build.

## Declaration

```
object BuildIconsResponse
```

## Properties

- `data` — `[BuildIcon]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects and types

- [BuildIcon](buildicon.md): A PNG icon image extracted from a build, used for display in App Store Connect and TestFlight.
- [BuildIconsWithoutIncludesResponse](buildiconswithoutincludesresponse.md): A response containing a list of build icons, without related resources.
- [ImageAsset](imageasset.md): An image asset, including its height, width, and template URL.
- [IconAssetType](iconassettype.md): String that represents the type of icon contained in the build.
