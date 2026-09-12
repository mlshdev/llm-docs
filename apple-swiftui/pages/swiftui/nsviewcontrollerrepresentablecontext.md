> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewcontrollerrepresentablecontext](https://developer.apple.com/documentation/swiftui/nsviewcontrollerrepresentablecontext)

# NSViewControllerRepresentableContext

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 10.15+

Contextual information about the state of the system that you use to create and update your AppKit view controller.

## Declaration

```swift
@MainActor @preconcurrency struct NSViewControllerRepresentableContext<ViewController> where ViewController : NSViewControllerRepresentable
```

<a id="overview"></a>

## Overview

An [NSViewControllerRepresentableContext](nsviewcontrollerrepresentablecontext.md) structure contains details about the current state of the system. When creating and updating your view controller, the system creates one of these structures and passes it to the appropriate method of your custom [NSViewControllerRepresentable](nsviewcontrollerrepresentable.md) instance. Use the information in this structure to configure your view controller. For example, use the provided environment values to configure the appearance of your view controller and views. Don’t create this structure yourself.

## Topics

### Coordinating view-related interactions

- [coordinator](nsviewcontrollerrepresentablecontext/coordinator.md): An object you use to communicate your AppKit view controller’s behavior and state out to SwiftUI objects.
- [transaction](nsviewcontrollerrepresentablecontext/transaction.md): The current transaction.

### Getting the current environment data

- [environment](nsviewcontrollerrepresentablecontext/environment.md): Environment data that describes the current state of the system.

### Instance Methods

- [animate(changes:completion:)](nsviewcontrollerrepresentablecontext/animate%28changes_completion_%29.md): Conforms when `ViewController` conforms to `NSViewControllerRepresentable`. Animates changes using the animation in the current transaction.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding AppKit views to SwiftUI view hierarchies

- [NSViewRepresentable](nsviewrepresentable.md): A wrapper that you use to integrate an AppKit view into your SwiftUI view hierarchy.
- [NSViewRepresentableContext](nsviewrepresentablecontext.md): Contextual information about the state of the system that you use to create and update your AppKit view.
- [NSViewControllerRepresentable](nsviewcontrollerrepresentable.md): A wrapper that you use to integrate an AppKit view controller into your SwiftUI interface.
