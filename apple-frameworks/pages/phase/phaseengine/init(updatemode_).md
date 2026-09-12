> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/init(updatemode:)](https://developer.apple.com/documentation/phase/phaseengine/init(updatemode:))

# init(updateMode:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an engine updated by the app or framework.

## Declaration

```swift
init(updateMode: PHASEEngine.UpdateMode)
```

## Parameters

- `updateMode`: An option that controls the timing of internal framework updates.

<a id="Discussion"></a>

## Discussion

The argument you choose determines the rate at which the engine consumes user commands, performs internal updates, and executes callbacks.

When an app calls a PHASE function, the framework defers processing the call until the next update. An engine you configure with [PHASEEngine.UpdateMode.manual](updatemode/manual.md) controls when the framework processes those calls. For example, an app can ensure that two sound events begin simultaneously by following their creation with an [update()](update%28%29.md). Apps that don’t require advanced call synchronization select [PHASEEngine.UpdateMode.automatic](updatemode/automatic.md).

## See Also

### Creating an Engine

- [init(updateMode:renderingMode:)](init%28updatemode_renderingmode_%29.md): Creates a new engine that has both update and rendering modes.
- [PHASEEngine.UpdateMode](updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASEEngine.RenderingMode](renderingmode.md): Modes that determine whether the system renders audio in process or out of process.

# initWithUpdateMode: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an engine updated by the app or framework.

## Declaration

```objectivec
- (instancetype) initWithUpdateMode:(PHASEUpdateMode) updateMode;
```

## Parameters

- `updateMode`: An option that controls the timing of internal framework updates.

<a id="Discussion"></a>

## Discussion

The argument you choose determines the rate at which the engine consumes user commands, performs internal updates, and executes callbacks.

When an app calls a PHASE function, the framework defers processing the call until the next update. An engine you configure with [PHASEUpdateModeManual](updatemode/manual.md) controls when the framework processes those calls. For example, an app can ensure that two sound events begin simultaneously by following their creation with an [update](update%28%29.md). Apps that don’t require advanced call synchronization select [PHASEUpdateModeAutomatic](updatemode/automatic.md).

## See Also

### Creating an Engine

- [initWithUpdateMode:renderingMode:](init%28updatemode_renderingmode_%29.md): Creates a new engine that has both update and rendering modes.
- [PHASEUpdateMode](updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASERenderingMode](renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
