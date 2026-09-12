> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperienceresponse](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperienceresponse)

# AppClipAdvancedExperienceResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A response containing a single App Clip advanced experience configuration.

## Declaration

```
object AppClipAdvancedExperienceResponse
```

## Properties

- `data` — `AppClipAdvancedExperience` (required): The resource data.
- `included` — `[*]`: The requested relationship data.
  **Allowed types:** `AppClipAdvancedExperienceImage`, `AppClipAdvancedExperienceLocalization`, `AppClip`
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects and types

- [AppClipAdvancedExperience](appclipadvancedexperience.md): A configured trigger for an App Clip experience, associated with a physical location, NFC tag, QR code, or App Store link.
- [AppClipAdvancedExperienceLocalization](appclipadvancedexperiencelocalization.md): The localized text and action button label for an App Clip advanced experience in a specific language.
- [AppClipAdvancedExperienceCreateRequest](appclipadvancedexperiencecreaterequest.md): The request body you use to create an advanced App Clip experience.
- [AppClipAdvancedExperienceUpdateRequest](appclipadvancedexperienceupdaterequest.md): The request body you use to update an advanced App Clip experience.
- [AppClipAdvancedExperienceLanguage](appclipadvancedexperiencelanguage.md): A string value identifying the language for an App Clip advanced experience localization.
