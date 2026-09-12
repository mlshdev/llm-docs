> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/convert(globalpoint:to:)](https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/convert(globalpoint:to:))

# convert(globalPoint:to:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Converts a point in the global coordinate space to a SwiftUI coordinate space of an ancestor of the view the gesture recognizer is attached to.

## Declaration

```swift
func convert(globalPoint: CGPoint, to coordinateSpace: some CoordinateSpaceProtocol = .local) -> CGPoint
```

## Parameters

- `globalPoint`: The point in the global coordinate space.
- `coordinateSpace`: The SwiftUI coordinate space to convert to.

<a id="return-value"></a>

## Return Value

A point converted to the given `coordinateSpace`.
