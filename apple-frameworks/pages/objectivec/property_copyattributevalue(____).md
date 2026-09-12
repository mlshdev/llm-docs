> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/property_copyattributevalue(_:_:)](https://developer.apple.com/documentation/objectivec/property_copyattributevalue(_:_:))

# property_copyAttributeValue(\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the value of a property attribute given the attribute name.

## Declaration

```swift
func property_copyAttributeValue(_ property: objc_property_t, _ attributeName: UnsafePointer<CChar>) -> UnsafeMutablePointer<CChar>?
```

## Parameters

- `property`: The property whose value you are interested in.
- `attributeName`: A C string representing the name of the attribute.

<a id="return-value"></a>

## Return Value

The value string of the `attributeName` attribute, if one exists in `property`; otherwise, `nil`. You must free the returned value string with `free()`.

## See Also

### Working with Properties

- [property_getName(\_:)](property_getname%28__%29.md): Returns the name of a property.
- [property_getAttributes(\_:)](property_getattributes%28__%29.md): Returns the attribute string of a property.
- [property_copyAttributeList(\_:\_:)](property_copyattributelist%28____%29.md): Returns an array of property attributes for a given property.

# property_copyAttributeValue (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the value of a property attribute given the attribute name.

## Declaration

```objectivec
extern char *property_copyAttributeValue(objc_property_t property, const char *attributeName);
```

## Parameters

- `property`: The property whose value you are interested in.
- `attributeName`: A C string representing the name of the attribute.

<a id="return-value"></a>

## Return Value

The value string of the `attributeName` attribute, if one exists in `property`; otherwise, `nil`. You must free the returned value string with `free()`.

## See Also

### Working with Properties

- [property_getName](property_getname%28__%29.md): Returns the name of a property.
- [property_getAttributes](property_getattributes%28__%29.md): Returns the attribute string of a property.
- [property_copyAttributeList](property_copyattributelist%28____%29.md): Returns an array of property attributes for a given property.
