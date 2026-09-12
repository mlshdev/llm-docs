> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstensorgetallocationsize(_:)](https://developer.apple.com/documentation/accelerate/bnnstensorgetallocationsize(_:))

# BNNSTensorGetAllocationSize(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the minimum allocation size, in bytes, of the specified tensor.

## Declaration

```swift
func BNNSTensorGetAllocationSize(_ tensor: UnsafePointer<BNNSTensor>) -> Int
```

## Parameters

- `tensor`: The tensor.

<a id="return-value"></a>

## Return Value

The minimum allocation size, in bytes, of the specified tensor.

## See Also

### Specifying and querying a tensor’s properties

- [BNNSTensor](bnnstensor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSGraphContextGetTensor(\_:\_:\_:\_:\_:)](bnnsgraphcontextgettensor%28__________%29.md): Sets the properties of a tensor for the specified function argument.
- [BNNSGraphTensorFillStrides(\_:\_:\_:\_:)](bnnsgraphtensorfillstrides%28________%29.md): Sets the stride of the specifed tensor for compatibility with the given model’s input or output argument based on its current shape.

# BNNSTensorGetAllocationSize (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the minimum allocation size, in bytes, of the specified tensor.

## Declaration

```objectivec
size_t BNNSTensorGetAllocationSize(const BNNSTensor *tensor);
```

## Parameters

- `tensor`: The tensor.

<a id="return-value"></a>

## Return Value

The minimum allocation size, in bytes, of the specified tensor.

## See Also

### Specifying and querying a tensor’s properties

- [BNNSTensor](bnnstensor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSGraphContextGetTensor](bnnsgraphcontextgettensor%28__________%29.md): Sets the properties of a tensor for the specified function argument.
- [BNNSGraphTensorFillStrides](bnnsgraphtensorfillstrides%28________%29.md): Sets the stride of the specifed tensor for compatibility with the given model’s input or output argument based on its current shape.
