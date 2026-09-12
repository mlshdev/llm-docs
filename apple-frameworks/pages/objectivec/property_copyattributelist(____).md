> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/property_copyattributelist(_:_:)](https://developer.apple.com/documentation/objectivec/property_copyattributelist(_:_:))

# property_copyAttributeList(\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of property attributes for a given property.

## Declaration

```swift
func property_copyAttributeList(_ property: objc_property_t, _ outCount: UnsafeMutablePointer<UInt32>?) -> UnsafeMutablePointer<objc_property_attribute_t>?
```

## Parameters

- `property`: The property whose attributes you want to copy.
- `outCount`: The number of attributes returned in the array.

<a id="return-value"></a>

## Return Value

An array of property attributes. You must free the array with `free()`.

## See Also

### Working with Properties

- [property_getName(\_:)](property_getname%28__%29.md): Returns the name of a property.
- [property_getAttributes(\_:)](property_getattributes%28__%29.md): Returns the attribute string of a property.
- [property_copyAttributeValue(\_:\_:)](property_copyattributevalue%28____%29.md): Returns the value of a property attribute given the attribute name.

# property_copyAttributeList (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of property attributes for a given property.

## Declaration

```objectivec
extern objc_property_attribute_t *property_copyAttributeList(objc_property_t property, unsigned int *outCount);
```

## Parameters

- `property`: The property whose attributes you want to copy.
- `outCount`: The number of attributes returned in the array.

<a id="return-value"></a>

## Return Value

An array of property attributes. You must free the array with `free()`.

## See Also

### Working with Properties

- [property_getName](property_getname%28__%29.md): Returns the name of a property.
- [property_getAttributes](property_getattributes%28__%29.md): Returns the attribute string of a property.
- [property_copyAttributeValue](property_copyattributevalue%28____%29.md): Returns the value of a property attribute given the attribute name.
