> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitdistortion](https://developer.apple.com/documentation/avfaudio/avaudiounitdistortion)

# AVAudioUnitDistortion (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that implements a multistage distortion effect.

## Declaration

```swift
class AVAudioUnitDistortion
```

## Topics

### Configuring the distortion

- [loadFactoryPreset(\_:)](avaudiounitdistortion/loadfactorypreset%28__%29.md): Configures the audio distortion unit by loading a distortion preset.
- [AVAudioUnitDistortionPreset](avaudiounitdistortionpreset.md): Constants that represent preset audio distortions.

### Getting and setting the distortion values

- [preGain](avaudiounitdistortion/pregain.md): The gain that the audio unit applies to the signal before distortion, in decibels.
- [wetDryMix](avaudiounitdistortion/wetdrymix.md): The blend of the distorted and dry signals.

## Relationships

### Inherits From

- [AVAudioUnitEffect](avaudiouniteffect.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Audio effects

- [AVAudioUnitEffect](avaudiouniteffect.md): An object that processes audio in real time.
- [AVAudioUnitEQ](avaudiouniteq.md): An object that implements a multiband equalizer.
- [AVAudioUnitDelay](avaudiounitdelay.md): An object that implements a delay effect.
- [AVAudioUnitReverb](avaudiounitreverb.md): An object that implements a reverb effect.

# AVAudioUnitDistortion (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that implements a multistage distortion effect.

## Declaration

```objectivec
@interface AVAudioUnitDistortion : AVAudioUnitEffect
```

## Topics

### Configuring the distortion

- [loadFactoryPreset:](avaudiounitdistortion/loadfactorypreset%28__%29.md): Configures the audio distortion unit by loading a distortion preset.
- [AVAudioUnitDistortionPreset](avaudiounitdistortionpreset.md): Constants that represent preset audio distortions.

### Getting and setting the distortion values

- [preGain](avaudiounitdistortion/pregain.md): The gain that the audio unit applies to the signal before distortion, in decibels.
- [wetDryMix](avaudiounitdistortion/wetdrymix.md): The blend of the distorted and dry signals.

## Relationships

### Inherits From

- [AVAudioUnitEffect](avaudiouniteffect.md)

## See Also

### Audio effects

- [AVAudioUnitEffect](avaudiouniteffect.md): An object that processes audio in real time.
- [AVAudioUnitEQ](avaudiouniteq.md): An object that implements a multiband equalizer.
- [AVAudioUnitDelay](avaudiounitdelay.md): An object that implements a delay effect.
- [AVAudioUnitReverb](avaudiounitreverb.md): An object that implements a reverb effect.
