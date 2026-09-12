> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uigesturerecognizerrepresentable](https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentable)

# UIGestureRecognizerRepresentable

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A wrapper for a `UIGestureRecognizer` that you use to integrate that gesture recognizer into your SwiftUI hierarchy.

## Declaration

```swift
@MainActor @preconcurrency protocol UIGestureRecognizerRepresentable
```

<a id="overview"></a>

## Overview

Use a [UIGestureRecognizerRepresentable](uigesturerecognizerrepresentable.md) instance to create and manage a [UIGestureRecognizer](https://developer.apple.com/documentation/uikit/uigesturerecognizer) object in your SwiftUI interface.

To add your gesture recognizer to a SwiftUI view, create an instance of [UIGestureRecognizerRepresentable](uigesturerecognizerrepresentable.md) and use the [gesture(\_:)](view/gesture%28__%29.md) modifier to attach it. The system calls the methods of your representable instance at appropriate times to create and update the gesture recognizer.

The following example shows the inclusion of a custom `MyGestureRecognizer` structure in the view hierarchy.

```swift
struct ContentView: View {
   var body: some View {
      VStack {
         Image("Mountain").gesture(MyGestureRecognizer())
      }
   }
}
```

Because your [UIGestureRecognizerRepresentable](uigesturerecognizerrepresentable.md) is a struct, it can use the environment, have data dependencies, and is more similar to views in SwiftUI. The system will call the appropriate methods on your instance to propagate the latest data.

<a id="Handling-Gesture-Recognizer-Actions"></a>

## Handling Gesture Recognizer Actions

SwiftUI automatically installs a target to handle the gesture recognizer’s action on your behalf. Implement the `handleUIGestureRecognizerAction` method to react to the gesture recognizing its action.

You can optionally include a coordinator object to forward delegate messages from your gesture recognizer or add additional targets.

<a id="Coordinate-Space-Conversions"></a>

## Coordinate Space Conversions

The gesture recognizer you create may not be attached to a `UIView` in the hierarchy, or it may return a view with different geometry than your SwiftUI view.

To handle this, use the converter on the context to perform coordinate space conversions from the global coordinate space. You can pass the gesture recognizer and a SwiftUI coordinate space to the converter to retrieve a final converted point. Passing the [local](coordinatespaceprotocol/local.md) coordinate space (the default) will provide the point in the SwiftUI view the gesture recognizer is attached to.

## Topics

### Associated Types

- [Coordinator](uigesturerecognizerrepresentable/coordinator.md): A type to coordinate with the gesture recognizer.
- [UIGestureRecognizerType](uigesturerecognizerrepresentable/uigesturerecognizertype.md): The type of `UIGestureRecognizer` to be presented.

### Instance Methods

- [handleUIGestureRecognizerAction(\_:context:)](uigesturerecognizerrepresentable/handleuigesturerecognizeraction%28__context_%29.md): Handles recognition of the represented `UIGestureRecognizer`.
- [makeCoordinator(converter:)](uigesturerecognizerrepresentable/makecoordinator%28converter_%29.md): Creates the custom object that you use to communicate state changes from your gesture recognizer to other parts of your SwiftUI interface.
- [makeUIGestureRecognizer(context:)](uigesturerecognizerrepresentable/makeuigesturerecognizer%28context_%29.md): Creates an instance of the represented gesture recognizer.
- [updateUIGestureRecognizer(\_:context:)](uigesturerecognizerrepresentable/updateuigesturerecognizer%28__context_%29.md): Updates the `UIGestureRecognizer` (and coordinator) to the latest configuration.

### Type Aliases

- [UIGestureRecognizerRepresentable.Context](uigesturerecognizerrepresentable/context.md): Contextual information about the state of the system that you use to create and update your gesture recognizer.
- [UIGestureRecognizerRepresentable.CoordinateSpaceConverter](uigesturerecognizerrepresentable/coordinatespaceconverter.md): A type used to convert coordinates to/from coordinate spaces in the hierarchy of the associated SwiftUI view.

## See Also

### Adding UIKit gesture recognizers into SwiftUI view hierarchies

- [UIGestureRecognizerRepresentableContext](uigesturerecognizerrepresentablecontext.md): Contextual information about the state of the system that you use to create and update a represented gesture recognizer.
- [UIGestureRecognizerRepresentableCoordinateSpaceConverter](uigesturerecognizerrepresentablecoordinatespaceconverter.md): A proxy structure used to convert locations to/from coordinate spaces in the hierarchy of the SwiftUI view associated with a [UIGestureRecognizerRepresentable](uigesturerecognizerrepresentable.md).
