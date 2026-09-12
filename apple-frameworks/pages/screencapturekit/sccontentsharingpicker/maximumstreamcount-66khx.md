> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpicker/maximumstreamcount-66khx](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/maximumstreamcount-66khx)

# maximumStreamCount

**Interface language:** Objective-C

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

The maximum number of streams the content capture picker allows.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSNumber * maximumStreamCount;
```

<a id="discussion"></a>

## Discussion

The default value is `1`.

## See Also

### Stream configuration

- [setConfiguration:forStream:](setconfiguration_forstream_.md): Sets the configuration for the content capture picker for a capture stream, providing allowed selection modes and content excluded from selection.
- [defaultConfiguration](defaultconfiguration-9v5sa.md): The default configuration to use for the content capture picker.
