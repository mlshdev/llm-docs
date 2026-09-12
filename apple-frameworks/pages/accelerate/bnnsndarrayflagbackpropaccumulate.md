> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarrayflagbackpropaccumulate](https://developer.apple.com/documentation/accelerate/bnnsndarrayflagbackpropaccumulate)

# BNNSNDArrayFlagBackpropAccumulate (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A flag that indicates backpropagation adds the value of the Jacobian to the elements of this n-dimensional array.

## Declaration

```swift
var BNNSNDArrayFlagBackpropAccumulate: BNNSNDArrayFlags { get }
```

## See Also

### N-Dimensional Array Flags

- [init(\_:)](bnnsndarrayflags/init%28__%29.md)
- [init(rawValue:)](bnnsndarrayflags/init%28rawvalue_%29.md)
- [rawValue](bnnsndarrayflags/rawvalue.md)
- [BNNSNDArrayFlagBackpropSet](bnnsndarrayflagbackpropset.md): A flag that indicates the elements of this n-dimensional array are overwritten by the Jacobian during backpropagation.

# BNNSNDArrayFlagBackpropAccumulate (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A flag that indicates backpropagation adds the value of the Jacobian to the elements of this n-dimensional array.

## Declaration

```objectivec
BNNSNDArrayFlagBackpropAccumulate
```

## See Also

### N-Dimensional Array Flags

- [BNNSNDArrayFlagBackpropSet](bnnsndarrayflagbackpropset.md): A flag that indicates the elements of this n-dimensional array are overwritten by the Jacobian during backpropagation.
