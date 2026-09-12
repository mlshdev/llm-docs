> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstaticfunction](https://developer.apple.com/documentation/javascriptcore/jsstaticfunction)

# JSStaticFunction (Swift)

**Framework:** JavaScriptCore  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A statically declared function property.

## Declaration

```swift
struct JSStaticFunction
```

## Topics

### Creating a Static Function

- [init()](jsstaticfunction/init%28%29.md): Creates a static function.
- [init(name:callAsFunction:attributes:)](jsstaticfunction/init%28name_callasfunction_attributes_%29.md): Creates a static function with the specified values.

### Accessing Static Function Information

- [name](jsstaticfunction/name.md): A null-terminated UTF-8 string that contains the property’s name.
- [callAsFunction](jsstaticfunction/callasfunction.md): A callback to invoke when calling the property as a function.
- [attributes](jsstaticfunction/attributes.md): A set of property attributes to give to the property.

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
- [JSStaticValue](jsstaticvalue.md): A statically declared value property.
- [staticFunctions](jsclassdefinition/staticfunctions.md): An array that contains the class’s statically declared function properties.

# JSStaticFunction (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A statically declared function property.

## Declaration

```objectivec
typedef struct { ... } JSStaticFunction;
```

## Topics

### Accessing Static Function Information

- [name](jsstaticfunction/name.md): A null-terminated UTF-8 string that contains the property’s name.
- [callAsFunction](jsstaticfunction/callasfunction.md): A callback to invoke when calling the property as a function.
- [attributes](jsstaticfunction/attributes.md): A set of property attributes to give to the property.

## See Also

### Managing Class Information

- [parentClass](jsclassdefinition/parentclass.md): A JavaScript class to set as the class’s parent class.
- [className](jsclassdefinition/classname.md): A null-terminated UTF-8 string that contains the class’s name.
- [version](jsclassdefinition/version.md): The version of the class definition structure.
- [attributes](jsclassdefinition/attributes.md): A set of class attributes to give to the class.
- [staticValues](jsclassdefinition/staticvalues.md): An array that contains the class’s statically declared value properties.
- [JSStaticValue](jsstaticvalue.md): A statically declared value property.
- [staticFunctions](jsclassdefinition/staticfunctions.md): An array that contains the class’s statically declared function properties.
