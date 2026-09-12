> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaapplocalizationswithoutincludesresponse](https://developer.apple.com/documentation/appstoreconnectapi/betaapplocalizationswithoutincludesresponse)

# BetaAppLocalizationsWithoutIncludesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a list of TestFlight app localizations, without related resources.

## Declaration

```
object BetaAppLocalizationsWithoutIncludesResponse
```

## Properties

- `data` — `[BetaAppLocalization]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [BetaAppLocalization](betaapplocalization.md): The localized feedback URL, marketing URL, and privacy policy URL shown to TestFlight testers for a specific language.
- [BetaAppLocalizationCreateRequest](betaapplocalizationcreaterequest.md): The request body you use to create a Beta App Localization.
- [BetaAppLocalizationResponse](betaapplocalizationresponse.md): The response body for endpoints that create, read, or modify localized TestFlight app metadata.
- [BetaAppLocalizationUpdateRequest](betaapplocalizationupdaterequest.md): The request body you use to update a Beta App Localization.
- [BetaAppLocalizationsResponse](betaapplocalizationsresponse.md): The response body for endpoints that list localized TestFlight app metadata entries.
- [BetaAppLocalizationAppLinkageResponse](betaapplocalizationapplinkageresponse.md)
