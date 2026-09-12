> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperiencelocalization](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperiencelocalization)

# AppClipAdvancedExperienceLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The localized text and action button label for an App Clip advanced experience in a specific language.

## Declaration

```
object AppClipAdvancedExperienceLocalization
```

## Properties

- `attributes` — `AppClipAdvancedExperienceLocalization.Attributes`: The attributes that describe the Advanced App Clip Experience Localizations resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies an Advanced App Clip Experience Localizations resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipAdvancedExperienceLocalizations`

## Topics

### Objects

- [AppClipAdvancedExperienceLocalization.Attributes](appclipadvancedexperiencelocalization/attributes-data.dictionary.md): The attributes that describe an Advanced App Clip Experience Localizations resource.

## See Also

### Objects and types

- [AppClipAdvancedExperience](appclipadvancedexperience.md): A configured trigger for an App Clip experience, associated with a physical location, NFC tag, QR code, or App Store link.
- [AppClipAdvancedExperienceResponse](appclipadvancedexperienceresponse.md): A response containing a single App Clip advanced experience configuration.
- [AppClipAdvancedExperienceCreateRequest](appclipadvancedexperiencecreaterequest.md): The request body you use to create an advanced App Clip experience.
- [AppClipAdvancedExperienceUpdateRequest](appclipadvancedexperienceupdaterequest.md): The request body you use to update an advanced App Clip experience.
- [AppClipAdvancedExperienceLanguage](appclipadvancedexperiencelanguage.md): A string value identifying the language for an App Clip advanced experience localization.
