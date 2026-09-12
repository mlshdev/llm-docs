> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitdelay](https://developer.apple.com/documentation/avfaudio/avaudiounitdelay)

# AVAudioUnitDelay (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that implements a delay effect.

## Declaration

```swift
class AVAudioUnitDelay
```

<a id="overview"></a>

## Overview

A delay unit delays the input signal by the specified time interval and then blends it with the input signal. You can also control the amount of high-frequency roll-off to simulate the effect of a tape delay.

## Topics

### Getting and setting the delay values

- [delayTime](avaudiounitdelay/delaytime.md): The time for the input signal to reach the output.
- [feedback](avaudiounitdelay/feedback.md): The amount of the output signal that feeds back into the delay line.
- [lowPassCutoff](avaudiounitdelay/lowpasscutoff.md): The cutoff frequency above which high frequency content rolls off, in hertz.
- [wetDryMix](avaudiounitdelay/wetdrymix.md): The blend of the wet and dry signals.

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
- [AVAudioUnitReverb](avaudiounitreverb.md): An object that implements a reverb effect.

# AVAudioUnitDelay (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that implements a delay effect.

## Declaration

```objectivec
@interface AVAudioUnitDelay : AVAudioUnitEffect
```

<a id="overview"></a>

## Overview

A delay unit delays the input signal by the specified time interval and then blends it with the input signal. You can also control the amount of high-frequency roll-off to simulate the effect of a tape delay.

## Topics

### Getting and setting the delay values

- [delayTime](avaudiounitdelay/delaytime.md): The time for the input signal to reach the output.
- [feedback](avaudiounitdelay/feedback.md): The amount of the output signal that feeds back into the delay line.
- [lowPassCutoff](avaudiounitdelay/lowpasscutoff.md): The cutoff frequency above which high frequency content rolls off, in hertz.
- [wetDryMix](avaudiounitdelay/wetdrymix.md): The blend of the wet and dry signals.

## Relationships

### Inherits From

- [AVAudioUnitEffect](avaudiouniteffect.md)

## See Also

### Audio effects

- [AVAudioUnitEffect](avaudiouniteffect.md): An object that processes audio in real time.
- [AVAudioUnitEQ](avaudiouniteq.md): An object that implements a multiband equalizer.
- [AVAudioUnitDistortion](avaudiounitdistortion.md): An object that implements a multistage distortion effect.
- [AVAudioUnitReverb](avaudiounitreverb.md): An object that implements a reverb effect.
