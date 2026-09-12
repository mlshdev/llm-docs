> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/functionhandle(function:)-7d523](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/functionhandle(function:)-7d523)

# functionHandle(function:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a function handle for a visible function.

## Declaration

```swift
func functionHandle(function: any MTLFunction) -> (any MTLFunctionHandle)?
```

## Parameters

- `function`: An [MTLFunction](../mtlfunction.md) instance that represents the visible function to create a handle for.

<a id="return-value"></a>

## Return Value

A handle to the visible function. When this value is `nil`, an error occurred during handle creation.

# functionHandleWithFunction: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a function handle for a visible function.

## Declaration

```objectivec
- (id<MTLFunctionHandle>) functionHandleWithFunction:(id<MTLFunction>) function;
```

## Parameters

- `function`: An [MTLFunction](../mtlfunction.md) instance that represents the visible function to create a handle for.

<a id="return-value"></a>

## Return Value

A handle to the visible function. When this value is `nil`, an error occurred during handle creation.
