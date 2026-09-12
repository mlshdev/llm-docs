> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentfilter/ismicrophoneenabled](https://developer.apple.com/documentation/screencapturekit/sccontentfilter/ismicrophoneenabled)

# isMicrophoneEnabled (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
var isMicrophoneEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

Indicates whether the microphone is enabled via the picker.

Readonly - microphone enable state determined by user via system picker when showsMicrophoneControl is enabled in SCContentSharingPickerConfiguration.

# microphoneEnabled (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isMicrophoneEnabled) BOOL microphoneEnabled;
```

<a id="discussion"></a>

## Discussion

Indicates whether the microphone is enabled via the picker.

Readonly - microphone enable state determined by user via system picker when showsMicrophoneControl is enabled in SCContentSharingPickerConfiguration.
