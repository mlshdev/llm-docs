> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/protocol_addproperty(_:_:_:_:_:_:)](https://developer.apple.com/documentation/objectivec/protocol_addproperty(_:_:_:_:_:_:))

# protocol_addProperty(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Adds a property to a protocol that is under construction.

## Declaration

```swift
func protocol_addProperty(_ proto: Protocol, _ name: UnsafePointer<CChar>, _ attributes: UnsafePointer<objc_property_attribute_t>?, _ attributeCount: UInt32, _ isRequiredProperty: Bool, _ isInstanceProperty: Bool)
```

## Parameters

- `proto`: The protocol you want to add a property to.
- `name`: The name of the property you want to add.
- `attributes`: An array of property attributes.
- `attributeCount`: The number of properties in `attributes`.
- `isRequiredProperty`: A Boolean indicating whether the property’s accessor methods are required methods of the `proto` protocol. If [YES](yes.md), the property’s accessor methods are required methods; if [NO](no.md), the property’s accessor methods are optional methods.
- `isInstanceProperty`: A Boolean indicating whether the property’s accessor methods are instance methods. If [YES](yes.md), the property’s accessor methods are instance methods. [YES](yes.md) is the only value allowed for a property. As a result, if you set this value to [NO](no.md), the property will not be added to the protocol.

<a id="Discussion"></a>

## Discussion

The protocol you want to add the property to must be under construction—allocated but not yet registered with the Objective-C runtime (via the [objc_registerProtocol(\_:)](objc_registerprotocol%28__%29.md) function).

## See Also

### Working with Protocols

- [objc_getProtocol(\_:)](objc_getprotocol%28__%29.md): Returns a specified protocol.
- [objc_copyProtocolList(\_:)](objc_copyprotocollist%28__%29.md): Returns an array of all the protocols known to the runtime.
- [objc_allocateProtocol(\_:)](objc_allocateprotocol%28__%29.md): Creates a new protocol instance.
- [objc_registerProtocol(\_:)](objc_registerprotocol%28__%29.md): Registers a newly created protocol with the Objective-C runtime.
- [protocol_addMethodDescription(\_:\_:\_:\_:\_:)](protocol_addmethoddescription%28__________%29.md): Adds a method to a protocol.
- [protocol_addProtocol(\_:\_:)](protocol_addprotocol%28____%29.md): Adds a registered protocol to another protocol that is under construction.
- [protocol_getName(\_:)](protocol_getname%28__%29.md): Returns the name of a protocol.
- [protocol_isEqual(\_:\_:)](protocol_isequal%28____%29.md): Returns a Boolean value that indicates whether two protocols are equal.
- [protocol_copyMethodDescriptionList(\_:\_:\_:\_:)](protocol_copymethoddescriptionlist%28________%29.md): Returns an array of method descriptions of methods meeting a given specification for a given protocol.
- [protocol_getMethodDescription(\_:\_:\_:\_:)](protocol_getmethoddescription%28________%29.md): Returns a method description structure for a specified method of a given protocol.
- [protocol_copyPropertyList(\_:\_:)](protocol_copypropertylist%28____%29.md): Returns an array of the properties declared by a protocol.
- [protocol_getProperty(\_:\_:\_:\_:)](protocol_getproperty%28________%29.md): Returns the specified property of a given protocol.
- [protocol_copyProtocolList(\_:\_:)](protocol_copyprotocollist%28____%29.md): Returns an array of the protocols adopted by a protocol.
- [protocol_conformsToProtocol(\_:\_:)](protocol_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether one protocol conforms to another protocol.

# protocol_addProperty (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Adds a property to a protocol that is under construction.

## Declaration

```objectivec
extern void protocol_addProperty(Protocol *proto, const char *name, const objc_property_attribute_t *attributes, unsigned int attributeCount, BOOL isRequiredProperty, BOOL isInstanceProperty);
```

## Parameters

- `proto`: The protocol you want to add a property to.
- `name`: The name of the property you want to add.
- `attributes`: An array of property attributes.
- `attributeCount`: The number of properties in `attributes`.
- `isRequiredProperty`: A Boolean indicating whether the property’s accessor methods are required methods of the `proto` protocol. If [YES](yes.md), the property’s accessor methods are required methods; if [NO](no.md), the property’s accessor methods are optional methods.
- `isInstanceProperty`: A Boolean indicating whether the property’s accessor methods are instance methods. If [YES](yes.md), the property’s accessor methods are instance methods. [YES](yes.md) is the only value allowed for a property. As a result, if you set this value to [NO](no.md), the property will not be added to the protocol.

<a id="Discussion"></a>

## Discussion

The protocol you want to add the property to must be under construction—allocated but not yet registered with the Objective-C runtime (via the [objc_registerProtocol](objc_registerprotocol%28__%29.md) function).

## See Also

### Working with Protocols

- [objc_getProtocol](objc_getprotocol%28__%29.md): Returns a specified protocol.
- [objc_copyProtocolList](objc_copyprotocollist%28__%29.md): Returns an array of all the protocols known to the runtime.
- [objc_allocateProtocol](objc_allocateprotocol%28__%29.md): Creates a new protocol instance.
- [objc_registerProtocol](objc_registerprotocol%28__%29.md): Registers a newly created protocol with the Objective-C runtime.
- [protocol_addMethodDescription](protocol_addmethoddescription%28__________%29.md): Adds a method to a protocol.
- [protocol_addProtocol](protocol_addprotocol%28____%29.md): Adds a registered protocol to another protocol that is under construction.
- [protocol_getName](protocol_getname%28__%29.md): Returns the name of a protocol.
- [protocol_isEqual](protocol_isequal%28____%29.md): Returns a Boolean value that indicates whether two protocols are equal.
- [protocol_copyMethodDescriptionList](protocol_copymethoddescriptionlist%28________%29.md): Returns an array of method descriptions of methods meeting a given specification for a given protocol.
- [protocol_getMethodDescription](protocol_getmethoddescription%28________%29.md): Returns a method description structure for a specified method of a given protocol.
- [protocol_copyPropertyList](protocol_copypropertylist%28____%29.md): Returns an array of the properties declared by a protocol.
- [protocol_getProperty](protocol_getproperty%28________%29.md): Returns the specified property of a given protocol.
- [protocol_copyProtocolList](protocol_copyprotocollist%28____%29.md): Returns an array of the protocols adopted by a protocol.
- [protocol_conformsToProtocol](protocol_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether one protocol conforms to another protocol.
