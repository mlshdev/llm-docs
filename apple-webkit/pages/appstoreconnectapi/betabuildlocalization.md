> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betabuildlocalization](https://developer.apple.com/documentation/appstoreconnectapi/betabuildlocalization)

# BetaBuildLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The localized ‘What’s New’ text shown to TestFlight testers in a specific language for a build.

## Declaration

```
object BetaBuildLocalization
```

## Properties

- `attributes` — `BetaBuildLocalization.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `BetaBuildLocalization.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaBuildLocalizations`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [BetaBuildLocalization.Attributes](betabuildlocalization/attributes-data.dictionary.md): Attributes that describe a Beta Build Localizations resource.
- [BetaBuildLocalization.Relationships](betabuildlocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [BetaBuildLocalizationResponse](betabuildlocalizationresponse.md): The response body for endpoints that create, read, or modify localized TestFlight build metadata.
- [BetaBuildLocalizationsWithoutIncludesResponse](betabuildlocalizationswithoutincludesresponse.md): A response containing a list of TestFlight build localizations, without related resources.
- [BetaBuildLocalizationCreateRequest](betabuildlocalizationcreaterequest.md): The request body you use to create a Beta Build Localization.
- [BetaBuildLocalizationUpdateRequest](betabuildlocalizationupdaterequest.md): The request body you use to update a Beta Build Localization.
- [BetaBuildLocalizationsResponse](betabuildlocalizationsresponse.md): The response body for endpoints that list localized TestFlight build metadata entries.
- [BetaBuildLocalizationBuildLinkageResponse](betabuildlocalizationbuildlinkageresponse.md)
