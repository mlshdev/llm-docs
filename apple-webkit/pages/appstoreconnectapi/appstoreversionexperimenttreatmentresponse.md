> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionexperimenttreatmentresponse](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionexperimenttreatmentresponse)

# AppStoreVersionExperimentTreatmentResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The response body for endpoints that create, read, or modify an App Store version experiment treatment.

## Declaration

```
object AppStoreVersionExperimentTreatmentResponse
```

## Properties

- `data` — `AppStoreVersionExperimentTreatment` (required):
- `included` — `[*]`: **Allowed types:** `AppStoreVersionExperimentTreatmentLocalization`, `AppStoreVersionExperiment`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [AppStoreVersionExperimentTreatment](appstoreversionexperimenttreatment.md): One variant in an App Store product page A/B experiment, containing a set of alternative screenshots, previews, and promotional text.
- [AppStoreVersionExperimentTreatmentCreateRequest](appstoreversionexperimenttreatmentcreaterequest.md): The request body you use to create an App Store version experiment treatment.
- [AppStoreVersionExperimentTreatmentUpdateRequest](appstoreversionexperimenttreatmentupdaterequest.md): The request body you use to update an app store version experiment treatment update request.
- [AppStoreVersionExperimentTreatmentsResponse](appstoreversionexperimenttreatmentsresponse.md): The response body for endpoints that list treatments for an App Store version experiment.
- [AppStoreVersionExperimentAppStoreVersionExperimentTreatmentsLinkagesResponse](appstoreversionexperimentappstoreversionexperimenttreatmentslinkagesresponse.md): Deprecated.
- [AppStoreVersionExperimentTreatmentAppStoreVersionExperimentTreatmentLocalizationsLinkagesResponse](appstoreversionexperimenttreatmentappstoreversionexperimenttreatmentlocalizationslinkagesresponse.md)
- [AppStoreVersionExperimentTreatmentLocalizationAppPreviewSetsLinkagesResponse](appstoreversionexperimenttreatmentlocalizationapppreviewsetslinkagesresponse.md)
- [AppStoreVersionExperimentTreatmentLocalizationAppScreenshotSetsLinkagesResponse](appstoreversionexperimenttreatmentlocalizationappscreenshotsetslinkagesresponse.md)
- [AppStoreVersionExperimentV2AppStoreVersionExperimentTreatmentsLinkagesResponse](appstoreversionexperimentv2appstoreversionexperimenttreatmentslinkagesresponse.md)
