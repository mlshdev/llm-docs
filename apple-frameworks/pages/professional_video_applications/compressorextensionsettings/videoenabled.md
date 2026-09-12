> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionsettings/videoenabled](https://developer.apple.com/documentation/professional_video_applications/compressorextensionsettings/videoenabled)

# videoEnabled (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Property  
**Availability:** ProVideo Encoder Extensions 1.0+

A Boolean value that indicates whether video is enabled for the source media.

## Declaration

```swift
var videoEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The Compressor app sets this value based on the source media attributes. Use this value to specify the [kCEVideoEnabledKey](../kcevideoenabledkey.md).

## See Also

### Configuring Extension Settings

- [setSettingsString(\_:)](setsettingsstring%28__%29.md): Sets the encoder settings based on the string value supplied.
- [audioEnabled](audioenabled.md): A Boolean value that indicates whether audio is enabled for the source media.
- [CompressorExtensionSettingsPtr](../compressorextensionsettingsptr.md): The type alias for referencing the `CompressorExtensionSettings` object.

# videoEnabled (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Property

A Boolean value that indicates whether video is enabled for the source media.

## Declaration

```objectivec
@property BOOL videoEnabled;
```

<a id="discussion"></a>

## Discussion

The Compressor app sets this value based on the source media attributes. Use this value to specify the [kCEVideoEnabledKey](../kcevideoenabledkey.md).

## See Also

### Configuring Extension Settings

- [setSettingsString:](setsettingsstring%28__%29.md): Sets the encoder settings based on the string value supplied.
- [audioEnabled](audioenabled.md): A Boolean value that indicates whether audio is enabled for the source media.
- [CompressorExtensionSettingsPtr](../compressorextensionsettingsptr.md): The type alias for referencing the `CompressorExtensionSettings` object.
