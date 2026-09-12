> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betabuildlocalizationswithoutincludesresponse](https://developer.apple.com/documentation/appstoreconnectapi/betabuildlocalizationswithoutincludesresponse)

# BetaBuildLocalizationsWithoutIncludesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a list of TestFlight build localizations, without related resources.

## Declaration

```
object BetaBuildLocalizationsWithoutIncludesResponse
```

## Properties

- `data` — `[BetaBuildLocalization]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [BetaBuildLocalization](betabuildlocalization.md): The localized ‘What’s New’ text shown to TestFlight testers in a specific language for a build.
- [BetaBuildLocalizationResponse](betabuildlocalizationresponse.md): The response body for endpoints that create, read, or modify localized TestFlight build metadata.
- [BetaBuildLocalizationCreateRequest](betabuildlocalizationcreaterequest.md): The request body you use to create a Beta Build Localization.
- [BetaBuildLocalizationUpdateRequest](betabuildlocalizationupdaterequest.md): The request body you use to update a Beta Build Localization.
- [BetaBuildLocalizationsResponse](betabuildlocalizationsresponse.md): The response body for endpoints that list localized TestFlight build metadata entries.
- [BetaBuildLocalizationBuildLinkageResponse](betabuildlocalizationbuildlinkageresponse.md)
