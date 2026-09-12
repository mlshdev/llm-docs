> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionexperimentv2](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionexperimentv2)

# AppStoreVersionExperimentV2

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.4+

An A/B test comparing two product page variants for an App Store version to determine which drives more downloads.

## Declaration

```
object AppStoreVersionExperimentV2
```

## Properties

- `attributes` — `AppStoreVersionExperimentV2.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppStoreVersionExperimentV2.Relationships`:
- `type` — `string` (required): **Allowed values:** `appStoreVersionExperiments`

## Topics

### Objects

- [AppStoreVersionExperimentV2.Relationships](appstoreversionexperimentv2/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
- [AppStoreVersionExperimentV2.Attributes](appstoreversionexperimentv2/attributes-data.dictionary.md): Attributes that describe an app store version experiment v2 resource.

## See Also

### Objects

- [AppStoreVersionExperimentV2CreateRequest](appstoreversionexperimentv2createrequest.md): The request body you use to create an App Store version experiment.
- [AppStoreVersionExperimentV2Response](appstoreversionexperimentv2response.md): A response containing a single App Store product page A/B experiment.
- [AppStoreVersionExperimentV2UpdateRequest](appstoreversionexperimentv2updaterequest.md): The request body you use to update an app store version experiment v2update request.
- [AppStoreVersionExperimentsV2Response](appstoreversionexperimentsv2response.md): A response containing a list of A/B product page experiments for an App Store version.
- [AppStoreVersionExperiment](appstoreversionexperiment.md): Deprecated.
- [AppStoreVersionExperimentCreateRequest](appstoreversionexperimentcreaterequest.md): Deprecated.
- [AppStoreVersionExperimentResponse](appstoreversionexperimentresponse.md): Deprecated.
- [AppStoreVersionExperimentUpdateRequest](appstoreversionexperimentupdaterequest.md): Deprecated.
- [AppStoreVersionExperimentsResponse](appstoreversionexperimentsresponse.md): Deprecated.
- [AppStoreVersionExperimentAppStoreVersionExperimentTreatmentsLinkagesResponse](appstoreversionexperimentappstoreversionexperimenttreatmentslinkagesresponse.md): Deprecated.
- [AppStoreVersionExperimentTreatmentAppStoreVersionExperimentTreatmentLocalizationsLinkagesResponse](appstoreversionexperimenttreatmentappstoreversionexperimenttreatmentlocalizationslinkagesresponse.md)
- [AppStoreVersionExperimentTreatmentLocalizationAppPreviewSetsLinkagesResponse](appstoreversionexperimenttreatmentlocalizationapppreviewsetslinkagesresponse.md)
- [AppStoreVersionExperimentTreatmentLocalizationAppScreenshotSetsLinkagesResponse](appstoreversionexperimenttreatmentlocalizationappscreenshotsetslinkagesresponse.md)
- [AppStoreVersionExperimentV2AppStoreVersionExperimentTreatmentsLinkagesResponse](appstoreversionexperimentv2appstoreversionexperimenttreatmentslinkagesresponse.md)
