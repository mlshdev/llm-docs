> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaapplocalizationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/betaapplocalizationsresponse)

# BetaAppLocalizationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that list localized TestFlight app metadata entries.

## Declaration

```
object BetaAppLocalizationsResponse
```

## Properties

- `data` — `[BetaAppLocalization]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[App]`:

## See Also

### Related Documentation

- [List beta app localizations](get-v1-betaapplocalizations.md): Find and list beta app localizations for all apps and locales.

### Objects

- [BetaAppLocalization](betaapplocalization.md): The localized feedback URL, marketing URL, and privacy policy URL shown to TestFlight testers for a specific language.
- [BetaAppLocalizationCreateRequest](betaapplocalizationcreaterequest.md): The request body you use to create a Beta App Localization.
- [BetaAppLocalizationResponse](betaapplocalizationresponse.md): The response body for endpoints that create, read, or modify localized TestFlight app metadata.
- [BetaAppLocalizationsWithoutIncludesResponse](betaapplocalizationswithoutincludesresponse.md): A response containing a list of TestFlight app localizations, without related resources.
- [BetaAppLocalizationUpdateRequest](betaapplocalizationupdaterequest.md): The request body you use to update a Beta App Localization.
- [BetaAppLocalizationAppLinkageResponse](betaapplocalizationapplinkageresponse.md)
