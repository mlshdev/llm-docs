> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdeallocateobject](https://developer.apple.com/documentation/foundation/nsdeallocateobject)

# NSDeallocateObject

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Destroys an existing object.

## Declaration

```objectivec
extern void NSDeallocateObject(id object);
```

## Parameters

- `object`: An object.

<a id="Discussion"></a>

## Discussion

This function deallocates `object`, which must have been allocated using `NSAllocateObject`.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated and unavailable for use with ARC.

## See Also

### Object Allocation and Deallocation

- [NSAllocateObject](nsallocateobject.md): Creates and returns a new instance of a given class.
- [NSCopyObject](nscopyobject.md): Deprecated. Creates an exact copy of an object.
- [NSDecrementExtraRefCountWasZero](nsdecrementextrarefcountwaszero.md): Decrements the specified object’s reference count.
- [NSExtraRefCount](nsextrarefcount.md): Returns the specified object’s reference count.
- [NSIncrementExtraRefCount](nsincrementextrarefcount.md): Increments the specified object’s reference count.
- [NSShouldRetainWithZone](nsshouldretainwithzone.md): Indicates whether an object should be retained.
