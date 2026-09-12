> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/resizelayer/init(interpolationmethod:input:output:alignscorners:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/resizelayer/init(interpolationmethod:input:output:alignscorners:filterparameters:))

# init(interpolationMethod:input:output:alignsCorners:filterParameters:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new resize layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
convenience init?(interpolationMethod: BNNS.InterpolationMethod, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, alignsCorners: Bool, filterParameters: BNNSFilterParameters? = nil)
```

## Parameters

- `interpolationMethod`: The interpolation method for resizing.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `alignsCorners`: A Boolean value that specifies whether to align the corners of the upscaling grid to the center of scaling dimensions instead of to the edges.
- `filterParameters`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The number of input dimensions must be equal to number of output dimensions. The resize must be in same direction for all dimensions.
