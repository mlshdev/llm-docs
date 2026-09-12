> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/draggesture/init(minimumdistance:coordinatespace:)-3804h](https://developer.apple.com/documentation/swiftui/draggesture/init(minimumdistance:coordinatespace:)-3804h)

# init(minimumDistance:coordinateSpace:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.

> Use [init(minimumDistance:coordinateSpace:)](init%28minimumdistance_coordinatespace_%29-8ffe5.md) instead.

## Declaration

```swift
@MainActor @preconcurrency init(minimumDistance: CGFloat = 10, coordinateSpace: CoordinateSpace = .local)
```

## Parameters

- `minimumDistance`: The minimum dragging distance for the gesture to succeed.
- `coordinateSpace`: The coordinate space of the dragging gesture’s location.
