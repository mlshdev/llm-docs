> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbinaryheapgetvalues(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbinaryheapgetvalues(_:_:))

# CFBinaryHeapGetValues(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Copies all the values from a binary heap into a sorted C array.

## Declaration

```swift
func CFBinaryHeapGetValues(_ heap: CFBinaryHeap!, _ values: UnsafeMutablePointer<UnsafeRawPointer?>!)
```

## Parameters

- `heap`: The binary heap to use.
- `values`: On return, the memory pointed to by this argument holds a C array of all the values in heap, sorted from minimum to maximum values. You must allocate sufficient memory to hold all the values in `heap` before calling this function. If the values are Core Foundation objects, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### CFBinaryHeap Miscellaneous Functions

- [CFBinaryHeapAddValue(\_:\_:)](cfbinaryheapaddvalue%28____%29.md): Adds a value to a binary heap.
- [CFBinaryHeapApplyFunction(\_:\_:\_:)](cfbinaryheapapplyfunction%28______%29.md): Iteratively applies a function to all the values in a binary heap.
- [CFBinaryHeapContainsValue(\_:\_:)](cfbinaryheapcontainsvalue%28____%29.md): Returns whether a given value is in a binary heap.
- [CFBinaryHeapCreate(\_:\_:\_:\_:)](cfbinaryheapcreate%28________%29.md): Creates a new mutable or fixed-mutable binary heap.
- [CFBinaryHeapCreateCopy(\_:\_:\_:)](cfbinaryheapcreatecopy%28______%29.md): Creates a new mutable or fixed-mutable binary heap with the values from a pre-existing binary heap.
- [CFBinaryHeapGetCount(\_:)](cfbinaryheapgetcount%28__%29.md): Returns the number of values currently in a binary heap.
- [CFBinaryHeapGetCountOfValue(\_:\_:)](cfbinaryheapgetcountofvalue%28____%29.md): Counts the number of times a given value occurs in a binary heap.
- [CFBinaryHeapGetMinimum(\_:)](cfbinaryheapgetminimum%28__%29.md): Returns the minimum value in a binary heap.
- [CFBinaryHeapGetMinimumIfPresent(\_:\_:)](cfbinaryheapgetminimumifpresent%28____%29.md): Returns the minimum value in a binary heap, if present.
- [CFBinaryHeapGetTypeID()](cfbinaryheapgettypeid%28%29.md): Returns the type identifier of the `CFBinaryHeap` opaque type.
- [CFBinaryHeapRemoveAllValues(\_:)](cfbinaryheapremoveallvalues%28__%29.md): Removes all values from a binary heap, making it empty.
- [CFBinaryHeapRemoveMinimumValue(\_:)](cfbinaryheapremoveminimumvalue%28__%29.md): Removes the minimum value from a binary heap.

# CFBinaryHeapGetValues (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Copies all the values from a binary heap into a sorted C array.

## Declaration

```objectivec
extern void CFBinaryHeapGetValues(CFBinaryHeapRef heap, const void **values);
```

## Parameters

- `heap`: The binary heap to use.
- `values`: On return, the memory pointed to by this argument holds a C array of all the values in heap, sorted from minimum to maximum values. You must allocate sufficient memory to hold all the values in `heap` before calling this function. If the values are Core Foundation objects, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### CFBinaryHeap Miscellaneous Functions

- [CFBinaryHeapAddValue](cfbinaryheapaddvalue%28____%29.md): Adds a value to a binary heap.
- [CFBinaryHeapApplyFunction](cfbinaryheapapplyfunction%28______%29.md): Iteratively applies a function to all the values in a binary heap.
- [CFBinaryHeapContainsValue](cfbinaryheapcontainsvalue%28____%29.md): Returns whether a given value is in a binary heap.
- [CFBinaryHeapCreate](cfbinaryheapcreate%28________%29.md): Creates a new mutable or fixed-mutable binary heap.
- [CFBinaryHeapCreateCopy](cfbinaryheapcreatecopy%28______%29.md): Creates a new mutable or fixed-mutable binary heap with the values from a pre-existing binary heap.
- [CFBinaryHeapGetCount](cfbinaryheapgetcount%28__%29.md): Returns the number of values currently in a binary heap.
- [CFBinaryHeapGetCountOfValue](cfbinaryheapgetcountofvalue%28____%29.md): Counts the number of times a given value occurs in a binary heap.
- [CFBinaryHeapGetMinimum](cfbinaryheapgetminimum%28__%29.md): Returns the minimum value in a binary heap.
- [CFBinaryHeapGetMinimumIfPresent](cfbinaryheapgetminimumifpresent%28____%29.md): Returns the minimum value in a binary heap, if present.
- [CFBinaryHeapGetTypeID](cfbinaryheapgettypeid%28%29.md): Returns the type identifier of the `CFBinaryHeap` opaque type.
- [CFBinaryHeapRemoveAllValues](cfbinaryheapremoveallvalues%28__%29.md): Removes all values from a binary heap, making it empty.
- [CFBinaryHeapRemoveMinimumValue](cfbinaryheapremoveminimumvalue%28__%29.md): Removes the minimum value from a binary heap.
