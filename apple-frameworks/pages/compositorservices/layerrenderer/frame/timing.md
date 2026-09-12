> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/timing](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/timing)

# LayerRenderer.Frame.Timing

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that stores information about a frame’s encoding, rendering, and presentation deadlines.

## Declaration

```swift
struct Timing
```

<a id="overview"></a>

## Overview

Before you start drawing your frame’s content, call [predictTiming()](predicttiming%28%29.md) to retrieve the frame’s timing information. That function returns the latest predicted values for you to use during planning. After you retrieve the [LayerRenderer.Drawable](../drawable.md) type for the frame, get the timing information from the drawable instead using [frameTiming](../drawable/frametiming.md).

## Topics

### Updating the frame contents

- [optimalInputTime](timing/optimalinputtime.md): The optimal time to start the frame submission process.

### Rendering the frame

- [renderingDeadline](timing/renderingdeadline.md): The time at which you must finish all work for the specified frame.

### Displaying the frame

- [presentationTime](timing/presentationtime.md): The time at which the system displays the frame onscreen.

### Creating the timing details

- [init()](timing/init%28%29.md)

### Instance Properties

- [trackableAnchorTime](timing/trackableanchortime.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Getting timing information

- [predictTiming()](predicttiming%28%29.md): Computes and returns the predicted timing information for the frame.
