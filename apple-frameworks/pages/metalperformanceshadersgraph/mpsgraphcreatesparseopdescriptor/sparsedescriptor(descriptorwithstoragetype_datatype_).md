> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphcreatesparseopdescriptor/sparsedescriptor(descriptorwithstoragetype:datatype:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphcreatesparseopdescriptor/sparsedescriptor(descriptorwithstoragetype:datatype:))

# sparseDescriptor(descriptorWithStorageType:dataType:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a descriptor for a sparse tensor.

## Declaration

```swift
class func sparseDescriptor(descriptorWithStorageType sparseStorageType: MPSGraphSparseStorageType, dataType: MPSDataType) -> Self?
```

## Parameters

- `sparseStorageType`: A sparseStorageType.
- `dataType`: A dataType of the sparse tensor.

<a id="return-value"></a>

## Return Value

The descriptor.

# descriptorWithStorageType:dataType: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a descriptor for a sparse tensor.

## Declaration

```objectivec
+ (instancetype) descriptorWithStorageType:(MPSGraphSparseStorageType) sparseStorageType dataType:(MPSDataType) dataType;
```

## Parameters

- `sparseStorageType`: A sparseStorageType.
- `dataType`: A dataType of the sparse tensor.

<a id="return-value"></a>

## Return Value

The descriptor.
