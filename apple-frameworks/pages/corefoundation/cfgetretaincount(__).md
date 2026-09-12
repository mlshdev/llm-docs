> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfgetretaincount(_:)](https://developer.apple.com/documentation/corefoundation/cfgetretaincount(_:))

# CFGetRetainCount(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the reference count of a Core Foundation object.

## Declaration

```swift
func CFGetRetainCount(_ cf: CFTypeRef!) -> CFIndex
```

## Parameters

- `cf`: The CFType object to examine.

<a id="return-value"></a>

## Return Value

A number representing the reference count of `cf`.

<a id="Discussion"></a>

## Discussion

You increment the reference count using the [CFRetain](cfretain.md) function, and decrement the reference count using the [CFRelease](cfrelease.md) function.

This function may be useful for debugging memory leaks. You normally do not use this function, otherwise.

## See Also

### Memory Management

- [CFGetAllocator(\_:)](cfgetallocator%28__%29.md): Returns the allocator used to allocate a Core Foundation object.

# CFGetRetainCount (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the reference count of a Core Foundation object.

## Declaration

```objectivec
extern CFIndex CFGetRetainCount(CFTypeRef cf);
```

## Parameters

- `cf`: The CFType object to examine.

<a id="return-value"></a>

## Return Value

A number representing the reference count of `cf`.

<a id="Discussion"></a>

## Discussion

You increment the reference count using the [CFRetain](cfretain.md) function, and decrement the reference count using the [CFRelease](cfrelease.md) function.

This function may be useful for debugging memory leaks. You normally do not use this function, otherwise.

## See Also

### Memory Management

- [CFGetAllocator](cfgetallocator%28__%29.md): Returns the allocator used to allocate a Core Foundation object.
- [CFMakeCollectable](cfmakecollectable.md): Makes a newly-allocated Core Foundation object eligible for garbage collection.
- [CFRelease](cfrelease.md): Releases a Core Foundation object.
- [CFRetain](cfretain.md): Retains a Core Foundation object.
