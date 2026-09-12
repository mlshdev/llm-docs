> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_getmetaclass(_:)](https://developer.apple.com/documentation/objectivec/objc_getmetaclass(_:))

# objc_getMetaClass(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the metaclass definition of a specified class.

## Declaration

```swift
func objc_getMetaClass(_ name: UnsafePointer<CChar>) -> Any!
```

## Parameters

- `name`: The name of the class to look up.

<a id="return-value"></a>

## Return Value

The `Class` object for the metaclass of the named class, or `nil` if the class is not registered with the Objective-C runtime.

<a id="Discussion"></a>

## Discussion

If the definition for the named class is not registered, this function calls the class handler callback and then checks a second time to see if the class is registered. However, every class definition must have a valid metaclass definition, and so the metaclass definition is always returned, whether it’s valid or not.

## See Also

### Obtaining Class Definitions

- [objc_getClassList(\_:\_:)](objc_getclasslist%28____%29.md): Obtains the list of registered class definitions.
- [objc_copyClassList(\_:)](objc_copyclasslist%28__%29.md): Creates and returns a list of pointers to all registered class definitions.
- [objc_lookUpClass(\_:)](objc_lookupclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getClass(\_:)](objc_getclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getRequiredClass(\_:)](objc_getrequiredclass%28__%29.md): Returns the class definition of a specified class.

# objc_getMetaClass (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the metaclass definition of a specified class.

## Declaration

```objectivec
extern idobjc_getMetaClass(const char *name);
```

## Parameters

- `name`: The name of the class to look up.

<a id="return-value"></a>

## Return Value

The `Class` object for the metaclass of the named class, or `nil` if the class is not registered with the Objective-C runtime.

<a id="Discussion"></a>

## Discussion

If the definition for the named class is not registered, this function calls the class handler callback and then checks a second time to see if the class is registered. However, every class definition must have a valid metaclass definition, and so the metaclass definition is always returned, whether it’s valid or not.

## See Also

### Obtaining Class Definitions

- [objc_getClassList](objc_getclasslist%28____%29.md): Obtains the list of registered class definitions.
- [objc_copyClassList](objc_copyclasslist%28__%29.md): Creates and returns a list of pointers to all registered class definitions.
- [objc_lookUpClass](objc_lookupclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getClass](objc_getclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getRequiredClass](objc_getrequiredclass%28__%29.md): Returns the class definition of a specified class.
