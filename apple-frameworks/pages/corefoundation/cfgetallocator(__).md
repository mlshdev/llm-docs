> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfgetallocator(_:)](https://developer.apple.com/documentation/corefoundation/cfgetallocator(_:))

# CFGetAllocator(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the allocator used to allocate a Core Foundation object.

## Declaration

```swift
func CFGetAllocator(_ cf: CFTypeRef!) -> CFAllocator!
```

## Parameters

- `cf`: The CFType object to examine.

<a id="return-value"></a>

## Return Value

The allocator used to allocate memory for `cf`.

<a id="Discussion"></a>

## Discussion

When you are creating a Core Foundation object sometimes you want to ensure that the block of memory allocated for the object is from the same allocator used for another object. One way to do this is to reuse the allocator assigned to an existing Core Foundation object when you call a “creation” function.

## See Also

### Memory Management

- [CFGetRetainCount(\_:)](cfgetretaincount%28__%29.md): Returns the reference count of a Core Foundation object.

# CFGetAllocator (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the allocator used to allocate a Core Foundation object.

## Declaration

```objectivec
extern CFAllocatorRefCFGetAllocator(CFTypeRef cf);
```

## Parameters

- `cf`: The CFType object to examine.

<a id="return-value"></a>

## Return Value

The allocator used to allocate memory for `cf`.

<a id="Discussion"></a>

## Discussion

When you are creating a Core Foundation object sometimes you want to ensure that the block of memory allocated for the object is from the same allocator used for another object. One way to do this is to reuse the allocator assigned to an existing Core Foundation object when you call a “creation” function.

## See Also

### Memory Management

- [CFGetRetainCount](cfgetretaincount%28__%29.md): Returns the reference count of a Core Foundation object.
- [CFMakeCollectable](cfmakecollectable.md): Makes a newly-allocated Core Foundation object eligible for garbage collection.
- [CFRelease](cfrelease.md): Releases a Core Foundation object.
- [CFRetain](cfretain.md): Retains a Core Foundation object.
