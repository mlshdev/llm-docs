> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsshouldretainwithzone](https://developer.apple.com/documentation/foundation/nsshouldretainwithzone)

# NSShouldRetainWithZone

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether an object should be retained.

## Declaration

```objectivec
extern BOOL NSShouldRetainWithZone(id anObject, NSZone *requestedZone);
```

## Parameters

- `anObject`: An object.
- `requestedZone`: A memory zone.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if `requestedZone` is `NULL`, the default zone, or the zone in which `anObject` was allocated; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This function is typically called from inside an `NSObject`’s [copyWithZone:](../objectivec/nsobject-swift.class/copywithzone_.md), when deciding whether to retain `anObject` as opposed to making a copy of it.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated and unavailable for use with ARC.

## See Also

### Object Allocation and Deallocation

- [NSAllocateObject](nsallocateobject.md): Creates and returns a new instance of a given class.
- [NSCopyObject](nscopyobject.md): Deprecated. Creates an exact copy of an object.
- [NSDeallocateObject](nsdeallocateobject.md): Destroys an existing object.
- [NSDecrementExtraRefCountWasZero](nsdecrementextrarefcountwaszero.md): Decrements the specified object’s reference count.
- [NSExtraRefCount](nsextrarefcount.md): Returns the specified object’s reference count.
- [NSIncrementExtraRefCount](nsincrementextrarefcount.md): Increments the specified object’s reference count.
