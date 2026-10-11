> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionexperimenttreatmentlocalizationplacementslinkagesresponse

# AppStoreVersionExperimentTreatmentLocalizationPlacementsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

A response body that contains a list of related resource IDs.

## Declaration

```
object AppStoreVersionExperimentTreatmentLocalizationPlacementsLinkagesResponse
```

## Properties

- `data` — `[AppStoreVersionExperimentTreatmentLocalizationPlacementsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [AppStoreVersionExperimentTreatmentLocalizationPlacementsLinkagesResponse.Data](appstoreversionexperimenttreatmentlocalizationplacementslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects

- [AppStoreVersionExperimentTreatmentLocalization](appstoreversionexperimenttreatmentlocalization.md): The localized screenshots, previews, and text for one treatment variant in an App Store product page A/B experiment.
- [AppStoreVersionExperimentTreatmentLocalizationCreateRequest](appstoreversionexperimenttreatmentlocalizationcreaterequest.md): The request body you use to create an App Store version experiment treatment localization.
- [AppStoreVersionExperimentTreatmentLocalizationResponse](appstoreversionexperimenttreatmentlocalizationresponse.md): The response body for endpoints that create, read, or modify a localized treatment for an App Store experiment.
- [AppStoreVersionExperimentTreatmentLocalizationsResponse](appstoreversionexperimenttreatmentlocalizationsresponse.md): The response body for endpoints that list localized treatments for an App Store version experiment.
