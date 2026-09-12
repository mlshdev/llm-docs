> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsclassdefinition/parentclass](https://developer.apple.com/documentation/javascriptcore/jsclassdefinition/parentclass)

# parentClass (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript class to set as the class’s parent class.

## Declaration

```swift
var parentClass: JSClassRef!
```

## See Also

### Managing Class Information

- [className](classname.md): A null-terminated UTF-8 string that contains the class’s name.
- [version](version.md): The version of the class definition structure.
- [attributes](attributes.md): A set of class attributes to give to the class.
- [staticValues](staticvalues.md): An array that contains the class’s statically declared value properties.
- [JSStaticValue](../jsstaticvalue.md): A statically declared value property.
- [staticFunctions](staticfunctions.md): An array that contains the class’s statically declared function properties.
- [JSStaticFunction](../jsstaticfunction.md): A statically declared function property.

# parentClass (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript class to set as the class’s parent class.

## Declaration

```objectivec
JSClassRef parentClass;
```

## See Also

### Managing Class Information

- [className](classname.md): A null-terminated UTF-8 string that contains the class’s name.
- [version](version.md): The version of the class definition structure.
- [attributes](attributes.md): A set of class attributes to give to the class.
- [staticValues](staticvalues.md): An array that contains the class’s statically declared value properties.
- [JSStaticValue](../jsstaticvalue.md): A statically declared value property.
- [staticFunctions](staticfunctions.md): An array that contains the class’s statically declared function properties.
- [JSStaticFunction](../jsstaticfunction.md): A statically declared function property.
