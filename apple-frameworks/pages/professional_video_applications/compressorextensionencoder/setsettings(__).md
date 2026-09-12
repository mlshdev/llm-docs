> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoder/setsettings(_:)](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoder/setsettings(_:))

# setSettings(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Sets the current encoding settings based on the given setting values.

## Declaration

```swift
func setSettings(_ settings: CompressorExtensionSettingsPtr!)
```

## Parameters

- `settings`: A pointer to the [CompressorExtensionSettings](../compressorextensionsettings.md) object.

<a id="discussion"></a>

## Discussion

During an encoding process, the Compressor app provides the extension with the current encoder settings. If the `settings` object contains an empty encoder setting string, use default values for the encoder settings.

## See Also

### Setting Encoding Values

- [setAnnotations(\_:)](setannotations%28__%29.md): Adds annotations to an encoded media file.
- [setChapters(\_:)](setchapters%28__%29.md): Sets chapter markers of an encoded file from the contents of the input dictionary.

# setSettings: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets the current encoding settings based on the given setting values.

## Declaration

```objectivec
- (void) setSettings:(CompressorExtensionSettingsPtr) settings;
```

## Parameters

- `settings`: A pointer to the [CompressorExtensionSettings](../compressorextensionsettings.md) object.

<a id="discussion"></a>

## Discussion

During an encoding process, the Compressor app provides the extension with the current encoder settings. If the `settings` object contains an empty encoder setting string, use default values for the encoder settings.

## See Also

### Setting Encoding Values

- [setAnnotations:](setannotations%28__%29.md): Adds annotations to an encoded media file.
- [setChapters:](setchapters%28__%29.md): Sets chapter markers of an encoded file from the contents of the input dictionary.
