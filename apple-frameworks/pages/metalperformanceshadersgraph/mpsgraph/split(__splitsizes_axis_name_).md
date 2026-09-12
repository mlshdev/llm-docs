> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/split(_:splitsizes:axis:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/split(_:splitsizes:axis:name:))

# split(\_:splitSizes:axis:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a split operation and returns the result tensor.

## Declaration

```swift
func split(_ tensor: MPSGraphTensor, splitSizes: [NSNumber], axis: Int, name: String?) -> [MPSGraphTensor]
```

## Parameters

- `tensor`: The input tensor.
- `splitSizes`: The lengths of the result tensors along the split axis.
- `axis`: The dimension along which MPSGraph splits the input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Splits the input tensor along `axis` into multiple result tensors of size determined by `splitSizes`. Requires that the sum of `splitSizes` is equal to the lenth of the input along `axis`.

# splitTensor:splitSizes:axis:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a split operation and returns the result tensor.

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) splitTensor:(MPSGraphTensor *) tensor splitSizes:(NSArray<NSNumber *> *) splitSizes axis:(NSInteger) axis name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `splitSizes`: The lengths of the result tensors along the split axis.
- `axis`: The dimension along which MPSGraph splits the input tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Splits the input tensor along `axis` into multiple result tensors of size determined by `splitSizes`. Requires that the sum of `splitSizes` is equal to the lenth of the input along `axis`.
