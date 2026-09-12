> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/renderintoopenglbuffer:onscreen:fortime:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/renderintoopenglbuffer:onscreen:fortime:)

# renderIntoOpenGLBuffer:onScreen:forTime:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.9)

Called for each frame to be sent to Messages. This method will not be called on the main thread.

## Declaration

```objectivec
- (BOOL) renderIntoOpenGLBuffer:(CVOpenGLBufferRef) buffer onScreen:(int *) screenInOut forTime:(CVTimeStamp *) timeStamp;
```

## Parameters

- `buffer`: The OpenGL buffer to fill. The receiver should call `CVOpenGLBufferAttach()`, then render.
- `screenInOut`: The recommended virtual screen number to pass to `CVOpenGLBufferAttach()` for maximum efficiency. The delegate may use a different screen number, but must write that value back into screenInOut before returning.
- `timeStamp`: The frame time for which the buffer should be rendered.

<a id="return-value"></a>

## Return Value

 Return `YES` if the buffer was successfully filled with new frame data. Return `NO` if nothing has changed or an error was encountered.
