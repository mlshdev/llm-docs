> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arsession/currentframe

# currentFrame (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The most recent still frame captured by the active camera feed, including ARKit’s interpretation of it.

## Declaration

```swift
@NSCopying var currentFrame: ARFrame? { get }
```

## Mentioned In

- [Displaying an AR Experience with Metal](../displaying-an-ar-experience-with-metal.md)

## See Also

### Accessing the camera frame

- [ARFrame](../arframe.md): A video image captured as part of a session with position-tracking information.
- [captureHighResolutionFrame(completion:)](capturehighresolutionframe%28completion_%29.md): Requests a frame outside of the normal frequency that contains a high-resolution captured image.

# currentFrame (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The most recent still frame captured by the active camera feed, including ARKit’s interpretation of it.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) ARFrame * currentFrame;
```

## Mentioned In

- [Displaying an AR Experience with Metal](../displaying-an-ar-experience-with-metal.md)

## See Also

### Accessing the camera frame

- [ARFrame](../arframe.md): A video image captured as part of a session with position-tracking information.
- [captureHighResolutionFrameWithCompletion:](capturehighresolutionframe%28completion_%29.md): Requests a frame outside of the normal frequency that contains a high-resolution captured image.
