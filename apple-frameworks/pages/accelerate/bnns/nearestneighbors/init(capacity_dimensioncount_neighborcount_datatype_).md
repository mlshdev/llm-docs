> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/nearestneighbors/init(capacity:dimensioncount:neighborcount:datatype:)](https://developer.apple.com/documentation/accelerate/bnns/nearestneighbors/init(capacity:dimensioncount:neighborcount:datatype:))

# init(capacity:dimensionCount:neighborCount:dataType:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Returns a new k-nearest neighbors object.

## Declaration

```swift
init(capacity: Int, dimensionCount: Int, neighborCount: Int, dataType: BNNSDataType)
```

## Parameters

- `capacity`: The maximum number of data points.
- `dimensionCount`: The number of features or dimensions of each data point.
- `neighborCount`: The number of nearest neighbors that a subsequent call to [apply(index:outputIndices:outputDistances:)](apply%28index_outputindices_outputdistances_%29.md) calculates.
- `dataType`: The data type of the data points. This must be either `BNNSDataTypeFloat32` or `BNNSDataTypeFloat16`.
