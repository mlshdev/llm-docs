> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmakecollectable](https://developer.apple.com/documentation/foundation/nsmakecollectable)

# NSMakeCollectable

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Makes a newly allocated Core Foundation object eligible for collection.

> Garbage collection is deprecated in OS X v10.8; instead,you should use AutomaticReference Counting—see [Transitioning to ARC Release Notes](https://developer.apple.com/library/archive/releasenotes/ObjectiveC/RN-TransitioningToARC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011226).

## Declaration

```objectivec
static idNSMakeCollectable(CFTypeRef cf);
```

<a id="Discussion"></a>

## Discussion

This function is a wrapper for [CFMakeCollectable](../corefoundation/cfmakecollectable.md), but its return type is `id`—avoiding the need for casting when using Cocoa objects.

This function may be useful when returning Core Foundation objects in code that must support both garbage-collected and non-garbage-collected environments, as illustrated in the following example.

```objc
- (CFDateRef)foo {
    CFDateRef aCFDate;
    // ...
    return [NSMakeCollectable(aCFDate) autorelease];
}
```

CFTypeRef style objects are garbage collected, yet only sometime after the last [CFRelease](../corefoundation/cfrelease.md) is performed. Particularly for fully-bridged CFTypeRef objects such as CFStrings and collections (such as CFDictionary), you must call either `CFMakeCollectable` or the more type safe `NSMakeCollectable`, preferably right upon allocation.

## See Also

### Legacy

- [NSGarbageCollector](nsgarbagecollector.md): Deprecated. A convenient interface to the garbage collection system.
- [NSAllocateCollectable](nsallocatecollectable.md): Deprecated. Allocates collectable memory.
- [NSReallocateCollectable](nsreallocatecollectable.md): Deprecated. Reallocates collectable memory.
- [Memory Allocation Options](1539826-memory-allocation-options.md): Constants used to control behavior when allocating or reallocating collectible memory.
