> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/anchorcollection/append(contentsof:)](https://developer.apple.com/documentation/realitykit/scene/anchorcollection/append(contentsof:))

# append(contentsOf:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Adds anchors from an array to the end of this collection.

## Declaration

```swift
@MainActor @preconcurrency func append(contentsOf array: [any HasAnchoring])
```

## Parameters

- `array`: The array of anchor entities to add.
