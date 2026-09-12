> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/token(byaddingrenderobserver:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/token(byaddingrenderobserver:))

# token(byAddingRenderObserver:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a block to be called on each render cycle.

## Declaration

```swift
func token(byAddingRenderObserver observer: @escaping AURenderObserver) -> Int
```

## Parameters

- `observer`: The block to call.

<a id="return-value"></a>

## Return Value

A token to be used when removing the observer.

<a id="Discussion"></a>

## Discussion

The supplied block is called at the beginning and ending of each render cycle. It should not make any blocking calls.

This method is implemented in the [AUAudioUnit](../auaudiounit.md) base class and should not be overridden.

This version 3 method is bridged to the version 2 [AudioUnitAddRenderNotify(\_:\_:\_:)](../audiounitaddrendernotify%28______%29.md) API.

## See Also

### Managing the Render Cycle

- [allocateRenderResources()](allocaterenderresources%28%29.md): Allocates resources required to render audio.
- [deallocateRenderResources()](deallocaterenderresources%28%29.md): Deallocates resources required to render audio.
- [reset()](reset%28%29.md): Resets transitory rendering state to its initial state.
- [renderResourcesAllocated](renderresourcesallocated.md): Determines whether the audio unit has allocated render resources.
- [renderBlock](renderblock.md): The block that hosts use to ask the audio unit to render audio.
- [scheduleParameterBlock](scheduleparameterblock.md): The block that hosts use to schedule parameters.
- [maximumFramesToRender](maximumframestorender.md): The maximum number of frames that the audio unit can render at once.
- [removeRenderObserver(\_:)](removerenderobserver%28__%29.md): Removes an observer block previously added to the render cycle.
- [AURenderObserver](../aurenderobserver.md): A block called when an audio unit renders audio.

# tokenByAddingRenderObserver: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a block to be called on each render cycle.

## Declaration

```objectivec
- (NSInteger) tokenByAddingRenderObserver:(AURenderObserver) observer;
```

## Parameters

- `observer`: The block to call.

<a id="return-value"></a>

## Return Value

A token to be used when removing the observer.

<a id="Discussion"></a>

## Discussion

The supplied block is called at the beginning and ending of each render cycle. It should not make any blocking calls.

This method is implemented in the [AUAudioUnit](../auaudiounit.md) base class and should not be overridden.

This version 3 method is bridged to the version 2 [AudioUnitAddRenderNotify](../audiounitaddrendernotify%28______%29.md) API.

## See Also

### Managing the Render Cycle

- [allocateRenderResourcesAndReturnError:](allocaterenderresources%28%29.md): Allocates resources required to render audio.
- [deallocateRenderResources](deallocaterenderresources%28%29.md): Deallocates resources required to render audio.
- [reset](reset%28%29.md): Resets transitory rendering state to its initial state.
- [renderResourcesAllocated](renderresourcesallocated.md): Determines whether the audio unit has allocated render resources.
- [renderBlock](renderblock.md): The block that hosts use to ask the audio unit to render audio.
- [scheduleParameterBlock](scheduleparameterblock.md): The block that hosts use to schedule parameters.
- [maximumFramesToRender](maximumframestorender.md): The maximum number of frames that the audio unit can render at once.
- [removeRenderObserver:](removerenderobserver%28__%29.md): Removes an observer block previously added to the render cycle.
- [renderContextObserver](rendercontextobserver.md): The block that the system calls when the rendering context changes.
- [AURenderContextObserver](../aurendercontextobserver.md): A custom block that tells the audio unit which thread context to use for the next render cycle.
- [AudioUnitRenderContext](../audiounitrendercontext.md): A structure that contains thread context information for a real-time rendering operation.
- [AURenderObserver](../aurenderobserver.md): A block called when an audio unit renders audio.
