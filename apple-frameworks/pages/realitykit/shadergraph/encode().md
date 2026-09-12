> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/encode()](https://developer.apple.com/documentation/realitykit/shadergraph/encode())

# encode()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Encodes the graph into a binary representation.

## Declaration

```swift
final func encode() throws -> Data
```

<a id="discussion"></a>

## Discussion

The resulting data can be stored to disk or passed across a process boundary, and later restored with [init(from:)](init%28from_%29.md).

> **Throws**

> If the graph cannot be serialized.
