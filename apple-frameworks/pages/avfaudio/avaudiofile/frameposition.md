> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiofile/frameposition](https://developer.apple.com/documentation/avfaudio/avaudiofile/frameposition)

# framePosition (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The position in the file where the next read or write operation occurs.

## Declaration

```swift
var framePosition: AVAudioFramePosition { get set }
```

<a id="Discussion"></a>

## Discussion

Set the `framePosition` property to perform a seek before a read or write. A read or write operation advances the frame position value by the number of frames it reads or writes.

## See Also

### Getting Audio File Properties

- [url](url.md): The location of the audio file.
- [fileFormat](fileformat.md): The on-disk format of the file.
- [processingFormat](processingformat.md): The processing format of the file.
- [length](length.md): The number of sample frames in the file.
- [AVAudioFramePosition](../avaudioframeposition.md): A position in an audio file or stream.
- [AVAudioFrameCount](../avaudioframecount.md): A number of audio sample frames.
- [AVAudioFileTypeKey](../avaudiofiletypekey.md): A string that indicates the audio file type.
- [isOpen](isopen.md): A Boolean value that indicates whether the file is open.

# framePosition (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The position in the file where the next read or write operation occurs.

## Declaration

```objectivec
@property (nonatomic) AVAudioFramePosition framePosition;
```

<a id="Discussion"></a>

## Discussion

Set the `framePosition` property to perform a seek before a read or write. A read or write operation advances the frame position value by the number of frames it reads or writes.

## See Also

### Getting Audio File Properties

- [url](url.md): The location of the audio file.
- [fileFormat](fileformat.md): The on-disk format of the file.
- [processingFormat](processingformat.md): The processing format of the file.
- [length](length.md): The number of sample frames in the file.
- [AVAudioFramePosition](../avaudioframeposition.md): A position in an audio file or stream.
- [AVAudioFrameCount](../avaudioframecount.md): A number of audio sample frames.
- [AVAudioFileTypeKey](../avaudiofiletypekey.md): A string that indicates the audio file type.
- [isOpen](isopen.md): A Boolean value that indicates whether the file is open.
