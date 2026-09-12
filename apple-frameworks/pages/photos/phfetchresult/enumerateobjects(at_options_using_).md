> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresult/enumerateobjects(at:options:using:)](https://developer.apple.com/documentation/photos/phfetchresult/enumerateobjects(at:options:using:))

# enumerateObjects(at:options:using:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Executes the specified block using the objects in the fetch result at the specified indexes.

## Declaration

```swift
func enumerateObjects(at s: IndexSet, options opts: NSEnumerationOptions = [], using block: @escaping (ObjectType, Int, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `s`: The indexes of the objects over which to enumerate.
- `opts`: A bit mask that specifies the options for the enumeration (whether it should be performed concurrently and whether it should be performed in reverse order).
- `block`: The block to apply to elements in the fetch result.

  The block takes three parameters:

  - **obj**: The element in the fetch result.
  - **idx**: The index of the element in the fetch result.
  - **stop**: A pointer to a Boolean value. Set `*stop` to `true` within the block to cancel further processing of the fetch result.

<a id="Discussion"></a>

## Discussion

By default, the enumeration starts with the first object and continues in order through the fetch result to the last element specified by the index set. Specify the `concurrent` or `reverse` options to modify this behavior.

This method executes synchronously.

## See Also

### Performing Operations with Objects in a Fetch Result

- [enumerateObjects(\_:)](enumerateobjects%28__%29.md): Executes the specified block using each object in the fetch result, starting with the first object and continuing in order to the last object.
- [enumerateObjects(options:using:)](enumerateobjects%28options_using_%29.md): Executes the specified block using each object in the fetch result.

# enumerateObjectsAtIndexes:options:usingBlock: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Executes the specified block using the objects in the fetch result at the specified indexes.

## Declaration

```objectivec
- (void) enumerateObjectsAtIndexes:(NSIndexSet *) s options:(NSEnumerationOptions) opts usingBlock:(void (^)(ObjectType obj, NSUInteger idx, BOOL *stop)) block;
```

## Parameters

- `s`: The indexes of the objects over which to enumerate.
- `opts`: A bit mask that specifies the options for the enumeration (whether it should be performed concurrently and whether it should be performed in reverse order).
- `block`: The block to apply to elements in the fetch result.

  The block takes three parameters:

  - **obj**: The element in the fetch result.
  - **idx**: The index of the element in the fetch result.
  - **stop**: A pointer to a Boolean value. Set `*stop` to `true` within the block to cancel further processing of the fetch result.

<a id="Discussion"></a>

## Discussion

By default, the enumeration starts with the first object and continues in order through the fetch result to the last element specified by the index set. Specify the `concurrent` or `reverse` options to modify this behavior.

This method executes synchronously.

## See Also

### Performing Operations with Objects in a Fetch Result

- [enumerateObjectsUsingBlock:](enumerateobjects%28__%29.md): Executes the specified block using each object in the fetch result, starting with the first object and continuing in order to the last object.
- [enumerateObjectsWithOptions:usingBlock:](enumerateobjects%28options_using_%29.md): Executes the specified block using each object in the fetch result.
