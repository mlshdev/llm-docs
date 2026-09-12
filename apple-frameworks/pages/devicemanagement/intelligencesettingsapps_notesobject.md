> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/intelligencesettingsapps_notesobject](https://developer.apple.com/documentation/devicemanagement/intelligencesettingsapps_notesobject)

# IntelligenceSettingsApps_NotesObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

If present, configures Notes Intelligence features.

## Declaration

```
object IntelligenceSettingsApps_NotesObject
```

## Properties

- `AllowTranscription` — `boolean`: If `false`, disables Notes Transcription.

  Available: iOS 26.4+ | iPadOS 26.4+ | macOS 26.4+  
  **Default:** `true`
- `AllowTranscriptionSummary` — `boolean`: If `false`, disables Notes Transcription Summary.

  Available: iOS 26.4+ | iPadOS 26.4+ | macOS 26.4+  
  **Default:** `true`

## See Also

### Objects

- [IntelligenceSettingsApps_CalendarObject](intelligencesettingsapps_calendarobject.md): If present, configures Calendar and Reminders Intelligence features.
- [IntelligenceSettingsApps_MailObject](intelligencesettingsapps_mailobject.md): If present, configures Mail Intelligence features.
- [IntelligenceSettingsApps_SafariObject](intelligencesettingsapps_safariobject.md): If present, configures Safari intelligence features.
