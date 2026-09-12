> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/read(_:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/read(_:name:))

# read(\_:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a read op which reads at this point of execution of the graph and returns the result tensor.

## Declaration

```swift
func read(_ variable: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `variable`: The variable resource tensor to read from.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# readVariable:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a read op which reads at this point of execution of the graph and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) readVariable:(MPSGraphTensor *) variable name:(NSString *) name;
```

## Parameters

- `variable`: The variable resource tensor to read from.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
