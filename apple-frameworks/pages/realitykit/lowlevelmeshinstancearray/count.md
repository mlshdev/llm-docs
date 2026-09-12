> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshinstancearray/count](https://developer.apple.com/documentation/realitykit/lowlevelmeshinstancearray/count)

# count

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The number of instance slots in this array.

## Declaration

```swift
final var count: Int { get }
```

<a id="discussion"></a>

## Discussion

Represents the total capacity allocated at creation time; some slots may be unoccupied. Use `setMeshInstance(_:index:)` to populate slots and the `subscript` to check occupancy.

## See Also

### Setting mesh instances

- [setMeshInstance(\_:index:)](setmeshinstance%28__index_%29.md): Assigns a mesh instance to the slot at the given index, or clears the slot if the instance is nil.
