> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/getopenglbuffercontext:pixelformat:

# getOpenGLBufferContext:pixelFormat:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.9)

## Declaration

```objectivec
- (void) getOpenGLBufferContext:(CGLContextObj*) contextOut pixelFormat:(CGLPixelFormatObj*) pixelFormatOut;
```

## Parameters

- `contextOut`: The OpenGL context to be used for the CVOpenGLBufferRef instances passed to renderIntoOpenGLBuffer:onScreen:forTime:.
- `pixelFormatOut`: The OpenGL pixel format to be used for the CVOpenGLBufferRef instances passed to renderIntoOpenGLBuffer:onScreen:forTime:.

<a id="discussion"></a>

## Discussion

This method is optional. Called once after setVideoDataSource:, if implemented.
