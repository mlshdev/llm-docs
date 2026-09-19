> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/resumptionrecommendation

# AVAudioSession.ResumptionRecommendation (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The system’s recommendation on whether to resume playback.

## Declaration

```swift
enum ResumptionRecommendation
```

## Topics

### Creating a resumption recommendation

- [init(rawValue:)](resumptionrecommendation/init%28rawvalue_%29.md)

### Getting the recommendation

- [AVAudioSession.ResumptionRecommendation.shouldResume](resumptionrecommendation/shouldresume.md)
- [AVAudioSession.ResumptionRecommendation.shouldNotResume](resumptionrecommendation/shouldnotresume.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting activation context details

- [AVAudioSession.DeactivationContext](deactivationcontext.md): An object that describes why and how the audio session deactivated.
- [AVAudioSession.DeactivationSource](deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSession.InterruptionContext](interruptioncontext.md): An object that provides context about an audio session interruption.
- [AVAudioSession.ResumptionContext](resumptioncontext.md): An object that provides context when resumption becomes available.

# AVAudioSessionResumptionRecommendation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The system’s recommendation on whether to resume playback.

## Declaration

```objectivec
enum AVAudioSessionResumptionRecommendation : NSInteger;
```

## Topics

### Getting the recommendation

- [AVAudioSessionResumptionRecommendationShouldResume](resumptionrecommendation/shouldresume.md)
- [AVAudioSessionResumptionRecommendationShouldNotResume](resumptionrecommendation/shouldnotresume.md)

## See Also

### Getting activation context details

- [AVAudioSessionDeactivationContext](deactivationcontext.md): An object that describes why and how the audio session deactivated.
- [AVAudioSessionDeactivationSource](deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSessionInterruptionContext](interruptioncontext.md): An object that provides context about an audio session interruption.
- [AVAudioSessionResumptionContext](resumptioncontext.md): An object that provides context when resumption becomes available.
