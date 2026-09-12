> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingsessioncompleteframes](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsessioncompleteframes)

# VTRAWProcessingSessionCompleteFrames

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** macOS 15.0+

Forces the RAW Processor to complete processing frames.

## Declaration

```objectivec
extern OSStatus VTRAWProcessingSessionCompleteFrames(VTRAWProcessingSessionRef session);
```

## Parameters

- `session`: The RAW processing session.

<a id="Discussion"></a>

## Discussion

Call this after calling a set of [VTRAWProcessingSessionProcessFrame](vtrawprocessingsessionprocessframe.md) calls to ensure that all frames have been processed. Before [VTRAWProcessingSessionCompleteFrames](vtrawprocessingsessioncompleteframes.md) returns, the output handler will be invoked for all pending frames.

## See Also

### Processing frames

- [VTRAWProcessingSessionProcessFrame](vtrawprocessingsessionprocessframe.md): Submits RAW frames for format-specific processing using sequence and frame level parameters.
