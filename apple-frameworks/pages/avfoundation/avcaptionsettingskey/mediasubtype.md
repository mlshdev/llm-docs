> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionsettingskey/mediasubtype](https://developer.apple.com/documentation/avfoundation/avcaptionsettingskey/mediasubtype)

# mediaSubType (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A key that identifies the output media subtype of a caption conversion operation.

## Declaration

```swift
static let mediaSubType: AVCaptionSettingsKey
```

<a id="Discussion"></a>

## Discussion

This key supports numeric and string forms of media subtypes for caption conversions.

## See Also

### Keys

- [mediaType](mediatype.md): A key that identifies the output media type of a caption conversion operation.
- [timeCodeFrameDuration](timecodeframeduration.md): A key that identifies the frame duration that the system uses for the time code.
- [useDropFrameTimeCode](usedropframetimecode.md): A key that identifies whether the system uses drop frame time code.

# AVCaptionMediaSubTypeKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A key that identifies the output media subtype of a caption conversion operation.

## Declaration

```objectivec
extern AVCaptionSettingsKey const AVCaptionMediaSubTypeKey;
```

<a id="Discussion"></a>

## Discussion

This key supports numeric and string forms of media subtypes for caption conversions.

## See Also

### Keys

- [AVCaptionMediaTypeKey](mediatype.md): A key that identifies the output media type of a caption conversion operation.
- [AVCaptionTimeCodeFrameDurationKey](timecodeframeduration.md): A key that identifies the frame duration that the system uses for the time code.
- [AVCaptionUseDropFrameTimeCodeKey](usedropframetimecode.md): A key that identifies whether the system uses drop frame time code.
