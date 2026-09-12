> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperienceupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperienceupdaterequest)

# AppClipAdvancedExperienceUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The request body you use to update an advanced App Clip experience.

## Declaration

```
object AppClipAdvancedExperienceUpdateRequest
```

## Properties

- `data` — `AppClipAdvancedExperienceUpdateRequest.Data` (required): The resource data.
- `included` — `[AppClipAdvancedExperienceLocalizationInlineCreate]`: The relationship data to include in the response.

## Topics

### Objects

- [AppClipAdvancedExperienceUpdateRequest.Data](appclipadvancedexperienceupdaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects and types

- [AppClipAdvancedExperience](appclipadvancedexperience.md): A configured trigger for an App Clip experience, associated with a physical location, NFC tag, QR code, or App Store link.
- [AppClipAdvancedExperienceResponse](appclipadvancedexperienceresponse.md): A response containing a single App Clip advanced experience configuration.
- [AppClipAdvancedExperienceLocalization](appclipadvancedexperiencelocalization.md): The localized text and action button label for an App Clip advanced experience in a specific language.
- [AppClipAdvancedExperienceCreateRequest](appclipadvancedexperiencecreaterequest.md): The request body you use to create an advanced App Clip experience.
- [AppClipAdvancedExperienceLanguage](appclipadvancedexperiencelanguage.md): A string value identifying the language for an App Clip advanced experience localization.
