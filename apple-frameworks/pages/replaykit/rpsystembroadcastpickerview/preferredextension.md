> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpsystembroadcastpickerview/preferredextension](https://developer.apple.com/documentation/replaykit/rpsystembroadcastpickerview/preferredextension)

# preferredExtension (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A bundle identifier of a broadcast extension.

> Use ScreenCaptureKit SCContentSharingPicker instead

## Declaration

```swift
var preferredExtension: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to the bundle identifier of a broadcast extension to show only that broadcast provider in the broadcast picker. Set the property to `nil`, which is the default value, to show all broadcast providers available on the device.

## See Also

### Configuring the Broadcast Picker

- [showsMicrophoneButton](showsmicrophonebutton.md): Deprecated. A Boolean value that indicates whether the microphone button is visible in the broadcast picker.

# preferredExtension (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A bundle identifier of a broadcast extension.

> Use ScreenCaptureKit SCContentSharingPicker instead

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * preferredExtension;
```

<a id="Discussion"></a>

## Discussion

Set this property to the bundle identifier of a broadcast extension to show only that broadcast provider in the broadcast picker. Set the property to `nil`, which is the default value, to show all broadcast providers available on the device.

## See Also

### Configuring the Broadcast Picker

- [showsMicrophoneButton](showsmicrophonebutton.md): Deprecated. A Boolean value that indicates whether the microphone button is visible in the broadcast picker.
