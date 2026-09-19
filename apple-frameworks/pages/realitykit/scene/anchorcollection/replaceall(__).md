> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/scene/anchorcollection/replaceall(_:)

# replaceAll(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Replaces the existing anchor collection with a provided collection.

## Declaration

```swift
@MainActor @preconcurrency func replaceAll(_ entities: [any HasAnchoring])
```

## Parameters

- `entities`: An array of anchors to replace the existing collection.

<a id="discussion"></a>

## Discussion

This method removes all anchors currently in the collection, then appends all the elements in `entities` to the collection.
