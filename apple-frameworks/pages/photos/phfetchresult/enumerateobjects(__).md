> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresult/enumerateobjects(_:)](https://developer.apple.com/documentation/photos/phfetchresult/enumerateobjects(_:))

# enumerateObjects(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Executes the specified block using each object in the fetch result, starting with the first object and continuing in order to the last object.

## Declaration

```swift
func enumerateObjects(_ block: @escaping (ObjectType, Int, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `block`: The block to apply to elements in the fetch result.

  The block takes three parameters:

  - **obj**: The element in the fetch result.
  - **idx**: The index of the element in the fetch result.
  - **stop**: A pointer to a Boolean value. Set `*stop` to `true` within the block to cancel further processing of the fetch result.

<a id="Discussion"></a>

## Discussion

This method executes synchronously.

## See Also

### Performing Operations with Objects in a Fetch Result

- [enumerateObjects(at:options:using:)](enumerateobjects%28at_options_using_%29.md): Executes the specified block using the objects in the fetch result at the specified indexes.
- [enumerateObjects(options:using:)](enumerateobjects%28options_using_%29.md): Executes the specified block using each object in the fetch result.

# enumerateObjectsUsingBlock: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Executes the specified block using each object in the fetch result, starting with the first object and continuing in order to the last object.

## Declaration

```objectivec
- (void) enumerateObjectsUsingBlock:(void (^)(ObjectType obj, NSUInteger idx, BOOL *stop)) block;
```

## Parameters

- `block`: The block to apply to elements in the fetch result.

  The block takes three parameters:

  - **obj**: The element in the fetch result.
  - **idx**: The index of the element in the fetch result.
  - **stop**: A pointer to a Boolean value. Set `*stop` to `true` within the block to cancel further processing of the fetch result.

<a id="Discussion"></a>

## Discussion

This method executes synchronously.

## See Also

### Performing Operations with Objects in a Fetch Result

- [enumerateObjectsAtIndexes:options:usingBlock:](enumerateobjects%28at_options_using_%29.md): Executes the specified block using the objects in the fetch result at the specified indexes.
- [enumerateObjectsWithOptions:usingBlock:](enumerateobjects%28options_using_%29.md): Executes the specified block using each object in the fetch result.
