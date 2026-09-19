> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtldevice/functionhandle(function:)-4bw39

# functionHandle(function:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the handle for a function that you can add to a function table.

## Declaration

```swift
func functionHandle(function: any MTLFunction) -> (any MTLFunctionHandle)?
```

## Parameters

- `function`: A function that the Metal compiler created with both of the following settings:

<a id="return-value"></a>

## Return Value

A function handle if the method succeeds, otherwise `nil`.

<a id="discussion"></a>

## Discussion

- [compileToBinary](../mtlfunctionoptions/compiletobinary.md)
- [pipelineIndependent](../mtlfunctionoptions/pipelineindependent.md)

# functionHandleWithFunction: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the handle for a function that you can add to a function table.

## Declaration

```objectivec
- (id<MTLFunctionHandle>) functionHandleWithFunction:(id<MTLFunction>) function;
```

## Parameters

- `function`: A function that the Metal compiler created with both of the following settings:

<a id="return-value"></a>

## Return Value

A function handle if the method succeeds, otherwise `nil`.

<a id="discussion"></a>

## Discussion

- [MTLFunctionOptionCompileToBinary](../mtlfunctionoptions/compiletobinary.md)
- [MTLFunctionOptionPipelineIndependent](../mtlfunctionoptions/pipelineindependent.md)
