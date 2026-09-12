> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbinaryheapcallbacks/release](https://developer.apple.com/documentation/corefoundation/cfbinaryheapcallbacks/release)

# release (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function used to release a value before it is removed from a binary heap.

## Declaration

```swift
var release: ((CFAllocator?, UnsafeRawPointer?) -> Void)!
```

## Parameters

- `allocator`: The binary heap’s allocator.
- `ptr`: The value to release.

<a id="discussion"></a>

## Discussion

The callback used to remove a retain previously added for the binary heap from values as they are removed from the binary heap. If this field is `NULL`, the binary heap does nothing to release a value being removed.

## See Also

### Callbacks

- [CFBinaryHeapApplierFunction](../cfbinaryheapapplierfunction.md): Callback function used to apply a function to all members of a binary heap.
- [compare](compare.md): The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.
- [copyDescription](copydescription.md): Callback function used to get a description of a value in a binary heap.
- [retain](retain.md): Callback function used to retain a value being added to a binary heap.
- [version](version.md): The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.

# release (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function used to release a value before it is removed from a binary heap.

## Declaration

```objectivec
void (*)(const struct __CFAllocator *, const void *) release;
```

## Parameters

- `allocator`: The binary heap’s allocator.
- `ptr`: The value to release.

<a id="discussion"></a>

## Discussion

The callback used to remove a retain previously added for the binary heap from values as they are removed from the binary heap. If this field is `NULL`, the binary heap does nothing to release a value being removed.

## See Also

### Callbacks

- [CFBinaryHeapApplierFunction](../cfbinaryheapapplierfunction.md): Callback function used to apply a function to all members of a binary heap.
- [compare](compare.md): The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.
- [copyDescription](copydescription.md): Callback function used to get a description of a value in a binary heap.
- [retain](retain.md): Callback function used to retain a value being added to a binary heap.
- [version](version.md): The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.
