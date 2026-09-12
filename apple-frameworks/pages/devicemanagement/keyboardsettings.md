> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/keyboardsettings](https://developer.apple.com/documentation/devicemanagement/keyboardsettings)

# KeyboardSettings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+

The declaration to configure keyboard settings.

## Declaration

```
object KeyboardSettings
```

## Properties

- `AllowAutoCorrection` — `boolean`: If `false`, disables auto-correction.

  Available: iOS 26.4+ | iPadOS 26.4+  
  **Default:** `true`
- `AllowDefinitionLookup` — `boolean`: If `false`, disables definition lookup.
  **Default:** `true`
- `AllowDictation` — `boolean`: If `false`, disables dictation.
  **Default:** `true`
- `AllowMathKeyboardSuggestions` — `boolean`: If `false`, disables keyboard suggestions that include math solutions. This key is also supported by the math.settings configuration.
  **Default:** `true`
- `AllowPredictiveText` — `boolean`: If `false`, disables predictive text.

  Available: iOS 26.4+ | iPadOS 26.4+  
  **Default:** `true`
- `AllowSlideToType` — `boolean`: If `false`, disables slide to type.

  Available: iOS 26.4+ | iPadOS 26.4+  
  **Default:** `true`
- `AllowSpellCheck` — `boolean`: If `false`, disables spell check.

  Available: iOS 26.4+ | iPadOS 26.4+  
  **Default:** `true`
- `AllowTextReplacement` — `boolean`: If `false`, disables text replacement.

  Available: iOS 26.4+ | iPadOS 26.4+  
  **Default:** `true`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.configuration.keyboard.settings` as the declaration type.

<a id="Configuration-availability"></a>

### Configuration availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, macOS |
| Allowed in user scope | macOS, Shared iPad |
| Apply | Multiple configurations are combined and applied as a single effective configuration |

<a id="Configuration-examples"></a>

### Configuration examples

This configuration restricts keyboard features.

```json
{
    "Type": "com.apple.configuration.keyboard.settings",
    "Identifier": "A1B2C3D4-E5F6-4A5B-9C8D-7E6F5A4B3C2D",
    "ServerToken": "F1E2D3C4-B5A6-4D5E-8F9A-0B1C2D3E4F5A",
    "Payload": {
        "AllowAutoCorrection": false,
        "AllowSlideToType": false,
        "AllowDefinitionLookup": false,
        "AllowDictation": false,
        "AllowMathKeyboardSuggestions": false,
        "AllowPredictiveText": false,
        "AllowTextReplacement": false,
        "AllowSpellCheck": false
    }
}
```

## See Also

### Configurations

- [AccessibilitySettings](accessibilitysettings.md): The declaration to configure accessibility settings.
- [AccountCalDAV](accountcaldav.md): The declaration to configure a Calendar account.
- [AccountCardDAV](accountcarddav.md): The declaration to configure a Contacts account.
- [AccountExchange](accountexchange.md): The declaration to configure an Exchange account.
- [AccountGoogle](accountgoogle.md): The declaration to configure a Google account.
- [AccountLDAP](accountldap.md): The declaration to configure a Lightweight Directory Access Protocol (LDAP) account.
- [AccountMail](accountmail.md): The declaration to configure a Mail account.
- [AccountSubscribedCalendar](accountsubscribedcalendar.md): The declaration to configure a subscribed calendar.
- [AppManaged](appmanaged.md): The declaration to configure a managed app.
- [AppSettings](appsettings.md): The declaration to configure app settings.
- [AudioAccessorySettings](audioaccessorysettings.md): The declaration to configure audio accessory settings.
- [ContentCaching](contentcaching.md): The declaration to configure the Content Caching service.
- [DiskManagementSettings](diskmanagementsettings.md): The declaration to configure disk management settings on the device.
- [ExtensibleSSO](extensiblesso.md): The declaration to configure Extensible Single Sign-On.
- [ExternalIntelligenceSettings](externalintelligencesettings.md): The declaration to configure External Intelligence Integrations settings.
