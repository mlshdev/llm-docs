> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionexperimentsresponse](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionexperimentsresponse)

# AppStoreVersionExperimentsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+ (deprecated in 2.4)

> Use [AppStoreVersionExperimentsV2Response](appstoreversionexperimentsv2response.md) instead.

## Declaration

```
object AppStoreVersionExperimentsResponse
```

## Properties

- `data` — `[AppStoreVersionExperiment]` (required):
- `included` — `[*]`: **Allowed types:** `AppStoreVersionExperimentTreatment`, `AppStoreVersion`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [AppStoreVersionExperimentV2](appstoreversionexperimentv2.md): An A/B test comparing two product page variants for an App Store version to determine which drives more downloads.
- [AppStoreVersionExperimentV2CreateRequest](appstoreversionexperimentv2createrequest.md): The request body you use to create an App Store version experiment.
- [AppStoreVersionExperimentV2Response](appstoreversionexperimentv2response.md): A response containing a single App Store product page A/B experiment.
- [AppStoreVersionExperimentV2UpdateRequest](appstoreversionexperimentv2updaterequest.md): The request body you use to update an app store version experiment v2update request.
- [AppStoreVersionExperimentsV2Response](appstoreversionexperimentsv2response.md): A response containing a list of A/B product page experiments for an App Store version.
- [AppStoreVersionExperiment](appstoreversionexperiment.md): Deprecated.
- [AppStoreVersionExperimentCreateRequest](appstoreversionexperimentcreaterequest.md): Deprecated.
- [AppStoreVersionExperimentResponse](appstoreversionexperimentresponse.md): Deprecated.
- [AppStoreVersionExperimentUpdateRequest](appstoreversionexperimentupdaterequest.md): Deprecated.
- [AppStoreVersionExperimentAppStoreVersionExperimentTreatmentsLinkagesResponse](appstoreversionexperimentappstoreversionexperimenttreatmentslinkagesresponse.md): Deprecated.
- [AppStoreVersionExperimentTreatmentAppStoreVersionExperimentTreatmentLocalizationsLinkagesResponse](appstoreversionexperimenttreatmentappstoreversionexperimenttreatmentlocalizationslinkagesresponse.md)
- [AppStoreVersionExperimentTreatmentLocalizationAppPreviewSetsLinkagesResponse](appstoreversionexperimenttreatmentlocalizationapppreviewsetslinkagesresponse.md)
- [AppStoreVersionExperimentTreatmentLocalizationAppScreenshotSetsLinkagesResponse](appstoreversionexperimenttreatmentlocalizationappscreenshotsetslinkagesresponse.md)
- [AppStoreVersionExperimentV2AppStoreVersionExperimentTreatmentsLinkagesResponse](appstoreversionexperimentv2appstoreversionexperimenttreatmentslinkagesresponse.md)
