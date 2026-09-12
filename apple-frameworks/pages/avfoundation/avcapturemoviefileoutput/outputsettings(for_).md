> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput/outputsettings(for:)](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/outputsettings(for:))

# outputSettings(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns the settings the output uses to encode media from the specified connection.

## Declaration

```swift
func outputSettings(for connection: AVCaptureConnection) -> [String : Any]
```

## Parameters

- `connection`: The connection delivering the media to encode.

<a id="return-value"></a>

## Return Value

A dictionary of output settings.

<a id="Discussion"></a>

## Discussion

If the returned value is an empty dictionary, the format of the media from the connection isn’t changed before writing to the file.

If you call [setOutputSettings(\_:for:)](setoutputsettings%28__for_%29.md) with a `nil` dictionary, this method returns a non-`nil` dictionary that reflects the settings used by the capture session’s [sessionPreset](../avcapturesession/sessionpreset.md) value.

## See Also

### Managing output settings

- [supportedOutputSettingsKeys(for:)](supportedoutputsettingskeys%28for_%29.md): Returns a list of supported keys to use in the output settings dictionary.
- [setOutputSettings(\_:for:)](setoutputsettings%28__for_%29.md): Sets the options the output uses to encode media from the given connection while recording.
- [availableVideoCodecTypes](availablevideocodectypes.md): The video codecs types the output supports for recording movie files.

# outputSettingsForConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns the settings the output uses to encode media from the specified connection.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) outputSettingsForConnection:(AVCaptureConnection *) connection;
```

## Parameters

- `connection`: The connection delivering the media to encode.

<a id="return-value"></a>

## Return Value

A dictionary of output settings.

<a id="Discussion"></a>

## Discussion

If the returned value is an empty dictionary, the format of the media from the connection isn’t changed before writing to the file.

If you call [setOutputSettings:forConnection:](setoutputsettings%28__for_%29.md) with a `nil` dictionary, this method returns a non-`nil` dictionary that reflects the settings used by the capture session’s [sessionPreset](../avcapturesession/sessionpreset.md) value.

## See Also

### Managing output settings

- [supportedOutputSettingsKeysForConnection:](supportedoutputsettingskeys%28for_%29.md): Returns a list of supported keys to use in the output settings dictionary.
- [setOutputSettings:forConnection:](setoutputsettings%28__for_%29.md): Sets the options the output uses to encode media from the given connection while recording.
- [availableVideoCodecTypes](availablevideocodectypes.md): The video codecs types the output supports for recording movie files.
