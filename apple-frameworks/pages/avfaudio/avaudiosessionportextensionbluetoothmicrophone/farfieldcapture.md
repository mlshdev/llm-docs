> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosessionportextensionbluetoothmicrophone/farfieldcapture

# farFieldCapture (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Describes whether this port supports far-field input capture.

## Declaration

```swift
var farFieldCapture: AVAudioSessionCapability { get }
```

## See Also

### Inspecting the port extension

- [highQualityRecording](highqualityrecording.md): Describes whether this port supports Bluetooth high-quality recording.

# farFieldCapture (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Describes whether this port supports far-field input capture.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) AVAudioSessionCapability * farFieldCapture;
```

## See Also

### Inspecting the port extension

- [highQualityRecording](highqualityrecording.md): Describes whether this port supports Bluetooth high-quality recording.
