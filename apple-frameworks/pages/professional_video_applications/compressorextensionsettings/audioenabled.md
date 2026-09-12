> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionsettings/audioenabled](https://developer.apple.com/documentation/professional_video_applications/compressorextensionsettings/audioenabled)

# audioEnabled (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Property  
**Availability:** ProVideo Encoder Extensions 1.0+

A Boolean value that indicates whether audio is enabled for the source media.

## Declaration

```swift
var audioEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The Compressor app sets this value based on the source media attributes. Use this value to specify the [kCEAudioEnabledKey](../kceaudioenabledkey.md).

## See Also

### Configuring Extension Settings

- [setSettingsString(\_:)](setsettingsstring%28__%29.md): Sets the encoder settings based on the string value supplied.
- [videoEnabled](videoenabled.md): A Boolean value that indicates whether video is enabled for the source media.
- [CompressorExtensionSettingsPtr](../compressorextensionsettingsptr.md): The type alias for referencing the `CompressorExtensionSettings` object.

# audioEnabled (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Property

A Boolean value that indicates whether audio is enabled for the source media.

## Declaration

```objectivec
@property BOOL audioEnabled;
```

<a id="discussion"></a>

## Discussion

The Compressor app sets this value based on the source media attributes. Use this value to specify the [kCEAudioEnabledKey](../kceaudioenabledkey.md).

## See Also

### Configuring Extension Settings

- [setSettingsString:](setsettingsstring%28__%29.md): Sets the encoder settings based on the string value supplied.
- [videoEnabled](videoenabled.md): A Boolean value that indicates whether video is enabled for the source media.
- [CompressorExtensionSettingsPtr](../compressorextensionsettingsptr.md): The type alias for referencing the `CompressorExtensionSettings` object.
