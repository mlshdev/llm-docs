> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_getrequiredclass(_:)](https://developer.apple.com/documentation/objectivec/objc_getrequiredclass(_:))

# objc_getRequiredClass(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the class definition of a specified class.

## Declaration

```swift
func objc_getRequiredClass(_ name: UnsafePointer<CChar>) -> AnyClass
```

## Parameters

- `name`: The name of the class to look up.

<a id="return-value"></a>

## Return Value

The Class object for the named class.

<a id="Discussion"></a>

## Discussion

This function is the same as [objc_getClass(\_:)](objc_getclass%28__%29.md), but kills the process if the class is not found.

This function is used by ZeroLink, where failing to find a class would be a compile-time link error without ZeroLink.

## See Also

### Obtaining Class Definitions

- [objc_getClassList(\_:\_:)](objc_getclasslist%28____%29.md): Obtains the list of registered class definitions.
- [objc_copyClassList(\_:)](objc_copyclasslist%28__%29.md): Creates and returns a list of pointers to all registered class definitions.
- [objc_lookUpClass(\_:)](objc_lookupclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getClass(\_:)](objc_getclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getMetaClass(\_:)](objc_getmetaclass%28__%29.md): Returns the metaclass definition of a specified class.

# objc_getRequiredClass (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the class definition of a specified class.

## Declaration

```objectivec
extern Classobjc_getRequiredClass(const char *name);
```

## Parameters

- `name`: The name of the class to look up.

<a id="return-value"></a>

## Return Value

The Class object for the named class.

<a id="Discussion"></a>

## Discussion

This function is the same as [objc_getClass](objc_getclass%28__%29.md), but kills the process if the class is not found.

This function is used by ZeroLink, where failing to find a class would be a compile-time link error without ZeroLink.

## See Also

### Obtaining Class Definitions

- [objc_getClassList](objc_getclasslist%28____%29.md): Obtains the list of registered class definitions.
- [objc_copyClassList](objc_copyclasslist%28__%29.md): Creates and returns a list of pointers to all registered class definitions.
- [objc_lookUpClass](objc_lookupclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getClass](objc_getclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getMetaClass](objc_getmetaclass%28__%29.md): Returns the metaclass definition of a specified class.
