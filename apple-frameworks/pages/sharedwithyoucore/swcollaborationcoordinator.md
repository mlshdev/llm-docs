> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationcoordinator](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationcoordinator)

# SWCollaborationCoordinator (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that contains the shared collaboration coordinator.

## Declaration

```swift
class SWCollaborationCoordinator
```

<a id="overview"></a>

## Overview

`SWCollaborationCoordinator` is a singleton, meaning there’s a global shared instance. The singleton invokes its [actionHandler](swcollaborationcoordinator/actionhandler.md) delegate to coordinate new collaborations and updates to existing collaborations.

Register the delegate soon after launch and handle actions immediately to avoid timeouts. Here’s how to set up the collaboration coordinator after your app finishes launching:

1. Access the singleton coordinator instance through the shared property.
2. Then, in the app delegate’s [application(\_:didFinishLaunchingWithOptions:)](../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method, set the `actionHandler` property to an object that conforms to the [SWCollaborationActionHandler](swcollaborationactionhandler.md) protocol.

> **Related Sessions from WWDC22**

>  Session 10093: [Integrate your custom collaboration app with Messages](https://developer.apple.com/videos/play/wwdc2022/10093/)

## Topics

### Accessing coordinator attributes

- [shared](swcollaborationcoordinator/shared.md): The shared collaboration coordinator.
- [actionHandler](swcollaborationcoordinator/actionhandler.md): The collaboration action handler.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# SWCollaborationCoordinator (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that contains the shared collaboration coordinator.

## Declaration

```objectivec
@interface SWCollaborationCoordinator : NSObject
```

<a id="overview"></a>

## Overview

`SWCollaborationCoordinator` is a singleton, meaning there’s a global shared instance. The singleton invokes its [actionHandler](swcollaborationcoordinator/actionhandler.md) delegate to coordinate new collaborations and updates to existing collaborations.

Register the delegate soon after launch and handle actions immediately to avoid timeouts. Here’s how to set up the collaboration coordinator after your app finishes launching:

1. Access the singleton coordinator instance through the shared property.
2. Then, in the app delegate’s [application:didFinishLaunchingWithOptions:](../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method, set the `actionHandler` property to an object that conforms to the [SWCollaborationActionHandler](swcollaborationactionhandler.md) protocol.

> **Related Sessions from WWDC22**

>  Session 10093: [Integrate your custom collaboration app with Messages](https://developer.apple.com/videos/play/wwdc2022/10093/)

## Topics

### Accessing coordinator attributes

- [sharedCoordinator](swcollaborationcoordinator/shared.md): The shared collaboration coordinator.
- [actionHandler](swcollaborationcoordinator/actionhandler.md): The collaboration action handler.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
