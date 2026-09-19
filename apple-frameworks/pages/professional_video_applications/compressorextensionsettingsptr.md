> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional_video_applications/compressorextensionsettingsptr

# CompressorExtensionSettingsPtr (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Alias  
**Availability:** ProVideo Encoder Extensions 1.0+

The type alias for referencing the `CompressorExtensionSettings`  object.

## Declaration

```swift
typealias CompressorExtensionSettingsPtr = any NSObjectProtocol & CompressorExtensionSettings
```

## See Also

### Configuring Extension Settings

- [setSettingsString(\_:)](compressorextensionsettings/setsettingsstring%28__%29.md): Sets the encoder settings based on the string value supplied.
- [audioEnabled](compressorextensionsettings/audioenabled.md): A Boolean value that indicates whether audio is enabled for the source media.
- [videoEnabled](compressorextensionsettings/videoenabled.md): A Boolean value that indicates whether video is enabled for the source media.

# CompressorExtensionSettingsPtr (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Alias

The type alias for referencing the `CompressorExtensionSettings`  object.

## Declaration

```objectivec
typedef NSObject<CompressorExtensionSettings> * CompressorExtensionSettingsPtr;
```

## See Also

### Configuring Extension Settings

- [setSettingsString:](compressorextensionsettings/setsettingsstring%28__%29.md): Sets the encoder settings based on the string value supplied.
- [audioEnabled](compressorextensionsettings/audioenabled.md): A Boolean value that indicates whether audio is enabled for the source media.
- [videoEnabled](compressorextensionsettings/videoenabled.md): A Boolean value that indicates whether video is enabled for the source media.
