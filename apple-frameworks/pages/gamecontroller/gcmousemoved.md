> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmousemoved](https://developer.apple.com/documentation/gamecontroller/gcmousemoved)

# GCMouseMoved (Swift)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The signature for the block that the mouse input profile calls when the mouse moves.

## Declaration

```swift
typealias GCMouseMoved = (GCMouseInput, Float, Float) -> Void
```

## Parameters

- `mouse`: The controller for the physical mouse.
- `deltaX`: The raw amount that the mouse moves along the x-axis without affecting mouse sensitivity settings.
- `deltaY`: The raw amount that the mouse moves along the y-axis without affecting mouse sensitivity settings.

## See Also

### Getting Change Information

- [mouseMovedHandler](gcmouseinput/mousemovedhandler.md): The block that the profile calls when the mouse moves.

# GCMouseMoved (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The signature for the block that the mouse input profile calls when the mouse moves.

## Declaration

```objectivec
typedef void (^)(GCMouseInput *, float, float) GCMouseMoved;
```

## Parameters

- `mouse`: The controller for the physical mouse.
- `deltaX`: The raw amount that the mouse moves along the x-axis without affecting mouse sensitivity settings.
- `deltaY`: The raw amount that the mouse moves along the y-axis without affecting mouse sensitivity settings.

## See Also

### Getting Change Information

- [mouseMovedHandler](gcmouseinput/mousemovedhandler.md): The block that the profile calls when the mouse moves.
