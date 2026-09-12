> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecrementextrarefcountwaszero](https://developer.apple.com/documentation/foundation/nsdecrementextrarefcountwaszero)

# NSDecrementExtraRefCountWasZero

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decrements the specified object’s reference count.

## Declaration

```objectivec
extern BOOL NSDecrementExtraRefCountWasZero(id object);
```

## Parameters

- `object`: An object.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if `anObject` had an extra reference count, or [true](https://developer.apple.com/documentation/swift/true) if `anObject` didn’t have an extra reference count—indicating that the object should be deallocated (with `dealloc`).

<a id="Discussion"></a>

## Discussion

Decrements the “extra reference” count of `anObject`. Newly created objects have only one actual reference, so that a single release message results in the object being deallocated. Extra references are those beyond the single original reference and are usually created by sending the object a retain message. Your code should generally not use these functions unless it is overriding the [retain](../objectivec/nsobject-c.protocol/retain.md) or [release](../objectivec/nsobject-c.protocol/release.md) methods.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated and unavailable for use with ARC.

## See Also

### Object Allocation and Deallocation

- [NSAllocateObject](nsallocateobject.md): Creates and returns a new instance of a given class.
- [NSCopyObject](nscopyobject.md): Deprecated. Creates an exact copy of an object.
- [NSDeallocateObject](nsdeallocateobject.md): Destroys an existing object.
- [NSExtraRefCount](nsextrarefcount.md): Returns the specified object’s reference count.
- [NSIncrementExtraRefCount](nsincrementextrarefcount.md): Increments the specified object’s reference count.
- [NSShouldRetainWithZone](nsshouldretainwithzone.md): Indicates whether an object should be retained.
