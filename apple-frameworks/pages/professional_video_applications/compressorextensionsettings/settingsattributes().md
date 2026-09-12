> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionsettings/settingsattributes()](https://developer.apple.com/documentation/professional_video_applications/compressorextensionsettings/settingsattributes())

# settingsAttributes() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Returns a set of audio and video encoding attributes to display on the Compressor app interface.

## Declaration

```swift
func settingsAttributes() -> [AnyHashable : Any]!
```

<a id="return-value"></a>

## Return Value

A dictionary containing values for the keys defined in Encoder Attribute Keys.

<a id="discussion"></a>

## Discussion

The Compressor app calls this method to get the encoder setting attributes to render on its interface and for configuring the decoder object.

## See Also

### Getting Extension Settings and Details

- [settingsString()](settingsstring%28%29.md): Returns the current encoder settings string.
- [settingsDescription()](settingsdescription%28%29.md): Returns a description of the current encoder settings to display in the Compressor app interface.
- [encoderName()](encodername%28%29.md): Returns the encoder extension name to display in the Compressor app interface.

# settingsAttributes (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns a set of audio and video encoding attributes to display on the Compressor app interface.

## Declaration

```objectivec
- (NSDictionary *) settingsAttributes;
```

<a id="return-value"></a>

## Return Value

A dictionary containing values for the keys defined in Encoder Attribute Keys.

<a id="discussion"></a>

## Discussion

The Compressor app calls this method to get the encoder setting attributes to render on its interface and for configuring the decoder object.

## See Also

### Getting Extension Settings and Details

- [settingsString](settingsstring%28%29.md): Returns the current encoder settings string.
- [settingsDescription](settingsdescription%28%29.md): Returns a description of the current encoder settings to display in the Compressor app interface.
- [encoderName](encodername%28%29.md): Returns the encoder extension name to display in the Compressor app interface.
