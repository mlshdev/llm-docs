> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsgesturerecognizerrepresentable](https://developer.apple.com/documentation/swiftui/nsgesturerecognizerrepresentable)

# NSGestureRecognizerRepresentable

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** macOS 26.0+

A wrapper for an `NSGestureRecognizer` that you use to integrate that gesture recognizer into your SwiftUI hierarchy.

## Declaration

```swift
@MainActor @preconcurrency protocol NSGestureRecognizerRepresentable
```

<a id="overview"></a>

## Overview

Use an [NSGestureRecognizerRepresentable](nsgesturerecognizerrepresentable.md) instance to create and manage an [NSGestureRecognizer](https://developer.apple.com/documentation/appkit/nsgesturerecognizer) object in your SwiftUI interface.

To add your gesture recognizer to a SwiftUI view, create an instance of [NSGestureRecognizerRepresentable](nsgesturerecognizerrepresentable.md) and use the [gesture(\_:)](view/gesture%28__%29.md) modifier to attach it. The system calls the methods of your representable instance at appropriate times to create and update the gesture recognizer.

The following example shows the inclusion of a custom `MyGestureRecognizer` structure in the view hierarchy.

```swift
struct ContentView: View {
   var body: some View {
      VStack {
         Image("Mountain")
             .gesture(MyGestureRecognizer())
      }
   }
}
```

[NSGestureRecognizerRepresentable](nsgesturerecognizerrepresentable.md) types can use the environment and have data dependencies, similar to views and view representables. The system will call the appropriate methods on your instance to propagate the latest data.

<a id="Handling-Gesture-Recognizer-Actions"></a>

## Handling Gesture Recognizer Actions

SwiftUI automatically installs a target to handle the gesture recognizer’s action on your behalf. Implement the `handleNSGestureRecognizerAction` method to react to the gesture recognizing its action.

You can optionally include a coordinator object to forward delegate messages from your gesture recognizer or add additional targets.

<a id="Coordinate-Space-Conversions"></a>

## Coordinate Space Conversions

The gesture recognizer you create may not be attached to an `NSView` in the hierarchy, or it may return a view with different geometry than your SwiftUI view.

To handle this, use the converter on the context to perform coordinate space conversions from the global coordinate space. You can pass the gesture recognizer and a SwiftUI coordinate space to the converter to retrieve a final converted point. Passing the [local](coordinatespaceprotocol/local.md) coordinate space (the default) will provide the point in the SwiftUI view the gesture recognizer is attached to.

## Topics

### Associated Types

- [Coordinator](nsgesturerecognizerrepresentable/coordinator.md): A type to coordinate with the gesture recognizer.
- [NSGestureRecognizerType](nsgesturerecognizerrepresentable/nsgesturerecognizertype.md): The type of `NSGestureRecognizer` to be presented.

### Instance Methods

- [handleNSGestureRecognizerAction(\_:context:)](nsgesturerecognizerrepresentable/handlensgesturerecognizeraction%28__context_%29.md): Handles recognition of the represented `NSGestureRecognizer`.
- [makeCoordinator(converter:)](nsgesturerecognizerrepresentable/makecoordinator%28converter_%29.md): Creates the custom object that you use to communicate state changes from your gesture recognizer to other parts of your SwiftUI interface.
- [makeNSGestureRecognizer(context:)](nsgesturerecognizerrepresentable/makensgesturerecognizer%28context_%29.md): Creates an instance of the represented gesture recognizer.
- [updateNSGestureRecognizer(\_:context:)](nsgesturerecognizerrepresentable/updatensgesturerecognizer%28__context_%29.md): Updates the `NSGestureRecognizer` (and coordinator) to the latest configuration.

### Type Aliases

- [NSGestureRecognizerRepresentable.Context](nsgesturerecognizerrepresentable/context.md): Contextual information about the state of the system that you use to create and update your gesture recognizer.
- [NSGestureRecognizerRepresentable.CoordinateSpaceConverter](nsgesturerecognizerrepresentable/coordinatespaceconverter.md): A type used to convert coordinates to/from coordinate spaces in the hierarchy of the associated SwiftUI view.

## See Also

### Adding AppKit gesture recognizers into SwiftUI view hierarchies

- [NSGestureRecognizerRepresentableContext](nsgesturerecognizerrepresentablecontext.md): Contextual information about the state of the system that you use to create and update a represented gesture recognizer.
- [NSGestureRecognizerRepresentableCoordinateSpaceConverter](nsgesturerecognizerrepresentablecoordinatespaceconverter.md): A structure used to convert locations to and from coordinate spaces in the hierarchy of the SwiftUI view associated with an [NSGestureRecognizerRepresentable](nsgesturerecognizerrepresentable.md).
