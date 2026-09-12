> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstaticvalue](https://developer.apple.com/documentation/javascriptcore/jsstaticvalue)

# JSStaticValue (Swift)

**Framework:** JavaScriptCore  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A statically declared value property.

## Declaration

```swift
struct JSStaticValue
```

## Topics

### Creating a Static Value

- [init()](jsstaticvalue/init%28%29.md): Creates a static value.
- [init(name:getProperty:setProperty:attributes:)](jsstaticvalue/init%28name_getproperty_setproperty_attributes_%29.md): Creates a static value with the specified values.

### Accessing Static Value Information

- [name](jsstaticvalue/name.md): A null-terminated UTF-8 string that contains the property’s name.
- [getProperty](jsstaticvalue/getproperty.md): A callback to invoke when getting the property’s value.
- [setProperty](jsstaticvalue/setproperty.md): A callback to invoke when setting the property’s value.
- [attributes](jsstaticvalue/attributes.md): A set of property attributes to give to the property.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Managing Class Information

- [parentClass](jsclassdefinition/parentclass.md): A JavaScript class to set as the class’s parent class.
- [className](jsclassdefinition/classname.md): A null-terminated UTF-8 string that contains the class’s name.
- [version](jsclassdefinition/version.md): The version of the class definition structure.
- [attributes](jsclassdefinition/attributes.md): A set of class attributes to give to the class.
- [staticValues](jsclassdefinition/staticvalues.md): An array that contains the class’s statically declared value properties.
- [staticFunctions](jsclassdefinition/staticfunctions.md): An array that contains the class’s statically declared function properties.
- [JSStaticFunction](jsstaticfunction.md): A statically declared function property.

# JSStaticValue (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A statically declared value property.

## Declaration

```objectivec
typedef struct { ... } JSStaticValue;
```

## Topics

### Accessing Static Value Information

- [name](jsstaticvalue/name.md): A null-terminated UTF-8 string that contains the property’s name.
- [getProperty](jsstaticvalue/getproperty.md): A callback to invoke when getting the property’s value.
- [setProperty](jsstaticvalue/setproperty.md): A callback to invoke when setting the property’s value.
- [attributes](jsstaticvalue/attributes.md): A set of property attributes to give to the property.

## See Also

### Managing Class Information

- [parentClass](jsclassdefinition/parentclass.md): A JavaScript class to set as the class’s parent class.
- [className](jsclassdefinition/classname.md): A null-terminated UTF-8 string that contains the class’s name.
- [version](jsclassdefinition/version.md): The version of the class definition structure.
- [attributes](jsclassdefinition/attributes.md): A set of class attributes to give to the class.
- [staticValues](jsclassdefinition/staticvalues.md): An array that contains the class’s statically declared value properties.
- [staticFunctions](jsclassdefinition/staticfunctions.md): An array that contains the class’s statically declared function properties.
- [JSStaticFunction](jsstaticfunction.md): A statically declared function property.
