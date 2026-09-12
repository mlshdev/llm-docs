> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/new](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/new)

# new

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Allocates a new instance of the receiving class, sends it an [init](init%28%29.md) message, and returns the initialized object.

## Declaration

```objectivec
+ (instancetype) new;
```

<a id="return-value"></a>

## Return Value

A new instance of the receiver.

<a id="Discussion"></a>

## Discussion

This method is a combination of [alloc](alloc.md) and [init](init%28%29.md). Like [alloc](alloc.md), it initializes the `isa` instance variable of the new object so it points to the class data structure. It then invokes the [init](init%28%29.md) method to complete the initialization process.

## See Also

### Creating, Copying, and Deallocating Objects

- [alloc](alloc.md): Returns a new instance of the receiving class.
- [allocWithZone:](allocwithzone_.md): Returns a new instance of the receiving class.
- [init](init%28%29.md): Implemented by subclasses to initialize a new object (the receiver) immediately after memory for it has been allocated.
- [copy](copy%28%29.md): Returns the object returned by `copy(with:)`.
- [copyWithZone:](copywithzone_.md): Returns the receiver.
- [mutableCopy](mutablecopy%28%29.md): Returns the object returned by `mutableCopy(with:)` where the zone is `nil`.
- [mutableCopyWithZone:](mutablecopywithzone_.md): Returns the receiver.
- [dealloc](dealloc.md): Deallocates the memory occupied by the receiver.
