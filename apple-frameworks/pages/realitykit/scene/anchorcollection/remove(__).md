> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/anchorcollection/remove(_:)](https://developer.apple.com/documentation/realitykit/scene/anchorcollection/remove(_:))

# remove(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Removes the anchor at the specified position.

## Declaration

```swift
@MainActor @preconcurrency func remove(_ entity: any HasAnchoring)
```

## Parameters

- `entity`: The anchor to remove from the collection.

## See Also

### Removing anchors

- [remove(at:)](remove%28at_%29.md): Removes and returns the anchor at the specified position.
- [removeAll()](removeall%28%29.md): Removes all anchors from the collection.
- [removeAll(keepCapacity:)](removeall%28keepcapacity_%29.md): Removes all anchors from the collection.
