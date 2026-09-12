> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiofile/length](https://developer.apple.com/documentation/avfaudio/avaudiofile/length)

# length (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of sample frames in the file.

## Declaration

```swift
var length: AVAudioFramePosition { get }
```

<a id="Discussion"></a>

## Discussion

This can be computationally expensive to compute for the first time.

## See Also

### Getting Audio File Properties

- [url](url.md): The location of the audio file.
- [fileFormat](fileformat.md): The on-disk format of the file.
- [processingFormat](processingformat.md): The processing format of the file.
- [AVAudioFramePosition](../avaudioframeposition.md): A position in an audio file or stream.
- [framePosition](frameposition.md): The position in the file where the next read or write operation occurs.
- [AVAudioFrameCount](../avaudioframecount.md): A number of audio sample frames.
- [AVAudioFileTypeKey](../avaudiofiletypekey.md): A string that indicates the audio file type.
- [isOpen](isopen.md): A Boolean value that indicates whether the file is open.

# length (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of sample frames in the file.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioFramePosition length;
```

<a id="Discussion"></a>

## Discussion

This can be computationally expensive to compute for the first time.

## See Also

### Getting Audio File Properties

- [url](url.md): The location of the audio file.
- [fileFormat](fileformat.md): The on-disk format of the file.
- [processingFormat](processingformat.md): The processing format of the file.
- [AVAudioFramePosition](../avaudioframeposition.md): A position in an audio file or stream.
- [framePosition](frameposition.md): The position in the file where the next read or write operation occurs.
- [AVAudioFrameCount](../avaudioframecount.md): A number of audio sample frames.
- [AVAudioFileTypeKey](../avaudiofiletypekey.md): A string that indicates the audio file type.
- [isOpen](isopen.md): A Boolean value that indicates whether the file is open.
