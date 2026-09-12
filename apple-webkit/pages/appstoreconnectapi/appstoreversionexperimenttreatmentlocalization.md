> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionexperimenttreatmentlocalization](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionexperimenttreatmentlocalization)

# AppStoreVersionExperimentTreatmentLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The localized screenshots, previews, and text for one treatment variant in an App Store product page A/B experiment.

## Declaration

```
object AppStoreVersionExperimentTreatmentLocalization
```

## Properties

- `attributes` — `AppStoreVersionExperimentTreatmentLocalization.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppStoreVersionExperimentTreatmentLocalization.Relationships`:
- `type` — `string` (required): **Allowed values:** `appStoreVersionExperimentTreatmentLocalizations`

## Topics

### Objects

- [AppStoreVersionExperimentTreatmentLocalization.Attributes](appstoreversionexperimenttreatmentlocalization/attributes-data.dictionary.md): Attributes that describe an app store version experiment treatment localization resource.
- [AppStoreVersionExperimentTreatmentLocalization.Relationships](appstoreversionexperimenttreatmentlocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppStoreVersionExperimentTreatmentLocalizationCreateRequest](appstoreversionexperimenttreatmentlocalizationcreaterequest.md): The request body you use to create an App Store version experiment treatment localization.
- [AppStoreVersionExperimentTreatmentLocalizationResponse](appstoreversionexperimenttreatmentlocalizationresponse.md): The response body for endpoints that create, read, or modify a localized treatment for an App Store experiment.
- [AppStoreVersionExperimentTreatmentLocalizationsResponse](appstoreversionexperimenttreatmentlocalizationsresponse.md): The response body for endpoints that list localized treatments for an App Store version experiment.
