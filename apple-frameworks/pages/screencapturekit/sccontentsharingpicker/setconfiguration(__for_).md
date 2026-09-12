> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpicker/setconfiguration(_:for:)](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/setconfiguration(_:for:))

# setConfiguration(\_:for:)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the configuration for the content capture picker for a capture stream, providing allowed selection modes and content excluded from selection.

## Declaration

```swift
func setConfiguration(_ configuration: SCContentSharingPickerConfiguration?, for stream: SCStream)
```

## Parameters

- `configuration`: The configuration to set for the given capture stream. When this value is `nil`, changes the stream configuration to use [defaultConfiguration](defaultconfiguration-9v5sa.md).
- `stream`: The capture stream to set a configuration for. When this value is `nil`, applies to all currently active streams.

## See Also

### Stream configuration

- [configuration](configuration.md): Sets the configuration for the content capture picker for all streams, providing allowed selection modes and content excluded from selection.
- [defaultConfiguration](defaultconfiguration-94q2b.md): The default configuration to use for the content capture picker.
- [maximumStreamCount](maximumstreamcount-2kuaa.md): The maximum number of streams the content capture picker allows.
