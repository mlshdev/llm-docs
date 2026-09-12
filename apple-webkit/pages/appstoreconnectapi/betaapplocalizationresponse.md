> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaapplocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/betaapplocalizationresponse)

# BetaAppLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that create, read, or modify localized TestFlight app metadata.

## Declaration

```
object BetaAppLocalizationResponse
```

## Properties

- `data` — `BetaAppLocalization` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[App]`:

## See Also

### Related Documentation

- [Create a beta app localization](post-v1-betaapplocalizations.md): Create localized descriptive information for an app.

### Objects

- [BetaAppLocalization](betaapplocalization.md): The localized feedback URL, marketing URL, and privacy policy URL shown to TestFlight testers for a specific language.
- [BetaAppLocalizationCreateRequest](betaapplocalizationcreaterequest.md): The request body you use to create a Beta App Localization.
- [BetaAppLocalizationsWithoutIncludesResponse](betaapplocalizationswithoutincludesresponse.md): A response containing a list of TestFlight app localizations, without related resources.
- [BetaAppLocalizationUpdateRequest](betaapplocalizationupdaterequest.md): The request body you use to update a Beta App Localization.
- [BetaAppLocalizationsResponse](betaapplocalizationsresponse.md): The response body for endpoints that list localized TestFlight app metadata entries.
- [BetaAppLocalizationAppLinkageResponse](betaapplocalizationapplinkageresponse.md)
