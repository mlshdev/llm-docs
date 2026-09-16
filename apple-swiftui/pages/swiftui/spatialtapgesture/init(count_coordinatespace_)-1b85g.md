> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/spatialtapgesture/init(count:coordinatespace:)-1b85g

# init(count:coordinateSpace:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ (deprecated in 27.2) · iPadOS 16.0+ (deprecated in 27.2) · Mac Catalyst 16.0+ (deprecated in 27.2) · macOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 9.0+ (deprecated in 27.2)

Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.

> Use [init(count:coordinateSpace:)](init%28count_coordinatespace_%29-75s7q.md) instead.

## Declaration

```swift
nonisolated init(count: Int = 1, coordinateSpace: CoordinateSpace = .local)
```

## Parameters

- `count`: The required number of taps to complete the tap gesture.
- `coordinateSpace`: The coordinate space of the tap gesture’s location.
