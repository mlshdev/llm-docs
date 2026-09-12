> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/mutablecopywithzone:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/mutablecopywithzone:)

# mutableCopyWithZone:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the receiver.

## Declaration

```objectivec
+ (id) mutableCopyWithZone:(struct _NSZone *) zone;
```

## Parameters

- `zone`: The memory zone in which to create the copy of the receiver.

<a id="return-value"></a>

## Return Value

The receiver.

<a id="Discussion"></a>

## Discussion

This method exists so class objects can be used in situations where you need an object that conforms to the [NSMutableCopying](../../foundation/nsmutablecopying.md) protocol. For example, this method lets you use a class object as a key to an `NSDictionary` object. You should not override this method.

## See Also

### Creating, Copying, and Deallocating Objects

- [alloc](alloc.md): Returns a new instance of the receiving class.
- [allocWithZone:](allocwithzone_.md): Returns a new instance of the receiving class.
- [init](init%28%29.md): Implemented by subclasses to initialize a new object (the receiver) immediately after memory for it has been allocated.
- [copy](copy%28%29.md): Returns the object returned by `copy(with:)`.
- [copyWithZone:](copywithzone_.md): Returns the receiver.
- [mutableCopy](mutablecopy%28%29.md): Returns the object returned by `mutableCopy(with:)` where the zone is `nil`.
- [dealloc](dealloc.md): Deallocates the memory occupied by the receiver.
- [new](new.md): Allocates a new instance of the receiving class, sends it an [init](init%28%29.md) message, and returns the initialized object.
