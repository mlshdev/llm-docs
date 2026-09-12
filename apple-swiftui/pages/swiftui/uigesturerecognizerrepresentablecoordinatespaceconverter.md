> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter](https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter)

# UIGestureRecognizerRepresentableCoordinateSpaceConverter

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A proxy structure used to convert locations to/from coordinate spaces in the hierarchy of the SwiftUI view associated with a [UIGestureRecognizerRepresentable](uigesturerecognizerrepresentable.md).

## Declaration

```swift
struct UIGestureRecognizerRepresentableCoordinateSpaceConverter
```

## Topics

### Instance Properties

- [localLocation](uigesturerecognizerrepresentablecoordinatespaceconverter/locallocation.md): The represented gesture recognizer’s current location in the coordinate space of the SwiftUI view it’s attached to.
- [localTranslation](uigesturerecognizerrepresentablecoordinatespaceconverter/localtranslation.md): The represented gesture recognizer’s current translation in the coordinate space of the SwiftUI view it’s attached to.
- [localVelocity](uigesturerecognizerrepresentablecoordinatespaceconverter/localvelocity.md): The represented gesture recognizer’s current velocity in the coordinate space of the SwiftUI view it’s attached to.

### Instance Methods

- [convert(globalPoint:to:)](uigesturerecognizerrepresentablecoordinatespaceconverter/convert%28globalpoint_to_%29.md): Converts a point in the global coordinate space to a SwiftUI coordinate space of an ancestor of the view the gesture recognizer is attached to.
- [location(in:)](uigesturerecognizerrepresentablecoordinatespaceconverter/location%28in_%29.md): Converts the represented gesture recognizer’s current location to a SwiftUI coordinate space of an ancestor of the view the gesture recognizer is attached to.
- [translation(in:)](uigesturerecognizerrepresentablecoordinatespaceconverter/translation%28in_%29.md): Converts the represented gesture recognizer’s current translation to a SwiftUI coordinate space of an ancestor of the view the gesture recognizer is attached to.
- [velocity(in:)](uigesturerecognizerrepresentablecoordinatespaceconverter/velocity%28in_%29.md): Converts the represented gesture recognizer’s current velocity to a SwiftUI coordinate space of an ancestor of the view the gesture recognizer is attached to.

## See Also

### Adding UIKit gesture recognizers into SwiftUI view hierarchies

- [UIGestureRecognizerRepresentable](uigesturerecognizerrepresentable.md): A wrapper for a `UIGestureRecognizer` that you use to integrate that gesture recognizer into your SwiftUI hierarchy.
- [UIGestureRecognizerRepresentableContext](uigesturerecognizerrepresentablecontext.md): Contextual information about the state of the system that you use to create and update a represented gesture recognizer.
