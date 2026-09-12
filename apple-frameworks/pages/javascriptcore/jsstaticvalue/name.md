> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstaticvalue/name](https://developer.apple.com/documentation/javascriptcore/jsstaticvalue/name)

# name (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A null-terminated UTF-8 string that contains the property’s name.

## Declaration

```swift
var name: UnsafePointer<CChar>!
```

## See Also

### Accessing Static Value Information

- [getProperty](getproperty.md): A callback to invoke when getting the property’s value.
- [setProperty](setproperty.md): A callback to invoke when setting the property’s value.
- [attributes](attributes.md): A set of property attributes to give to the property.

# name (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A null-terminated UTF-8 string that contains the property’s name.

## Declaration

```objectivec
const char * name;
```

## See Also

### Accessing Static Value Information

- [getProperty](getproperty.md): A callback to invoke when getting the property’s value.
- [setProperty](setproperty.md): A callback to invoke when setting the property’s value.
- [attributes](attributes.md): A set of property attributes to give to the property.
