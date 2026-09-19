> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shadergraph/init(from:)

# init(from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a graph from data previously produced by [encode()](encode%28%29.md).

## Declaration

```swift
convenience init(from data: Data) throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> If the data is malformed or was produced by an incompatible version.
