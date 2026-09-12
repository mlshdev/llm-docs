> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/anchorcollection/remove(at:)](https://developer.apple.com/documentation/realitykit/scene/anchorcollection/remove(at:))

# remove(at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Removes and returns the anchor at the specified position.

## Declaration

```swift
@MainActor @preconcurrency func remove(at index: Int)
```

## Parameters

- `index`: The position of the anchor to remove. Use a valid index of the collection.

## See Also

### Removing anchors

- [remove(\_:)](remove%28__%29.md): Removes the anchor at the specified position.
- [removeAll()](removeall%28%29.md): Removes all anchors from the collection.
- [removeAll(keepCapacity:)](removeall%28keepcapacity_%29.md): Removes all anchors from the collection.
