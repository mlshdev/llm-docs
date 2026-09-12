> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatalayoutgetrank(_:)](https://developer.apple.com/documentation/accelerate/bnnsdatalayoutgetrank(_:))

# BNNSDataLayoutGetRank(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
func BNNSDataLayoutGetRank(_ layout: BNNSDataLayout) -> Int
```

<a id="return-value"></a>

## Return Value

The number of dimensions represented by `layout`, or `SIZE_T_MAX` if unable to determine

<a id="discussion"></a>

## Discussion

Determine the rank of the given layout

## See Also

### N-dimensional array descriptor essentials

- [BNNSLayerData](bnnslayerdata.md): Deprecated. A structure containing common layer parameters.
- [BNNS.Shape](bnns/shape.md): Constants that describe the size and data layout of an n-dimensional array descriptor.
- [BNNSDataLayout](bnnsdatalayout.md): Constants that describe the data type of an n-dimensional array.
- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.

# BNNSDataLayoutGetRank (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
size_t BNNSDataLayoutGetRank(BNNSDataLayout layout);
```

<a id="return-value"></a>

## Return Value

The number of dimensions represented by `layout`, or `SIZE_T_MAX` if unable to determine

<a id="discussion"></a>

## Discussion

Determine the rank of the given layout

## See Also

### N-dimensional array descriptor essentials

- [BNNSLayerData](bnnslayerdata.md): Deprecated. A structure containing common layer parameters.
- [BNNSDataLayout](bnnsdatalayout.md): Constants that describe the data type of an n-dimensional array.
- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
