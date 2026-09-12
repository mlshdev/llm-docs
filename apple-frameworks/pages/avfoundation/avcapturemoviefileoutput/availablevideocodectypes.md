> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput/availablevideocodectypes](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/availablevideocodectypes)

# availableVideoCodecTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The video codecs types the output supports for recording movie files.

## Declaration

```swift
var availableVideoCodecTypes: [AVVideoCodecType] { get }
```

<a id="Discussion"></a>

## Discussion

The first codec in this list is the default for recording movie files. To record using a different codec, call the [setOutputSettings(\_:for:)](setoutputsettings%28__for_%29.md) method, passing a video settings dictionary with a value for [AVVideoCodecKey](../avvideocodeckey.md) that matches one of the other values in this list.

## See Also

### Managing output settings

- [supportedOutputSettingsKeys(for:)](supportedoutputsettingskeys%28for_%29.md): Returns a list of supported keys to use in the output settings dictionary.
- [outputSettings(for:)](outputsettings%28for_%29.md): Returns the settings the output uses to encode media from the specified connection.
- [setOutputSettings(\_:for:)](setoutputsettings%28__for_%29.md): Sets the options the output uses to encode media from the given connection while recording.

# availableVideoCodecTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The video codecs types the output supports for recording movie files.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableVideoCodecTypes;
```

<a id="Discussion"></a>

## Discussion

The first codec in this list is the default for recording movie files. To record using a different codec, call the [setOutputSettings:forConnection:](setoutputsettings%28__for_%29.md) method, passing a video settings dictionary with a value for [AVVideoCodecKey](../avvideocodeckey.md) that matches one of the other values in this list.

## See Also

### Managing output settings

- [supportedOutputSettingsKeysForConnection:](supportedoutputsettingskeys%28for_%29.md): Returns a list of supported keys to use in the output settings dictionary.
- [outputSettingsForConnection:](outputsettings%28for_%29.md): Returns the settings the output uses to encode media from the specified connection.
- [setOutputSettings:forConnection:](setoutputsettings%28__for_%29.md): Sets the options the output uses to encode media from the given connection while recording.
