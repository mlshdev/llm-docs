> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4machinelearningpipelinedescriptor/setinputdimensions:withrange:](https://developer.apple.com/documentation/metal/mtl4machinelearningpipelinedescriptor/setinputdimensions:withrange:)

# setInputDimensions:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the dimensions of multiple input tensors on a range of buffer bindings.

## Declaration

```objectivec
- (void) setInputDimensions:(NSArray<MTLTensorExtents *> *) dimensions withRange:(NSRange) range;
```

## Parameters

- `dimensions`: An array of tensor extents.
- `range`: The range of inputs of the `dimensions` argument. The range’s `length` needs to match the dimensions’ `count` property.

<a id="discussion"></a>

## Discussion

Use this method to specify the dimensions of multiple input tensors at a range of indices in a single call.

You can indicate that any tensors in the range have unspecified dimensions by providing `NSNull` at the their corresponding index location in the array.

> **Important**

> The range’s length property needs to match the number of dimensions you provide. Specifically, `range.length` needs to match `dimensions.count`.
