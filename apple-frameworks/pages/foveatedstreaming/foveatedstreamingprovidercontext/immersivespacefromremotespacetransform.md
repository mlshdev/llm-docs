> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingprovidercontext/immersivespacefromremotespacetransform

# immersiveSpaceFromRemoteSpaceTransform

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

Transform matrix from the remote space to the immersive space.

## Declaration

```swift
@MainActor final var immersiveSpaceFromRemoteSpaceTransform: simd_float4x4 { get }
```

<a id="discussion"></a>

## Discussion

This matrix is used to align the streamed content with the person’s physical space. The host app may update this value during the session via [immersiveSpaceFromRemoteSpaceTransform](../foveatedstreamingsession/immersivespacefromremotespacetransform.md).
