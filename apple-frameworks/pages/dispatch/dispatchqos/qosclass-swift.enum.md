> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqos/qosclass-swift.enum](https://developer.apple.com/documentation/dispatch/dispatchqos/qosclass-swift.enum)

# DispatchQoS.QoSClass

**Framework:** Dispatch  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Quality-of-service classes that specify the priorities for executing tasks.

## Declaration

```swift
enum QoSClass
```

<a id="overview"></a>

## Overview

Use quality-of-service classes to communicate the intent behind the work that your app performs. The system uses those intentions to determine the best way to execute your tasks given the available resources. For example, the system gives higher priority to threads that contain user-interactive tasks to ensure that those tasks are executed quickly. Conversely, it gives lower priority to background tasks, and may attempt to save power by executing them on more power-efficient CPU cores. The system determines how to execute your tasks dynamically based on system conditions and the tasks you schedule.

## Topics

### Getting the Quality-of-Service Class

- [DispatchQoS.QoSClass.userInteractive](qosclass-swift.enum/userinteractive.md): The quality-of-service class for user-interactive tasks, such as animations, event handling, or updating your app’s user interface.
- [DispatchQoS.QoSClass.userInitiated](qosclass-swift.enum/userinitiated.md): The quality-of-service class for tasks that prevent the user from actively using your app.
- [DispatchQoS.QoSClass.default](qosclass-swift.enum/default.md): The default quality-of-service class.
- [DispatchQoS.QoSClass.utility](qosclass-swift.enum/utility.md): The quality-of-service class for tasks that the user does not track actively.
- [DispatchQoS.QoSClass.background](qosclass-swift.enum/background.md): The quality-of-service class for maintenance or cleanup tasks that you create.
- [DispatchQoS.QoSClass.unspecified](qosclass-swift.enum/unspecified.md): The absence of a quality-of-service class.

### Initializing the Type

- [init(rawValue:)](qosclass-swift.enum/init%28rawvalue_%29.md): Initializes the type with a raw value.
- [rawValue](qosclass-swift.enum/rawvalue.md): The value of the raw type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a QoS Structure

- [init(qosClass:relativePriority:)](init%28qosclass_relativepriority_%29.md): Creates a new `DispatchQoS` object with the specified QoS class and relative priority.
