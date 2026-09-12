> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmakecollectable](https://developer.apple.com/documentation/corefoundation/cfmakecollectable)

# CFMakeCollectable

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Makes a newly-allocated Core Foundation object eligible for garbage collection.

## Declaration

```objectivec
extern CFTypeRefCFMakeCollectable(CFTypeRef cf);
```

## Parameters

- `cf`: A CFType object to make collectable. This value must not be `NULL`.

<a id="return-value"></a>

## Return Value

`cf`.

<a id="Discussion"></a>

## Discussion

For more details, see Garbage Collection Programming Guide.

<a id="Special-Considerations"></a>

### Special Considerations

If `cf` is `NULL`, this will cause a runtime error and your application will crash.

## See Also

### Memory Management

- [CFGetAllocator](cfgetallocator%28__%29.md): Returns the allocator used to allocate a Core Foundation object.
- [CFGetRetainCount](cfgetretaincount%28__%29.md): Returns the reference count of a Core Foundation object.
- [CFRelease](cfrelease.md): Releases a Core Foundation object.
- [CFRetain](cfretain.md): Retains a Core Foundation object.
