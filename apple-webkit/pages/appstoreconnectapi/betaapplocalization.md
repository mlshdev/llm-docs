> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaapplocalization](https://developer.apple.com/documentation/appstoreconnectapi/betaapplocalization)

# BetaAppLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The localized feedback URL, marketing URL, and privacy policy URL shown to TestFlight testers for a specific language.

## Declaration

```
object BetaAppLocalization
```

## Properties

- `attributes` — `BetaAppLocalization.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `BetaAppLocalization.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppLocalizations`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [BetaAppLocalization.Attributes](betaapplocalization/attributes-data.dictionary.md): Attributes that describe a Beta App Localizations resource.
- [BetaAppLocalization.Relationships](betaapplocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [BetaAppLocalizationCreateRequest](betaapplocalizationcreaterequest.md): The request body you use to create a Beta App Localization.
- [BetaAppLocalizationResponse](betaapplocalizationresponse.md): The response body for endpoints that create, read, or modify localized TestFlight app metadata.
- [BetaAppLocalizationsWithoutIncludesResponse](betaapplocalizationswithoutincludesresponse.md): A response containing a list of TestFlight app localizations, without related resources.
- [BetaAppLocalizationUpdateRequest](betaapplocalizationupdaterequest.md): The request body you use to update a Beta App Localization.
- [BetaAppLocalizationsResponse](betaapplocalizationsresponse.md): The response body for endpoints that list localized TestFlight app metadata entries.
- [BetaAppLocalizationAppLinkageResponse](betaapplocalizationapplinkageresponse.md)
