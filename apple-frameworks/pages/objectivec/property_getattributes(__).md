> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/property_getattributes(_:)](https://developer.apple.com/documentation/objectivec/property_getattributes(_:))

# property_getAttributes(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the attribute string of a property.

## Declaration

```swift
func property_getAttributes(_ property: objc_property_t) -> UnsafePointer<CChar>?
```

<a id="return-value"></a>

## Return Value

A C string containing the property’s attributes.

<a id="Discussion"></a>

## Discussion

The format of the attribute string is described in [Declared Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtPropertyIntrospection.html#//apple_ref/doc/uid/TP40008048-CH101) in [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008048).

## See Also

### Working with Properties

- [property_getName(\_:)](property_getname%28__%29.md): Returns the name of a property.
- [property_copyAttributeValue(\_:\_:)](property_copyattributevalue%28____%29.md): Returns the value of a property attribute given the attribute name.
- [property_copyAttributeList(\_:\_:)](property_copyattributelist%28____%29.md): Returns an array of property attributes for a given property.

# property_getAttributes (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the attribute string of a property.

## Declaration

```objectivec
extern const char *property_getAttributes(objc_property_t property);
```

<a id="return-value"></a>

## Return Value

A C string containing the property’s attributes.

<a id="Discussion"></a>

## Discussion

The format of the attribute string is described in [Declared Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtPropertyIntrospection.html#//apple_ref/doc/uid/TP40008048-CH101) in [Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008048).

## See Also

### Working with Properties

- [property_getName](property_getname%28__%29.md): Returns the name of a property.
- [property_copyAttributeValue](property_copyattributevalue%28____%29.md): Returns the value of a property attribute given the attribute name.
- [property_copyAttributeList](property_copyattributelist%28____%29.md): Returns an array of property attributes for a given property.
