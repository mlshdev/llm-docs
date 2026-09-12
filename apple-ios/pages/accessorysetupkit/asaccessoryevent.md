> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessoryevent](https://developer.apple.com/documentation/accessorysetupkit/asaccessoryevent)

# ASAccessoryEvent (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Properties of an event encountered during accessory discovery.

## Declaration

```swift
class ASAccessoryEvent
```

## Mentioned In

- [Discovering and configuring accessories](discovering-and-configuring-accessories.md)

<a id="overview"></a>

## Overview

The event handler you register with the session’s [activate(on:eventHandler:)](asaccessorysession/activate%28on_eventhandler_%29.md) method receives objects of this type from the session. Each event identifies the type of event and which accessory (if any) is involved.

## Topics

### Inspecting the event

- [accessory](asaccessoryevent/accessory.md): The accessory involved in the event, if any.
- [ASAccessory](asaccessory.md): An accessory discovered by the accessory session.
- [eventType](asaccessoryevent/eventtype.md): The type of event, such as accessory addition or removal, or picker presentation or removal.
- [ASAccessoryEventType](asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery

### Handling errors

- [error](asaccessoryevent/error.md): The error associated with the event, if any.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessory discovery

- [ASAccessoryEventType](asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery
- [ASDiscoveryDescriptor](asdiscoverydescriptor.md): Descriptive traits used to discover accessories.

# ASAccessoryEvent (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Properties of an event encountered during accessory discovery.

## Declaration

```objectivec
@interface ASAccessoryEvent : NSObject
```

## Mentioned In

- [Discovering and configuring accessories](discovering-and-configuring-accessories.md)

<a id="overview"></a>

## Overview

The event handler you register with the session’s [activateWithQueue:eventHandler:](asaccessorysession/activate%28on_eventhandler_%29.md) method receives objects of this type from the session. Each event identifies the type of event and which accessory (if any) is involved.

## Topics

### Inspecting the event

- [accessory](asaccessoryevent/accessory.md): The accessory involved in the event, if any.
- [ASAccessory](asaccessory.md): An accessory discovered by the accessory session.
- [eventType](asaccessoryevent/eventtype.md): The type of event, such as accessory addition or removal, or picker presentation or removal.
- [ASAccessoryEventType](asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery

### Handling errors

- [error](asaccessoryevent/error.md): The error associated with the event, if any.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Accessory discovery

- [ASAccessoryEventType](asaccessoryeventtype.md): An enumeration of the types of events encountered during accessory discovery
- [ASDiscoveryDescriptor](asdiscoverydescriptor.md): Descriptive traits used to discover accessories.
