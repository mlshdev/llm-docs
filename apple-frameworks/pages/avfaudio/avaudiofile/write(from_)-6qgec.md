> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiofile/write(from:)-6qgec](https://developer.apple.com/documentation/avfaudio/avaudiofile/write(from:)-6qgec)

# write(from:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
func write(from buffer: AVAudioPCMBuffer) throws
```

## Parameters

- `buffer`: The buffer from which to write to the file. Its format must match the file’s processing format.

<a id="discussion"></a>

## Discussion

Write a buffer.

Writes sequentially. The buffer’s frameLength signifies how much of the buffer is to be written.

# writeFromBuffer:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
- (BOOL) writeFromBuffer:(const AVAudioPCMBuffer *) buffer error:(NSError **) outError;
```

## Parameters

- `buffer`: The buffer from which to write to the file. Its format must match the file’s processing format.
- `outError`: On exit, if an error occurs, a description of the error

<a id="return-value"></a>

## Return Value

YES for success.

<a id="discussion"></a>

## Discussion

Write a buffer.

Writes sequentially. The buffer’s frameLength signifies how much of the buffer is to be written.
