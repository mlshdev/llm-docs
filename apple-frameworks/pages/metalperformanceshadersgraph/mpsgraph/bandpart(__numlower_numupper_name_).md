> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/bandpart(_:numlower:numupper:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/bandpart(_:numlower:numupper:name:))

# bandPart(\_:numLower:numUpper:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Computes the band part of an input tensor.

## Declaration

```swift
func bandPart(_ inputTensor: MPSGraphTensor, numLower: Int, numUpper: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `inputTensor`: Input tensor
- `numLower`: The number of diagonals in the lower triangle to keep. If -1, the framework returns all sub diagnols.
- `numUpper`: The number of diagonals in the upper triangle to keep. If -1,  the framework returns all super diagnols.
- `name`: Name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

This operation copies a diagonal band of values from input tensor to a result tensor of the same size. A coordinate `[..., i, j]` is in the band if

```md
(numLower < 0 || (i-j) <= numLower) && (numUpper < 0 || (j-i) <= numUpper) 
```

The values outside of the band are set to 0.

# bandPartWithTensor:numLower:numUpper:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Computes the band part of an input tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) bandPartWithTensor:(MPSGraphTensor *) inputTensor numLower:(NSInteger) numLower numUpper:(NSInteger) numUpper name:(NSString *) name;
```

## Parameters

- `inputTensor`: Input tensor
- `numLower`: The number of diagonals in the lower triangle to keep. If -1, the framework returns all sub diagnols.
- `numUpper`: The number of diagonals in the upper triangle to keep. If -1,  the framework returns all super diagnols.
- `name`: Name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

This operation copies a diagonal band of values from input tensor to a result tensor of the same size. A coordinate `[..., i, j]` is in the band if

```md
(numLower < 0 || (i-j) <= numLower) && (numUpper < 0 || (j-i) <= numUpper) 
```

The values outside of the band are set to 0.
