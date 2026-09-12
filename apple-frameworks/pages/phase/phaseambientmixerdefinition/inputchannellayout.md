> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseambientmixerdefinition/inputchannellayout](https://developer.apple.com/documentation/phase/phaseambientmixerdefinition/inputchannellayout)

# inputChannelLayout (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The channel layout of input audio.

## Declaration

```swift
var inputChannelLayout: AVAudioChannelLayout { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the `channelLayout` initializer argument. See [init(channelLayout:orientation:)](init%28channellayout_orientation_%29.md).

## See Also

### Inspecting the Mixer

- [orientation](orientation.md): A quaternion that describes the orientation of the speaker layout relative to the scene origin.

# inputChannelLayout (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The channel layout of input audio.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) AVAudioChannelLayout * inputChannelLayout;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the `channelLayout` initializer argument. See [initWithChannelLayout:orientation:](init%28channellayout_orientation_%29.md).

## See Also

### Inspecting the Mixer

- [orientation](orientation.md): A quaternion that describes the orientation of the speaker layout relative to the scene origin.
