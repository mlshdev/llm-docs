> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionsettingskey/timecodeframeduration](https://developer.apple.com/documentation/avfoundation/avcaptionsettingskey/timecodeframeduration)

# timeCodeFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A key that identifies the frame duration that the system uses for the time code.

## Declaration

```swift
static let timeCodeFrameDuration: AVCaptionSettingsKey
```

<a id="Discussion"></a>

## Discussion

Some formats, such as TTML, use time code notation to indicate the timing of a caption. Use this key to specify the frame rate of the time code.

## See Also

### Keys

- [mediaType](mediatype.md): A key that identifies the output media type of a caption conversion operation.
- [mediaSubType](mediasubtype.md): A key that identifies the output media subtype of a caption conversion operation.
- [useDropFrameTimeCode](usedropframetimecode.md): A key that identifies whether the system uses drop frame time code.

# AVCaptionTimeCodeFrameDurationKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A key that identifies the frame duration that the system uses for the time code.

## Declaration

```objectivec
extern AVCaptionSettingsKey const AVCaptionTimeCodeFrameDurationKey;
```

<a id="Discussion"></a>

## Discussion

Some formats, such as TTML, use time code notation to indicate the timing of a caption. Use this key to specify the frame rate of the time code.

## See Also

### Keys

- [AVCaptionMediaTypeKey](mediatype.md): A key that identifies the output media type of a caption conversion operation.
- [AVCaptionMediaSubTypeKey](mediasubtype.md): A key that identifies the output media subtype of a caption conversion operation.
- [AVCaptionUseDropFrameTimeCodeKey](usedropframetimecode.md): A key that identifies whether the system uses drop frame time code.
