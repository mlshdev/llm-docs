> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitreverb](https://developer.apple.com/documentation/avfaudio/avaudiounitreverb)

# AVAudioUnitReverb (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that implements a reverb effect.

## Declaration

```swift
class AVAudioUnitReverb
```

<a id="overview"></a>

## Overview

A reverb simulates the acoustic characteristics of a particular environment. Use the different presets to simulate a particular space and blend it in with the original signal using the [wetDryMix](avaudiounitreverb/wetdrymix.md) property.

## Topics

### Configure the reverb

- [loadFactoryPreset(\_:)](avaudiounitreverb/loadfactorypreset%28__%29.md): Configures the audio unit as a reverb preset.
- [AVAudioUnitReverbPreset](avaudiounitreverbpreset.md): Constants that represent preset reverbs.

### Getting and setting the reverb values

- [wetDryMix](avaudiounitreverb/wetdrymix.md): The blend of the wet and dry signals.

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
- [AVAudioUnitDistortion](avaudiounitdistortion.md): An object that implements a multistage distortion effect.
- [AVAudioUnitDelay](avaudiounitdelay.md): An object that implements a delay effect.

# AVAudioUnitReverb (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that implements a reverb effect.

## Declaration

```objectivec
@interface AVAudioUnitReverb : AVAudioUnitEffect
```

<a id="overview"></a>

## Overview

A reverb simulates the acoustic characteristics of a particular environment. Use the different presets to simulate a particular space and blend it in with the original signal using the [wetDryMix](avaudiounitreverb/wetdrymix.md) property.

## Topics

### Configure the reverb

- [loadFactoryPreset:](avaudiounitreverb/loadfactorypreset%28__%29.md): Configures the audio unit as a reverb preset.
- [AVAudioUnitReverbPreset](avaudiounitreverbpreset.md): Constants that represent preset reverbs.

### Getting and setting the reverb values

- [wetDryMix](avaudiounitreverb/wetdrymix.md): The blend of the wet and dry signals.

## Relationships

### Inherits From

- [AVAudioUnitEffect](avaudiouniteffect.md)

## See Also

### Audio effects

- [AVAudioUnitEffect](avaudiouniteffect.md): An object that processes audio in real time.
- [AVAudioUnitEQ](avaudiouniteq.md): An object that implements a multiband equalizer.
- [AVAudioUnitDistortion](avaudiounitdistortion.md): An object that implements a multistage distortion effect.
- [AVAudioUnitDelay](avaudiounitdelay.md): An object that implements a delay effect.
