> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentablecontext

# NSGestureRecognizerRepresentableContext

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 26.0+

Contextual information about the state of the system that you use to create and update a represented gesture recognizer.

## Declaration

```swift
struct NSGestureRecognizerRepresentableContext<Representable> where Representable : NSGestureRecognizerRepresentable
```

## Topics

### Instance Properties

- [converter](nsgesturerecognizerrepresentablecontext/converter.md): A structure used to convert locations to and from coordinate spaces in the hierarchy of the associated SwiftUI view.
- [coordinator](nsgesturerecognizerrepresentablecontext/coordinator.md): The custom object that you use to communicate state changes from your gesture recognizer to other parts of your SwiftUI interface.

## See Also

### Adding AppKit gesture recognizers into SwiftUI view hierarchies

- [NSGestureRecognizerRepresentable](nsgesturerecognizerrepresentable.md): A wrapper for an `NSGestureRecognizer` that you use to integrate that gesture recognizer into your SwiftUI hierarchy.
- [NSGestureRecognizerRepresentableCoordinateSpaceConverter](nsgesturerecognizerrepresentablecoordinatespaceconverter.md): A structure used to convert locations to and from coordinate spaces in the hierarchy of the SwiftUI view associated with an [NSGestureRecognizerRepresentable](nsgesturerecognizerrepresentable.md).
