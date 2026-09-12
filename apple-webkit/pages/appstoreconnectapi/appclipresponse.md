> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipresponse](https://developer.apple.com/documentation/appstoreconnectapi/appclipresponse)

# AppClipResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The response body for endpoints that read an App Clip associated with an app.

## Declaration

```
object AppClipResponse
```

## Properties

- `data` — `AppClip` (required): The resource data.
- `included` — `[*]`: The requested relationship data.
  **Allowed types:** `AppClipDefaultExperience`, `App`
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [AppClip](appclip.md): A lightweight version of an app that users can launch instantly without installation, associated with a registered parent app.
- [AppClipDefaultExperiencesResponse](appclipdefaultexperiencesresponse.md): The response body for endpoints that list default App Clip experiences.
- [AppClipAdvancedExperiencesResponse](appclipadvancedexperiencesresponse.md): A response containing a list of configured App Clip advanced experiences.
- [AppClipAppClipAdvancedExperiencesLinkagesResponse](appclipappclipadvancedexperienceslinkagesresponse.md)
- [AppClipAppClipDefaultExperiencesLinkagesResponse](appclipappclipdefaultexperienceslinkagesresponse.md)
