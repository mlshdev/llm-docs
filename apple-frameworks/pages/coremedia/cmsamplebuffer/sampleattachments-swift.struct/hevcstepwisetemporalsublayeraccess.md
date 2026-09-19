> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/hevcstepwisetemporalsublayeraccess

# hevcStepwiseTemporalSubLayerAccess

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates a step-wise temporal sublayer access (STSA) sample grouping.

## Declaration

```swift
var hevcStepwiseTemporalSubLayerAccess: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to ‘stsa’ sample group.

This attachment is read from and written to media files as specified in ISO/IEC 14496-15 section 8.4.7 Step-wise temporal layer access sample grouping.
