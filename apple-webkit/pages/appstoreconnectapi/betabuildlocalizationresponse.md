> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betabuildlocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/betabuildlocalizationresponse)

# BetaBuildLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that create, read, or modify localized TestFlight build metadata.

## Declaration

```
object BetaBuildLocalizationResponse
```

## Properties

- `data` — `BetaBuildLocalization` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[Build]`:

## See Also

### Related Documentation

- [Create a beta build localization](post-v1-betabuildlocalizations.md): Create localized What’s New text for a build.

### Objects

- [BetaBuildLocalization](betabuildlocalization.md): The localized ‘What’s New’ text shown to TestFlight testers in a specific language for a build.
- [BetaBuildLocalizationsWithoutIncludesResponse](betabuildlocalizationswithoutincludesresponse.md): A response containing a list of TestFlight build localizations, without related resources.
- [BetaBuildLocalizationCreateRequest](betabuildlocalizationcreaterequest.md): The request body you use to create a Beta Build Localization.
- [BetaBuildLocalizationUpdateRequest](betabuildlocalizationupdaterequest.md): The request body you use to update a Beta Build Localization.
- [BetaBuildLocalizationsResponse](betabuildlocalizationsresponse.md): The response body for endpoints that list localized TestFlight build metadata entries.
- [BetaBuildLocalizationBuildLinkageResponse](betabuildlocalizationbuildlinkageresponse.md)
