> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/init(object:)](https://developer.apple.com/documentation/foundation/nsarray/init(object:))

# init(object:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an array containing a given object.

## Declaration

```swift
convenience init(object anObject: Any)
```

## Parameters

- `anObject`: An object.

<a id="return-value"></a>

## Return Value

An array containing the single element `anObject`.

<a id="Discussion"></a>

## Discussion

Alternatively, you can use array literal syntax in Objective-C or Swift to create an array containing a given object:

**Swift**

```swift
let array: NSArray = ["Hello, world!"]
```

**Objective-C**

```objc
NSArray *array = @[@"Hello, world!"];
```

## See Also

### Creating an Array

- [init(objects:count:)](init%28objects_count_%29-7dct1.md): Creates and returns an array that includes a given number of objects from a given C array.

# arrayWithObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an array containing a given object.

## Declaration

```objectivec
+ (instancetype) arrayWithObject:(ObjectType) anObject;
```

## Parameters

- `anObject`: An object.

<a id="return-value"></a>

## Return Value

An array containing the single element `anObject`.

<a id="Discussion"></a>

## Discussion

Alternatively, you can use array literal syntax in Objective-C or Swift to create an array containing a given object:

**Swift**

```swift
let array: NSArray = ["Hello, world!"]
```

**Objective-C**

```objc
NSArray *array = @[@"Hello, world!"];
```

## See Also

### Related Documentation

- [array](array.md): Creates and returns an empty array.
- [arrayWithObjects:](arraywithobjects_.md): Creates and returns an array containing the objects in the argument list.

### Creating an Array

- [array](array.md): Creates and returns an empty array.
- [arrayWithArray:](arraywitharray_.md): Creates and returns an array containing the objects in another given array.
- [arrayWithContentsOfFile:](arraywithcontentsoffile_.md): Deprecated. Creates and returns an array containing the contents of the file specified by a given path.
- [arrayWithObjects:](arraywithobjects_.md): Creates and returns an array containing the objects in the argument list.
- [arrayWithObjects:count:](init%28objects_count_%29-7dct1.md): Creates and returns an array that includes a given number of objects from a given C array.
