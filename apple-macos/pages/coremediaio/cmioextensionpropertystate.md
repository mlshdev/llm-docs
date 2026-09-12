> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionpropertystate](https://developer.apple.com/documentation/coremediaio/cmioextensionpropertystate)

# CMIOExtensionPropertyState (Swift)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that describes the state of a property.

## Declaration

```swift
class CMIOExtensionPropertyState<ObjectType> where ObjectType : AnyObject
```

<a id="overview"></a>

## Overview

Create a property state object by specifying the type of data it stores, which must be a [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber), [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary), [NSArray](https://developer.apple.com/documentation/foundation/nsarray), or [NSData](https://developer.apple.com/documentation/foundation/nsdata). You can optionally specify attributes that restrict the range of values a property allows.

## Topics

### Creating a Property State

- [init(value:)](cmioextensionpropertystate/init%28value_%29.md): Creates a property state with a value.
- [init(value:attributes:)](cmioextensionpropertystate/init%28value_attributes_%29.md): Creates a property state with a value and attributes.

### Inspecting a Property State

- [value](cmioextensionpropertystate/value.md): The value for a property state.
- [attributes](cmioextensionpropertystate/attributes.md): The attributes for a property state.

### Initializers

- [init(coder:)](cmioextensionpropertystate/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Properties

- [CMIOExtensionProperty](cmioextensionproperty.md): A structure that defines the properties that providers, devices, and streams support.
- [CMIOExtensionPropertyAttributes](cmioextensionpropertyattributes.md): An object that describes the attributes of a property.
- [CMIOExtensionInfoDictionaryKey](cmioextensioninfodictionarykey.md): A key that specifies the extension information dictionary.
- [CMIOExtensionMachServiceNameKey](cmioextensionmachservicenamekey.md): A key that specifies the mach service name.

# CMIOExtensionPropertyState (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that describes the state of a property.

## Declaration

```objectivec
@interface CMIOExtensionPropertyState : NSObject
```

<a id="overview"></a>

## Overview

Create a property state object by specifying the type of data it stores, which must be a [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber), [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary), [NSArray](https://developer.apple.com/documentation/foundation/nsarray), or [NSData](https://developer.apple.com/documentation/foundation/nsdata). You can optionally specify attributes that restrict the range of values a property allows.

## Topics

### Creating a Property State

- [propertyStateWithValue:](cmioextensionpropertystate/propertystatewithvalue_.md): Returns a new property state with a value.
- [propertyStateWithValue:attributes:](cmioextensionpropertystate/propertystatewithvalue_attributes_.md): Returns a new property state with a value and attributes.
- [initWithValue:](cmioextensionpropertystate/init%28value_%29.md): Creates a property state with a value.
- [initWithValue:attributes:](cmioextensionpropertystate/init%28value_attributes_%29.md): Creates a property state with a value and attributes.

### Inspecting a Property State

- [value](cmioextensionpropertystate/value.md): The value for a property state.
- [attributes](cmioextensionpropertystate/attributes.md): The attributes for a property state.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Properties

- [CMIOExtensionProperty](cmioextensionproperty.md): A structure that defines the properties that providers, devices, and streams support.
- [CMIOExtensionPropertyAttributes](cmioextensionpropertyattributes.md): An object that describes the attributes of a property.
- [CMIOExtensionInfoDictionaryKey](cmioextensioninfodictionarykey.md): A key that specifies the extension information dictionary.
- [CMIOExtensionMachServiceNameKey](cmioextensionmachservicenamekey.md): A key that specifies the mach service name.
