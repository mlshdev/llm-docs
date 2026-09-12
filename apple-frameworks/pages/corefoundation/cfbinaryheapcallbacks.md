> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbinaryheapcallbacks](https://developer.apple.com/documentation/corefoundation/cfbinaryheapcallbacks)

# CFBinaryHeapCallBacks (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Structure containing the callbacks for values for a `CFBinaryHeap` object.

## Declaration

```swift
struct CFBinaryHeapCallBacks
```

## Topics

### Initializers

- [init()](cfbinaryheapcallbacks/init%28%29.md)
- [init(version:retain:release:copyDescription:compare:)](cfbinaryheapcallbacks/init%28version_retain_release_copydescription_compare_%29.md)

### Instance Properties

- [compare](cfbinaryheapcallbacks/compare.md): The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.
- [copyDescription](cfbinaryheapcallbacks/copydescription.md): Callback function used to get a description of a value in a binary heap.
- [release](cfbinaryheapcallbacks/release.md): Callback function used to release a value before it is removed from a binary heap.
- [retain](cfbinaryheapcallbacks/retain.md): Callback function used to retain a value being added to a binary heap.
- [version](cfbinaryheapcallbacks/version.md): The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CFBinaryHeapCompareContext](cfbinaryheapcomparecontext.md): Not used.

# CFBinaryHeapCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Structure containing the callbacks for values for a `CFBinaryHeap` object.

## Declaration

```objectivec
typedef struct { ... } CFBinaryHeapCallBacks;
```

## Topics

### Instance Properties

- [compare](cfbinaryheapcallbacks/compare.md): The callback used to compare values in the binary heap in some operations. This field cannot be `NULL`.
- [copyDescription](cfbinaryheapcallbacks/copydescription.md): Callback function used to get a description of a value in a binary heap.
- [release](cfbinaryheapcallbacks/release.md): Callback function used to release a value before it is removed from a binary heap.
- [retain](cfbinaryheapcallbacks/retain.md): Callback function used to retain a value being added to a binary heap.
- [version](cfbinaryheapcallbacks/version.md): The version number of the structure type being passed in as a parameter to the `CFBinaryHeap` creation functions. This structure is version `0`.

## See Also

### Data Types

- [CFBinaryHeapCompareContext](cfbinaryheapcomparecontext.md): Not used.
