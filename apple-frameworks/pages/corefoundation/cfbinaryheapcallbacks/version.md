> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbinaryheapcallbacks/version](https://developer.apple.com/documentation/corefoundation/cfbinaryheapcallbacks/version)

# version (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.

## Declaration

```swift
var version: CFIndex
```

## See Also

### Callbacks

- [CFBinaryHeapApplierFunction](../cfbinaryheapapplierfunction.md): Callback function used to apply a function to all members of a binary heap.
- [compare](compare.md): The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.
- [copyDescription](copydescription.md): Callback function used to get a description of a value in a binary heap.
- [release](release.md): Callback function used to release a value before it is removed from a binary heap.
- [retain](retain.md): Callback function used to retain a value being added to a binary heap.

# version (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.

## Declaration

```objectivec
CFIndex version;
```

## See Also

### Callbacks

- [CFBinaryHeapApplierFunction](../cfbinaryheapapplierfunction.md): Callback function used to apply a function to all members of a binary heap.
- [compare](compare.md): The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.
- [copyDescription](copydescription.md): Callback function used to get a description of a value in a binary heap.
- [release](release.md): Callback function used to release a value before it is removed from a binary heap.
- [retain](retain.md): Callback function used to retain a value being added to a binary heap.
