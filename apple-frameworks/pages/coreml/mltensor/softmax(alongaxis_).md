> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/softmax(alongaxis:)](https://developer.apple.com/documentation/coreml/mltensor/softmax(alongaxis:))

# softmax(alongAxis:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Computes the softmax of the specified tensor along the specified axis.

## Declaration

```swift
func softmax(alongAxis axis: Int = -1) -> MLTensor
```

## Parameters

- `axis`: The axis along which softmax will be computed.

<a id="return-value"></a>

## Return Value

A new tensor with the same shape and scalar type.
