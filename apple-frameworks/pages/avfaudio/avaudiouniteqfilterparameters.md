> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiouniteqfilterparameters](https://developer.apple.com/documentation/avfaudio/avaudiouniteqfilterparameters)

# AVAudioUnitEQFilterParameters (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that encapsulates the parameters that the equalizer uses.

## Declaration

```swift
class AVAudioUnitEQFilterParameters
```

<a id="overview"></a>

## Overview

> **Note**

>  Don’t create an instance of the `AVAudioUnitEQFilterParameters` class directly. Use the array that returns from the [bands](avaudiouniteq/bands.md) property of [AVAudioUnitEQ](avaudiouniteq.md).

## Topics

### Getting and Setting Equalizer Filter Parameters

- [bandwidth](avaudiouniteqfilterparameters/bandwidth.md): The bandwidth of the equalizer filter, in octaves.
- [bypass](avaudiouniteqfilterparameters/bypass.md): The bypass state of the equalizer filter band.
- [filterType](avaudiouniteqfilterparameters/filtertype.md): The equalizer filter type.
- [frequency](avaudiouniteqfilterparameters/frequency.md): The frequency of the equalizer filter, in hertz.
- [gain](avaudiouniteqfilterparameters/gain.md): The gain of the equalizer filter, in decibels.

### Constants

- [AVAudioUnitEQFilterType](avaudiouniteqfiltertype.md): Filter types available to use with the filter type property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Getting and setting the equalizer values

- [bands](avaudiouniteq/bands.md): An array of equalizer filter parameters.
- [globalGain](avaudiouniteq/globalgain.md): The overall gain adjustment that the audio unit applies to the signal, in decibels.

# AVAudioUnitEQFilterParameters (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that encapsulates the parameters that the equalizer uses.

## Declaration

```objectivec
@interface AVAudioUnitEQFilterParameters : NSObject
```

<a id="overview"></a>

## Overview

> **Note**

>  Don’t create an instance of the `AVAudioUnitEQFilterParameters` class directly. Use the array that returns from the [bands](avaudiouniteq/bands.md) property of [AVAudioUnitEQ](avaudiouniteq.md).

## Topics

### Getting and Setting Equalizer Filter Parameters

- [bandwidth](avaudiouniteqfilterparameters/bandwidth.md): The bandwidth of the equalizer filter, in octaves.
- [bypass](avaudiouniteqfilterparameters/bypass.md): The bypass state of the equalizer filter band.
- [filterType](avaudiouniteqfilterparameters/filtertype.md): The equalizer filter type.
- [frequency](avaudiouniteqfilterparameters/frequency.md): The frequency of the equalizer filter, in hertz.
- [gain](avaudiouniteqfilterparameters/gain.md): The gain of the equalizer filter, in decibels.

### Constants

- [AVAudioUnitEQFilterType](avaudiouniteqfiltertype.md): Filter types available to use with the filter type property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Getting and setting the equalizer values

- [bands](avaudiouniteq/bands.md): An array of equalizer filter parameters.
- [globalGain](avaudiouniteq/globalgain.md): The overall gain adjustment that the audio unit applies to the signal, in decibels.
