> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/paddinglayer/init(input:output:mode:size:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/paddinglayer/init(input:output:mode:size:filterparameters:))

# init(input:output:mode:size:filterParameters:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new padding layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
convenience init?(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, mode: BNNS.PaddingMode, size: [(x: Int, y: Int)], filterParameters: BNNSFilterParameters? = nil)
```

## Parameters

- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `mode`: The mode the operation uses to pad.
- `size`: The number of padding elements to add before and after the original data.
- `filterParameters`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Padding isn’t supported beyond 4D tensors.
