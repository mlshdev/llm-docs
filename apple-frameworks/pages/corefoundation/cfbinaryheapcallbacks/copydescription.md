> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbinaryheapcallbacks/copydescription](https://developer.apple.com/documentation/corefoundation/cfbinaryheapcallbacks/copydescription)

# copyDescription (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function used to get a description of a value in a binary heap.

## Declaration

```swift
var copyDescription: ((UnsafeRawPointer?) -> Unmanaged<CFString>?)!
```

## Parameters

- `ptr`: The value to be described.

<a id="discussion"></a>

## Discussion

The callback used to create a descriptive string representation of each value in the binary heap. This is used by the [CFCopyDescription(\_:)](../cfcopydescription%28__%29.md) function. If this field is `NULL`, the binary heap constructs a `CFString` object describing the value based on its pointer value.

## See Also

### Callbacks

- [CFBinaryHeapApplierFunction](../cfbinaryheapapplierfunction.md): Callback function used to apply a function to all members of a binary heap.
- [compare](compare.md): The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.
- [release](release.md): Callback function used to release a value before it is removed from a binary heap.
- [retain](retain.md): Callback function used to retain a value being added to a binary heap.
- [version](version.md): The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.

# copyDescription (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function used to get a description of a value in a binary heap.

## Declaration

```objectivec
const struct __CFString *(*)(const void *) copyDescription;
```

## Parameters

- `ptr`: The value to be described.

<a id="discussion"></a>

## Discussion

The callback used to create a descriptive string representation of each value in the binary heap. This is used by the [CFCopyDescription](../cfcopydescription%28__%29.md) function. If this field is `NULL`, the binary heap constructs a `CFString` object describing the value based on its pointer value.

## See Also

### Callbacks

- [CFBinaryHeapApplierFunction](../cfbinaryheapapplierfunction.md): Callback function used to apply a function to all members of a binary heap.
- [compare](compare.md): The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.
- [release](release.md): Callback function used to release a value before it is removed from a binary heap.
- [retain](retain.md): Callback function used to retain a value being added to a binary heap.
- [version](version.md): The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.
