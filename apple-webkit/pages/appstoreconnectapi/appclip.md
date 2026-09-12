> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclip](https://developer.apple.com/documentation/appstoreconnectapi/appclip)

# AppClip

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A lightweight version of an app that users can launch instantly without installation, associated with a registered parent app.

## Declaration

```
object AppClip
```

## Properties

- `attributes` — `AppClip.Attributes`: The attributes that describe the App Clips resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies an App Clips resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `AppClip.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClips`

## Topics

### Objects

- [AppClip.Attributes](appclip/attributes-data.dictionary.md): The attributes that describe an App Clips resource.
- [AppClip.Relationships](appclip/relationships-data.dictionary.md): The relationships of the App Clips resource you included in the request and those on which you can operate.

## See Also

### Objects

- [AppClipResponse](appclipresponse.md): The response body for endpoints that read an App Clip associated with an app.
- [AppClipDefaultExperiencesResponse](appclipdefaultexperiencesresponse.md): The response body for endpoints that list default App Clip experiences.
- [AppClipAdvancedExperiencesResponse](appclipadvancedexperiencesresponse.md): A response containing a list of configured App Clip advanced experiences.
- [AppClipAppClipAdvancedExperiencesLinkagesResponse](appclipappclipadvancedexperienceslinkagesresponse.md)
- [AppClipAppClipDefaultExperiencesLinkagesResponse](appclipappclipdefaultexperienceslinkagesresponse.md)
