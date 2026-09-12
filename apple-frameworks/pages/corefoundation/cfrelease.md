> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrelease](https://developer.apple.com/documentation/corefoundation/cfrelease)

# CFRelease

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Releases a Core Foundation object.

## Declaration

```objectivec
extern void CFRelease(CFTypeRef cf);
```

## Parameters

- `cf`: A CFType object to release. This value must not be `NULL`.

<a id="Discussion"></a>

## Discussion

If the retain count of `cf` becomes zero the memory allocated to the object is deallocated and the object is destroyed. If you create, copy, or explicitly retain (see the [CFRetain](cfretain.md) function) a Core Foundation object, you are responsible for releasing it when you no longer need it (see [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i)).

<a id="Special-Considerations"></a>

### Special Considerations

If `cf` is `NULL`, this will cause a runtime error and your application will crash.

## See Also

### Memory Management

- [CFGetAllocator](cfgetallocator%28__%29.md): Returns the allocator used to allocate a Core Foundation object.
- [CFGetRetainCount](cfgetretaincount%28__%29.md): Returns the reference count of a Core Foundation object.
- [CFMakeCollectable](cfmakecollectable.md): Makes a newly-allocated Core Foundation object eligible for garbage collection.
- [CFRetain](cfretain.md): Retains a Core Foundation object.
