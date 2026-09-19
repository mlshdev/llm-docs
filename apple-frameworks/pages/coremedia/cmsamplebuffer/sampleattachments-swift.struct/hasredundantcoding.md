> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/hasredundantcoding

# hasRedundantCoding

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether the sample has redundant coding.

## Declaration

```swift
var hasRedundantCoding: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

This key has no default value. If this key is not present, redundant coding information for the sample is unknown.
