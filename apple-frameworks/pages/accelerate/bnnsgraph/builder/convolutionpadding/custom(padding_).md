> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/convolutionpadding/custom(padding:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/convolutionpadding/custom(padding:))

# BNNSGraph.Builder.ConvolutionPadding.custom(padding:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Custom padding

## Declaration

```swift
case custom(padding: [Int])
```

<a id="discussion"></a>

## Discussion

Specify the `padding` array to contain twice the number of spatial dimensions. `padding[2*k]` specifies the amount of padding before spatial dimension `k`, and `padding[2*k+1]` specifies the amount of padding after spatial dimension `k`.
