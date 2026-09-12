> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/call(symbolname:inputtensors:outputtypes:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/call(symbolname:inputtensors:outputtypes:name:))

# call(symbolName:inputTensors:outputTypes:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates an operation which invokes another executable.

## Declaration

```swift
func call(symbolName: String, inputTensors: [MPSGraphTensor], outputTypes: [MPSGraphType], name: String?) -> [MPSGraphTensor]
```

## Parameters

- `symbolName`: The unique identifier used to find the executable in the `MPSGraphCompilationDescriptor.callables` directory.
- `inputTensors`: The tensors which are passed as inputs to the executable being invoked.
- `outputTypes`: The expected return types of the executable being invoked.
- `name`: Name of operation.

<a id="return-value"></a>

## Return Value

An array of valid [MPSGraphTensor](../mpsgraphtensor.md) objects representing the return tensors of the invoked executable.

# callSymbolName:inputTensors:outputTypes:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates an operation which invokes another executable.

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) callSymbolName:(NSString *) symbolName inputTensors:(NSArray<MPSGraphTensor *> *) inputTensors outputTypes:(NSArray<MPSGraphType *> *) outputTypes name:(NSString *) name;
```

## Parameters

- `symbolName`: The unique identifier used to find the executable in the `MPSGraphCompilationDescriptor.callables` directory.
- `inputTensors`: The tensors which are passed as inputs to the executable being invoked.
- `outputTypes`: The expected return types of the executable being invoked.
- `name`: Name of operation.

<a id="return-value"></a>

## Return Value

An array of valid [MPSGraphTensor](../mpsgraphtensor.md) objects representing the return tensors of the invoked executable.
