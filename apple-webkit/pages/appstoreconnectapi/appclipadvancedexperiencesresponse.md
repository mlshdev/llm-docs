> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperiencesresponse](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperiencesresponse)

# AppClipAdvancedExperiencesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A response containing a list of configured App Clip advanced experiences.

## Declaration

```
object AppClipAdvancedExperiencesResponse
```

## Properties

- `data` — `[AppClipAdvancedExperience]` (required): The resource data.
- `included` — `[*]`: The requested relationship data.
  **Allowed types:** `AppClipAdvancedExperienceImage`, `AppClipAdvancedExperienceLocalization`, `AppClip`
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## See Also

### Objects

- [AppClip](appclip.md): A lightweight version of an app that users can launch instantly without installation, associated with a registered parent app.
- [AppClipResponse](appclipresponse.md): The response body for endpoints that read an App Clip associated with an app.
- [AppClipDefaultExperiencesResponse](appclipdefaultexperiencesresponse.md): The response body for endpoints that list default App Clip experiences.
- [AppClipAppClipAdvancedExperiencesLinkagesResponse](appclipappclipadvancedexperienceslinkagesresponse.md)
- [AppClipAppClipDefaultExperiencesLinkagesResponse](appclipappclipdefaultexperienceslinkagesresponse.md)
