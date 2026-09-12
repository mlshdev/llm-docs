> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput/supportedoutputsettingskeys(for:)](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/supportedoutputsettingskeys(for:))

# supportedOutputSettingsKeys(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Returns a list of supported keys to use in the output settings dictionary.

## Declaration

```swift
func supportedOutputSettingsKeys(for connection: AVCaptureConnection) -> [String]
```

## Parameters

- `connection`: The connection that delivers the media to encode.

<a id="return-value"></a>

## Return Value

An array of keys that can be set in the [setOutputSettings(\_:for:)](setoutputsettings%28__for_%29.md)method.

## See Also

### Managing output settings

- [outputSettings(for:)](outputsettings%28for_%29.md): Returns the settings the output uses to encode media from the specified connection.
- [setOutputSettings(\_:for:)](setoutputsettings%28__for_%29.md): Sets the options the output uses to encode media from the given connection while recording.
- [availableVideoCodecTypes](availablevideocodectypes.md): The video codecs types the output supports for recording movie files.

# supportedOutputSettingsKeysForConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Returns a list of supported keys to use in the output settings dictionary.

## Declaration

```objectivec
- (NSArray<NSString *> *) supportedOutputSettingsKeysForConnection:(AVCaptureConnection *) connection;
```

## Parameters

- `connection`: The connection that delivers the media to encode.

<a id="return-value"></a>

## Return Value

An array of keys that can be set in the [setOutputSettings:forConnection:](setoutputsettings%28__for_%29.md)method.

## See Also

### Managing output settings

- [outputSettingsForConnection:](outputsettings%28for_%29.md): Returns the settings the output uses to encode media from the specified connection.
- [setOutputSettings:forConnection:](setoutputsettings%28__for_%29.md): Sets the options the output uses to encode media from the given connection while recording.
- [availableVideoCodecTypes](availablevideocodectypes.md): The video codecs types the output supports for recording movie files.
