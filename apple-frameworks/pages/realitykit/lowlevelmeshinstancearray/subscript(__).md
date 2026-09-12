> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshinstancearray/subscript(_:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshinstancearray/subscript(_:))

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the mesh instance at the given index, or `nil` if the slot is unoccupied.

## Declaration

```swift
final subscript(position: Int) -> LowLevelMeshInstance? { get }
```

## Parameters

- `position`: The slot index to retrieve.

<a id="return-value"></a>

## Return Value

The [LowLevelMeshInstance](../lowlevelmeshinstance.md) at `position`, or `nil` if the slot is empty.
