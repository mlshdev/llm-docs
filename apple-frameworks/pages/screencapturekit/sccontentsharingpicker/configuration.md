> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpicker/configuration](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/configuration)

# configuration

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the configuration for the content capture picker for all streams, providing allowed selection modes and content excluded from selection.

## Declaration

```swift
var configuration: SCContentSharingPickerConfiguration? { get set }
```

## See Also

### Stream configuration

- [setConfiguration(\_:for:)](setconfiguration%28__for_%29.md): Sets the configuration for the content capture picker for a capture stream, providing allowed selection modes and content excluded from selection.
- [defaultConfiguration](defaultconfiguration-94q2b.md): The default configuration to use for the content capture picker.
- [maximumStreamCount](maximumstreamcount-2kuaa.md): The maximum number of streams the content capture picker allows.
