> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/constant(values:rowmajor:)-6b7b8](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/constant(values:rowmajor:)-6b7b8)

# constant(values:rowMajor:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a rank 2 tensor from an array of arrays.

## Declaration

```swift
func constant(values: Array<Array<Float>>, rowMajor: Bool = false) -> BNNSGraph.Builder.Tensor<Float>
```

<a id="discussion"></a>

## Discussion

> **Precondition**

> Each sub-array must contain the same number of elements.

The following code shows how to use this function to multiply two 2x2 matrices:

```
   let xValues = [[1, 2],
                  [3, 4]] as [[Float]]
   let yValues = [[5, 6],
                  [7, 8]] as [[Float]]

   let context = try BNNSGraph.makeContext {
       builder in

       let x = builder.constant(values: xValues)
       let y = builder.constant(values: yValues)

       let z = x.matmul(other: y)

       return [z] // On return, `z` equals `[19.0, 22.0, 43.0, 50.0]`.
   }
```
