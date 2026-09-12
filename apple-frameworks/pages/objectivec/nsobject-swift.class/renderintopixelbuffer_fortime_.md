> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/renderintopixelbuffer:fortime:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/renderintopixelbuffer:fortime:)

# renderIntoPixelBuffer:forTime:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.9)

## Declaration

```objectivec
- (BOOL) renderIntoPixelBuffer:(CVPixelBufferRef) buffer forTime:(CVTimeStamp *) timeStamp;
```

## Parameters

- `buffer`: The pixel buffer to fill. The dimensions can vary: use CVPixelBufferGetWidth() and CVPixelBufferGetHeight() every time.
- `timeStamp`: The frame time for which the buffer should be rendered.

<a id="return-value"></a>

## Return Value

Return YES if the buffer was successfully filled with new frame data. Return NO if nothing has changed or an error was encountered.

<a id="discussion"></a>

## Discussion

Called for each frame to be sent to Messages. This method will not be called on the main thread.
