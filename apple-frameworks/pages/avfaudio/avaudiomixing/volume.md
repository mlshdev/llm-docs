> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiomixing/volume](https://developer.apple.com/documentation/avfaudio/avaudiomixing/volume)

# volume (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The bus’s input volume.

## Declaration

```swift
var volume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`, and the range of valid values is `0.0` to `1.0`. Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) and the [AVAudioMixerNode](../avaudiomixernode.md) implement this property.

# volume (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The bus’s input volume.

## Declaration

```objectivec
@property (nonatomic) float volume;
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`, and the range of valid values is `0.0` to `1.0`. Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) and the [AVAudioMixerNode](../avaudiomixernode.md) implement this property.
