> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelbufferslice/setoffset(_:)](https://developer.apple.com/documentation/realitykit/lowlevelbufferslice/setoffset(_:))

# setOffset(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Updates the byte offset of this slice.

## Declaration

```swift
mutating func setOffset(_ offset: Int) throws(LowLevelRenderContextError)
```

## Parameters

- `offset`: The new byte offset into `buffer` at which this slice begins.

<a id="discussion"></a>

## Discussion

> **Throws**

> [LowLevelRenderContextError](../lowlevelrendercontexterror.md) if the new offset falls outside the buffer’s allocated capacity.
