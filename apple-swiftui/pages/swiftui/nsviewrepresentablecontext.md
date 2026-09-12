> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewrepresentablecontext](https://developer.apple.com/documentation/swiftui/nsviewrepresentablecontext)

# NSViewRepresentableContext

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 10.15+

Contextual information about the state of the system that you use to create and update your AppKit view.

## Declaration

```swift
@MainActor @preconcurrency struct NSViewRepresentableContext<View> where View : NSViewRepresentable
```

<a id="overview"></a>

## Overview

An [NSViewRepresentableContext](nsviewrepresentablecontext.md) structure contains details about the current state of the system. When creating and updating your view, the system creates one of these structures and passes it to the appropriate method of your custom [NSViewRepresentable](nsviewrepresentable.md) instance. Use the information in this structure to configure your view. For example, use the provided environment values to configure the appearance of your view. Don’t create this structure yourself.

## Topics

### Coordinating view-related interactions

- [coordinator](nsviewrepresentablecontext/coordinator.md): An instance you use to communicate your AppKit view’s behavior and state out to SwiftUI objects.
- [transaction](nsviewrepresentablecontext/transaction.md): The current transaction.

### Getting the current environment data

- [environment](nsviewrepresentablecontext/environment.md): Environment data that describes the current state of the system.

### Instance Methods

- [animate(changes:completion:)](nsviewrepresentablecontext/animate%28changes_completion_%29.md): Conforms when `View` conforms to `NSViewRepresentable`. Animates changes using the animation in the current transaction.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding AppKit views to SwiftUI view hierarchies

- [NSViewRepresentable](nsviewrepresentable.md): A wrapper that you use to integrate an AppKit view into your SwiftUI view hierarchy.
- [NSViewControllerRepresentable](nsviewcontrollerrepresentable.md): A wrapper that you use to integrate an AppKit view controller into your SwiftUI interface.
- [NSViewControllerRepresentableContext](nsviewcontrollerrepresentablecontext.md): Contextual information about the state of the system that you use to create and update your AppKit view controller.
