> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uiviewrepresentable](https://developer.apple.com/documentation/swiftui/uiviewrepresentable)

# UIViewRepresentable

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

A wrapper for a UIKit view that you use to integrate that view into your SwiftUI view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency protocol UIViewRepresentable : View where Self.Body == Never
```

<a id="overview"></a>

## Overview

Use a [UIViewRepresentable](uiviewrepresentable.md) instance to create and manage a [UIView](https://developer.apple.com/documentation/uikit/uiview) object in your SwiftUI interface. Adopt this protocol in one of your app’s custom instances, and use its methods to create, update, and tear down your view. The creation and update processes parallel the behavior of SwiftUI views, and you use them to configure your view with your app’s current state information. Use the teardown process to remove your view cleanly from your SwiftUI. For example, you might use the teardown process to notify other objects that the view is disappearing.

To add your view into your SwiftUI interface, create your [UIViewRepresentable](uiviewrepresentable.md) instance and add it to your SwiftUI interface. The system calls the methods of your representable instance at appropriate times to create and update the view. The following example shows the inclusion of a custom `MyRepresentedCustomView` structure in the view hierarchy.

```swift
struct ContentView: View {
   var body: some View {
      VStack {
         Text("Global Sales")
         MyRepresentedCustomView()
      }
   }
}
```

The system doesn’t automatically communicate changes occurring within your view to other parts of your SwiftUI interface. When you want your view to coordinate with other SwiftUI views, you must provide a [Coordinator](nsviewcontrollerrepresentable/coordinator.md) instance to facilitate those interactions. For example, you use a coordinator to forward target-action and delegate messages from your view to any SwiftUI views.

> **Warning**

> SwiftUI fully controls the layout of the UIKit view’s [center](https://developer.apple.com/documentation/uikit/uiview/center), [bounds](https://developer.apple.com/documentation/uikit/uiview/bounds), [frame](https://developer.apple.com/documentation/uikit/uiview/frame), and [transform](https://developer.apple.com/documentation/uikit/uiview/transform) properties. Don’t directly set these layout-related properties on the view managed by a `UIViewRepresentable` instance from your own code because that conflicts with SwiftUI and results in undefined behavior.

## Topics

### Creating and updating the view

- [makeUIView(context:)](uiviewrepresentable/makeuiview%28context_%29.md): Creates the view object and configures its initial state.
- [updateUIView(\_:context:)](uiviewrepresentable/updateuiview%28__context_%29.md): Updates the state of the specified view with new information from SwiftUI.
- [UIViewRepresentable.Context](uiviewrepresentable/context.md)
- [UIViewType](uiviewrepresentable/uiviewtype.md): The type of view to present.

### Specifying a size

- [sizeThatFits(\_:uiView:context:)](uiviewrepresentable/sizethatfits%28__uiview_context_%29.md): Given a proposed size, returns the preferred size of the composite view.

### Cleaning up the view

- [dismantleUIView(\_:coordinator:)](uiviewrepresentable/dismantleuiview%28__coordinator_%29.md): Cleans up the presented UIKit view (and coordinator) in anticipation of their removal.

### Providing a custom coordinator object

- [makeCoordinator()](uiviewrepresentable/makecoordinator%28%29.md): Creates the custom instance that you use to communicate changes from your view to other parts of your SwiftUI interface.
- [Coordinator](uiviewrepresentable/coordinator.md): A type to coordinate with the view.

### Performing layout

- [UIViewRepresentable.LayoutOptions](uiviewrepresentable/layoutoptions.md)

## Relationships

### Inherits From

- [View](view.md)

## See Also

### Adding UIKit views to SwiftUI view hierarchies

- [UIViewRepresentableContext](uiviewrepresentablecontext.md): Contextual information about the state of the system that you use to create and update your UIKit view.
- [UIViewControllerRepresentable](uiviewcontrollerrepresentable.md): A view that represents a UIKit view controller.
- [UIViewControllerRepresentableContext](uiviewcontrollerrepresentablecontext.md): Contextual information about the state of the system that you use to create and update your UIKit view controller.
