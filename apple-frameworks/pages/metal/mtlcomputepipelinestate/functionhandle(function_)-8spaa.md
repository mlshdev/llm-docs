> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/functionhandle(function:)-8spaa](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/functionhandle(function:)-8spaa)

# functionHandle(function:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Gets the function handle for a function this pipeline links at the binary level.

## Declaration

```swift
func functionHandle(function: any MTL4BinaryFunction) -> (any MTLFunctionHandle)?
```

## Parameters

- `function`: A binary function object representing the function binary to find.

<a id="return-value"></a>

## Return Value

A function handle corresponding to the function if the binary function matches a function in this pipeline state, otherwise `nil`.

# functionHandleWithBinaryFunction: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Gets the function handle for a function this pipeline links at the binary level.

## Declaration

```objectivec
- (id<MTLFunctionHandle>) functionHandleWithBinaryFunction:(id<MTL4BinaryFunction>) function;
```

## Parameters

- `function`: A binary function object representing the function binary to find.

<a id="return-value"></a>

## Return Value

A function handle corresponding to the function if the binary function matches a function in this pipeline state, otherwise `nil`.
