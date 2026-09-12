> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcaptureview/init(coder:)](https://developer.apple.com/documentation/roomplan/roomcaptureview/init(coder:))

# init(coder:)

**Framework:** RoomPlan  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a view by deserializing from the specified coder.

## Declaration

```swift
@MainActor @preconcurrency required dynamic init?(coder: NSCoder)
```

## Parameters

- `coder`: An object from which the view deserializes.

<a id="Overview"></a>

## Overview

This property inherits from [UIView](https://developer.apple.com/documentation/uikit/uiview).

## See Also

### Creating a room-capture view

- [init(frame:arSession:)](init%28frame_arsession_%29.md): Creates a room-capture view with the given AR session.
- [init(frame:)](init%28frame_%29.md): Creates a view that sizes to the specified frame.
