> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/arraywithobjects:](https://developer.apple.com/documentation/foundation/nsarray/arraywithobjects:)

# arrayWithObjects:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an array containing the objects in the argument list.

## Declaration

```objectivec
+ (instancetype) arrayWithObjects:(ObjectType) firstObj;
```

## Parameters

- `firstObj`: The first object for the array.

<a id="return-value"></a>

## Return Value

An array containing the objects in the argument list.

<a id="Discussion"></a>

## Discussion

Pass comma-separated list of trailing variadic arguments as additional objects, ending with `nil`.

The following code example creates an array containing three different types of element:

```objc
NSDate *aDate = [NSDate distantFuture];
NSValue *aValue = @(5);
NSString *aString = @"hello";
 
NSArray *array = [NSArray arrayWithObjects:aDate, aValue, aString, nil];
```

Alternatively, you can use array literal syntax in Objective-C or Swift to create an array containing given objects:

```objc
NSArray *array = @[@"alpha", @"bravo", @"charlie"];
```

## See Also

### Creating an Array

- [array](array.md): Creates and returns an empty array.
- [arrayWithArray:](arraywitharray_.md): Creates and returns an array containing the objects in another given array.
- [arrayWithContentsOfFile:](arraywithcontentsoffile_.md): Deprecated. Creates and returns an array containing the contents of the file specified by a given path.
- [arrayWithObject:](init%28object_%29.md): Creates and returns an array containing a given object.
- [arrayWithObjects:count:](init%28objects_count_%29-7dct1.md): Creates and returns an array that includes a given number of objects from a given C array.
