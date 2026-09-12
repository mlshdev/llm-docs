> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/split(_:numsplits:axis:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/split(_:numsplits:axis:name:))

# split(\_:numSplits:axis:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a split operation and returns the result tensor.

## Declaration

```swift
func split(_ tensor: MPSGraphTensor, numSplits: Int, axis: Int, name: String?) -> [MPSGraphTensor]
```

## Parameters

- `tensor`: The input tensor.
- `numSplits`: The number of result tensors to split to.
- `axis`: The dimension along which MPSGraph splits the input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Splits the input tensor along `axis` into `numsplits` result tensors of equal size. Requires that the lenth of the input along `axis` is divisible by `numSplits`.

# splitTensor:numSplits:axis:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a split operation and returns the result tensor.

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) splitTensor:(MPSGraphTensor *) tensor numSplits:(NSUInteger) numSplits axis:(NSInteger) axis name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `numSplits`: The number of result tensors to split to.
- `axis`: The dimension along which MPSGraph splits the input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Splits the input tensor along `axis` into `numsplits` result tensors of equal size. Requires that the lenth of the input along `axis` is divisible by `numSplits`.
