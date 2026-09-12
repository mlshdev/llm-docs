> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/for(numberofiterations:initialbodyarguments:body:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/for(numberofiterations:initialbodyarguments:body:name:))

# for(numberOfIterations:initialBodyArguments:body:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Adds a for loop operation, with a specific number of iterations.

## Declaration

```swift
func `for`(numberOfIterations: MPSGraphTensor, initialBodyArguments: [MPSGraphTensor], body: @escaping MPSGraphForLoopBodyBlock, name: String?) -> [MPSGraphTensor]
```

## Parameters

- `numberOfIterations`: Tensor with number of iterations the loop will execute
- `initialBodyArguments`: Initial set of iteration arguments passed to the bodyBlock of the for loop
- `body`: bodyBlock, this will execute the body of the for loop, index will go from 0 to numberOfIterations-1
- `name`: Name of operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array with same count and corresponding elementTypes as initialIterationArguments and return types of the for loop

# forLoopWithNumberOfIterations:initialBodyArguments:body:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Adds a for loop operation, with a specific number of iterations.

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) forLoopWithNumberOfIterations:(MPSGraphTensor *) numberOfIterations initialBodyArguments:(NSArray<MPSGraphTensor *> *) initialBodyArguments body:(MPSGraphForLoopBodyBlock) body name:(NSString *) name;
```

## Parameters

- `numberOfIterations`: Tensor with number of iterations the loop will execute
- `initialBodyArguments`: Initial set of iteration arguments passed to the bodyBlock of the for loop
- `body`: bodyBlock, this will execute the body of the for loop, index will go from 0 to numberOfIterations-1
- `name`: Name of operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array with same count and corresponding elementTypes as initialIterationArguments and return types of the for loop
