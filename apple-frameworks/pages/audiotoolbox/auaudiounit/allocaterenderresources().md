> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/allocaterenderresources()](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/allocaterenderresources())

# allocateRenderResources() (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Allocates resources required to render audio.

## Declaration

```swift
func allocateRenderResources() throws
```

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](../migrating-your-audio-unit-host-to-the-auv3-api.md)
- [Rendering Spatial Audio from Bluetooth headphones](../rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="discussion"></a>

## Discussion

- [false](https://developer.apple.com/documentation/swift/false) if the operation failed.

<a id="Discussion"></a>

## Discussion

Hosts must call this before beginning to render. Subclasses should call the superclass implementation.

This version 3 method is bridged to the version 2 [AudioUnitInitialize(\_:)](../audiounitinitialize%28__%29.md) API.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing the Render Cycle

- [deallocateRenderResources()](deallocaterenderresources%28%29.md): Deallocates resources required to render audio.
- [reset()](reset%28%29.md): Resets transitory rendering state to its initial state.
- [renderResourcesAllocated](renderresourcesallocated.md): Determines whether the audio unit has allocated render resources.
- [renderBlock](renderblock.md): The block that hosts use to ask the audio unit to render audio.
- [scheduleParameterBlock](scheduleparameterblock.md): The block that hosts use to schedule parameters.
- [maximumFramesToRender](maximumframestorender.md): The maximum number of frames that the audio unit can render at once.
- [token(byAddingRenderObserver:)](token%28byaddingrenderobserver_%29.md): Adds a block to be called on each render cycle.
- [removeRenderObserver(\_:)](removerenderobserver%28__%29.md): Removes an observer block previously added to the render cycle.
- [AURenderObserver](../aurenderobserver.md): A block called when an audio unit renders audio.

# allocateRenderResourcesAndReturnError: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Allocates resources required to render audio.

## Declaration

```objectivec
- (BOOL) allocateRenderResourcesAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: Returns an error if the operation failed, or `nil` if it succeeded.

<a id="return-value"></a>

## Return Value

\- [true](https://developer.apple.com/documentation/swift/true) if the operation succeeded.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](../migrating-your-audio-unit-host-to-the-auv3-api.md)
- [Rendering Spatial Audio from Bluetooth headphones](../rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="discussion"></a>

## Discussion

- [false](https://developer.apple.com/documentation/swift/false) if the operation failed.

<a id="Discussion"></a>

## Discussion

Hosts must call this before beginning to render. Subclasses should call the superclass implementation.

This version 3 method is bridged to the version 2 [AudioUnitInitialize](../audiounitinitialize%28__%29.md) API.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing the Render Cycle

- [deallocateRenderResources](deallocaterenderresources%28%29.md): Deallocates resources required to render audio.
- [reset](reset%28%29.md): Resets transitory rendering state to its initial state.
- [renderResourcesAllocated](renderresourcesallocated.md): Determines whether the audio unit has allocated render resources.
- [renderBlock](renderblock.md): The block that hosts use to ask the audio unit to render audio.
- [scheduleParameterBlock](scheduleparameterblock.md): The block that hosts use to schedule parameters.
- [maximumFramesToRender](maximumframestorender.md): The maximum number of frames that the audio unit can render at once.
- [tokenByAddingRenderObserver:](token%28byaddingrenderobserver_%29.md): Adds a block to be called on each render cycle.
- [removeRenderObserver:](removerenderobserver%28__%29.md): Removes an observer block previously added to the render cycle.
- [renderContextObserver](rendercontextobserver.md): The block that the system calls when the rendering context changes.
- [AURenderContextObserver](../aurendercontextobserver.md): A custom block that tells the audio unit which thread context to use for the next render cycle.
- [AudioUnitRenderContext](../audiounitrendercontext.md): A structure that contains thread context information for a real-time rendering operation.
- [AURenderObserver](../aurenderobserver.md): A block called when an audio unit renders audio.
