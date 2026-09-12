> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipdefaultexperience](https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperience)

# AppClipDefaultExperience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The default App Clip experience that launches when no advanced experience matches, linking to an App Store review detail and localized metadata.

## Declaration

```
object AppClipDefaultExperience
```

## Properties

- `attributes` — `AppClipDefaultExperience.Attributes`: The attributes that describe the Default App Clip Experiences resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Default App Clip Experiences resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `AppClipDefaultExperience.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipDefaultExperiences`

## Topics

### Objects

- [AppClipDefaultExperience.Attributes](appclipdefaultexperience/attributes-data.dictionary.md): The attributes that describe a Default App Clip Experiences resource.
- [AppClipDefaultExperience.Relationships](appclipdefaultexperience/relationships-data.dictionary.md): The relationships of the Default App Clip Experiences resource you included in the request and those on which you can operate.

## See Also

### Objects and types

- [AppClipDefaultExperienceResponse](appclipdefaultexperienceresponse.md): The response body for endpoints that create, read, or modify the default App Clip experience.
- [AppClipDefaultExperienceCreateRequest](appclipdefaultexperiencecreaterequest.md): The request body you use to create a default App Clip experience.
- [AppClipDefaultExperienceUpdateRequest](appclipdefaultexperienceupdaterequest.md): The request body you use to update a default App Clip experience.
- [AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest](appclipdefaultexperiencereleasewithappstoreversionlinkagerequest.md): The request body you use to relate a released App Store version with a default App Clip experience.
- [AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse](appclipdefaultexperiencereleasewithappstoreversionlinkageresponse.md): A response that contains the ID of a single related App Store Versions resource.
- [AppClipAppClipDefaultExperiencesLinkagesResponse](appclipappclipdefaultexperienceslinkagesresponse.md)
- [AppClipDefaultExperienceAppClipDefaultExperienceLocalizationsLinkagesResponse](appclipdefaultexperienceappclipdefaultexperiencelocalizationslinkagesresponse.md)
- [AppClipDefaultExperienceLocalizationAppClipHeaderImageLinkageResponse](appclipdefaultexperiencelocalizationappclipheaderimagelinkageresponse.md)
- [AppClipDefaultExperienceAppClipAppStoreReviewDetailLinkageResponse](appclipdefaultexperienceappclipappstorereviewdetaillinkageresponse.md): A response body that contains the ID of a single related resource.
- [AppClipAction](appclipaction.md): A string that represents the call-to-action verb on the App Clip card.
