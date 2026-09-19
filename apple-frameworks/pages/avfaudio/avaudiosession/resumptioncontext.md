> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/resumptioncontext

# AVAudioSession.ResumptionContext (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An object that provides context when resumption becomes available.

## Declaration

```swift
class ResumptionContext
```

## Topics

### Getting the recommendation

- [recommendation](resumptioncontext/recommendation.md): The system’s recommendation on whether to resume playback.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting activation context details

- [AVAudioSession.DeactivationContext](deactivationcontext.md): An object that describes why and how the audio session deactivated.
- [AVAudioSession.DeactivationSource](deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSession.InterruptionContext](interruptioncontext.md): An object that provides context about an audio session interruption.
- [AVAudioSession.ResumptionRecommendation](resumptionrecommendation.md): The system’s recommendation on whether to resume playback.

# AVAudioSessionResumptionContext (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An object that provides context when resumption becomes available.

## Declaration

```objectivec
@interface AVAudioSessionResumptionContext : NSObject
```

## Topics

### Getting the recommendation

- [recommendation](resumptioncontext/recommendation.md): The system’s recommendation on whether to resume playback.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Getting activation context details

- [AVAudioSessionDeactivationContext](deactivationcontext.md): An object that describes why and how the audio session deactivated.
- [AVAudioSessionDeactivationSource](deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSessionInterruptionContext](interruptioncontext.md): An object that provides context about an audio session interruption.
- [AVAudioSessionResumptionRecommendation](resumptionrecommendation.md): The system’s recommendation on whether to resume playback.
