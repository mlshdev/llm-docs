> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/enumerateobjects(_:)](https://developer.apple.com/documentation/foundation/nsarray/enumerateobjects(_:))

# enumerateObjects(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes a given closure or block using each object in the array, starting with the first object and continuing through the array to the last object.

## Declaration

```swift
func enumerateObjects(_ block: (Any, Int, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `block`: A closure or block to execute for each object in the array, taking three arguments:

  - The object.
  - The index of the object in the array.
  - A reference to a Boolean value, which the closure can set to [true](https://developer.apple.com/documentation/swift/true) in order to stop further enumeration of the array. If a closure stops further enumeration, that closure continues to run until it’s finished.

<a id="Discussion"></a>

## Discussion

This method executes synchronously. Values allocated within the block are deallocated after the block is executed.

## See Also

### Sending Messages to Elements

- [enumerateObjects(options:using:)](enumerateobjects%28options_using_%29.md): Executes a given closure or block using each object in the array with the specified options.
- [enumerateObjects(at:options:using:)](enumerateobjects%28at_options_using_%29.md): Executes a given block using the objects in the array at the specified indexes.

# enumerateObjectsUsingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes a given closure or block using each object in the array, starting with the first object and continuing through the array to the last object.

## Declaration

```objectivec
- (void) enumerateObjectsUsingBlock:(void (^)(ObjectType obj, NSUInteger idx, BOOL *stop)) block;
```

## Parameters

- `block`: A closure or block to execute for each object in the array, taking three arguments:

  - The object.
  - The index of the object in the array.
  - A reference to a Boolean value, which the closure can set to [true](https://developer.apple.com/documentation/swift/true) in order to stop further enumeration of the array. If a closure stops further enumeration, that closure continues to run until it’s finished.

<a id="Discussion"></a>

## Discussion

This method executes synchronously. Values allocated within the block are deallocated after the block is executed.

## See Also

### Related Documentation

- [makeObjectsPerformSelector:](makeobjectsperformselector_.md): Sends to each object in the array the message identified by a given selector, starting with the first object and continuing through the array to the last object.
- [makeObjectsPerformSelector:withObject:](makeobjectsperformselector_withobject_.md): Sends the `aSelector` message to each object in the array, starting with the first object and continuing through the array to the last object.

### Sending Messages to Elements

- [makeObjectsPerformSelector:](makeobjectsperformselector_.md): Sends to each object in the array the message identified by a given selector, starting with the first object and continuing through the array to the last object.
- [makeObjectsPerformSelector:withObject:](makeobjectsperformselector_withobject_.md): Sends the `aSelector` message to each object in the array, starting with the first object and continuing through the array to the last object.
- [enumerateObjectsWithOptions:usingBlock:](enumerateobjects%28options_using_%29.md): Executes a given closure or block using each object in the array with the specified options.
- [enumerateObjectsAtIndexes:options:usingBlock:](enumerateobjects%28at_options_using_%29.md): Executes a given block using the objects in the array at the specified indexes.
