> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/anchorcollection/removeall(keepcapacity:)](https://developer.apple.com/documentation/realitykit/scene/anchorcollection/removeall(keepcapacity:))

# removeAll(keepCapacity:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Removes all anchors from the collection.

## Declaration

```swift
@MainActor @preconcurrency func removeAll(keepCapacity: Bool = false)
```

## Parameters

- `keepCapacity`: Pass true to keep the existing capacity of the array after removing its elements. The default value is false.

## See Also

### Removing anchors

- [remove(\_:)](remove%28__%29.md): Removes the anchor at the specified position.
- [remove(at:)](remove%28at_%29.md): Removes and returns the anchor at the specified position.
- [removeAll()](removeall%28%29.md): Removes all anchors from the collection.
