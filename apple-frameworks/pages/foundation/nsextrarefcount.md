> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextrarefcount](https://developer.apple.com/documentation/foundation/nsextrarefcount)

# NSExtraRefCount

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the specified object’s reference count.

## Declaration

```objectivec
extern NSUInteger NSExtraRefCount(id object);
```

## Parameters

- `object`: An object.

<a id="return-value"></a>

## Return Value

The current reference count of `object`.

<a id="Discussion"></a>

## Discussion

This function is used in conjunction with [NSIncrementExtraRefCount](nsincrementextrarefcount.md) and [NSDecrementExtraRefCountWasZero](nsdecrementextrarefcountwaszero.md) in situations where you need to override an object’s [retain](../objectivec/nsobject-c.protocol/retain.md) and [release](../objectivec/nsobject-c.protocol/release.md) methods.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated and unavailable for use with ARC.

## See Also

### Object Allocation and Deallocation

- [NSAllocateObject](nsallocateobject.md): Creates and returns a new instance of a given class.
- [NSCopyObject](nscopyobject.md): Deprecated. Creates an exact copy of an object.
- [NSDeallocateObject](nsdeallocateobject.md): Destroys an existing object.
- [NSDecrementExtraRefCountWasZero](nsdecrementextrarefcountwaszero.md): Decrements the specified object’s reference count.
- [NSIncrementExtraRefCount](nsincrementextrarefcount.md): Increments the specified object’s reference count.
- [NSShouldRetainWithZone](nsshouldretainwithzone.md): Indicates whether an object should be retained.
