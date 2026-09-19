> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdstagecomponent/coordinatespace(on:at:timecode:)

# coordinateSpace(on:at:timeCode:)

**Framework:** USDKit  
**Kind:** Type Method  
**Availability:** visionOS 27.0+

Returns a coordinate space anchored to the closest rendered ancestor of `path`.

## Declaration

```swift
@MainActor static func coordinateSpace(on root: Entity, at path: USDLayer.Path, timeCode: USDStage.TimeCode? = nil) -> some CoordinateSpace3DFloat

```

## Parameters

- `root`: The entity hosting the `USDStageComponent`.
- `path`: The prim path to map.
- `timeCode`: Time code at which to evaluate. Defaults to `component.timeCode`.
