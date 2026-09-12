> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperiencecreaterequest/data-data.dictionary/relationships-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperiencecreaterequest/data-data.dictionary/relationships-data.dictionary)

# AppClipAdvancedExperienceCreateRequest.Data.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The relationships to other resources that you can set with this request.

## Declaration

```
object AppClipAdvancedExperienceCreateRequest.Data.Relationships
```

## Properties

- `appClip` — `AppClipAdvancedExperienceCreateRequest.Data.Relationships.AppClip` (required): The related App Clips resource.
- `headerImage` — `AppClipAdvancedExperienceCreateRequest.Data.Relationships.HeaderImage` (required): The related Advanced App Clip Experience Images resource.
- `localizations` — `AppClipAdvancedExperienceCreateRequest.Data.Relationships.Localizations` (required): The related Advanced App Clip Experience Localizations resource.

## Topics

### Objects

- [AppClipAdvancedExperienceCreateRequest.Data.Relationships.AppClip](relationships-data.dictionary/appclip-data.dictionary.md): The relationship to the App Clips resource you set with the request that creates an Advanced App Clip Experiences resource.
- [AppClipAdvancedExperienceCreateRequest.Data.Relationships.HeaderImage](relationships-data.dictionary/headerimage-data.dictionary.md): The relationship to the App Clip Header Images resource you set with the request that creates an Advanced App Clip Experiences resource.
- [AppClipAdvancedExperienceCreateRequest.Data.Relationships.Localizations](relationships-data.dictionary/localizations-data.dictionary.md): The relationship to the Advanced App Clip Experience Localizations resource you set with the request that creates an Advanced App Clip Experiences resource.

## See Also

### Objects

- [AppClipAdvancedExperienceCreateRequest.Data.Attributes](attributes-data.dictionary.md): The attributes you set that describe the new Advanced App Clip Experiences resource.
