> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mltensor/softmax(alongaxis:)

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
