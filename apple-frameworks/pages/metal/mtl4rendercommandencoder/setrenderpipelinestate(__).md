> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setrenderpipelinestate(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setrenderpipelinestate(_:))

# setRenderPipelineState(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures this encoder with a render pipeline state that applies to your subsequent draw commands.

## Declaration

```swift
func setRenderPipelineState(_ pipelineState: any MTLRenderPipelineState)
```

## Parameters

- `pipelineState`: A non-`nil` [MTLRenderPipelineState](../mtlrenderpipelinestate.md) instance.

# setRenderPipelineState: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures this encoder with a render pipeline state that applies to your subsequent draw commands.

## Declaration

```objectivec
- (void) setRenderPipelineState:(id<MTLRenderPipelineState>) pipelineState;
```

## Parameters

- `pipelineState`: A non-`nil` [MTLRenderPipelineState](../mtlrenderpipelinestate.md) instance.
