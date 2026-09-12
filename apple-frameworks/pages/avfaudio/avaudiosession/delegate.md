> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/delegate](https://developer.apple.com/documentation/avfaudio/avaudiosession/delegate)

# delegate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The delegate object for the audio session.

> Use the notifications described in the Handling interruptions section of this class instead.

## Declaration

```swift
unowned(unsafe) var delegate: (any AVAudioSessionDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate object must implement the protocol described in [AVAudioSessionDelegate](../avaudiosessiondelegate.md).

## See Also

### Responding to audio session changes

- [AVAudioSessionDelegate](../avaudiosessiondelegate.md): Deprecated. A protocol that defines responses to changes in state for the audio session.

# delegate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The delegate object for the audio session.

> Use the notifications described in the Handling interruptions section of this class instead.

## Declaration

```objectivec
@property (assign, nullable) id<AVAudioSessionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate object must implement the protocol described in [AVAudioSessionDelegate](../avaudiosessiondelegate.md).

## See Also

### Responding to audio session changes

- [AVAudioSessionDelegate](../avaudiosessiondelegate.md): Deprecated. A protocol that defines responses to changes in state for the audio session.
