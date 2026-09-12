> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionexperimenttreatmentlocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionexperimenttreatmentlocalizationresponse)

# AppStoreVersionExperimentTreatmentLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The response body for endpoints that create, read, or modify a localized treatment for an App Store experiment.

## Declaration

```
object AppStoreVersionExperimentTreatmentLocalizationResponse
```

## Properties

- `data` — `AppStoreVersionExperimentTreatmentLocalization` (required):
- `included` — `[*]`: **Allowed types:** `AppPreviewSet`, `AppScreenshotSet`, `AppStoreVersionExperimentTreatment`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [AppStoreVersionExperimentTreatmentLocalization](appstoreversionexperimenttreatmentlocalization.md): The localized screenshots, previews, and text for one treatment variant in an App Store product page A/B experiment.
- [AppStoreVersionExperimentTreatmentLocalizationCreateRequest](appstoreversionexperimenttreatmentlocalizationcreaterequest.md): The request body you use to create an App Store version experiment treatment localization.
- [AppStoreVersionExperimentTreatmentLocalizationsResponse](appstoreversionexperimenttreatmentlocalizationsresponse.md): The response body for endpoints that list localized treatments for an App Store version experiment.
