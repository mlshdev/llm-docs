> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionsettingskey/usedropframetimecode](https://developer.apple.com/documentation/avfoundation/avcaptionsettingskey/usedropframetimecode)

# useDropFrameTimeCode (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A key that identifies whether the system uses drop frame time code.

## Declaration

```swift
static let useDropFrameTimeCode: AVCaptionSettingsKey
```

<a id="Discussion"></a>

## Discussion

Some formats, such as SCC, use time code notation to indicate the timing of a caption. Use the property to specify whether the system uses the drop frame time code or non-drop frame time code.

The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Keys

- [mediaType](mediatype.md): A key that identifies the output media type of a caption conversion operation.
- [mediaSubType](mediasubtype.md): A key that identifies the output media subtype of a caption conversion operation.
- [timeCodeFrameDuration](timecodeframeduration.md): A key that identifies the frame duration that the system uses for the time code.

# AVCaptionUseDropFrameTimeCodeKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A key that identifies whether the system uses drop frame time code.

## Declaration

```objectivec
extern AVCaptionSettingsKey const AVCaptionUseDropFrameTimeCodeKey;
```

<a id="Discussion"></a>

## Discussion

Some formats, such as SCC, use time code notation to indicate the timing of a caption. Use the property to specify whether the system uses the drop frame time code or non-drop frame time code.

The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Keys

- [AVCaptionMediaTypeKey](mediatype.md): A key that identifies the output media type of a caption conversion operation.
- [AVCaptionMediaSubTypeKey](mediasubtype.md): A key that identifies the output media subtype of a caption conversion operation.
- [AVCaptionTimeCodeFrameDurationKey](timecodeframeduration.md): A key that identifies the frame duration that the system uses for the time code.
