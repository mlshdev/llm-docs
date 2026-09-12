> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/renderingmode/local](https://developer.apple.com/documentation/phase/phaseengine/renderingmode/local)

# PHASEEngine.RenderingMode.local (Swift)

**Framework:** PHASE  
**Kind:** Case  
**Availability:** visionOS 26.0+

A mode that indicates that the system renders audio in process.

## Declaration

```swift
case local
```

<a id="Discussion"></a>

## Discussion

In this mode, the engine is connected to an audio device and renders audio in real-time in the application process. The engine receives all of its inputs, for example, acoustic configuration, from the client. Updating an engine that has a `local` configuration executes any pending API commands locally.

## See Also

### Modes

- [PHASEEngine.RenderingMode.client](client.md): A mode that instructs the system to render audio in a secure process.

# PHASERenderingModeLocal (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** visionOS 26.0+

A mode that indicates that the system renders audio in process.

## Declaration

```objectivec
PHASERenderingModeLocal
```

<a id="Discussion"></a>

## Discussion

In this mode, the engine is connected to an audio device and renders audio in real-time in the application process. The engine receives all of its inputs, for example, acoustic configuration, from the client. Updating an engine that has a `local` configuration executes any pending API commands locally.

## See Also

### Modes

- [PHASERenderingModeClient](client.md): A mode that instructs the system to render audio in a secure process.
