> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_getclasslist(_:_:)](https://developer.apple.com/documentation/objectivec/objc_getclasslist(_:_:))

# objc_getClassList(\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Obtains the list of registered class definitions.

## Declaration

```swift
func objc_getClassList(_ buffer: AutoreleasingUnsafeMutablePointer<AnyClass>?, _ bufferCount: Int32) -> Int32
```

## Parameters

- `buffer`: An array of `Class` values. On output, each `Class` value points to one class definition, up to either `bufferCount` or the total number of registered classes, whichever is less. You can pass `NULL` to obtain the total number of registered class definitions without actually retrieving any class definitions.
- `bufferCount`: An integer value. Pass the number of pointers for which you have allocated space in `buffer`. On return, this function fills in only this number of elements. If this number is less than the number of registered classes, this function returns an arbitrary subset of the registered classes.

<a id="return-value"></a>

## Return Value

An integer value indicating the total number of registered classes.

<a id="Discussion"></a>

## Discussion

The Objective-C runtime library automatically registers all the classes defined in your source code. You can create class definitions at runtime and register them with the `objc_addClass` function.

The code listing below demonstrates how to use this function to retrieve all the class definitions that have been registered with the Objective-C runtime in the current process.

```objc
int numClasses;
Class * classes = NULL;
 
classes = NULL;
numClasses = objc_getClassList(NULL, 0);
 
if (numClasses > 0 )
{
    classes = malloc(sizeof(Class) * numClasses);
    numClasses = objc_getClassList(classes, numClasses);
    free(classes);
}
```

<a id="Special-Considerations"></a>

### Special Considerations

You can’t assume that class objects you get from this function are classes that inherit from [NSObject](nsobject-swift.class.md), so you can’t safely call any methods on such classes without detecting that the method is implemented first.

## See Also

### Obtaining Class Definitions

- [objc_copyClassList(\_:)](objc_copyclasslist%28__%29.md): Creates and returns a list of pointers to all registered class definitions.
- [objc_lookUpClass(\_:)](objc_lookupclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getClass(\_:)](objc_getclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getRequiredClass(\_:)](objc_getrequiredclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getMetaClass(\_:)](objc_getmetaclass%28__%29.md): Returns the metaclass definition of a specified class.

# objc_getClassList (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Obtains the list of registered class definitions.

## Declaration

```objectivec
extern int objc_getClassList(Class*buffer, int bufferCount);
```

## Parameters

- `buffer`: An array of `Class` values. On output, each `Class` value points to one class definition, up to either `bufferCount` or the total number of registered classes, whichever is less. You can pass `NULL` to obtain the total number of registered class definitions without actually retrieving any class definitions.
- `bufferCount`: An integer value. Pass the number of pointers for which you have allocated space in `buffer`. On return, this function fills in only this number of elements. If this number is less than the number of registered classes, this function returns an arbitrary subset of the registered classes.

<a id="return-value"></a>

## Return Value

An integer value indicating the total number of registered classes.

<a id="Discussion"></a>

## Discussion

The Objective-C runtime library automatically registers all the classes defined in your source code. You can create class definitions at runtime and register them with the `objc_addClass` function.

The code listing below demonstrates how to use this function to retrieve all the class definitions that have been registered with the Objective-C runtime in the current process.

```objc
int numClasses;
Class * classes = NULL;
 
classes = NULL;
numClasses = objc_getClassList(NULL, 0);
 
if (numClasses > 0 )
{
    classes = malloc(sizeof(Class) * numClasses);
    numClasses = objc_getClassList(classes, numClasses);
    free(classes);
}
```

<a id="Special-Considerations"></a>

### Special Considerations

You can’t assume that class objects you get from this function are classes that inherit from [NSObject](nsobject-swift.class.md), so you can’t safely call any methods on such classes without detecting that the method is implemented first.

## See Also

### Obtaining Class Definitions

- [objc_copyClassList](objc_copyclasslist%28__%29.md): Creates and returns a list of pointers to all registered class definitions.
- [objc_lookUpClass](objc_lookupclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getClass](objc_getclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getRequiredClass](objc_getrequiredclass%28__%29.md): Returns the class definition of a specified class.
- [objc_getMetaClass](objc_getmetaclass%28__%29.md): Returns the metaclass definition of a specified class.
