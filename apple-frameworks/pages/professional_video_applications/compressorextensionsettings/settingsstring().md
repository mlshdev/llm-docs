> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionsettings/settingsstring()](https://developer.apple.com/documentation/professional_video_applications/compressorextensionsettings/settingsstring())

# settingsString() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Returns the current encoder settings string.

## Declaration

```swift
func settingsString() -> String!
```

<a id="return-value"></a>

## Return Value

A UTF-8 XML escaped string with the current encoder settings.

<a id="discussion"></a>

## Discussion

When the current encoder settings are updated, the Compressor app calls this method to receive and store the updated settings on its end to keep the settings persistent across extension sessions.

## See Also

### Getting Extension Settings and Details

- [settingsAttributes()](settingsattributes%28%29.md): Returns a set of audio and video encoding attributes to display on the Compressor app interface.
- [settingsDescription()](settingsdescription%28%29.md): Returns a description of the current encoder settings to display in the Compressor app interface.
- [encoderName()](encodername%28%29.md): Returns the encoder extension name to display in the Compressor app interface.

# settingsString (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the current encoder settings string.

## Declaration

```objectivec
- (NSString *) settingsString;
```

<a id="return-value"></a>

## Return Value

A UTF-8 XML escaped string with the current encoder settings.

<a id="discussion"></a>

## Discussion

When the current encoder settings are updated, the Compressor app calls this method to receive and store the updated settings on its end to keep the settings persistent across extension sessions.

## See Also

### Getting Extension Settings and Details

- [settingsAttributes](settingsattributes%28%29.md): Returns a set of audio and video encoding attributes to display on the Compressor app interface.
- [settingsDescription](settingsdescription%28%29.md): Returns a description of the current encoder settings to display in the Compressor app interface.
- [encoderName](encodername%28%29.md): Returns the encoder extension name to display in the Compressor app interface.
