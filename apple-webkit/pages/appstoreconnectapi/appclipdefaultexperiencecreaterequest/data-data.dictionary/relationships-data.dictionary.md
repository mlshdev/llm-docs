> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipdefaultexperiencecreaterequest/data-data.dictionary/relationships-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperiencecreaterequest/data-data.dictionary/relationships-data.dictionary)

# AppClipDefaultExperienceCreateRequest.Data.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The relationships to other resources that you can set with this request.

## Declaration

```
object AppClipDefaultExperienceCreateRequest.Data.Relationships
```

## Properties

- `appClip` — `AppClipDefaultExperienceCreateRequest.Data.Relationships.AppClip` (required): The related App Clips resource.
- `appClipDefaultExperienceTemplate` — `AppClipDefaultExperienceCreateRequest.Data.Relationships.AppClipDefaultExperienceTemplate`: The related Default App Clip Experience Templates resource.
- `releaseWithAppStoreVersion` — `AppClipDefaultExperienceCreateRequest.Data.Relationships.ReleaseWithAppStoreVersion`: The related App Store Versions resource.

## Topics

### Objects

- [AppClipDefaultExperienceCreateRequest.Data.Relationships.AppClip](relationships-data.dictionary/appclip-data.dictionary.md): The relationship to the App Clips resource you set with the request that creates a Default App Clip Experiences resource.
- [AppClipDefaultExperienceCreateRequest.Data.Relationships.AppClipDefaultExperienceTemplate](relationships-data.dictionary/appclipdefaultexperiencetemplate-data.dictionary.md): The relationship to the Default App Clip Experience Templates resource you set with the request that creates a Default App Clip Experiences resource.
- [AppClipDefaultExperienceCreateRequest.Data.Relationships.ReleaseWithAppStoreVersion](relationships-data.dictionary/releasewithappstoreversion-data.dictionary.md): The relationship to the App Store Versions resource you set with the request that creates a Default App Clip Experiences resource.

## See Also

### Objects

- [AppClipDefaultExperienceCreateRequest.Data.Attributes](attributes-data.dictionary.md): The attributes you set that describe the Default App Clip Experiences resource.
