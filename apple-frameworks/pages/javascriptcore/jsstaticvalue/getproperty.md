> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstaticvalue/getproperty](https://developer.apple.com/documentation/javascriptcore/jsstaticvalue/getproperty)

# getProperty (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A callback to invoke when getting the property’s value.

## Declaration

```swift
var getProperty: JSObjectGetPropertyCallback!
```

## See Also

### Accessing Static Value Information

- [name](name.md): A null-terminated UTF-8 string that contains the property’s name.
- [setProperty](setproperty.md): A callback to invoke when setting the property’s value.
- [attributes](attributes.md): A set of property attributes to give to the property.

# getProperty (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A callback to invoke when getting the property’s value.

## Declaration

```objectivec
JSObjectGetPropertyCallback getProperty;
```

## See Also

### Accessing Static Value Information

- [name](name.md): A null-terminated UTF-8 string that contains the property’s name.
- [setProperty](setproperty.md): A callback to invoke when setting the property’s value.
- [attributes](attributes.md): A set of property attributes to give to the property.
