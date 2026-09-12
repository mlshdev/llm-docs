> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/velocity(in:)](https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/velocity(in:))

# velocity(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Converts the represented gesture recognizer’s current velocity to a SwiftUI coordinate space of an ancestor of the view the gesture recognizer is attached to.

## Declaration

```swift
func velocity(in coordinateSpace: some CoordinateSpaceProtocol) -> CGPoint?
```

## Parameters

- `coordinateSpace`: The SwiftUI coordinate space to convert to.

<a id="discussion"></a>

## Discussion

If the gesture recognizer does not implement a `velocityInView:` method, returns nil.
