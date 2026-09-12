> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/init(objects:count:)-7dct1](https://developer.apple.com/documentation/foundation/nsarray/init(objects:count:)-7dct1)

# init(objects:count:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an array that includes a given number of objects from a given C array.

## Declaration

```swift
convenience init(objects: UnsafePointer<AnyObject>, count cnt: Int)
```

## Parameters

- `objects`: A C array of objects.
- `cnt`: The number of values from the `objects` C array to include in the new array. This number will be the count of the new array—it must not be negative or greater than the number of elements in `objects`.

<a id="return-value"></a>

## Return Value

A new array including the first `count` objects from `objects`.

<a id="Discussion"></a>

## Discussion

Elements are added to the new array in the same order they appear in `objects`, up to but not including index `count`. For example:

```objc
NSString *strings[3];
strings[0] = @"First";
strings[1] = @"Second";
strings[2] = @"Third";
 
NSArray *stringsArray = [NSArray arrayWithObjects:strings count:2];
// strings array contains { @"First", @"Second" }
```

## See Also

### Creating an Array

- [init(object:)](init%28object_%29.md): Creates and returns an array containing a given object.

# arrayWithObjects:count: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an array that includes a given number of objects from a given C array.

## Declaration

```objectivec
+ (instancetype) arrayWithObjects:(ObjectType const[]) objects count:(NSUInteger) cnt;
```

## Parameters

- `objects`: A C array of objects.
- `cnt`: The number of values from the `objects` C array to include in the new array. This number will be the count of the new array—it must not be negative or greater than the number of elements in `objects`.

<a id="return-value"></a>

## Return Value

A new array including the first `count` objects from `objects`.

<a id="Discussion"></a>

## Discussion

Elements are added to the new array in the same order they appear in `objects`, up to but not including index `count`. For example:

```objc
NSString *strings[3];
strings[0] = @"First";
strings[1] = @"Second";
strings[2] = @"Third";
 
NSArray *stringsArray = [NSArray arrayWithObjects:strings count:2];
// strings array contains { @"First", @"Second" }
```

## See Also

### Related Documentation

- [getObjects:range:](getobjects_range_.md): Copies references to objects contained in the array that fall within the specified range to `aBuffer`.

### Creating an Array

- [array](array.md): Creates and returns an empty array.
- [arrayWithArray:](arraywitharray_.md): Creates and returns an array containing the objects in another given array.
- [arrayWithContentsOfFile:](arraywithcontentsoffile_.md): Deprecated. Creates and returns an array containing the contents of the file specified by a given path.
- [arrayWithObject:](init%28object_%29.md): Creates and returns an array containing a given object.
- [arrayWithObjects:](arraywithobjects_.md): Creates and returns an array containing the objects in the argument list.
