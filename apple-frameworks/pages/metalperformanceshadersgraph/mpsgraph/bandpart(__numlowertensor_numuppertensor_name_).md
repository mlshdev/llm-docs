> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/bandpart(_:numlowertensor:numuppertensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/bandpart(_:numlowertensor:numuppertensor:name:))

# bandPart(\_:numLowerTensor:numUpperTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates the band part operation and returns the result.

## Declaration

```swift
func bandPart(_ inputTensor: MPSGraphTensor, numLowerTensor: MPSGraphTensor, numUpperTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `inputTensor`: The source tensor to copy.
- `numLowerTensor`: Scalar Int32 tensor. The number of diagonals in the lower triangle to keep. If -1, keep all.
- `numUpperTensor`: Scalar Int32 tensor. The number of diagonals in the upper triangle to keep. If -1, keep all.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

See above discussion of bandPartWithTensor: numLower: numUpper: name:

# bandPartWithTensor:numLowerTensor:numUpperTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates the band part operation and returns the result.

## Declaration

```objectivec
- (MPSGraphTensor *) bandPartWithTensor:(MPSGraphTensor *) inputTensor numLowerTensor:(MPSGraphTensor *) numLowerTensor numUpperTensor:(MPSGraphTensor *) numUpperTensor name:(NSString *) name;
```

## Parameters

- `inputTensor`: The source tensor to copy.
- `numLowerTensor`: Scalar Int32 tensor. The number of diagonals in the lower triangle to keep. If -1, keep all.
- `numUpperTensor`: Scalar Int32 tensor. The number of diagonals in the upper triangle to keep. If -1, keep all.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

See above discussion of bandPartWithTensor: numLower: numUpper: name:
