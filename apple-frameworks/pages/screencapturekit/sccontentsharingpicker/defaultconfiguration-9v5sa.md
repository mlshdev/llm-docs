> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpicker/defaultconfiguration-9v5sa](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/defaultconfiguration-9v5sa)

# defaultConfiguration

**Interface language:** Objective-C

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

The default configuration to use for the content capture picker.

## Declaration

```objectivec
@property (nonatomic, copy) SCContentSharingPickerConfiguration * defaultConfiguration;
```

## See Also

### Stream configuration

- [setConfiguration:forStream:](setconfiguration_forstream_.md): Sets the configuration for the content capture picker for a capture stream, providing allowed selection modes and content excluded from selection.
- [maximumStreamCount](maximumstreamcount-66khx.md): The maximum number of streams the content capture picker allows.
