> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/while(initialinputs:before:after:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/while(initialinputs:before:after:name:))

# while(initialInputs:before:after:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Adds a while loop operation.

## Declaration

```swift
func `while`(initialInputs: [MPSGraphTensor], before: @escaping MPSGraphWhileBeforeBlock, after: @escaping MPSGraphWhileAfterBlock, name: String?) -> [MPSGraphTensor]
```

## Parameters

- `initialInputs`: inputTensors to the `beforeBlock`, for the 1st iteration will be same as initialInputs passed to the while loop.
- `before`: `beforeBlock`, this will be run first and then call the `afterBlock` with results or return results from the loop.
- `after`: `afterBlock`, this will execute after the condition evaluation.
- `name`: Name of operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array with results returned from the conditionBlock depending on the predicate tensor.

# whileWithInitialInputs:before:after:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Adds a while loop operation.

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) whileWithInitialInputs:(NSArray<MPSGraphTensor *> *) initialInputs before:(MPSGraphWhileBeforeBlock) before after:(MPSGraphWhileAfterBlock) after name:(NSString *) name;
```

## Parameters

- `initialInputs`: inputTensors to the `beforeBlock`, for the 1st iteration will be same as initialInputs passed to the while loop.
- `before`: `beforeBlock`, this will be run first and then call the `afterBlock` with results or return results from the loop.
- `after`: `afterBlock`, this will execute after the condition evaluation.
- `name`: Name of operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array with results returned from the conditionBlock depending on the predicate tensor.
