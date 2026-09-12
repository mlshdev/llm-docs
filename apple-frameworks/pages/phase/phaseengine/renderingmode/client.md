> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/renderingmode/client](https://developer.apple.com/documentation/phase/phaseengine/renderingmode/client)

# PHASEEngine.RenderingMode.client (Swift)

**Framework:** PHASE  
**Kind:** Case  
**Availability:** visionOS 26.0+

A mode that instructs the system to render audio in a secure process.

## Declaration

```swift
case client
```

<a id="Discussion"></a>

## Discussion

In this mode, the engine is connected to an audio device and renders audio in real-time in a secure process. The engine receives inputs from the client and renders in a server. Updating an engine that has a `client` configuration syncs pending API commands with the server for processing.

## See Also

### Modes

- [PHASEEngine.RenderingMode.local](local.md): A mode that indicates that the system renders audio in process.

# PHASERenderingModeClient (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** visionOS 26.0+

A mode that instructs the system to render audio in a secure process.

## Declaration

```objectivec
PHASERenderingModeClient
```

<a id="Discussion"></a>

## Discussion

In this mode, the engine is connected to an audio device and renders audio in real-time in a secure process. The engine receives inputs from the client and renders in a server. Updating an engine that has a `client` configuration syncs pending API commands with the server for processing.

## See Also

### Modes

- [PHASERenderingModeLocal](local.md): A mode that indicates that the system renders audio in process.
