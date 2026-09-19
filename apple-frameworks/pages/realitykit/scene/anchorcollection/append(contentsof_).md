> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/scene/anchorcollection/append(contentsof:)

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
