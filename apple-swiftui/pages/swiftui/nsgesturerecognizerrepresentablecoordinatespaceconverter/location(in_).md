> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/location(in:)](https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/location(in:))

# location(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Converts the represented gesture recognizer’s current location to a SwiftUI coordinate space of an ancestor of the view the gesture recognizer is attached to.

## Declaration

```swift
func location(in coordinateSpace: some CoordinateSpaceProtocol) -> CGPoint
```

## Parameters

- `coordinateSpace`: The SwiftUI coordinate space to convert to.

<a id="return-value"></a>

## Return Value

The represrnted gesture recognizer’s current location converted into the given `coordinateSpace`.
