> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipdefaultexperiencereleasewithappstoreversionlinkageresponse](https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperiencereleasewithappstoreversionlinkageresponse)

# AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A response that contains the ID of a single related App Store Versions resource.

## Declaration

```
object AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse
```

## Properties

- `data` — `AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse.Data` (required): The object types and IDs of the related resources.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## Topics

### Objects

- [AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse.Data](appclipdefaultexperiencereleasewithappstoreversionlinkageresponse/data-data.dictionary.md): The data element of the response body.

## See Also

### Objects and types

- [AppClipDefaultExperience](appclipdefaultexperience.md): The default App Clip experience that launches when no advanced experience matches, linking to an App Store review detail and localized metadata.
- [AppClipDefaultExperienceResponse](appclipdefaultexperienceresponse.md): The response body for endpoints that create, read, or modify the default App Clip experience.
- [AppClipDefaultExperienceCreateRequest](appclipdefaultexperiencecreaterequest.md): The request body you use to create a default App Clip experience.
- [AppClipDefaultExperienceUpdateRequest](appclipdefaultexperienceupdaterequest.md): The request body you use to update a default App Clip experience.
- [AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest](appclipdefaultexperiencereleasewithappstoreversionlinkagerequest.md): The request body you use to relate a released App Store version with a default App Clip experience.
- [AppClipAppClipDefaultExperiencesLinkagesResponse](appclipappclipdefaultexperienceslinkagesresponse.md)
- [AppClipDefaultExperienceAppClipDefaultExperienceLocalizationsLinkagesResponse](appclipdefaultexperienceappclipdefaultexperiencelocalizationslinkagesresponse.md)
- [AppClipDefaultExperienceLocalizationAppClipHeaderImageLinkageResponse](appclipdefaultexperiencelocalizationappclipheaderimagelinkageresponse.md)
- [AppClipDefaultExperienceAppClipAppStoreReviewDetailLinkageResponse](appclipdefaultexperienceappclipappstorereviewdetaillinkageresponse.md): A response body that contains the ID of a single related resource.
- [AppClipAction](appclipaction.md): A string that represents the call-to-action verb on the App Clip card.
