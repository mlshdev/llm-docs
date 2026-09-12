> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/graphbuildertensor(_:)](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/graphbuildertensor(_:))

# graphBuilderTensor(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a tensor for the specified BNNS Graph builder.

## Declaration

```swift
func graphBuilderTensor(_ builder: BNNSGraph.Builder) -> BNNSGraph.Builder.Tensor<Element>
```

<a id="discussion"></a>

## Discussion

The following code shows how to use this function to register a tensor from an unsafe mutable buffer pointe:.

```swift
   var xValues = [1, 2, 3, 4] as [Float]
   var yValues = [5, 6, 7, 8] as [Float]

   let context = try BNNSGraph.makeContext {
       builder in

       xValues.withUnsafeMutableBufferPointer { xPtr in
           yValues.withUnsafeMutableBufferPointer { yPtr in

               let x = xPtr.graphBuilderTensor(builder)

               let z = x.matmul(transpose: true,
                                other: yPtr)

               return [z] // On return, `z[0]` equals `70`.
           }
       }
   }
```

> **Note**

> This function copies the values in `self`.
