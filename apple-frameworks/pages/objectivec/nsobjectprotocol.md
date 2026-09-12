> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobjectprotocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSObjectProtocol (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The group of methods that are fundamental to all Objective-C objects.

## Declaration

```swift
protocol NSObjectProtocol
```

<a id="overview"></a>

## Overview

> **Note**

>  This protocol is imported into Swift with the name `NSObjectProtocol`.

An object that conforms to this protocol can be considered a first-class object. Such an object can be asked about its:

- Class, and the place of its class in the inheritance hierarchy.
- Conformance to protocols.
- Ability to respond to a particular message.

The Cocoa root class [NSObject](nsobject-swift.class.md) adopts this protocol, so all objects inheriting from [NSObject](nsobject-swift.class.md) have the features described by this protocol.

## Topics

### Identifying Classes

- [superclass](nsobjectprotocol/superclass.md): Returns the class object for the receiver’s superclass.

### Identifying and Comparing Objects

- [isEqual(\_:)](nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.
- [hash](nsobjectprotocol/hash.md): Returns an integer that can be used as a table address in a hash table structure.
- [self()](nsobjectprotocol/self%28%29.md): Returns the receiver.

### Testing Object Inheritance, Behavior, and Conformance

- [isKind(of:)](nsobjectprotocol/iskind%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of given class or an instance of any class that inherits from that class.
- [isMember(of:)](nsobjectprotocol/ismember%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of a given class.
- [responds(to:)](nsobjectprotocol/responds%28to_%29.md): Returns a Boolean value that indicates whether the receiver implements or inherits a method that can respond to a specified message.
- [conforms(to:)](nsobjectprotocol/conforms%28to_%29.md): Returns a Boolean value that indicates whether the receiver conforms to a given protocol.

### Describing Objects

- [description](nsobjectprotocol/description.md): A textual representation of the receiver.
- [debugDescription](nsobjectprotocol/debugdescription.md): A textual representation of the receiver to use with a debugger.

### Sending Messages

- [perform(\_:)](nsobjectprotocol/perform%28__%29.md): Sends a specified message to the receiver and returns the result of the message.
- [perform(\_:with:)](nsobjectprotocol/perform%28__with_%29.md): Sends a message to the receiver with an object as the argument.
- [perform(\_:with:with:)](nsobjectprotocol/perform%28__with_with_%29.md): Sends a message to the receiver with two objects as arguments.

### Identifying Proxies

- [isProxy()](nsobjectprotocol/isproxy%28%29.md): Returns a Boolean value that indicates whether the receiver does not descend from [NSObject](nsobject-swift.class.md).

## Relationships

### Conforming Types

- [NSObject](nsobject-swift.class.md)

# NSObject (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The group of methods that are fundamental to all Objective-C objects.

## Declaration

```objectivec
@protocol NSObject
```

<a id="overview"></a>

## Overview

> **Note**

>  This protocol is imported into Swift with the name `NSObjectProtocol`.

An object that conforms to this protocol can be considered a first-class object. Such an object can be asked about its:

- Class, and the place of its class in the inheritance hierarchy.
- Conformance to protocols.
- Ability to respond to a particular message.

The Cocoa root class [NSObject](nsobject-swift.class.md) adopts this protocol, so all objects inheriting from [NSObject](nsobject-swift.class.md) have the features described by this protocol.

## Topics

### Identifying Classes

- [class](nsobject-c.protocol/class.md): Returns the class object for the receiver’s class.
- [superclass](nsobjectprotocol/superclass.md): Returns the class object for the receiver’s superclass.

### Identifying and Comparing Objects

- [isEqual:](nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.
- [hash](nsobjectprotocol/hash.md): Returns an integer that can be used as a table address in a hash table structure.
- [self](nsobjectprotocol/self%28%29.md): Returns the receiver.

### Testing Object Inheritance, Behavior, and Conformance

- [isKindOfClass:](nsobjectprotocol/iskind%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of given class or an instance of any class that inherits from that class.
- [isMemberOfClass:](nsobjectprotocol/ismember%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of a given class.
- [respondsToSelector:](nsobjectprotocol/responds%28to_%29.md): Returns a Boolean value that indicates whether the receiver implements or inherits a method that can respond to a specified message.
- [conformsToProtocol:](nsobjectprotocol/conforms%28to_%29.md): Returns a Boolean value that indicates whether the receiver conforms to a given protocol.

### Describing Objects

- [description](nsobjectprotocol/description.md): A textual representation of the receiver.
- [debugDescription](nsobjectprotocol/debugdescription.md): A textual representation of the receiver to use with a debugger.

### Sending Messages

- [performSelector:](nsobjectprotocol/perform%28__%29.md): Sends a specified message to the receiver and returns the result of the message.
- [performSelector:withObject:](nsobjectprotocol/perform%28__with_%29.md): Sends a message to the receiver with an object as the argument.
- [performSelector:withObject:withObject:](nsobjectprotocol/perform%28__with_with_%29.md): Sends a message to the receiver with two objects as arguments.

### Identifying Proxies

- [isProxy](nsobjectprotocol/isproxy%28%29.md): Returns a Boolean value that indicates whether the receiver does not descend from [NSObject](nsobject-swift.class.md).

### Obsolete Methods

- [retain](nsobject-c.protocol/retain.md): Increments the receiver’s reference count.
- [release](nsobject-c.protocol/release.md): Decrements the receiver’s reference count.
- [autorelease](nsobject-c.protocol/autorelease.md): Decrements the receiver’s retain count at the end of the current autorelease pool block.
- [retainCount](nsobject-c.protocol/retaincount.md): Do not use this method.
- [zone](nsobject-c.protocol/zone.md): Zones are deprecated and ignored by most classes that have it as a parameter.

## Relationships

### Conforming Types

- [NSObject](nsobject-swift.class.md)
