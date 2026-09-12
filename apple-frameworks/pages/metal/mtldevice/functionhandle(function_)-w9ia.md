> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/functionhandle(function:)-w9ia](https://developer.apple.com/documentation/metal/mtldevice/functionhandle(function:)-w9ia)

# functionHandle(function:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Get the function handle for the specified binary-linked function from the pipeline state.

## Declaration

```swift
func functionHandle(function: any MTL4BinaryFunction) -> (any MTLFunctionHandle)?
```

## Parameters

- `function`: A [MTL4BinaryFunction](../mtl4binaryfunction.md) instance representing the function binary.

<a id="return-value"></a>

## Return Value

A [MTLFunctionHandle](../mtlfunctionhandle.md) instance  for a binary function that was compiled with `MTLFunctionOptionPipelineIndependent`, otherwise `nil`.

# functionHandleWithBinaryFunction: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Get the function handle for the specified binary-linked function from the pipeline state.

## Declaration

```objectivec
- (id<MTLFunctionHandle>) functionHandleWithBinaryFunction:(id<MTL4BinaryFunction>) function;
```

## Parameters

- `function`: A [MTL4BinaryFunction](../mtl4binaryfunction.md) instance representing the function binary.

<a id="return-value"></a>

## Return Value

A [MTLFunctionHandle](../mtlfunctionhandle.md) instance  for a binary function that was compiled with `MTLFunctionOptionPipelineIndependent`, otherwise `nil`.
