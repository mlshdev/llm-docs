> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaapplocalizationupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/betaapplocalizationupdaterequest)

# BetaAppLocalizationUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The request body you use to update a Beta App Localization.

## Declaration

```
object BetaAppLocalizationUpdateRequest
```

## Properties

- `data` — `BetaAppLocalizationUpdateRequest.Data` (required): The resource data.

## Topics

### Objects

- [BetaAppLocalizationUpdateRequest.Data](betaapplocalizationupdaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [BetaAppLocalization](betaapplocalization.md): The localized feedback URL, marketing URL, and privacy policy URL shown to TestFlight testers for a specific language.
- [BetaAppLocalizationCreateRequest](betaapplocalizationcreaterequest.md): The request body you use to create a Beta App Localization.
- [BetaAppLocalizationResponse](betaapplocalizationresponse.md): The response body for endpoints that create, read, or modify localized TestFlight app metadata.
- [BetaAppLocalizationsWithoutIncludesResponse](betaapplocalizationswithoutincludesresponse.md): A response containing a list of TestFlight app localizations, without related resources.
- [BetaAppLocalizationsResponse](betaapplocalizationsresponse.md): The response body for endpoints that list localized TestFlight app metadata entries.
- [BetaAppLocalizationAppLinkageResponse](betaapplocalizationapplinkageresponse.md)
