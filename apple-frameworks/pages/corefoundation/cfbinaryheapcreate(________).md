> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbinaryheapcreate(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbinaryheapcreate(_:_:_:_:))

# CFBinaryHeapCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable or fixed-mutable binary heap.

## Declaration

```swift
func CFBinaryHeapCreate(_ allocator: CFAllocator!, _ capacity: CFIndex, _ callBacks: UnsafePointer<CFBinaryHeapCallBacks>!, _ compareContext: UnsafePointer<CFBinaryHeapCompareContext>!) -> CFBinaryHeap!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the binary heap. The binary heap starts empty and can grow to this number of values. If this parameter is `0`, the binary heap’s maximum capacity is limited only by memory.
- `callBacks`: A pointer to a [CFBinaryHeapCallBacks](cfbinaryheapcallbacks.md) structure initialized with the callbacks that operate on the values placed into the binary heap. If the binary heap will be holding `CFString` objects, pass the [kCFStringBinaryHeapCallBacks](kcfstringbinaryheapcallbacks.md) constant. This functions makes a copy of the contents of the callbacks structure, so that a pointer to a structure on the stack can be passed in, or can be reused for multiple binary heap creations. This callbacks parameter may not be `NULL`.
- `compareContext`: Not used. Pass `NULL`.

<a id="return-value"></a>

## Return Value

A new `CFBinaryHeap` object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFBinaryHeap Miscellaneous Functions

- [CFBinaryHeapAddValue(\_:\_:)](cfbinaryheapaddvalue%28____%29.md): Adds a value to a binary heap.
- [CFBinaryHeapApplyFunction(\_:\_:\_:)](cfbinaryheapapplyfunction%28______%29.md): Iteratively applies a function to all the values in a binary heap.
- [CFBinaryHeapContainsValue(\_:\_:)](cfbinaryheapcontainsvalue%28____%29.md): Returns whether a given value is in a binary heap.
- [CFBinaryHeapCreateCopy(\_:\_:\_:)](cfbinaryheapcreatecopy%28______%29.md): Creates a new mutable or fixed-mutable binary heap with the values from a pre-existing binary heap.
- [CFBinaryHeapGetCount(\_:)](cfbinaryheapgetcount%28__%29.md): Returns the number of values currently in a binary heap.
- [CFBinaryHeapGetCountOfValue(\_:\_:)](cfbinaryheapgetcountofvalue%28____%29.md): Counts the number of times a given value occurs in a binary heap.
- [CFBinaryHeapGetMinimum(\_:)](cfbinaryheapgetminimum%28__%29.md): Returns the minimum value in a binary heap.
- [CFBinaryHeapGetMinimumIfPresent(\_:\_:)](cfbinaryheapgetminimumifpresent%28____%29.md): Returns the minimum value in a binary heap, if present.
- [CFBinaryHeapGetTypeID()](cfbinaryheapgettypeid%28%29.md): Returns the type identifier of the `CFBinaryHeap` opaque type.
- [CFBinaryHeapGetValues(\_:\_:)](cfbinaryheapgetvalues%28____%29.md): Copies all the values from a binary heap into a sorted C array.
- [CFBinaryHeapRemoveAllValues(\_:)](cfbinaryheapremoveallvalues%28__%29.md): Removes all values from a binary heap, making it empty.
- [CFBinaryHeapRemoveMinimumValue(\_:)](cfbinaryheapremoveminimumvalue%28__%29.md): Removes the minimum value from a binary heap.

# CFBinaryHeapCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable or fixed-mutable binary heap.

## Declaration

```objectivec
extern CFBinaryHeapRefCFBinaryHeapCreate(CFAllocatorRef allocator, CFIndex capacity, const CFBinaryHeapCallBacks *callBacks, const CFBinaryHeapCompareContext *compareContext);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the binary heap. The binary heap starts empty and can grow to this number of values. If this parameter is `0`, the binary heap’s maximum capacity is limited only by memory.
- `callBacks`: A pointer to a [CFBinaryHeapCallBacks](cfbinaryheapcallbacks.md) structure initialized with the callbacks that operate on the values placed into the binary heap. If the binary heap will be holding `CFString` objects, pass the [kCFStringBinaryHeapCallBacks](kcfstringbinaryheapcallbacks.md) constant. This functions makes a copy of the contents of the callbacks structure, so that a pointer to a structure on the stack can be passed in, or can be reused for multiple binary heap creations. This callbacks parameter may not be `NULL`.
- `compareContext`: Not used. Pass `NULL`.

<a id="return-value"></a>

## Return Value

A new `CFBinaryHeap` object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFBinaryHeap Miscellaneous Functions

- [CFBinaryHeapAddValue](cfbinaryheapaddvalue%28____%29.md): Adds a value to a binary heap.
- [CFBinaryHeapApplyFunction](cfbinaryheapapplyfunction%28______%29.md): Iteratively applies a function to all the values in a binary heap.
- [CFBinaryHeapContainsValue](cfbinaryheapcontainsvalue%28____%29.md): Returns whether a given value is in a binary heap.
- [CFBinaryHeapCreateCopy](cfbinaryheapcreatecopy%28______%29.md): Creates a new mutable or fixed-mutable binary heap with the values from a pre-existing binary heap.
- [CFBinaryHeapGetCount](cfbinaryheapgetcount%28__%29.md): Returns the number of values currently in a binary heap.
- [CFBinaryHeapGetCountOfValue](cfbinaryheapgetcountofvalue%28____%29.md): Counts the number of times a given value occurs in a binary heap.
- [CFBinaryHeapGetMinimum](cfbinaryheapgetminimum%28__%29.md): Returns the minimum value in a binary heap.
- [CFBinaryHeapGetMinimumIfPresent](cfbinaryheapgetminimumifpresent%28____%29.md): Returns the minimum value in a binary heap, if present.
- [CFBinaryHeapGetTypeID](cfbinaryheapgettypeid%28%29.md): Returns the type identifier of the `CFBinaryHeap` opaque type.
- [CFBinaryHeapGetValues](cfbinaryheapgetvalues%28____%29.md): Copies all the values from a binary heap into a sorted C array.
- [CFBinaryHeapRemoveAllValues](cfbinaryheapremoveallvalues%28__%29.md): Removes all values from a binary heap, making it empty.
- [CFBinaryHeapRemoveMinimumValue](cfbinaryheapremoveminimumvalue%28__%29.md): Removes the minimum value from a binary heap.
