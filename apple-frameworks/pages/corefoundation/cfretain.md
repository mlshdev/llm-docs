> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfretain](https://developer.apple.com/documentation/corefoundation/cfretain)

# CFRetain

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Retains a Core Foundation object.

## Declaration

```objectivec
extern CFTypeRefCFRetain(CFTypeRef cf);
```

## Parameters

- `cf`: The CFType object to retain. This value must not be `NULL`

<a id="return-value"></a>

## Return Value

The input value, `cf`.

<a id="Discussion"></a>

## Discussion

You should retain a Core Foundation object when you receive it from elsewhere (that is, you did not create or copy it) and you want it to persist. If you retain a Core Foundation object you are responsible for releasing it (see [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i)).

<a id="Special-Considerations"></a>

### Special Considerations

If `cf` is `NULL`, this will cause a runtime error and your application will crash.

## See Also

### Memory Management

- [CFGetAllocator](cfgetallocator%28__%29.md): Returns the allocator used to allocate a Core Foundation object.
- [CFGetRetainCount](cfgetretaincount%28__%29.md): Returns the reference count of a Core Foundation object.
- [CFMakeCollectable](cfmakecollectable.md): Makes a newly-allocated Core Foundation object eligible for garbage collection.
- [CFRelease](cfrelease.md): Releases a Core Foundation object.
