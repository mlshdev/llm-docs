> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkinterfaceobjectrepresentablecontext](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentablecontext)

# WKInterfaceObjectRepresentableContext

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** watchOS 6.0+

Contextual information about the state of the system that you use to create and update your WatchKit interface object.

## Declaration

```swift
@MainActor @preconcurrency struct WKInterfaceObjectRepresentableContext<Representable> where Representable : WKInterfaceObjectRepresentable
```

<a id="overview"></a>

## Overview

A [WKInterfaceObjectRepresentableContext](wkinterfaceobjectrepresentablecontext.md) structure contains details about the current state of the system. When creating and updating your interface objects, the system creates one of these structures and passes it to the appropriate method of your custom [WKInterfaceObjectRepresentable](wkinterfaceobjectrepresentable.md) instance. Use the information in this structure to configure your object. Don’t create this structure yourself.

## Topics

### Coordinating interactions

- [coordinator](wkinterfaceobjectrepresentablecontext/coordinator.md): The view’s associated coordinator.
- [transaction](wkinterfaceobjectrepresentablecontext/transaction.md): The current transaction.

### Getting the current environment data

- [environment](wkinterfaceobjectrepresentablecontext/environment.md): The current environment.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding WatchKit views to SwiftUI view hierarchies

- [WKInterfaceObjectRepresentable](wkinterfaceobjectrepresentable.md): A view that represents a WatchKit interface object.
