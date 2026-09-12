> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarrayflagbackpropset](https://developer.apple.com/documentation/accelerate/bnnsndarrayflagbackpropset)

# BNNSNDArrayFlagBackpropSet (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A flag that indicates the elements of this n-dimensional array are overwritten by the Jacobian during backpropagation.

## Declaration

```swift
var BNNSNDArrayFlagBackpropSet: BNNSNDArrayFlags { get }
```

## See Also

### N-Dimensional Array Flags

- [init(\_:)](bnnsndarrayflags/init%28__%29.md)
- [init(rawValue:)](bnnsndarrayflags/init%28rawvalue_%29.md)
- [rawValue](bnnsndarrayflags/rawvalue.md)
- [BNNSNDArrayFlagBackpropAccumulate](bnnsndarrayflagbackpropaccumulate.md): A flag that indicates backpropagation adds the value of the Jacobian to the elements of this n-dimensional array.

# BNNSNDArrayFlagBackpropSet (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A flag that indicates the elements of this n-dimensional array are overwritten by the Jacobian during backpropagation.

## Declaration

```objectivec
BNNSNDArrayFlagBackpropSet
```

## See Also

### N-Dimensional Array Flags

- [BNNSNDArrayFlagBackpropAccumulate](bnnsndarrayflagbackpropaccumulate.md): A flag that indicates backpropagation adds the value of the Jacobian to the elements of this n-dimensional array.
