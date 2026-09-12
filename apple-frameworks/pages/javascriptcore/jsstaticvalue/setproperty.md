> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstaticvalue/setproperty](https://developer.apple.com/documentation/javascriptcore/jsstaticvalue/setproperty)

# setProperty (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A callback to invoke when setting the property’s value.

## Declaration

```swift
var setProperty: JSObjectSetPropertyCallback!
```

<a id="Discussion"></a>

## Discussion

This value may be `NULL` if the property has the `ReadOnly` attribute.

## See Also

### Accessing Static Value Information

- [name](name.md): A null-terminated UTF-8 string that contains the property’s name.
- [getProperty](getproperty.md): A callback to invoke when getting the property’s value.
- [attributes](attributes.md): A set of property attributes to give to the property.

# setProperty (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A callback to invoke when setting the property’s value.

## Declaration

```objectivec
JSObjectSetPropertyCallback setProperty;
```

<a id="Discussion"></a>

## Discussion

This value may be `NULL` if the property has the `ReadOnly` attribute.

## See Also

### Accessing Static Value Information

- [name](name.md): A null-terminated UTF-8 string that contains the property’s name.
- [getProperty](getproperty.md): A callback to invoke when getting the property’s value.
- [attributes](attributes.md): A set of property attributes to give to the property.
