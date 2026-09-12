> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessiondelegate](https://developer.apple.com/documentation/avfaudio/avaudiosessiondelegate)

# AVAudioSessionDelegate (Swift)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A protocol that defines responses to changes in state for the audio session.

> The use of this protocol is deprecated in iOS 6 and later. Instead, you should use the notifications declared in [AVAudioSession](avaudiosession.md).

## Declaration

```swift
protocol AVAudioSessionDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The delegate of an `AVAudioSession` object must adopt the `AVAudioSessionDelegate` protocol. The methods in this protocol are optional. They allow a delegate to respond to the following sorts of changes in state:

- Changes to the availability of audio input
- Audio session interruption, or end of audio session interruption

An `AVAudioSession` delegate can respond to interruptions at the audio session level. You can use this interface along with any iOS audio technology. For example, your `AVAudioSession` delegate can handle interruptions for OpenAL and audio unit playback.

When using the AVFoundation framework for recording or playback, you can also respond to interruptions at the individual recorder or player level. To do this, create audio recorder or audio player delegates using the protocols described in [AVAudioRecorderDelegate](avaudiorecorderdelegate.md) and [AVAudioPlayerDelegate](avaudioplayerdelegate.md).

## Topics

### Delegate Methods

- [beginInterruption()](avaudiosessiondelegate/begininterruption%28%29.md): Deprecated. Called after your audio session is interrupted.
- [endInterruption()](avaudiosessiondelegate/endinterruption%28%29.md): Deprecated. Called after your audio session interruption ends.
- [endInterruption(withFlags:)](avaudiosessiondelegate/endinterruption%28withflags_%29.md): Deprecated. Called after your audio session interruption ends, with flags indicating the state of the audio session.
- [inputIsAvailableChanged(\_:)](avaudiosessiondelegate/inputisavailablechanged%28__%29.md): Deprecated. Called after the availability of audio input changes on a device.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to audio session changes

- [delegate](avaudiosession/delegate.md): Deprecated. The delegate object for the audio session.

# AVAudioSessionDelegate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 6.0) · iPadOS 3.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A protocol that defines responses to changes in state for the audio session.

> The use of this protocol is deprecated in iOS 6 and later. Instead, you should use the notifications declared in [AVAudioSession](avaudiosession.md).

## Declaration

```objectivec
@protocol AVAudioSessionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The delegate of an `AVAudioSession` object must adopt the `AVAudioSessionDelegate` protocol. The methods in this protocol are optional. They allow a delegate to respond to the following sorts of changes in state:

- Changes to the availability of audio input
- Audio session interruption, or end of audio session interruption

An `AVAudioSession` delegate can respond to interruptions at the audio session level. You can use this interface along with any iOS audio technology. For example, your `AVAudioSession` delegate can handle interruptions for OpenAL and audio unit playback.

When using the AVFoundation framework for recording or playback, you can also respond to interruptions at the individual recorder or player level. To do this, create audio recorder or audio player delegates using the protocols described in [AVAudioRecorderDelegate](avaudiorecorderdelegate.md) and [AVAudioPlayerDelegate](avaudioplayerdelegate.md).

## Topics

### Delegate Methods

- [beginInterruption](avaudiosessiondelegate/begininterruption%28%29.md): Deprecated. Called after your audio session is interrupted.
- [endInterruption](avaudiosessiondelegate/endinterruption%28%29.md): Deprecated. Called after your audio session interruption ends.
- [endInterruptionWithFlags:](avaudiosessiondelegate/endinterruption%28withflags_%29.md): Deprecated. Called after your audio session interruption ends, with flags indicating the state of the audio session.
- [inputIsAvailableChanged:](avaudiosessiondelegate/inputisavailablechanged%28__%29.md): Deprecated. Called after the availability of audio input changes on a device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to audio session changes

- [delegate](avaudiosession/delegate.md): Deprecated. The delegate object for the audio session.
