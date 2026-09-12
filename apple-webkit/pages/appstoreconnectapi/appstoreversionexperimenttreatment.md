> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionexperimenttreatment](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionexperimenttreatment)

# AppStoreVersionExperimentTreatment

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

One variant in an App Store product page A/B experiment, containing a set of alternative screenshots, previews, and promotional text.

## Declaration

```
object AppStoreVersionExperimentTreatment
```

## Properties

- `attributes` — `AppStoreVersionExperimentTreatment.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppStoreVersionExperimentTreatment.Relationships`:
- `type` — `string` (required): **Allowed values:** `appStoreVersionExperimentTreatments`

## Topics

### Objects

- [AppStoreVersionExperimentTreatment.Attributes](appstoreversionexperimenttreatment/attributes-data.dictionary.md): Attributes that describe an app store version experiment treatment resource.
- [AppStoreVersionExperimentTreatment.Relationships](appstoreversionexperimenttreatment/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppStoreVersionExperimentTreatmentCreateRequest](appstoreversionexperimenttreatmentcreaterequest.md): The request body you use to create an App Store version experiment treatment.
- [AppStoreVersionExperimentTreatmentResponse](appstoreversionexperimenttreatmentresponse.md): The response body for endpoints that create, read, or modify an App Store version experiment treatment.
- [AppStoreVersionExperimentTreatmentUpdateRequest](appstoreversionexperimenttreatmentupdaterequest.md): The request body you use to update an app store version experiment treatment update request.
- [AppStoreVersionExperimentTreatmentsResponse](appstoreversionexperimenttreatmentsresponse.md): The response body for endpoints that list treatments for an App Store version experiment.
- [AppStoreVersionExperimentAppStoreVersionExperimentTreatmentsLinkagesResponse](appstoreversionexperimentappstoreversionexperimenttreatmentslinkagesresponse.md): Deprecated.
- [AppStoreVersionExperimentTreatmentAppStoreVersionExperimentTreatmentLocalizationsLinkagesResponse](appstoreversionexperimenttreatmentappstoreversionexperimenttreatmentlocalizationslinkagesresponse.md)
- [AppStoreVersionExperimentTreatmentLocalizationAppPreviewSetsLinkagesResponse](appstoreversionexperimenttreatmentlocalizationapppreviewsetslinkagesresponse.md)
- [AppStoreVersionExperimentTreatmentLocalizationAppScreenshotSetsLinkagesResponse](appstoreversionexperimenttreatmentlocalizationappscreenshotsetslinkagesresponse.md)
- [AppStoreVersionExperimentV2AppStoreVersionExperimentTreatmentsLinkagesResponse](appstoreversionexperimentv2appstoreversionexperimenttreatmentslinkagesresponse.md)
