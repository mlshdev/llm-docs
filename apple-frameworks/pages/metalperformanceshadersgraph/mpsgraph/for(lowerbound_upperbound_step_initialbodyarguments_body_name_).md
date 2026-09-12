> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/for(lowerbound:upperbound:step:initialbodyarguments:body:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/for(lowerbound:upperbound:step:initialbodyarguments:body:name:))

# for(lowerBound:upperBound:step:initialBodyArguments:body:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Adds a for loop operation, The lower and upper bounds specify a half-open range: the range includes the lower bound but does not include the upper bound.

## Declaration

```swift
func `for`(lowerBound: MPSGraphTensor, upperBound: MPSGraphTensor, step: MPSGraphTensor, initialBodyArguments: [MPSGraphTensor], body: @escaping MPSGraphForLoopBodyBlock, name: String?) -> [MPSGraphTensor]
```

## Parameters

- `lowerBound`: Lower bound value of the loop, this is a scalar tensor, this is the index the loop will start with.
- `upperBound`: Upper bound value of the loop, this is a scalar tensor.
- `step`: Step value of the loop, this is a scalar tensor and must be positive.
- `initialBodyArguments`: Initial set of iteration arguments passed to the bodyBlock of the for loop.
- `body`: This block will execute the body of the for loop.
- `name`: Name of operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` array with same count and corresponding element types as `initialIterationArguments` and return types of the for loop.

# forLoopWithLowerBound:upperBound:step:initialBodyArguments:body:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Adds a for loop operation, The lower and upper bounds specify a half-open range: the range includes the lower bound but does not include the upper bound.

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) forLoopWithLowerBound:(MPSGraphTensor *) lowerBound upperBound:(MPSGraphTensor *) upperBound step:(MPSGraphTensor *) step initialBodyArguments:(NSArray<MPSGraphTensor *> *) initialBodyArguments body:(MPSGraphForLoopBodyBlock) body name:(NSString *) name;
```

## Parameters

- `lowerBound`: Lower bound value of the loop, this is a scalar tensor, this is the index the loop will start with.
- `upperBound`: Upper bound value of the loop, this is a scalar tensor.
- `step`: Step value of the loop, this is a scalar tensor and must be positive.
- `initialBodyArguments`: Initial set of iteration arguments passed to the bodyBlock of the for loop.
- `body`: This block will execute the body of the for loop.
- `name`: Name of operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` array with same count and corresponding element types as `initialIterationArguments` and return types of the for loop.
