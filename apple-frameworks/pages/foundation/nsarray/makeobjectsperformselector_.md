> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/makeobjectsperformselector:](https://developer.apple.com/documentation/foundation/nsarray/makeobjectsperformselector:)

# makeObjectsPerformSelector:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sends to each object in the array the message identified by a given selector, starting with the first object and continuing through the array to the last object.

## Declaration

```objectivec
- (void) makeObjectsPerformSelector:(SEL) aSelector;
```

## Parameters

- `aSelector`: A selector that identifies the message to send to the objects in the array. The method must not take any arguments, and must not have the side effect of modifying the receiving array.

<a id="Discussion"></a>

## Discussion

This method raises an `NSInvalidArgumentException` if `aSelector` is `NULL`.

## See Also

### Sending Messages to Elements

- [makeObjectsPerformSelector:withObject:](makeobjectsperformselector_withobject_.md): Sends the `aSelector` message to each object in the array, starting with the first object and continuing through the array to the last object.
- [enumerateObjectsUsingBlock:](enumerateobjects%28__%29.md): Executes a given closure or block using each object in the array, starting with the first object and continuing through the array to the last object.
- [enumerateObjectsWithOptions:usingBlock:](enumerateobjects%28options_using_%29.md): Executes a given closure or block using each object in the array with the specified options.
- [enumerateObjectsAtIndexes:options:usingBlock:](enumerateobjects%28at_options_using_%29.md): Executes a given block using the objects in the array at the specified indexes.
