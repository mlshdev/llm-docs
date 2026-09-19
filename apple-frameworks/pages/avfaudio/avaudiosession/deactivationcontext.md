> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/deactivationcontext

# AVAudioSession.DeactivationContext (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An object that describes why and how the audio session deactivated.

## Declaration

```swift
class DeactivationContext
```

## Topics

### Getting the deactivation details

- [source](deactivationcontext/source.md): The source of the audio session deactivation.
- [interruptionContext](deactivationcontext/interruptioncontext.md): Context about the interruption that caused deactivation.

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

- [AVAudioSession.DeactivationSource](deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSession.InterruptionContext](interruptioncontext.md): An object that provides context about an audio session interruption.
- [AVAudioSession.ResumptionContext](resumptioncontext.md): An object that provides context when resumption becomes available.
- [AVAudioSession.ResumptionRecommendation](resumptionrecommendation.md): The system’s recommendation on whether to resume playback.

# AVAudioSessionDeactivationContext (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An object that describes why and how the audio session deactivated.

## Declaration

```objectivec
@interface AVAudioSessionDeactivationContext : NSObject
```

## Topics

### Getting the deactivation details

- [source](deactivationcontext/source.md): The source of the audio session deactivation.
- [interruptionContext](deactivationcontext/interruptioncontext.md): Context about the interruption that caused deactivation.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Getting activation context details

- [AVAudioSessionDeactivationSource](deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSessionInterruptionContext](interruptioncontext.md): An object that provides context about an audio session interruption.
- [AVAudioSessionResumptionContext](resumptioncontext.md): An object that provides context when resumption becomes available.
- [AVAudioSessionResumptionRecommendation](resumptionrecommendation.md): The system’s recommendation on whether to resume playback.
