> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemsamplebufferoutput/copynextsamplebuffer](https://developer.apple.com/documentation/avfoundation/avplayeritemsamplebufferoutput/copynextsamplebuffer)

# copyNextSampleBuffer

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Copies the next sample buffer for the output synchronously.

## Declaration

```objectivec
- (CMSampleBufferRef) copyNextSampleBuffer;
```

<a id="return-value"></a>

## Return Value

A CMSampleBuffer object referencing the output sample buffer.

<a id="discussion"></a>

## Discussion

The client is responsible for calling `CFRelease` on the returned `CMSampleBuffer` object when finished with it. This method will return `NULL` if there are no more sample buffers currently available for the receiver. Clients may use the delegate method `outputMediaDataAvailable:` to be informed when the next `CMSampleBuffer` becomes available.
