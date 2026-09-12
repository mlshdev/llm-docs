> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/delegate](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/delegate)

# delegate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The delegate object for the speech synthesizer.

## Declaration

```swift
weak var delegate: (any AVSpeechSynthesizerDelegate)? { get set }
```

## See Also

### Managing the delegate

- [AVSpeechSynthesizerDelegate](../avspeechsynthesizerdelegate.md): A delegate protocol that contains optional methods you can implement to respond to events that occur during speech synthesis.

# delegate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The delegate object for the speech synthesizer.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<AVSpeechSynthesizerDelegate> delegate;
```

## See Also

### Managing the delegate

- [AVSpeechSynthesizerDelegate](../avspeechsynthesizerdelegate.md): A delegate protocol that contains optional methods you can implement to respond to events that occur during speech synthesis.
