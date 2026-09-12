> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewcontrollerrepresentable](https://developer.apple.com/documentation/swiftui/nsviewcontrollerrepresentable)

# NSViewControllerRepresentable

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A wrapper that you use to integrate an AppKit view controller into your SwiftUI interface.

## Declaration

```swift
@MainActor @preconcurrency protocol NSViewControllerRepresentable : View where Self.Body == Never
```

<a id="overview"></a>

## Overview

Use an [NSViewControllerRepresentable](nsviewcontrollerrepresentable.md) instance to create and manage an [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller) object in your SwiftUI interface. Adopt this protocol in one of your app’s custom instances, and use its methods to create, update, and tear down your view controller. The creation and update processes parallel the behavior of SwiftUI views, and you use them to configure your view controller with your app’s current state information. Use the teardown process to remove your view controller cleanly from your SwiftUI. For example, you might use the teardown process to notify other objects that the view controller is disappearing.

To add your view controller into your SwiftUI interface, create your `NSViewControllerRepresentable` instance and add it to your SwiftUI interface. The system calls the methods of your custom instance at appropriate times.

The system doesn’t automatically communicate changes occurring within your view controller to other parts of your SwiftUI interface. When you want your view controller to coordinate with other SwiftUI views, you must provide a [Coordinator](nsviewcontrollerrepresentable/coordinator.md) instance to facilitate those interactions. For example, you use a coordinator to forward target-action and delegate messages from your view controller to any SwiftUI views.

> **Warning**

> SwiftUI fully controls the layout of the AppKit view controller’s view using the view’s [frame](https://developer.apple.com/documentation/appkit/nsview/frame) and [bounds](https://developer.apple.com/documentation/appkit/nsview/bounds) properties. Don’t directly set these layout-related properties on the view managed by an `NSViewControllerRepresentable` instance from your own code because that conflicts with SwiftUI and results in undefined behavior.

## Topics

### Creating and updating the view controller

- [makeNSViewController(context:)](nsviewcontrollerrepresentable/makensviewcontroller%28context_%29.md): Creates the view controller object and configures its initial state.
- [updateNSViewController(\_:context:)](nsviewcontrollerrepresentable/updatensviewcontroller%28__context_%29.md): Updates the state of the specified view controller with new information from SwiftUI.
- [NSViewControllerRepresentable.Context](nsviewcontrollerrepresentable/context.md)
- [NSViewControllerType](nsviewcontrollerrepresentable/nsviewcontrollertype.md): The type of view controller to present.

### Specifying a size

- [sizeThatFits(\_:nsViewController:context:)](nsviewcontrollerrepresentable/sizethatfits%28__nsviewcontroller_context_%29.md): Given a proposed size, returns the preferred size of the composite view.

### Cleaning up the view controller

- [dismantleNSViewController(\_:coordinator:)](nsviewcontrollerrepresentable/dismantlensviewcontroller%28__coordinator_%29.md): Cleans up the presented view controller (and coordinator) in anticipation of its removal.

### Providing a custom coordinator object

- [makeCoordinator()](nsviewcontrollerrepresentable/makecoordinator%28%29.md): Creates the custom object that you use to communicate changes from your view controller to other parts of your SwiftUI interface.
- [Coordinator](nsviewcontrollerrepresentable/coordinator.md): A type to coordinate with the view controller.

### Performing layout

- [NSViewControllerRepresentable.LayoutOptions](nsviewcontrollerrepresentable/layoutoptions.md)

## Relationships

### Inherits From

- [View](view.md)

## See Also

### Adding AppKit views to SwiftUI view hierarchies

- [NSViewRepresentable](nsviewrepresentable.md): A wrapper that you use to integrate an AppKit view into your SwiftUI view hierarchy.
- [NSViewRepresentableContext](nsviewrepresentablecontext.md): Contextual information about the state of the system that you use to create and update your AppKit view.
- [NSViewControllerRepresentableContext](nsviewcontrollerrepresentablecontext.md): Contextual information about the state of the system that you use to create and update your AppKit view controller.
