> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betabuildlocalizationupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/betabuildlocalizationupdaterequest)

# BetaBuildLocalizationUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The request body you use to update a Beta Build Localization.

## Declaration

```
object BetaBuildLocalizationUpdateRequest
```

## Properties

- `data` — `BetaBuildLocalizationUpdateRequest.Data` (required): The resource data.

## Topics

### Objects

- [BetaBuildLocalizationUpdateRequest.Data](betabuildlocalizationupdaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [BetaBuildLocalization](betabuildlocalization.md): The localized ‘What’s New’ text shown to TestFlight testers in a specific language for a build.
- [BetaBuildLocalizationResponse](betabuildlocalizationresponse.md): The response body for endpoints that create, read, or modify localized TestFlight build metadata.
- [BetaBuildLocalizationsWithoutIncludesResponse](betabuildlocalizationswithoutincludesresponse.md): A response containing a list of TestFlight build localizations, without related resources.
- [BetaBuildLocalizationCreateRequest](betabuildlocalizationcreaterequest.md): The request body you use to create a Beta Build Localization.
- [BetaBuildLocalizationsResponse](betabuildlocalizationsresponse.md): The response body for endpoints that list localized TestFlight build metadata entries.
- [BetaBuildLocalizationBuildLinkageResponse](betabuildlocalizationbuildlinkageresponse.md)
