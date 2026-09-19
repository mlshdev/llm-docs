> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/papermarkup/transformcontent(_:)

# transformContent(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Transforms the contents of this paper with the specified transform.

## Declaration

```swift
mutating func transformContent(_ transform: CGAffineTransform)
```

## Parameters

- `transform`: The transform applied to the contents of this paper. Skew is ignored.
