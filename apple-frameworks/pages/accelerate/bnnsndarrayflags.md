> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarrayflags](https://developer.apple.com/documentation/accelerate/bnnsndarrayflags)

# BNNSNDArrayFlags (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that control the behavior of an n-dimensional array.

## Declaration

```swift
struct BNNSNDArrayFlags
```

## Topics

### N-Dimensional Array Flags

- [init(\_:)](bnnsndarrayflags/init%28__%29.md)
- [init(rawValue:)](bnnsndarrayflags/init%28rawvalue_%29.md)
- [rawValue](bnnsndarrayflags/rawvalue.md)
- [BNNSNDArrayFlagBackpropAccumulate](bnnsndarrayflagbackpropaccumulate.md): A flag that indicates backpropagation adds the value of the Jacobian to the elements of this n-dimensional array.
- [BNNSNDArrayFlagBackpropSet](bnnsndarrayflagbackpropset.md): A flag that indicates the elements of this n-dimensional array are overwritten by the Jacobian during backpropagation.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# BNNSNDArrayFlags (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that control the behavior of an n-dimensional array.

## Declaration

```objectivec
typedef enum { ... } BNNSNDArrayFlags;
```

## Topics

### N-Dimensional Array Flags

- [BNNSNDArrayFlagBackpropAccumulate](bnnsndarrayflagbackpropaccumulate.md): A flag that indicates backpropagation adds the value of the Jacobian to the elements of this n-dimensional array.
- [BNNSNDArrayFlagBackpropSet](bnnsndarrayflagbackpropset.md): A flag that indicates the elements of this n-dimensional array are overwritten by the Jacobian during backpropagation.
