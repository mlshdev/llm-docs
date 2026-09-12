> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/functionhandle(function:stage:)-1pgxo](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/functionhandle(function:stage:)-1pgxo)

# functionHandle(function:stage:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Obtains the function handle for a specific function this pipeline state links at the binary level.

## Declaration

```swift
func functionHandle(function: any MTL4BinaryFunction, stage: MTLRenderStages) -> (any MTLFunctionHandle)?
```

## Parameters

- `function`: A binary function to retrieve the handle.
- `stage`: The shader stage that uses the function.

<a id="return-value"></a>

## Return Value

A function handle representing the function if present, otherwise `nil`.

# functionHandleWithBinaryFunction:stage: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Obtains the function handle for a specific function this pipeline state links at the binary level.

## Declaration

```objectivec
- (id<MTLFunctionHandle>) functionHandleWithBinaryFunction:(id<MTL4BinaryFunction>) function stage:(MTLRenderStages) stage;
```

## Parameters

- `function`: A binary function to retrieve the handle.
- `stage`: The shader stage that uses the function.

<a id="return-value"></a>

## Return Value

A function handle representing the function if present, otherwise `nil`.
