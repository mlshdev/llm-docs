> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcaptureview/init(frame:)](https://developer.apple.com/documentation/roomplan/roomcaptureview/init(frame:))

# init(frame:)

**Framework:** RoomPlan  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a view that sizes to the specified frame.

## Declaration

```swift
@MainActor @preconcurrency override dynamic init(frame: CGRect)
```

## Parameters

- `frame`: A structure that positions and shapes the view.

<a id="Overview"></a>

## Overview

This property inherits from [UIView](https://developer.apple.com/documentation/uikit/uiview).

The system invokes this initializer if you omit the `arSession` argument to [init(frame:arSession:)](init%28frame_arsession_%29.md). RoomPlan creates its own `ARSession` instance, which you can access through the [captureSession](capturesession.md) property’s [arSession](../roomcapturesession/arsession.md).

## See Also

### Creating a room-capture view

- [init(frame:arSession:)](init%28frame_arsession_%29.md): Creates a room-capture view with the given AR session.
- [init(coder:)](init%28coder_%29.md): Creates a view by deserializing from the specified coder.
