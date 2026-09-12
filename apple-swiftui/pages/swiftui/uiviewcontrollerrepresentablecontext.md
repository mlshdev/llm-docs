> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uiviewcontrollerrepresentablecontext](https://developer.apple.com/documentation/swiftui/uiviewcontrollerrepresentablecontext)

# UIViewControllerRepresentableContext

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

Contextual information about the state of the system that you use to create and update your UIKit view controller.

## Declaration

```swift
@MainActor @preconcurrency struct UIViewControllerRepresentableContext<Representable> where Representable : UIViewControllerRepresentable
```

<a id="overview"></a>

## Overview

A [UIViewControllerRepresentableContext](uiviewcontrollerrepresentablecontext.md) structure contains details about the current state of the system. When creating and updating your view controller, the system creates one of these structures and passes it to the appropriate method of your custom [UIViewControllerRepresentable](uiviewcontrollerrepresentable.md) instance. Use the information in this structure to configure your view controller. For example, use the provided environment values to configure the appearance of your view controller and views. Don’t create this structure yourself.

## Topics

### Coordinating view controller interactions

- [coordinator](uiviewcontrollerrepresentablecontext/coordinator.md): The view’s associated coordinator.
- [transaction](uiviewcontrollerrepresentablecontext/transaction.md): The current transaction.

### Getting the environment data

- [environment](uiviewcontrollerrepresentablecontext/environment.md): Environment values that describe the current state of the system.

### Instance Methods

- [animate(changes:completion:)](uiviewcontrollerrepresentablecontext/animate%28changes_completion_%29.md): Animates changes using the animation in the current transaction.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding UIKit views to SwiftUI view hierarchies

- [UIViewRepresentable](uiviewrepresentable.md): A wrapper for a UIKit view that you use to integrate that view into your SwiftUI view hierarchy.
- [UIViewRepresentableContext](uiviewrepresentablecontext.md): Contextual information about the state of the system that you use to create and update your UIKit view.
- [UIViewControllerRepresentable](uiviewcontrollerrepresentable.md): A view that represents a UIKit view controller.
