> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/enumerateobjects(options:using:)](https://developer.apple.com/documentation/foundation/nsarray/enumerateobjects(options:using:))

# enumerateObjects(options:using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes a given closure or block using each object in the array with the specified options.

## Declaration

```swift
func enumerateObjects(options opts: NSEnumerationOptions = [], using block: (Any, Int, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `opts`: The options for the enumeration. For possible values, see [NSEnumerationOptions](../nsenumerationoptions.md).
- `block`: A closure or block to execute for each object in the array, taking three arguments:

  - The object.
  - The index of the object in the array.
  - A reference to a Boolean value, which the closure can set to [true](https://developer.apple.com/documentation/swift/true) in order to stop further enumeration of the array. If a closure stops further enumeration, that closure continues to run until it’s finished. When the [concurrent](../nsenumerationoptions/concurrent.md) enumeration option is specified, enumeration stops after all of the currently running closures finish.

<a id="Discussion"></a>

## Discussion

This method executes synchronously. By default, the enumeration starts with the first object and continues serially through the array to the last object. You can specify [concurrent](../nsenumerationoptions/concurrent.md) and/or [reverse](../nsenumerationoptions/reverse.md) as enumeration options to modify this behavior.

## See Also

### Sending Messages to Elements

- [enumerateObjects(\_:)](enumerateobjects%28__%29.md): Executes a given closure or block using each object in the array, starting with the first object and continuing through the array to the last object.
- [enumerateObjects(at:options:using:)](enumerateobjects%28at_options_using_%29.md): Executes a given block using the objects in the array at the specified indexes.

# enumerateObjectsWithOptions:usingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes a given closure or block using each object in the array with the specified options.

## Declaration

```objectivec
- (void) enumerateObjectsWithOptions:(NSEnumerationOptions) opts usingBlock:(void (^)(ObjectType obj, NSUInteger idx, BOOL *stop)) block;
```

## Parameters

- `opts`: The options for the enumeration. For possible values, see [NSEnumerationOptions](../nsenumerationoptions.md).
- `block`: A closure or block to execute for each object in the array, taking three arguments:

  - The object.
  - The index of the object in the array.
  - A reference to a Boolean value, which the closure can set to [true](https://developer.apple.com/documentation/swift/true) in order to stop further enumeration of the array. If a closure stops further enumeration, that closure continues to run until it’s finished. When the [NSEnumerationConcurrent](../nsenumerationoptions/concurrent.md) enumeration option is specified, enumeration stops after all of the currently running closures finish.

<a id="Discussion"></a>

## Discussion

This method executes synchronously. By default, the enumeration starts with the first object and continues serially through the array to the last object. You can specify [NSEnumerationConcurrent](../nsenumerationoptions/concurrent.md) and/or [NSEnumerationReverse](../nsenumerationoptions/reverse.md) as enumeration options to modify this behavior.

## See Also

### Related Documentation

- [makeObjectsPerformSelector:](makeobjectsperformselector_.md): Sends to each object in the array the message identified by a given selector, starting with the first object and continuing through the array to the last object.
- [makeObjectsPerformSelector:withObject:](makeobjectsperformselector_withobject_.md): Sends the `aSelector` message to each object in the array, starting with the first object and continuing through the array to the last object.

### Sending Messages to Elements

- [makeObjectsPerformSelector:](makeobjectsperformselector_.md): Sends to each object in the array the message identified by a given selector, starting with the first object and continuing through the array to the last object.
- [makeObjectsPerformSelector:withObject:](makeobjectsperformselector_withobject_.md): Sends the `aSelector` message to each object in the array, starting with the first object and continuing through the array to the last object.
- [enumerateObjectsUsingBlock:](enumerateobjects%28__%29.md): Executes a given closure or block using each object in the array, starting with the first object and continuing through the array to the last object.
- [enumerateObjectsAtIndexes:options:usingBlock:](enumerateobjects%28at_options_using_%29.md): Executes a given block using the objects in the array at the specified indexes.
