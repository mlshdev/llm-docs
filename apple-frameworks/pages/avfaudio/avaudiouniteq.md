> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiouniteq](https://developer.apple.com/documentation/avfaudio/avaudiouniteq)

# AVAudioUnitEQ (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that implements a multiband equalizer.

## Declaration

```swift
class AVAudioUnitEQ
```

<a id="overview"></a>

## Overview

The [AVAudioUnitEQFilterParameters](avaudiouniteqfilterparameters.md) class encapsulates the filter parameters that the [bands](avaudiouniteq/bands.md) property array returns.

## Topics

### Creating an equalizer

- [init(numberOfBands:)](avaudiouniteq/init%28numberofbands_%29.md): Creates an audio unit equalizer object with the specified number of bands.

### Getting and setting the equalizer values

- [AVAudioUnitEQFilterParameters](avaudiouniteqfilterparameters.md): An object that encapsulates the parameters that the equalizer uses.
- [bands](avaudiouniteq/bands.md): An array of equalizer filter parameters.
- [globalGain](avaudiouniteq/globalgain.md): The overall gain adjustment that the audio unit applies to the signal, in decibels.

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
- [AVAudioUnitDistortion](avaudiounitdistortion.md): An object that implements a multistage distortion effect.
- [AVAudioUnitDelay](avaudiounitdelay.md): An object that implements a delay effect.
- [AVAudioUnitReverb](avaudiounitreverb.md): An object that implements a reverb effect.

# AVAudioUnitEQ (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that implements a multiband equalizer.

## Declaration

```objectivec
@interface AVAudioUnitEQ : AVAudioUnitEffect
```

<a id="overview"></a>

## Overview

The [AVAudioUnitEQFilterParameters](avaudiouniteqfilterparameters.md) class encapsulates the filter parameters that the [bands](avaudiouniteq/bands.md) property array returns.

## Topics

### Creating an equalizer

- [initWithNumberOfBands:](avaudiouniteq/init%28numberofbands_%29.md): Creates an audio unit equalizer object with the specified number of bands.

### Getting and setting the equalizer values

- [AVAudioUnitEQFilterParameters](avaudiouniteqfilterparameters.md): An object that encapsulates the parameters that the equalizer uses.
- [bands](avaudiouniteq/bands.md): An array of equalizer filter parameters.
- [globalGain](avaudiouniteq/globalgain.md): The overall gain adjustment that the audio unit applies to the signal, in decibels.

## Relationships

### Inherits From

- [AVAudioUnitEffect](avaudiouniteffect.md)

## See Also

### Audio effects

- [AVAudioUnitEffect](avaudiouniteffect.md): An object that processes audio in real time.
- [AVAudioUnitDistortion](avaudiounitdistortion.md): An object that implements a multistage distortion effect.
- [AVAudioUnitDelay](avaudiounitdelay.md): An object that implements a delay effect.
- [AVAudioUnitReverb](avaudiounitreverb.md): An object that implements a reverb effect.
