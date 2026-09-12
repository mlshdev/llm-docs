> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionpropertyattributes](https://developer.apple.com/documentation/coremediaio/cmioextensionpropertyattributes)

# CMIOExtensionPropertyAttributes (Swift)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that describes the attributes of a property.

## Declaration

```swift
class CMIOExtensionPropertyAttributes<ObjectType> where ObjectType : AnyObject
```

<a id="overview"></a>

## Overview

Use a property attributes object to describe attributes such as the minimum and maximum values, discrete values, and read-only values.

## Topics

### Creating Property Attributes

- [init(minValue:maxValue:validValues:readOnly:)](cmioextensionpropertyattributes/init%28minvalue_maxvalue_validvalues_readonly_%29.md): Creates a property attributes object with the specified configuration.

### Inspecting Attributes

- [isReadOnly](cmioextensionpropertyattributes/isreadonly.md): A Boolean value that indicates whether a property is read-only.
- [minValue](cmioextensionpropertyattributes/minvalue.md): The minimum value a property supports.
- [maxValue](cmioextensionpropertyattributes/maxvalue.md): The maximum value a property supports.
- [validValues](cmioextensionpropertyattributes/validvalues.md): An array of discrete values that this property supports.

### Specifying a Read-Only Attribute

- [readOnlyPropertyAttribute](cmioextensionpropertyattributes/readonlypropertyattribute.md): A class property for a read-only property attribute.

### Initializers

- [init(coder:)](cmioextensionpropertyattributes/init%28coder_%29.md)

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
- [CMIOExtensionPropertyState](cmioextensionpropertystate.md): An object that describes the state of a property.
- [CMIOExtensionInfoDictionaryKey](cmioextensioninfodictionarykey.md): A key that specifies the extension information dictionary.
- [CMIOExtensionMachServiceNameKey](cmioextensionmachservicenamekey.md): A key that specifies the mach service name.

# CMIOExtensionPropertyAttributes (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that describes the attributes of a property.

## Declaration

```objectivec
@interface CMIOExtensionPropertyAttributes : NSObject
```

<a id="overview"></a>

## Overview

Use a property attributes object to describe attributes such as the minimum and maximum values, discrete values, and read-only values.

## Topics

### Creating Property Attributes

- [propertyAttributesWithMinValue:maxValue:validValues:readOnly:](cmioextensionpropertyattributes/propertyattributeswithminvalue_maxvalue_validvalues_readonly_.md): Returns a new property attributes object with the specified configuration.
- [initWithMinValue:maxValue:validValues:readOnly:](cmioextensionpropertyattributes/init%28minvalue_maxvalue_validvalues_readonly_%29.md): Creates a property attributes object with the specified configuration.

### Inspecting Attributes

- [readOnly](cmioextensionpropertyattributes/isreadonly.md): A Boolean value that indicates whether a property is read-only.
- [minValue](cmioextensionpropertyattributes/minvalue.md): The minimum value a property supports.
- [maxValue](cmioextensionpropertyattributes/maxvalue.md): The maximum value a property supports.
- [validValues](cmioextensionpropertyattributes/validvalues.md): An array of discrete values that this property supports.

### Specifying a Read-Only Attribute

- [readOnlyPropertyAttribute](cmioextensionpropertyattributes/readonlypropertyattribute.md): A class property for a read-only property attribute.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Properties

- [CMIOExtensionProperty](cmioextensionproperty.md): A structure that defines the properties that providers, devices, and streams support.
- [CMIOExtensionPropertyState](cmioextensionpropertystate.md): An object that describes the state of a property.
- [CMIOExtensionInfoDictionaryKey](cmioextensioninfodictionarykey.md): A key that specifies the extension information dictionary.
- [CMIOExtensionMachServiceNameKey](cmioextensionmachservicenamekey.md): A key that specifies the mach service name.
