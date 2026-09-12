> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/mutablecopy()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/mutablecopy())

# mutableCopy() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the object returned by `mutableCopy(with:)` where the zone is `nil`.

## Declaration

```swift
func mutableCopy() -> Any
```

<a id="return-value"></a>

## Return Value

The object returned by the [NSMutableCopying](../../foundation/nsmutablecopying.md) protocol method [mutableCopy(with:)](../../foundation/nsmutablecopying/mutablecopy%28with_%29.md), where the zone is `nil`.

<a id="Discussion"></a>

## Discussion

This is a convenience method for classes that adopt the [NSMutableCopying](../../foundation/nsmutablecopying.md) protocol. An exception is raised if there is no implementation for [mutableCopy(with:)](../../foundation/nsmutablecopying/mutablecopy%28with_%29.md).

## See Also

### Creating, Copying, and Deallocating Objects

- [init()](init%28%29.md): Implemented by subclasses to initialize a new object (the receiver) immediately after memory for it has been allocated.
- [copy()](copy%28%29.md): Returns the object returned by `copy(with:)`.

# mutableCopy (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the object returned by `mutableCopy(with:)` where the zone is `nil`.

## Declaration

```objectivec
- (id) mutableCopy;
```

<a id="return-value"></a>

## Return Value

The object returned by the [NSMutableCopying](../../foundation/nsmutablecopying.md) protocol method [mutableCopyWithZone:](../../foundation/nsmutablecopying/mutablecopy%28with_%29.md), where the zone is `nil`.

<a id="Discussion"></a>

## Discussion

This is a convenience method for classes that adopt the [NSMutableCopying](../../foundation/nsmutablecopying.md) protocol. An exception is raised if there is no implementation for [mutableCopyWithZone:](../../foundation/nsmutablecopying/mutablecopy%28with_%29.md).

## See Also

### Creating, Copying, and Deallocating Objects

- [alloc](alloc.md): Returns a new instance of the receiving class.
- [allocWithZone:](allocwithzone_.md): Returns a new instance of the receiving class.
- [init](init%28%29.md): Implemented by subclasses to initialize a new object (the receiver) immediately after memory for it has been allocated.
- [copy](copy%28%29.md): Returns the object returned by `copy(with:)`.
- [copyWithZone:](copywithzone_.md): Returns the receiver.
- [mutableCopyWithZone:](mutablecopywithzone_.md): Returns the receiver.
- [dealloc](dealloc.md): Deallocates the memory occupied by the receiver.
- [new](new.md): Allocates a new instance of the receiving class, sends it an [init](init%28%29.md) message, and returns the initialized object.
