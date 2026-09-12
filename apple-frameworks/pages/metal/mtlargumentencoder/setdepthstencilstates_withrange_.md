> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setdepthstencilstates:withrange:](https://developer.apple.com/documentation/metal/mtlargumentencoder/setdepthstencilstates:withrange:)

# setDepthStencilStates:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (void) setDepthStencilStates:(id<MTLDepthStencilState> const[]) depthStencilStates withRange:(NSRange) range;
```

<a id="discussion"></a>

## Discussion

Sets an array of depth stencil states at a given buffer index range
