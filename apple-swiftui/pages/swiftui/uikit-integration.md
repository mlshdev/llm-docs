> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uikit-integration](https://developer.apple.com/documentation/swiftui/uikit-integration)

# UIKit integration

**Framework:** SwiftUI  
**Kind:** API Collection

Add UIKit views to your SwiftUI app, or use SwiftUI views in your UIKit app.

<a id="Overview"></a>

## Overview

Integrate SwiftUI with your app’s existing content using hosting controllers to add SwiftUI views into UIKit interfaces. A hosting controller wraps a set of SwiftUI views in a form that you can then add to your storyboard-based app.

![](https://developer.apple.com/images/com.apple.SwiftUI/uikit-integration-hero@2x.png)

You can also add UIKit views and view controllers to your SwiftUI interfaces. A representable object wraps the designated view or view controller, and facilitates communication between the wrapped object and your SwiftUI views.

For design guidance, see the following sections in the Human Interface Guidelines:

- [Designing for iOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-ios)
- [Designing for iPadOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados)
- [Designing for tvOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-tvos)

## Topics

### Displaying SwiftUI views in UIKit

- [Using SwiftUI with UIKit](https://developer.apple.com/documentation/uikit/using-swiftui-with-uikit): Learn how to incorporate SwiftUI views into a UIKit app.
- [Unifying your app’s animations](unifying-your-app-s-animations.md): Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.
- [UIHostingController](uihostingcontroller.md): A UIKit view controller that manages a SwiftUI view hierarchy.
- [UIHostingControllerSizingOptions](uihostingcontrollersizingoptions.md): Options for how a hosting controller tracks its content’s size.
- [UIHostingConfiguration](uihostingconfiguration.md): A content configuration suitable for hosting a hierarchy of SwiftUI views.
- [UIHostingSceneDelegate](uihostingscenedelegate.md): Extends `UIKit/UISceneDelegate` to bridge SwiftUI scenes.

### Adding UIKit views to SwiftUI view hierarchies

- [UIViewRepresentable](uiviewrepresentable.md): A wrapper for a UIKit view that you use to integrate that view into your SwiftUI view hierarchy.
- [UIViewRepresentableContext](uiviewrepresentablecontext.md): Contextual information about the state of the system that you use to create and update your UIKit view.
- [UIViewControllerRepresentable](uiviewcontrollerrepresentable.md): A view that represents a UIKit view controller.
- [UIViewControllerRepresentableContext](uiviewcontrollerrepresentablecontext.md): Contextual information about the state of the system that you use to create and update your UIKit view controller.

### Adding UIKit gesture recognizers into SwiftUI view hierarchies

- [UIGestureRecognizerRepresentable](uigesturerecognizerrepresentable.md): A wrapper for a `UIGestureRecognizer` that you use to integrate that gesture recognizer into your SwiftUI hierarchy.
- [UIGestureRecognizerRepresentableContext](uigesturerecognizerrepresentablecontext.md): Contextual information about the state of the system that you use to create and update a represented gesture recognizer.
- [UIGestureRecognizerRepresentableCoordinateSpaceConverter](uigesturerecognizerrepresentablecoordinatespaceconverter.md): A proxy structure used to convert locations to/from coordinate spaces in the hierarchy of the SwiftUI view associated with a [UIGestureRecognizerRepresentable](uigesturerecognizerrepresentable.md).

### Sharing configuration information

- [UITraitBridgedEnvironmentKey](uitraitbridgedenvironmentkey.md)

### Hosting an ornament in UIKit

- [UIHostingOrnament](uihostingornament.md): A model that represents an ornament suitable for being hosted in UIKit.
- [UIOrnament](uiornament.md): The abstract base class that represents an ornament.

## See Also

### Framework integration

- [AppKit integration](appkit-integration.md): Add AppKit views to your SwiftUI app, or use SwiftUI views in your AppKit app.
- [WatchKit integration](watchkit-integration.md): Add WatchKit views to your SwiftUI app, or use SwiftUI views in your WatchKit app.
- [Technology-specific views](technology-specific-views.md): Use SwiftUI views that other Apple frameworks provide.
