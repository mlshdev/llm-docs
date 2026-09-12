> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/init(updatemode:renderingmode:)](https://developer.apple.com/documentation/phase/phaseengine/init(updatemode:renderingmode:))

# init(updateMode:renderingMode:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Creates a new engine that has both update and rendering modes.

## Declaration

```swift
init(updateMode: PHASEEngine.UpdateMode, renderingMode: PHASEEngine.RenderingMode)
```

## Parameters

- `updateMode`: An option that controls the timing of internal framework updates.
- `renderingMode`: Defines where the engine applies rendering. See [PHASEEngine.RenderingMode](renderingmode.md) for more info.

<a id="Discussion"></a>

## Discussion

In this initializer, the `updateMode` argument behaves the same as it does for [init(updateMode:)](init%28updatemode_%29.md). The `renderingMode` parameter value you choose determines where the system renders audio.

An engine that you configure with [PHASEEngine.RenderingMode.local](renderingmode/local.md) renders audio locally, in process. Configuring an engine with [PHASEEngine.RenderingMode.client](renderingmode/client.md) renders audio remotely, in a secure rendering process.

## See Also

### Creating an Engine

- [init(updateMode:)](init%28updatemode_%29.md): Creates an engine updated by the app or framework.
- [PHASEEngine.UpdateMode](updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASEEngine.RenderingMode](renderingmode.md): Modes that determine whether the system renders audio in process or out of process.

# initWithUpdateMode:renderingMode: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Creates a new engine that has both update and rendering modes.

## Declaration

```objectivec
- (instancetype) initWithUpdateMode:(PHASEUpdateMode) updateMode renderingMode:(PHASERenderingMode) renderingMode;
```

## Parameters

- `updateMode`: An option that controls the timing of internal framework updates.
- `renderingMode`: Defines where the engine applies rendering. See [PHASERenderingMode](renderingmode.md) for more info.

<a id="Discussion"></a>

## Discussion

In this initializer, the `updateMode` argument behaves the same as it does for [initWithUpdateMode:](init%28updatemode_%29.md). The `renderingMode` parameter value you choose determines where the system renders audio.

An engine that you configure with [PHASERenderingModeLocal](renderingmode/local.md) renders audio locally, in process. Configuring an engine with [PHASERenderingModeClient](renderingmode/client.md) renders audio remotely, in a secure rendering process.

## See Also

### Creating an Engine

- [initWithUpdateMode:](init%28updatemode_%29.md): Creates an engine updated by the app or framework.
- [PHASEUpdateMode](updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASERenderingMode](renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
