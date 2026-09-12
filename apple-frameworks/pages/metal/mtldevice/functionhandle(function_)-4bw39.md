> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/functionhandle(function:)-4bw39](https://developer.apple.com/documentation/metal/mtldevice/functionhandle(function:)-4bw39)

# functionHandle(function:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func functionHandle(function: any MTLFunction) -> (any MTLFunctionHandle)?
```

<a id="discussion"></a>

## Discussion

Returns the function handle for a function that was compiled with MTLFunctionOptionPipelineIndependent and MTLFunctionOptionCompileToBinary.

# functionHandleWithFunction: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (id<MTLFunctionHandle>) functionHandleWithFunction:(id<MTLFunction>) function;
```

<a id="discussion"></a>

## Discussion

Returns the function handle for a function that was compiled with MTLFunctionOptionPipelineIndependent and MTLFunctionOptionCompileToBinary.
