> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput/setoutputsettings(_:for:)](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/setoutputsettings(_:for:))

# setOutputSettings(\_:for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Sets the options the output uses to encode media from the given connection while recording.

## Declaration

```swift
func setOutputSettings(_ outputSettings: [String : Any]?, for connection: AVCaptureConnection)
```

## Parameters

- `outputSettings`: A dictionary of output settings. Pass an empty dictionary to specify that the format of the media from the connection shouldn’t change before writing to the file. Pass `nil` to specify that the session preset determines output format.
- `connection`: The connection delivering the media to encode.

<a id="Discussion"></a>

## Discussion

For details on output settings, see [Video settings](../video-settings.md) for video connections and [Audio settings](../audio-settings.md) for audio connections.

On iOS, your output settings dictionary may only contain keys listed returned from the [supportedOutputSettingsKeys(for:)](supportedoutputsettingskeys%28for_%29.md) method. If you specify any other key, the system throws an invalid argument exception. Additionally, the value you specify for [AVVideoCodecKey](../avvideocodeckey.md) should be present in the [availableVideoCodecTypes](availablevideocodectypes.md) array. If you specify [AVVideoCompressionPropertiesKey](../avvideocompressionpropertieskey.md), you must also specify a valid value for [AVVideoCodecKey](../avvideocodeckey.md).

On iOS, the [outputSettings(for:)](outputsettings%28for_%29.md) method always provides a fully populated dictionary. If you call [outputSettings(for:)](outputsettings%28for_%29.md) with the intent of overriding a few of the values, you must exclude keys that aren’t supported before calling [setOutputSettings(\_:for:)](setoutputsettings%28__for_%29.md). When providing an [AVVideoCompressionPropertiesKey](../avvideocompressionpropertieskey.md) sub dictionary, you may specify a sparse dictionary. A movie file output object always fills in missing keys with default values for the current capture session configuration.

## See Also

### Managing output settings

- [supportedOutputSettingsKeys(for:)](supportedoutputsettingskeys%28for_%29.md): Returns a list of supported keys to use in the output settings dictionary.
- [outputSettings(for:)](outputsettings%28for_%29.md): Returns the settings the output uses to encode media from the specified connection.
- [availableVideoCodecTypes](availablevideocodectypes.md): The video codecs types the output supports for recording movie files.

# setOutputSettings:forConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Sets the options the output uses to encode media from the given connection while recording.

## Declaration

```objectivec
- (void) setOutputSettings:(NSDictionary<NSString *,id> *) outputSettings forConnection:(AVCaptureConnection *) connection;
```

## Parameters

- `outputSettings`: A dictionary of output settings. Pass an empty dictionary to specify that the format of the media from the connection shouldn’t change before writing to the file. Pass `nil` to specify that the session preset determines output format.
- `connection`: The connection delivering the media to encode.

<a id="Discussion"></a>

## Discussion

For details on output settings, see [Video settings](../video-settings.md) for video connections and [Audio settings](../audio-settings.md) for audio connections.

On iOS, your output settings dictionary may only contain keys listed returned from the [supportedOutputSettingsKeysForConnection:](supportedoutputsettingskeys%28for_%29.md) method. If you specify any other key, the system throws an invalid argument exception. Additionally, the value you specify for [AVVideoCodecKey](../avvideocodeckey.md) should be present in the [availableVideoCodecTypes](availablevideocodectypes.md) array. If you specify [AVVideoCompressionPropertiesKey](../avvideocompressionpropertieskey.md), you must also specify a valid value for [AVVideoCodecKey](../avvideocodeckey.md).

On iOS, the [outputSettingsForConnection:](outputsettings%28for_%29.md) method always provides a fully populated dictionary. If you call [outputSettingsForConnection:](outputsettings%28for_%29.md) with the intent of overriding a few of the values, you must exclude keys that aren’t supported before calling [setOutputSettings:forConnection:](setoutputsettings%28__for_%29.md). When providing an [AVVideoCompressionPropertiesKey](../avvideocompressionpropertieskey.md) sub dictionary, you may specify a sparse dictionary. A movie file output object always fills in missing keys with default values for the current capture session configuration.

## See Also

### Managing output settings

- [supportedOutputSettingsKeysForConnection:](supportedoutputsettingskeys%28for_%29.md): Returns a list of supported keys to use in the output settings dictionary.
- [outputSettingsForConnection:](outputsettings%28for_%29.md): Returns the settings the output uses to encode media from the specified connection.
- [availableVideoCodecTypes](availablevideocodectypes.md): The video codecs types the output supports for recording movie files.
