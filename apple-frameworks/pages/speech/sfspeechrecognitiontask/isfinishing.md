> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontask/isfinishing](https://developer.apple.com/documentation/speech/sfspeechrecognitiontask/isfinishing)

# isFinishing (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether audio input has stopped.

## Declaration

```swift
var isFinishing: Bool { get }
```

<a id="discussion"></a>

## Discussion

By default, the value of this property is `false`.

## See Also

### Finishing a speech recognition task

- [finish()](finish%28%29.md): Stops accepting new audio and finishes processing on the audio input that has already been accepted.

# finishing (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether audio input has stopped.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFinishing) BOOL finishing;
```

<a id="discussion"></a>

## Discussion

By default, the value of this property is `false`.

## See Also

### Finishing a speech recognition task

- [finish](finish%28%29.md): Stops accepting new audio and finishes processing on the audio input that has already been accepted.
