> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/gramlayer/init(input:output:alpha:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/gramlayer/init(input:output:alpha:filterparameters:))

# init(input:output:alpha:filterParameters:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new Gram matrix layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
convenience init?(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, alpha: Float, filterParameters: BNNSFilterParameters? = nil)
```

## Parameters

- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `alpha`: A value to scale the result.
- `filterParameters`: The filter runtime parameters.
