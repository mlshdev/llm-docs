> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uigesturerecognizerrepresentablecontext](https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentablecontext)

# UIGestureRecognizerRepresentableContext

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Contextual information about the state of the system that you use to create and update a represented gesture recognizer.

## Declaration

```swift
struct UIGestureRecognizerRepresentableContext<Representable> where Representable : UIGestureRecognizerRepresentable
```

## Topics

### Instance Properties

- [converter](uigesturerecognizerrepresentablecontext/converter.md): A structure used to convert locations to/from coordinate spaces in the hierarchy of the associated SwiftUI view.
- [coordinator](uigesturerecognizerrepresentablecontext/coordinator.md): The custom object that you use to communicate state changes from your gesture recognizer to other parts of your SwiftUI interface.

## See Also

### Adding UIKit gesture recognizers into SwiftUI view hierarchies

- [UIGestureRecognizerRepresentable](uigesturerecognizerrepresentable.md): A wrapper for a `UIGestureRecognizer` that you use to integrate that gesture recognizer into your SwiftUI hierarchy.
- [UIGestureRecognizerRepresentableCoordinateSpaceConverter](uigesturerecognizerrepresentablecoordinatespaceconverter.md): A proxy structure used to convert locations to/from coordinate spaces in the hierarchy of the SwiftUI view associated with a [UIGestureRecognizerRepresentable](uigesturerecognizerrepresentable.md).
