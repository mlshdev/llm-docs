> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/translation(in:)](https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentablecoordinatespaceconverter/translation(in:))

# translation(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Converts the represented gesture recognizer’s current translation to a SwiftUI coordinate space of an ancestor of the view the gesture recognizer is attached to.

## Declaration

```swift
func translation(in coordinateSpace: some CoordinateSpaceProtocol) -> CGPoint?
```

## Parameters

- `coordinateSpace`: The SwiftUI coordinate space to convert to.

<a id="return-value"></a>

## Return Value

The represented gesture recognizer’s current translation converted to the given `coordinateSpace`, or `nil` if the represented gesture recognizer doesn’t respond to `-translationInView:` selector.
