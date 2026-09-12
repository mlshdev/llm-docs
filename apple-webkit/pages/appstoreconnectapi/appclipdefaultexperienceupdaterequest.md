> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipdefaultexperienceupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperienceupdaterequest)

# AppClipDefaultExperienceUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The request body you use to update a default App Clip experience.

## Declaration

```
object AppClipDefaultExperienceUpdateRequest
```

## Properties

- `data` — `AppClipDefaultExperienceUpdateRequest.Data` (required): The resource data.

## Topics

### Objects

- [AppClipDefaultExperienceUpdateRequest.Data](appclipdefaultexperienceupdaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects and types

- [AppClipDefaultExperience](appclipdefaultexperience.md): The default App Clip experience that launches when no advanced experience matches, linking to an App Store review detail and localized metadata.
- [AppClipDefaultExperienceResponse](appclipdefaultexperienceresponse.md): The response body for endpoints that create, read, or modify the default App Clip experience.
- [AppClipDefaultExperienceCreateRequest](appclipdefaultexperiencecreaterequest.md): The request body you use to create a default App Clip experience.
- [AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest](appclipdefaultexperiencereleasewithappstoreversionlinkagerequest.md): The request body you use to relate a released App Store version with a default App Clip experience.
- [AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse](appclipdefaultexperiencereleasewithappstoreversionlinkageresponse.md): A response that contains the ID of a single related App Store Versions resource.
- [AppClipAppClipDefaultExperiencesLinkagesResponse](appclipappclipdefaultexperienceslinkagesresponse.md)
- [AppClipDefaultExperienceAppClipDefaultExperienceLocalizationsLinkagesResponse](appclipdefaultexperienceappclipdefaultexperiencelocalizationslinkagesresponse.md)
- [AppClipDefaultExperienceLocalizationAppClipHeaderImageLinkageResponse](appclipdefaultexperiencelocalizationappclipheaderimagelinkageresponse.md)
- [AppClipDefaultExperienceAppClipAppStoreReviewDetailLinkageResponse](appclipdefaultexperienceappclipappstorereviewdetaillinkageresponse.md): A response body that contains the ID of a single related resource.
- [AppClipAction](appclipaction.md): A string that represents the call-to-action verb on the App Clip card.
