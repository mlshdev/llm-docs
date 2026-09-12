> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/assign(_:tensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/assign(_:tensor:name:))

# assign(\_:tensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates an assign operation which writes at this point of execution of the graph.

## Declaration

```swift
func assign(_ variable: MPSGraphTensor, tensor: MPSGraphTensor, name: String?) -> MPSGraphOperation
```

## Parameters

- `variable`: The variable resource tensor to assign to.
- `tensor`: The tensor to assign to the variable.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# assignVariable:withValueOfTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates an assign operation which writes at this point of execution of the graph.

## Declaration

```objectivec
- (MPSGraphOperation *) assignVariable:(MPSGraphTensor *) variable withValueOfTensor:(MPSGraphTensor *) tensor name:(NSString *) name;
```

## Parameters

- `variable`: The variable resource tensor to assign to.
- `tensor`: The tensor to assign to the variable.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
