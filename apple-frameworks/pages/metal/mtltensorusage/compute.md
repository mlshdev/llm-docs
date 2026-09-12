> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorusage/compute](https://developer.apple.com/documentation/metal/mtltensorusage/compute)

# compute (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A tensor context that applies to compute encoders.

## Declaration

```swift
static var compute: MTLTensorUsage { get }
```

<a id="discussion"></a>

## Discussion

You can use tensors with this context in [MTL4ComputeCommandEncoder](../mtl4computecommandencoder.md) or [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instances.

# MTLTensorUsageCompute (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A tensor context that applies to compute encoders.

## Declaration

```objectivec
MTLTensorUsageCompute
```

<a id="discussion"></a>

## Discussion

You can use tensors with this context in [MTL4ComputeCommandEncoder](../mtl4computecommandencoder.md) or [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instances.
