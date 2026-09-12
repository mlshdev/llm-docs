> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionsettings/setsettingsstring(_:)](https://developer.apple.com/documentation/professional_video_applications/compressorextensionsettings/setsettingsstring(_:))

# setSettingsString(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Sets the encoder settings based on the string value supplied.

## Declaration

```swift
func setSettingsString(_ settings: String!)
```

## Parameters

- `settings`: Updated values for encoder settings in UTF_8 XML format. If the string value is `NULL`, set it to the default values.

## See Also

### Configuring Extension Settings

- [audioEnabled](audioenabled.md): A Boolean value that indicates whether audio is enabled for the source media.
- [videoEnabled](videoenabled.md): A Boolean value that indicates whether video is enabled for the source media.
- [CompressorExtensionSettingsPtr](../compressorextensionsettingsptr.md): The type alias for referencing the `CompressorExtensionSettings` object.

# setSettingsString: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets the encoder settings based on the string value supplied.

## Declaration

```objectivec
- (void) setSettingsString:(NSString *) settings;
```

## Parameters

- `settings`: Updated values for encoder settings in UTF_8 XML format. If the string value is `NULL`, set it to the default values.

## See Also

### Configuring Extension Settings

- [audioEnabled](audioenabled.md): A Boolean value that indicates whether audio is enabled for the source media.
- [videoEnabled](videoenabled.md): A Boolean value that indicates whether video is enabled for the source media.
- [CompressorExtensionSettingsPtr](../compressorextensionsettingsptr.md): The type alias for referencing the `CompressorExtensionSettings` object.
