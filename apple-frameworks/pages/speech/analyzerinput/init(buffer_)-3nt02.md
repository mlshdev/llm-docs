> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/analyzerinput/init(buffer:)-3nt02](https://developer.apple.com/documentation/speech/analyzerinput/init(buffer:)-3nt02)

# init(buffer:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an audio input object.

## Declaration

```swift
init(buffer: CMReadySampleBuffer<CMReadOnlyDataBlockBuffer>)
```

## Parameters

- `buffer`: An audio buffer.

<a id="discussion"></a>

## Discussion

The audio buffer must not overlap or precede other audio input, as determined by the buffer’s `presentationTimeStamp` value.

> **Tip**

> To convert a `CMSampleBuffer` to a `CMReadySampleBuffer`, use `CMReadySampleBuffer(unsafeWithDataBuffer:)`. You should not alter the original `CMSampleBuffer` after passing it to that initializer.

## See Also

### Creating an input element

- [init(buffer:)](init%28buffer_%29-2ysg3.md): Creates an audio input object.
- [init(buffer:bufferStartTime:)](init%28buffer_bufferstarttime_%29.md): Creates an audio input object for audio that may be discontiguous with previous input.
