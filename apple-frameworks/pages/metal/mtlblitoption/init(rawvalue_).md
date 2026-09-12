> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitoption/init(rawvalue:)](https://developer.apple.com/documentation/metal/mtlblitoption/init(rawvalue:))

# init(rawValue:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a blit option from a raw value.

## Declaration

```swift
init(rawValue: UInt)
```

## Parameters

- `rawValue`: The bitwise value of a blit option as an integer.

<a id="discussion"></a>

## Discussion

Use one of the [MTLBlitOption](../mtlblitoption.md) type’s static properties, such as [depthFromDepthStencil](depthfromdepthstencil.md), [stencilFromDepthStencil](stencilfromdepthstencil.md), and [rowLinearPVRTC](rowlinearpvrtc.md) instead of creating a blit option yourself with this initializer.
