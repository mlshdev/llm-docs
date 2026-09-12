> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionportextensionbluetoothmicrophone/highqualityrecording](https://developer.apple.com/documentation/avfaudio/avaudiosessionportextensionbluetoothmicrophone/highqualityrecording)

# highQualityRecording (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Describes whether this port supports Bluetooth high-quality recording.

## Declaration

```swift
var highQualityRecording: AVAudioSessionCapability { get }
```

<a id="discussion"></a>

## Discussion

Please see [bluetoothHighQualityRecording](../avaudiosession/categoryoptions-swift.struct/bluetoothhighqualityrecording.md) for details.

## See Also

### Inspecting the port extension

- [farFieldCapture](farfieldcapture.md): Describes whether this port supports far-field input capture.

# highQualityRecording (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Describes whether this port supports Bluetooth high-quality recording.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) AVAudioSessionCapability * highQualityRecording;
```

<a id="discussion"></a>

## Discussion

Please see [AVAudioSessionCategoryOptionBluetoothHighQualityRecording](../avaudiosession/categoryoptions-swift.struct/bluetoothhighqualityrecording.md) for details.

## See Also

### Inspecting the port extension

- [farFieldCapture](farfieldcapture.md): Describes whether this port supports far-field input capture.
