> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_copyclasslist(_:)](https://developer.apple.com/documentation/objectivec/objc_copyclasslist(_:))

# objc_copyClassList(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a list of pointers to all registered class definitions.

## Declaration

```swift
func objc_copyClassList(_ outCount: UnsafeMutablePointer<UInt32>?) -> AutoreleasingUnsafeMutablePointer<AnyClass>?
```

## Parameters

- `outCount`: An integer pointer used to store the number of classes returned by this function in the list. This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

A `nil` terminated array of classes. You must free the array with `free()`.

## See Also

### Obtaining Class Definitions

- [objc_getClassList(\_:\_:)](objc_getclasslist%28____%29.md): Obtains the list of registered class definitions.
- [objc_lookUpClass(\_:)](objc_lookupclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getClass(\_:)](objc_getclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getRequiredClass(\_:)](objc_getrequiredclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getMetaClass(\_:)](objc_getmetaclass%28__%29.md): Returns the metaclass definition of a specified class.

# objc_copyClassList (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a list of pointers to all registered class definitions.

## Declaration

```objectivec
extern Class*objc_copyClassList(unsigned int *outCount);
```

## Parameters

- `outCount`: An integer pointer used to store the number of classes returned by this function in the list. This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

A `nil` terminated array of classes. You must free the array with `free()`.

## See Also

### Obtaining Class Definitions

- [objc_getClassList](objc_getclasslist%28____%29.md): Obtains the list of registered class definitions.
- [objc_lookUpClass](objc_lookupclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getClass](objc_getclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getRequiredClass](objc_getrequiredclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getMetaClass](objc_getmetaclass%28__%29.md): Returns the metaclass definition of a specified class.
