> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/removerenderobserver(_:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/removerenderobserver(_:))

# removeRenderObserver(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes an observer block previously added to the render cycle.

## Declaration

```swift
func removeRenderObserver(_ token: Int)
```

## Parameters

- `token`: The token associated with the block.

<a id="Discussion"></a>

## Discussion

This version 3 property is bridged to the version 2 [AudioUnitRemoveRenderNotify(\_:\_:\_:)](../audiounitremoverendernotify%28______%29.md) API.

## See Also

### Managing the Render Cycle

- [allocateRenderResources()](allocaterenderresources%28%29.md): Allocates resources required to render audio.
- [deallocateRenderResources()](deallocaterenderresources%28%29.md): Deallocates resources required to render audio.
- [reset()](reset%28%29.md): Resets transitory rendering state to its initial state.
- [renderResourcesAllocated](renderresourcesallocated.md): Determines whether the audio unit has allocated render resources.
- [renderBlock](renderblock.md): The block that hosts use to ask the audio unit to render audio.
- [scheduleParameterBlock](scheduleparameterblock.md): The block that hosts use to schedule parameters.
- [maximumFramesToRender](maximumframestorender.md): The maximum number of frames that the audio unit can render at once.
- [token(byAddingRenderObserver:)](token%28byaddingrenderobserver_%29.md): Adds a block to be called on each render cycle.
- [AURenderObserver](../aurenderobserver.md): A block called when an audio unit renders audio.

# removeRenderObserver: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes an observer block previously added to the render cycle.

## Declaration

```objectivec
- (void) removeRenderObserver:(NSInteger) token;
```

## Parameters

- `token`: The token associated with the block.

<a id="Discussion"></a>

## Discussion

This version 3 property is bridged to the version 2 [AudioUnitRemoveRenderNotify](../audiounitremoverendernotify%28______%29.md) API.

## See Also

### Managing the Render Cycle

- [allocateRenderResourcesAndReturnError:](allocaterenderresources%28%29.md): Allocates resources required to render audio.
- [deallocateRenderResources](deallocaterenderresources%28%29.md): Deallocates resources required to render audio.
- [reset](reset%28%29.md): Resets transitory rendering state to its initial state.
- [renderResourcesAllocated](renderresourcesallocated.md): Determines whether the audio unit has allocated render resources.
- [renderBlock](renderblock.md): The block that hosts use to ask the audio unit to render audio.
- [scheduleParameterBlock](scheduleparameterblock.md): The block that hosts use to schedule parameters.
- [maximumFramesToRender](maximumframestorender.md): The maximum number of frames that the audio unit can render at once.
- [tokenByAddingRenderObserver:](token%28byaddingrenderobserver_%29.md): Adds a block to be called on each render cycle.
- [renderContextObserver](rendercontextobserver.md): The block that the system calls when the rendering context changes.
- [AURenderContextObserver](../aurendercontextobserver.md): A custom block that tells the audio unit which thread context to use for the next render cycle.
- [AudioUnitRenderContext](../audiounitrendercontext.md): A structure that contains thread context information for a real-time rendering operation.
- [AURenderObserver](../aurenderobserver.md): A block called when an audio unit renders audio.
