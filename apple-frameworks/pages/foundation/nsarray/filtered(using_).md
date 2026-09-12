> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/filtered(using:)](https://developer.apple.com/documentation/foundation/nsarray/filtered(using:))

# filtered(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.

## Declaration

```swift
func filtered(using predicate: NSPredicate) -> [Any]
```

## Parameters

- `predicate`: The predicate against which to evaluate the receiving array’s elements.

<a id="return-value"></a>

## Return Value

A new array containing the objects in the receiving array for which `predicate` returns [true](https://developer.apple.com/documentation/swift/true).

Objects in the resulting array appear in the same order as they do in the receiver.

<a id="discussion"></a>

## Discussion

For more details, see [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789).

## See Also

### Deriving New Arrays

- [adding(\_:)](adding%28__%29.md): Returns a new array that is a copy of the receiving array with a given object added to the end.
- [addingObjects(from:)](addingobjects%28from_%29.md): Returns a new array that is a copy of the receiving array with the objects contained in another array added to the end.
- [subarray(with:)](subarray%28with_%29.md): Returns a new array containing the receiving array’s elements that fall within the limits specified by a given range.

# filteredArrayUsingPredicate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.

## Declaration

```objectivec
- (NSArray<id> *) filteredArrayUsingPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: The predicate against which to evaluate the receiving array’s elements.

<a id="return-value"></a>

## Return Value

A new array containing the objects in the receiving array for which `predicate` returns [true](https://developer.apple.com/documentation/swift/true).

Objects in the resulting array appear in the same order as they do in the receiver.

<a id="discussion"></a>

## Discussion

For more details, see [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789).

## See Also

### Deriving New Arrays

- [arrayByAddingObject:](adding%28__%29.md): Returns a new array that is a copy of the receiving array with a given object added to the end.
- [arrayByAddingObjectsFromArray:](addingobjects%28from_%29.md): Returns a new array that is a copy of the receiving array with the objects contained in another array added to the end.
- [subarrayWithRange:](subarray%28with_%29.md): Returns a new array containing the receiving array’s elements that fall within the limits specified by a given range.
