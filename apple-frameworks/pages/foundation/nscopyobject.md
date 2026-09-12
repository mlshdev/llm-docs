> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscopyobject](https://developer.apple.com/documentation/foundation/nscopyobject)

# NSCopyObject

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 6.0) · iPadOS 2.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates an exact copy of an object.

## Declaration

```objectivec
extern idNSCopyObject(id object, NSUInteger extraBytes, NSZone *zone);
```

## Parameters

- `object`: The object to copy.
- `extraBytes`: The number of extra bytes required for indexed instance variables (this value is typically `0`).
- `zone`: The zone in which to create the new instance (pass `NULL` to specify the default zone).

<a id="return-value"></a>

## Return Value

A new object that’s an exact copy of `anObject`, or `nil` if `object` is `nil` or if `object` could not be copied.

<a id="Discussion"></a>

## Discussion

This function is deprecated and unavailable for use with ARC. To create a copy of an object, use the [copyWithZone:](../objectivec/nsobject-swift.class/copywithzone_.md) method instead.

## See Also

### Object Allocation and Deallocation

- [NSAllocateObject](nsallocateobject.md): Creates and returns a new instance of a given class.
- [NSDeallocateObject](nsdeallocateobject.md): Destroys an existing object.
- [NSDecrementExtraRefCountWasZero](nsdecrementextrarefcountwaszero.md): Decrements the specified object’s reference count.
- [NSExtraRefCount](nsextrarefcount.md): Returns the specified object’s reference count.
- [NSIncrementExtraRefCount](nsincrementextrarefcount.md): Increments the specified object’s reference count.
- [NSShouldRetainWithZone](nsshouldretainwithzone.md): Indicates whether an object should be retained.
