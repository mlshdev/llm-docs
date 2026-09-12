> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/protocol_copypropertylist(_:_:)](https://developer.apple.com/documentation/objectivec/protocol_copypropertylist(_:_:))

# protocol_copyPropertyList(\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of the properties declared by a protocol.

## Declaration

```swift
func protocol_copyPropertyList(_ proto: Protocol, _ outCount: UnsafeMutablePointer<UInt32>?) -> UnsafeMutablePointer<objc_property_t>?
```

## Parameters

- `proto`: A protocol.
- `outCount`: Upon return, contains the number of elements in the returned array.

<a id="return-value"></a>

## Return Value

A C array of pointers of type `objc_property_t` describing the properties declared by `proto`. Any properties declared by other protocols adopted by this protocol are not included. The array contains `*outCount` pointers followed by a `NULL` terminator. You must free the array with `free()`.

<a id="discussion"></a>

## Discussion

If the protocol declares no properties, `NULL` is returned and `*outCount` is `0`.

## See Also

### Working with Protocols

- [objc_getProtocol(\_:)](objc_getprotocol%28__%29.md): Returns a specified protocol.
- [objc_copyProtocolList(\_:)](objc_copyprotocollist%28__%29.md): Returns an array of all the protocols known to the runtime.
- [objc_allocateProtocol(\_:)](objc_allocateprotocol%28__%29.md): Creates a new protocol instance.
- [objc_registerProtocol(\_:)](objc_registerprotocol%28__%29.md): Registers a newly created protocol with the Objective-C runtime.
- [protocol_addMethodDescription(\_:\_:\_:\_:\_:)](protocol_addmethoddescription%28__________%29.md): Adds a method to a protocol.
- [protocol_addProtocol(\_:\_:)](protocol_addprotocol%28____%29.md): Adds a registered protocol to another protocol that is under construction.
- [protocol_addProperty(\_:\_:\_:\_:\_:\_:)](protocol_addproperty%28____________%29.md): Adds a property to a protocol that is under construction.
- [protocol_getName(\_:)](protocol_getname%28__%29.md): Returns the name of a protocol.
- [protocol_isEqual(\_:\_:)](protocol_isequal%28____%29.md): Returns a Boolean value that indicates whether two protocols are equal.
- [protocol_copyMethodDescriptionList(\_:\_:\_:\_:)](protocol_copymethoddescriptionlist%28________%29.md): Returns an array of method descriptions of methods meeting a given specification for a given protocol.
- [protocol_getMethodDescription(\_:\_:\_:\_:)](protocol_getmethoddescription%28________%29.md): Returns a method description structure for a specified method of a given protocol.
- [protocol_getProperty(\_:\_:\_:\_:)](protocol_getproperty%28________%29.md): Returns the specified property of a given protocol.
- [protocol_copyProtocolList(\_:\_:)](protocol_copyprotocollist%28____%29.md): Returns an array of the protocols adopted by a protocol.
- [protocol_conformsToProtocol(\_:\_:)](protocol_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether one protocol conforms to another protocol.

# protocol_copyPropertyList (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of the properties declared by a protocol.

## Declaration

```objectivec
extern objc_property_t*protocol_copyPropertyList(Protocol *proto, unsigned int *outCount);
```

## Parameters

- `proto`: A protocol.
- `outCount`: Upon return, contains the number of elements in the returned array.

<a id="return-value"></a>

## Return Value

A C array of pointers of type `objc_property_t` describing the properties declared by `proto`. Any properties declared by other protocols adopted by this protocol are not included. The array contains `*outCount` pointers followed by a `NULL` terminator. You must free the array with `free()`.

<a id="discussion"></a>

## Discussion

If the protocol declares no properties, `NULL` is returned and `*outCount` is `0`.

## See Also

### Working with Protocols

- [objc_getProtocol](objc_getprotocol%28__%29.md): Returns a specified protocol.
- [objc_copyProtocolList](objc_copyprotocollist%28__%29.md): Returns an array of all the protocols known to the runtime.
- [objc_allocateProtocol](objc_allocateprotocol%28__%29.md): Creates a new protocol instance.
- [objc_registerProtocol](objc_registerprotocol%28__%29.md): Registers a newly created protocol with the Objective-C runtime.
- [protocol_addMethodDescription](protocol_addmethoddescription%28__________%29.md): Adds a method to a protocol.
- [protocol_addProtocol](protocol_addprotocol%28____%29.md): Adds a registered protocol to another protocol that is under construction.
- [protocol_addProperty](protocol_addproperty%28____________%29.md): Adds a property to a protocol that is under construction.
- [protocol_getName](protocol_getname%28__%29.md): Returns the name of a protocol.
- [protocol_isEqual](protocol_isequal%28____%29.md): Returns a Boolean value that indicates whether two protocols are equal.
- [protocol_copyMethodDescriptionList](protocol_copymethoddescriptionlist%28________%29.md): Returns an array of method descriptions of methods meeting a given specification for a given protocol.
- [protocol_getMethodDescription](protocol_getmethoddescription%28________%29.md): Returns a method description structure for a specified method of a given protocol.
- [protocol_getProperty](protocol_getproperty%28________%29.md): Returns the specified property of a given protocol.
- [protocol_copyProtocolList](protocol_copyprotocollist%28____%29.md): Returns an array of the protocols adopted by a protocol.
- [protocol_conformsToProtocol](protocol_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether one protocol conforms to another protocol.
