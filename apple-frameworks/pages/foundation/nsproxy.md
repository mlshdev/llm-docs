> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsproxy](https://developer.apple.com/documentation/foundation/nsproxy)

# NSProxy (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract superclass defining an API for objects that act as stand-ins for other objects or for objects that don’t exist yet.

## Declaration

```swift
class NSProxy
```

<a id="overview"></a>

## Overview

Typically, a message to a proxy is forwarded to the real object or causes the proxy to load (or transform itself into) the real object. Subclasses of [NSProxy](nsproxy.md) can be used to implement transparent distributed messaging (for example, [NSDistantObject](nsdistantobject.md)) or for lazy instantiation of objects that are expensive to create.

[NSProxy](nsproxy.md) implements the basic methods required of a root class, including those defined in the [NSObjectProtocol](../objectivec/nsobjectprotocol.md) protocol. However, as an abstract class it doesn’t provide an initialization method, and it raises an exception upon receiving any message it doesn’t respond to. A concrete subclass must therefore provide an initialization or creation method and override the [forwardInvocation(\_:)](nsproxy/forwardinvocation%28__%29.md) and [methodSignatureForSelector:](nsproxy/methodsignatureforselector_.md) methods to handle messages that it doesn’t implement itself. A subclass’s implementation of [forwardInvocation(\_:)](nsproxy/forwardinvocation%28__%29.md) should do whatever is needed to process the invocation, such as forwarding the invocation over the network or loading the real object and passing it the invocation. [methodSignatureForSelector:](nsproxy/methodsignatureforselector_.md) is required to provide argument type information for a given message; a subclass’s implementation should be able to determine the argument types for the messages it needs to forward and should construct an [NSMethodSignature](nsmethodsignature.md) object accordingly. See the [NSDistantObject](nsdistantobject.md), [NSInvocation](nsinvocation.md), and [NSMethodSignature](nsmethodsignature.md) class specifications for more information.

## Topics

### Creating Instances

- [alloc()](nsproxy/alloc%28%29.md): Returns a new instance of the receiving class

### Deallocating Instances

- [dealloc()](nsproxy/dealloc%28%29.md): Deallocates the memory occupied by the receiver.

### Finalizing an Object

- [finalize()](nsproxy/finalize%28%29.md): The garbage collector invokes this method on the receiver before disposing of the memory it uses.

### Handling Unimplemented Methods

- [forwardInvocation(\_:)](nsproxy/forwardinvocation%28__%29.md): Passes a given invocation to the real object the proxy represents.

### Introspecting a Proxy Class

- [responds(to:)](nsproxy/responds%28to_%29.md): Returns a Boolean value that indicates whether the receiving class responds to a given selector.

### Describing a Proxy Class or Object

- [class()](nsproxy/class%28%29.md): Returns `self` (the class object).
- [description](nsproxy/description.md): A string containing the real class name and the id of the receiver as a hexadecimal number.
- [debugDescription](nsproxy/debugdescription.md): A string containing a human-readable description of the receiver suitable for debugging.

## Relationships

### Inherited By

- [NSProtocolChecker](nsprotocolchecker.md)

### Conforms To

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# NSProxy (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract superclass defining an API for objects that act as stand-ins for other objects or for objects that don’t exist yet.

## Declaration

```objectivec
@interface NSProxy
```

<a id="overview"></a>

## Overview

Typically, a message to a proxy is forwarded to the real object or causes the proxy to load (or transform itself into) the real object. Subclasses of [NSProxy](nsproxy.md) can be used to implement transparent distributed messaging (for example, [NSDistantObject](nsdistantobject.md)) or for lazy instantiation of objects that are expensive to create.

[NSProxy](nsproxy.md) implements the basic methods required of a root class, including those defined in the [NSObject](../objectivec/nsobjectprotocol.md) protocol. However, as an abstract class it doesn’t provide an initialization method, and it raises an exception upon receiving any message it doesn’t respond to. A concrete subclass must therefore provide an initialization or creation method and override the [forwardInvocation:](nsproxy/forwardinvocation%28__%29.md) and [methodSignatureForSelector:](nsproxy/methodsignatureforselector_.md) methods to handle messages that it doesn’t implement itself. A subclass’s implementation of [forwardInvocation:](nsproxy/forwardinvocation%28__%29.md) should do whatever is needed to process the invocation, such as forwarding the invocation over the network or loading the real object and passing it the invocation. [methodSignatureForSelector:](nsproxy/methodsignatureforselector_.md) is required to provide argument type information for a given message; a subclass’s implementation should be able to determine the argument types for the messages it needs to forward and should construct an [NSMethodSignature](nsmethodsignature.md) object accordingly. See the [NSDistantObject](nsdistantobject.md), [NSInvocation](nsinvocation.md), and [NSMethodSignature](nsmethodsignature.md) class specifications for more information.

## Topics

### Creating Instances

- [alloc](nsproxy/alloc%28%29.md): Returns a new instance of the receiving class
- [allocWithZone:](nsproxy/allocwithzone_.md): Returns a new instance of the receiving class

### Deallocating Instances

- [dealloc](nsproxy/dealloc%28%29.md): Deallocates the memory occupied by the receiver.

### Finalizing an Object

- [finalize](nsproxy/finalize%28%29.md): The garbage collector invokes this method on the receiver before disposing of the memory it uses.

### Handling Unimplemented Methods

- [forwardInvocation:](nsproxy/forwardinvocation%28__%29.md): Passes a given invocation to the real object the proxy represents.
- [methodSignatureForSelector:](nsproxy/methodsignatureforselector_.md): Raises `NSInvalidArgumentException`. Override this method in your concrete subclass to return a proper `NSMethodSignature` object for the given selector and the class your proxy objects stand in for.

### Introspecting a Proxy Class

- [respondsToSelector:](nsproxy/responds%28to_%29.md): Returns a Boolean value that indicates whether the receiving class responds to a given selector.

### Describing a Proxy Class or Object

- [class](nsproxy/class%28%29.md): Returns `self` (the class object).
- [description](nsproxy/description.md): A string containing the real class name and the id of the receiver as a hexadecimal number.
- [debugDescription](nsproxy/debugdescription.md): A string containing a human-readable description of the receiver suitable for debugging.

### Instance Variables

- [isa](nsproxy/isa.md)

### Instance Methods

- [allowsWeakReference](nsproxy/allowsweakreference.md)
- [retainWeakReference](nsproxy/retainweakreference.md)

## Relationships

### Inherited By

- [NSDistantObject](nsdistantobject.md)
- [NSProtocolChecker](nsprotocolchecker.md)

### Conforms To

- [NSObject](../objectivec/nsobjectprotocol.md)
