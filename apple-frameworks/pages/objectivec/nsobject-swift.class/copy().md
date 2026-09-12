> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/copy()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/copy())

# copy() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the object returned by `copy(with:)`.

## Declaration

```swift
func copy() -> Any
```

<a id="return-value"></a>

## Return Value

The object returned by the [NSCopying](../../foundation/nscopying.md) protocol method [copy(with:)](../../foundation/nscopying/copy%28with_%29.md),.

<a id="Discussion"></a>

## Discussion

This is a convenience method for classes that adopt the [NSCopying](../../foundation/nscopying.md) protocol. An exception is raised if there is no implementation for [copy(with:)](../../foundation/nscopying/copy%28with_%29.md).

`NSObject` does not itself support the [NSCopying](../../foundation/nscopying.md) protocol. Subclasses must support the protocol and implement the [copy(with:)](../../foundation/nscopying/copy%28with_%29.md) method. A subclass version of the [copy(with:)](../../foundation/nscopying/copy%28with_%29.md) method should send the message to `super` first, to incorporate its implementation, unless the subclass descends directly from `NSObject`.

## See Also

### Creating, Copying, and Deallocating Objects

- [init()](init%28%29.md): Implemented by subclasses to initialize a new object (the receiver) immediately after memory for it has been allocated.
- [mutableCopy()](mutablecopy%28%29.md): Returns the object returned by `mutableCopy(with:)` where the zone is `nil`.

# copy (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the object returned by `copy(with:)`.

## Declaration

```objectivec
- (id) copy;
```

<a id="return-value"></a>

## Return Value

The object returned by the [NSCopying](../../foundation/nscopying.md) protocol method [copyWithZone:](../../foundation/nscopying/copy%28with_%29.md),.

<a id="Discussion"></a>

## Discussion

This is a convenience method for classes that adopt the [NSCopying](../../foundation/nscopying.md) protocol. An exception is raised if there is no implementation for [copyWithZone:](../../foundation/nscopying/copy%28with_%29.md).

`NSObject` does not itself support the [NSCopying](../../foundation/nscopying.md) protocol. Subclasses must support the protocol and implement the [copyWithZone:](../../foundation/nscopying/copy%28with_%29.md) method. A subclass version of the [copyWithZone:](../../foundation/nscopying/copy%28with_%29.md) method should send the message to `super` first, to incorporate its implementation, unless the subclass descends directly from `NSObject`.

## See Also

### Creating, Copying, and Deallocating Objects

- [alloc](alloc.md): Returns a new instance of the receiving class.
- [allocWithZone:](allocwithzone_.md): Returns a new instance of the receiving class.
- [init](init%28%29.md): Implemented by subclasses to initialize a new object (the receiver) immediately after memory for it has been allocated.
- [copyWithZone:](copywithzone_.md): Returns the receiver.
- [mutableCopy](mutablecopy%28%29.md): Returns the object returned by `mutableCopy(with:)` where the zone is `nil`.
- [mutableCopyWithZone:](mutablecopywithzone_.md): Returns the receiver.
- [dealloc](dealloc.md): Deallocates the memory occupied by the receiver.
- [new](new.md): Allocates a new instance of the receiving class, sends it an [init](init%28%29.md) message, and returns the initialized object.
