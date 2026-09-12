> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstaticfunction/name](https://developer.apple.com/documentation/javascriptcore/jsstaticfunction/name)

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

### Accessing Static Function Information

- [callAsFunction](callasfunction.md): A callback to invoke when calling the property as a function.
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

### Accessing Static Function Information

- [callAsFunction](callasfunction.md): A callback to invoke when calling the property as a function.
- [attributes](attributes.md): A set of property attributes to give to the property.
