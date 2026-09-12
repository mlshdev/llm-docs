> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpicker/maximumstreamcount-2kuaa](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker/maximumstreamcount-2kuaa)

# maximumStreamCount

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

The maximum number of streams the content capture picker allows.

## Declaration

```swift
var maximumStreamCount: Int? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `1`.

## See Also

### Stream configuration

- [setConfiguration(\_:for:)](setconfiguration%28__for_%29.md): Sets the configuration for the content capture picker for a capture stream, providing allowed selection modes and content excluded from selection.
- [configuration](configuration.md): Sets the configuration for the content capture picker for all streams, providing allowed selection modes and content excluded from selection.
- [defaultConfiguration](defaultconfiguration-94q2b.md): The default configuration to use for the content capture picker.
