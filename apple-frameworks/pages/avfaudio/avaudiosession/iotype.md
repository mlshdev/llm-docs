> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/iotype](https://developer.apple.com/documentation/avfaudio/avaudiosession/iotype)

# AVAudioSession.IOType (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Constant values used to specify the audio session’s aggregated I/O behavior.

## Declaration

```swift
enum IOType
```

<a id="overview"></a>

## Overview

Starting in iOS 10, apps that use [AVCaptureSession](../../avfoundation/avcapturesession.md) on iPad and iPhone devices, and support taking Live Photos, have nonaggregated audio I/O unless the app opts out by setting its I/O type to [AVAudioSession.IOType.aggregated](iotype/aggregated.md). With nonaggregated audio I/O, the system uses separate threads to service audio I/O for input and output directions.

In cases with nonaggregated I/O, the sample rate and I/O buffer duration properties map to the output audio device. In this scenario, the input and output audio hardware may be running at different sample rates and with different I/O buffer durations. If any of the following are true about your app, set the I/O type to [AVAudioSession.IOType.aggregated](iotype/aggregated.md):

- It requires that input and output audio be presented in the same real-time I/O callback.
- It requires that input and output audio have the same sample rate or I/O buffer duration.
- It requires the ability to set a preferred sample rate or I/O buffer duration for audio input.

Apps that don’t use [AVCaptureSession](../../avfoundation/avcapturesession.md), but do use the [playAndRecord](category-swift.struct/playandrecord.md) category, continue to have aggregated audio I/O, as in previous versions of iOS.

## Topics

### I/O Types

- [AVAudioSession.IOType.notSpecified](iotype/notspecified.md): The default audio session I/O type.
- [AVAudioSession.IOType.aggregated](iotype/aggregated.md): An I/O type that indicates if audio input and output should be presented in the same realtime I/O callback.

### Initializers

- [init(rawValue:)](iotype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting the aggregated I/O preference

- [setAggregatedIOPreference(\_:)](setaggregatediopreference%28__%29.md): Sets the audio session’s aggregated I/O configuration preference.

# AVAudioSessionIOType (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constant values used to specify the audio session’s aggregated I/O behavior.

## Declaration

```objectivec
enum AVAudioSessionIOType : NSUInteger;
```

<a id="overview"></a>

## Overview

Starting in iOS 10, apps that use [AVCaptureSession](../../avfoundation/avcapturesession.md) on iPad and iPhone devices, and support taking Live Photos, have nonaggregated audio I/O unless the app opts out by setting its I/O type to [AVAudioSessionIOTypeAggregated](iotype/aggregated.md). With nonaggregated audio I/O, the system uses separate threads to service audio I/O for input and output directions.

In cases with nonaggregated I/O, the sample rate and I/O buffer duration properties map to the output audio device. In this scenario, the input and output audio hardware may be running at different sample rates and with different I/O buffer durations. If any of the following are true about your app, set the I/O type to [AVAudioSessionIOTypeAggregated](iotype/aggregated.md):

- It requires that input and output audio be presented in the same real-time I/O callback.
- It requires that input and output audio have the same sample rate or I/O buffer duration.
- It requires the ability to set a preferred sample rate or I/O buffer duration for audio input.

Apps that don’t use [AVCaptureSession](../../avfoundation/avcapturesession.md), but do use the [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md) category, continue to have aggregated audio I/O, as in previous versions of iOS.

## Topics

### I/O Types

- [AVAudioSessionIOTypeNotSpecified](iotype/notspecified.md): The default audio session I/O type.
- [AVAudioSessionIOTypeAggregated](iotype/aggregated.md): An I/O type that indicates if audio input and output should be presented in the same realtime I/O callback.

## See Also

### Setting the aggregated I/O preference

- [setAggregatedIOPreference:error:](setaggregatediopreference%28__%29.md): Sets the audio session’s aggregated I/O configuration preference.
