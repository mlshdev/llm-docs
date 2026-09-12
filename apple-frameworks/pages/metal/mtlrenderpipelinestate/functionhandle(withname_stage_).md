> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/functionhandle(withname:stage:)](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/functionhandle(withname:stage:))

# functionHandle(withName:stage:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Obtains a function handle for the a specific function this pipeline links at the Metal IR level.

## Declaration

```swift
func functionHandle(withName name: String, stage: MTLRenderStages) -> (any MTLFunctionHandle)?
```

## Parameters

- `name`: A string containing the name of the function.
- `stage`: The shader stage that uses the function.

<a id="return-value"></a>

## Return Value

A function handle representing the function if present, otherwise `nil`.

# functionHandleWithName:stage: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Obtains a function handle for the a specific function this pipeline links at the Metal IR level.

## Declaration

```objectivec
- (id<MTLFunctionHandle>) functionHandleWithName:(NSString *) name stage:(MTLRenderStages) stage;
```

## Parameters

- `name`: A string containing the name of the function.
- `stage`: The shader stage that uses the function.

<a id="return-value"></a>

## Return Value

A function handle representing the function if present, otherwise `nil`.
