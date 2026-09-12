> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsclassdefinition/staticvalues](https://developer.apple.com/documentation/javascriptcore/jsclassdefinition/staticvalues)

# staticValues (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array that contains the class’s statically declared value properties.

## Declaration

```swift
var staticValues: UnsafePointer<JSStaticValue>!
```

## See Also

### Managing Class Information

- [parentClass](parentclass.md): A JavaScript class to set as the class’s parent class.
- [className](classname.md): A null-terminated UTF-8 string that contains the class’s name.
- [version](version.md): The version of the class definition structure.
- [attributes](attributes.md): A set of class attributes to give to the class.
- [JSStaticValue](../jsstaticvalue.md): A statically declared value property.
- [staticFunctions](staticfunctions.md): An array that contains the class’s statically declared function properties.
- [JSStaticFunction](../jsstaticfunction.md): A statically declared function property.

# staticValues (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array that contains the class’s statically declared value properties.

## Declaration

```objectivec
const JSStaticValue * staticValues;
```

## See Also

### Managing Class Information

- [parentClass](parentclass.md): A JavaScript class to set as the class’s parent class.
- [className](classname.md): A null-terminated UTF-8 string that contains the class’s name.
- [version](version.md): The version of the class definition structure.
- [attributes](attributes.md): A set of class attributes to give to the class.
- [JSStaticValue](../jsstaticvalue.md): A statically declared value property.
- [staticFunctions](staticfunctions.md): An array that contains the class’s statically declared function properties.
- [JSStaticFunction](../jsstaticfunction.md): A statically declared function property.
