> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/convert(globalpoint:to:)

# convert(globalPoint:to:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Converts a point in the global coordinate space to a SwiftUI coordinate space of an ancestor of the view the gesture recognizer is attached to.

## Declaration

```swift
func convert(globalPoint: CGPoint, to coordinateSpace: some CoordinateSpaceProtocol = .local) -> CGPoint
```

## Parameters

- `globalPoint`: The point in the global coordinate space.
- `coordinateSpace`: The SwiftUI coordinate space to convert to.
