> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_registerprotocol(_:)](https://developer.apple.com/documentation/objectivec/objc_registerprotocol(_:))

# objc_registerProtocol(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Registers a newly created protocol with the Objective-C runtime.

## Declaration

```swift
func objc_registerProtocol(_ proto: Protocol)
```

## Parameters

- `proto`: The protocol you want to register with the Objective-C runtime.

<a id="Discussion"></a>

## Discussion

When you create a new protocol using the [objc_allocateProtocol(\_:)](objc_allocateprotocol%28__%29.md), you then register it with the Objective-C runtime by calling this function. After a protocol is successfully registered, it is immutable and ready to use.

## See Also

### Working with Protocols

- [objc_getProtocol(\_:)](objc_getprotocol%28__%29.md): Returns a specified protocol.
- [objc_copyProtocolList(\_:)](objc_copyprotocollist%28__%29.md): Returns an array of all the protocols known to the runtime.
- [objc_allocateProtocol(\_:)](objc_allocateprotocol%28__%29.md): Creates a new protocol instance.
- [protocol_addMethodDescription(\_:\_:\_:\_:\_:)](protocol_addmethoddescription%28__________%29.md): Adds a method to a protocol.
- [protocol_addProtocol(\_:\_:)](protocol_addprotocol%28____%29.md): Adds a registered protocol to another protocol that is under construction.
- [protocol_addProperty(\_:\_:\_:\_:\_:\_:)](protocol_addproperty%28____________%29.md): Adds a property to a protocol that is under construction.
- [protocol_getName(\_:)](protocol_getname%28__%29.md): Returns the name of a protocol.
- [protocol_isEqual(\_:\_:)](protocol_isequal%28____%29.md): Returns a Boolean value that indicates whether two protocols are equal.
- [protocol_copyMethodDescriptionList(\_:\_:\_:\_:)](protocol_copymethoddescriptionlist%28________%29.md): Returns an array of method descriptions of methods meeting a given specification for a given protocol.
- [protocol_getMethodDescription(\_:\_:\_:\_:)](protocol_getmethoddescription%28________%29.md): Returns a method description structure for a specified method of a given protocol.
- [protocol_copyPropertyList(\_:\_:)](protocol_copypropertylist%28____%29.md): Returns an array of the properties declared by a protocol.
- [protocol_getProperty(\_:\_:\_:\_:)](protocol_getproperty%28________%29.md): Returns the specified property of a given protocol.
- [protocol_copyProtocolList(\_:\_:)](protocol_copyprotocollist%28____%29.md): Returns an array of the protocols adopted by a protocol.
- [protocol_conformsToProtocol(\_:\_:)](protocol_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether one protocol conforms to another protocol.

# objc_registerProtocol (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Registers a newly created protocol with the Objective-C runtime.

## Declaration

```objectivec
extern void objc_registerProtocol(Protocol *proto);
```

## Parameters

- `proto`: The protocol you want to register with the Objective-C runtime.

<a id="Discussion"></a>

## Discussion

When you create a new protocol using the [objc_allocateProtocol](objc_allocateprotocol%28__%29.md), you then register it with the Objective-C runtime by calling this function. After a protocol is successfully registered, it is immutable and ready to use.

## See Also

### Working with Protocols

- [objc_getProtocol](objc_getprotocol%28__%29.md): Returns a specified protocol.
- [objc_copyProtocolList](objc_copyprotocollist%28__%29.md): Returns an array of all the protocols known to the runtime.
- [objc_allocateProtocol](objc_allocateprotocol%28__%29.md): Creates a new protocol instance.
- [protocol_addMethodDescription](protocol_addmethoddescription%28__________%29.md): Adds a method to a protocol.
- [protocol_addProtocol](protocol_addprotocol%28____%29.md): Adds a registered protocol to another protocol that is under construction.
- [protocol_addProperty](protocol_addproperty%28____________%29.md): Adds a property to a protocol that is under construction.
- [protocol_getName](protocol_getname%28__%29.md): Returns the name of a protocol.
- [protocol_isEqual](protocol_isequal%28____%29.md): Returns a Boolean value that indicates whether two protocols are equal.
- [protocol_copyMethodDescriptionList](protocol_copymethoddescriptionlist%28________%29.md): Returns an array of method descriptions of methods meeting a given specification for a given protocol.
- [protocol_getMethodDescription](protocol_getmethoddescription%28________%29.md): Returns a method description structure for a specified method of a given protocol.
- [protocol_copyPropertyList](protocol_copypropertylist%28____%29.md): Returns an array of the properties declared by a protocol.
- [protocol_getProperty](protocol_getproperty%28________%29.md): Returns the specified property of a given protocol.
- [protocol_copyProtocolList](protocol_copyprotocollist%28____%29.md): Returns an array of the protocols adopted by a protocol.
- [protocol_conformsToProtocol](protocol_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether one protocol conforms to another protocol.
