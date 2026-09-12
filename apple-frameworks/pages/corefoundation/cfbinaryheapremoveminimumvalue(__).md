> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbinaryheapremoveminimumvalue(_:)](https://developer.apple.com/documentation/corefoundation/cfbinaryheapremoveminimumvalue(_:))

# CFBinaryHeapRemoveMinimumValue(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes the minimum value from a binary heap.

## Declaration

```swift
func CFBinaryHeapRemoveMinimumValue(_ heap: CFBinaryHeap!)
```

## Parameters

- `heap`: The binary heap to use.

<a id="Discussion"></a>

## Discussion

If `heap` contains several equal minimum values, only one of them is removed. If `heap` is empty, this function does nothing.

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
- [CFBinaryHeapGetValues(\_:\_:)](cfbinaryheapgetvalues%28____%29.md): Copies all the values from a binary heap into a sorted C array.
- [CFBinaryHeapRemoveAllValues(\_:)](cfbinaryheapremoveallvalues%28__%29.md): Removes all values from a binary heap, making it empty.

# CFBinaryHeapRemoveMinimumValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes the minimum value from a binary heap.

## Declaration

```objectivec
extern void CFBinaryHeapRemoveMinimumValue(CFBinaryHeapRef heap);
```

## Parameters

- `heap`: The binary heap to use.

<a id="Discussion"></a>

## Discussion

If `heap` contains several equal minimum values, only one of them is removed. If `heap` is empty, this function does nothing.

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
- [CFBinaryHeapGetValues](cfbinaryheapgetvalues%28____%29.md): Copies all the values from a binary heap into a sorted C array.
- [CFBinaryHeapRemoveAllValues](cfbinaryheapremoveallvalues%28__%29.md): Removes all values from a binary heap, making it empty.
