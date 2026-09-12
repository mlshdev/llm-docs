> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/stack(_:axis:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/stack(_:axis:name:))

# stack(\_:axis:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a stack operation and returns the result tensor.

## Declaration

```swift
func stack(_ inputTensors: [MPSGraphTensor], axis: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `inputTensors`: The input tensors.
- `axis`: The dimension to stack tensors into result. Must be in range: `-rank + 1 <= dimension < rank + 1`.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Stacks all input tensors along `axis` into a result tensor of `rank + 1`. Tensors must be broadcast compatible along all dimensions except `axis`, and have the same type.

# stackTensors:axis:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a stack operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) stackTensors:(NSArray<MPSGraphTensor *> *) inputTensors axis:(NSInteger) axis name:(NSString *) name;
```

## Parameters

- `inputTensors`: The input tensors.
- `axis`: The dimension to stack tensors into result. Must be in range: `-rank + 1 <= dimension < rank + 1`.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Stacks all input tensors along `axis` into a result tensor of `rank + 1`. Tensors must be broadcast compatible along all dimensions except `axis`, and have the same type.
