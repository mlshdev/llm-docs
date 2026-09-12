> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/protocol_getmethoddescription(_:_:_:_:)](https://developer.apple.com/documentation/objectivec/protocol_getmethoddescription(_:_:_:_:))

# protocol_getMethodDescription(\_:\_:\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a method description structure for a specified method of a given protocol.

## Declaration

```swift
func protocol_getMethodDescription(_ proto: Protocol, _ aSel: Selector, _ isRequiredMethod: Bool, _ isInstanceMethod: Bool) -> objc_method_description
```

## Parameters

- `proto`: A protocol.
- `aSel`: A selector
- `isRequiredMethod`: A Boolean value that indicates whether `aSel` is a required method.
- `isInstanceMethod`: A Boolean value that indicates whether `aSel` is an instance method.

<a id="return-value"></a>

## Return Value

An `objc_method_description` structure that describes the method specified by `aSel`, `isRequiredMethod`, and `isInstanceMethod` for the protocol `p`.

<a id="discussion"></a>

## Discussion

If the protocol does not contain the specified method, returns an `objc_method_description` structure with the value `{NULL, NULL}`.

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
- [protocol_copyPropertyList(\_:\_:)](protocol_copypropertylist%28____%29.md): Returns an array of the properties declared by a protocol.
- [protocol_getProperty(\_:\_:\_:\_:)](protocol_getproperty%28________%29.md): Returns the specified property of a given protocol.
- [protocol_copyProtocolList(\_:\_:)](protocol_copyprotocollist%28____%29.md): Returns an array of the protocols adopted by a protocol.
- [protocol_conformsToProtocol(\_:\_:)](protocol_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether one protocol conforms to another protocol.

# protocol_getMethodDescription (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a method description structure for a specified method of a given protocol.

## Declaration

```objectivec
extern struct objc_method_description protocol_getMethodDescription(Protocol *proto, SEL aSel, BOOL isRequiredMethod, BOOL isInstanceMethod);
```

## Parameters

- `proto`: A protocol.
- `aSel`: A selector
- `isRequiredMethod`: A Boolean value that indicates whether `aSel` is a required method.
- `isInstanceMethod`: A Boolean value that indicates whether `aSel` is an instance method.

<a id="return-value"></a>

## Return Value

An `objc_method_description` structure that describes the method specified by `aSel`, `isRequiredMethod`, and `isInstanceMethod` for the protocol `p`.

<a id="discussion"></a>

## Discussion

If the protocol does not contain the specified method, returns an `objc_method_description` structure with the value `{NULL, NULL}`.

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
- [protocol_copyPropertyList](protocol_copypropertylist%28____%29.md): Returns an array of the properties declared by a protocol.
- [protocol_getProperty](protocol_getproperty%28________%29.md): Returns the specified property of a given protocol.
- [protocol_copyProtocolList](protocol_copyprotocollist%28____%29.md): Returns an array of the protocols adopted by a protocol.
- [protocol_conformsToProtocol](protocol_conformstoprotocol%28____%29.md): Returns a Boolean value that indicates whether one protocol conforms to another protocol.
