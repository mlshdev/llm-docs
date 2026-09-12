> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betabuildlocalizationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/betabuildlocalizationsresponse)

# BetaBuildLocalizationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that list localized TestFlight build metadata entries.

## Declaration

```
object BetaBuildLocalizationsResponse
```

## Properties

- `data` — `[BetaBuildLocalization]` (required): The resource data.
- `included` — `[Build]`:
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.

## See Also

### Related Documentation

- [List beta build localizations](get-v1-betabuildlocalizations.md): Find and list beta build localizations currently associated with apps.

### Objects

- [BetaBuildLocalization](betabuildlocalization.md): The localized ‘What’s New’ text shown to TestFlight testers in a specific language for a build.
- [BetaBuildLocalizationResponse](betabuildlocalizationresponse.md): The response body for endpoints that create, read, or modify localized TestFlight build metadata.
- [BetaBuildLocalizationsWithoutIncludesResponse](betabuildlocalizationswithoutincludesresponse.md): A response containing a list of TestFlight build localizations, without related resources.
- [BetaBuildLocalizationCreateRequest](betabuildlocalizationcreaterequest.md): The request body you use to create a Beta Build Localization.
- [BetaBuildLocalizationUpdateRequest](betabuildlocalizationupdaterequest.md): The request body you use to update a Beta Build Localization.
- [BetaBuildLocalizationBuildLinkageResponse](betabuildlocalizationbuildlinkageresponse.md)
