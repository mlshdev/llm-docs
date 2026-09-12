> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandbuffer/makecomputecommandencoder()](https://developer.apple.com/documentation/metal/mtl4commandbuffer/makecomputecommandencoder())

# makeComputeCommandEncoder() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a compute command encoder.

## Declaration

```swift
func makeComputeCommandEncoder() -> (any MTL4ComputeCommandEncoder)?
```

<a id="return-value"></a>

## Return Value

The created [MTL4ComputeCommandEncoder](../mtl4computecommandencoder.md) instance, or `nil` if the function fails.

# computeCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a compute command encoder.

## Declaration

```objectivec
- (id<MTL4ComputeCommandEncoder>) computeCommandEncoder;
```

<a id="return-value"></a>

## Return Value

The created [MTL4ComputeCommandEncoder](../mtl4computecommandencoder.md) instance, or `nil` if the function fails.
