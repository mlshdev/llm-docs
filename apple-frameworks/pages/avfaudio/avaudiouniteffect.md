> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiouniteffect](https://developer.apple.com/documentation/avfaudio/avaudiouniteffect)

# AVAudioUnitEffect (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that processes audio in real time.

## Declaration

```swift
class AVAudioUnitEffect
```

<a id="overview"></a>

## Overview

This processing uses [AudioUnit](../audiotoolbox/audiounit.md) of type effect, music effect, panner, remote effect, or remote music effect. These effects run in real time and process some number of audio input samples to produce several audio output samples. A delay unit is an example of an effect unit.

## Topics

### Creating an audio effect

- [init(audioComponentDescription:)](avaudiouniteffect/init%28audiocomponentdescription_%29.md): Creates an audio unit effect object with the specified description.

### Getting the bypass state

- [bypass](avaudiouniteffect/bypass.md): The bypass state of the audio unit.

## Relationships

### Inherits From

- [AVAudioUnit](avaudiounit.md)

### Inherited By

- [AVAudioUnitDelay](avaudiounitdelay.md)
- [AVAudioUnitDistortion](avaudiounitdistortion.md)
- [AVAudioUnitEQ](avaudiouniteq.md)
- [AVAudioUnitReverb](avaudiounitreverb.md)

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

- [AVAudioUnitEQ](avaudiouniteq.md): An object that implements a multiband equalizer.
- [AVAudioUnitDistortion](avaudiounitdistortion.md): An object that implements a multistage distortion effect.
- [AVAudioUnitDelay](avaudiounitdelay.md): An object that implements a delay effect.
- [AVAudioUnitReverb](avaudiounitreverb.md): An object that implements a reverb effect.

# AVAudioUnitEffect (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that processes audio in real time.

## Declaration

```objectivec
@interface AVAudioUnitEffect : AVAudioUnit
```

<a id="overview"></a>

## Overview

This processing uses [AudioUnit](../audiotoolbox/audiounit.md) of type effect, music effect, panner, remote effect, or remote music effect. These effects run in real time and process some number of audio input samples to produce several audio output samples. A delay unit is an example of an effect unit.

## Topics

### Creating an audio effect

- [initWithAudioComponentDescription:](avaudiouniteffect/init%28audiocomponentdescription_%29.md): Creates an audio unit effect object with the specified description.

### Getting the bypass state

- [bypass](avaudiouniteffect/bypass.md): The bypass state of the audio unit.

## Relationships

### Inherits From

- [AVAudioUnit](avaudiounit.md)

### Inherited By

- [AVAudioUnitDelay](avaudiounitdelay.md)
- [AVAudioUnitDistortion](avaudiounitdistortion.md)
- [AVAudioUnitEQ](avaudiouniteq.md)
- [AVAudioUnitReverb](avaudiounitreverb.md)

## See Also

### Audio effects

- [AVAudioUnitEQ](avaudiouniteq.md): An object that implements a multiband equalizer.
- [AVAudioUnitDistortion](avaudiounitdistortion.md): An object that implements a multistage distortion effect.
- [AVAudioUnitDelay](avaudiounitdelay.md): An object that implements a delay effect.
- [AVAudioUnitReverb](avaudiounitreverb.md): An object that implements a reverb effect.
