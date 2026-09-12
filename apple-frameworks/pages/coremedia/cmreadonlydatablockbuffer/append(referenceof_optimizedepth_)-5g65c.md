> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadonlydatablockbuffer/append(referenceof:optimizedepth:)-5g65c](https://developer.apple.com/documentation/coremedia/cmreadonlydatablockbuffer/append(referenceof:optimizedepth:)-5g65c)

# append(referenceOf:optimizeDepth:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Append a reference to a range of another block buffer.

## Declaration

```swift
mutating func append(referenceOf other: consuming CMMutableDataBlockBuffer, optimizeDepth: Bool = true)
```

## Parameters

- `optimizeDepth`: Keep the depth of buffer reference graph to a minimum.

<a id="discussion"></a>

## Discussion

The range within the block buffer is not required to be contiguous. Providing out of bounds range will result in a precondition failure.
