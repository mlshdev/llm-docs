> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/updatemode/manual](https://developer.apple.com/documentation/phase/phaseengine/updatemode/manual)

# PHASEEngine.UpdateMode.manual (Swift)

**Framework:** PHASE  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A mode that indicates the app controls when the framework adjusts state.

## Declaration

```swift
case manual
```

<a id="Discussion"></a>

## Discussion

In this mode, the framework waits for the app to call [update()](../update%28%29.md) before processing the app’s API calls and adjusting internal states.

## See Also

### Modes

- [PHASEEngine.UpdateMode.automatic](automatic.md): A mode that indicates PHASE sets the timing of state adjustments.

# PHASEUpdateModeManual (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A mode that indicates the app controls when the framework adjusts state.

## Declaration

```objectivec
PHASEUpdateModeManual
```

<a id="Discussion"></a>

## Discussion

In this mode, the framework waits for the app to call [update](../update%28%29.md) before processing the app’s API calls and adjusting internal states.

## See Also

### Modes

- [PHASEUpdateModeAutomatic](automatic.md): A mode that indicates PHASE sets the timing of state adjustments.
