> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbinaryheapcallbacks/compare](https://developer.apple.com/documentation/corefoundation/cfbinaryheapcallbacks/compare)

# compare (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.

## Declaration

```swift
var compare: ((UnsafeRawPointer?, UnsafeRawPointer?, UnsafeMutableRawPointer?) -> CFComparisonResult)!
```

## Parameters

- `ptr1`: First value to compare.
- `ptr2`: Second value to compare.
- `info`: Not used. Should always be `NULL`.

<a id="return-value"></a>

## Return Value

[CFComparisonResult.compareLessThan](../cfcomparisonresult/comparelessthan.md) if `ptr1` is less than `ptr2`, [CFComparisonResult.compareEqualTo](../cfcomparisonresult/compareequalto.md) if `ptr1` and `ptr2` are equal, or [CFComparisonResult.compareGreaterThan](../cfcomparisonresult/comparegreaterthan.md) if `ptr1` is greater than `ptr2`.

## See Also

### Callbacks

- [CFBinaryHeapApplierFunction](../cfbinaryheapapplierfunction.md): Callback function used to apply a function to all members of a binary heap.
- [copyDescription](copydescription.md): Callback function used to get a description of a value in a binary heap.
- [release](release.md): Callback function used to release a value before it is removed from a binary heap.
- [retain](retain.md): Callback function used to retain a value being added to a binary heap.
- [version](version.md): The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.

# compare (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.

## Declaration

```objectivec
enum CFComparisonResult (*)(const void *, const void *, void *) compare;
```

## Parameters

- `ptr1`: First value to compare.
- `ptr2`: Second value to compare.
- `info`: Not used. Should always be `NULL`.

<a id="return-value"></a>

## Return Value

[kCFCompareLessThan](../cfcomparisonresult/comparelessthan.md) if `ptr1` is less than `ptr2`, [kCFCompareEqualTo](../cfcomparisonresult/compareequalto.md) if `ptr1` and `ptr2` are equal, or [kCFCompareGreaterThan](../cfcomparisonresult/comparegreaterthan.md) if `ptr1` is greater than `ptr2`.

## See Also

### Callbacks

- [CFBinaryHeapApplierFunction](../cfbinaryheapapplierfunction.md): Callback function used to apply a function to all members of a binary heap.
- [copyDescription](copydescription.md): Callback function used to get a description of a value in a binary heap.
- [release](release.md): Callback function used to release a value before it is removed from a binary heap.
- [retain](retain.md): Callback function used to retain a value being added to a binary heap.
- [version](version.md): The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.
