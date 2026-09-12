> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/overscancompensation-swift.enum/scale](https://developer.apple.com/documentation/uikit/uiscreen/overscancompensation-swift.enum/scale)

# UIScreen.OverscanCompensation.scale (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS

The final composited framebuffer for the screen is scaled so that all pixels lie in the area visible on the screen.

## Declaration

```swift
case scale
```

## See Also

### Constants

- [UIScreen.OverscanCompensation.insetBounds](insetbounds.md): The screen bounds are reduced in size so that all pixels in the framebuffer are visible on the screen.
- [UIScreen.OverscanCompensation.none](none.md): No scaling occurs. Use [overscanCompensationInsets](../overscancompensationinsets.md) to get the insets required to avoid clipping.
- [insetApplicationFrame](insetapplicationframe.md): Deprecated. The application frame is reduced in size to compensate for overscan. Content drawn outside the application frame may be clipped.

# UIScreenOverscanCompensationScale (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS

The final composited framebuffer for the screen is scaled so that all pixels lie in the area visible on the screen.

## Declaration

```objectivec
UIScreenOverscanCompensationScale
```

## See Also

### Constants

- [UIScreenOverscanCompensationInsetBounds](insetbounds.md): The screen bounds are reduced in size so that all pixels in the framebuffer are visible on the screen.
- [UIScreenOverscanCompensationNone](none.md): No scaling occurs. Use [overscanCompensationInsets](../overscancompensationinsets.md) to get the insets required to avoid clipping.
- [UIScreenOverscanCompensationInsetApplicationFrame](insetapplicationframe.md): Deprecated. The application frame is reduced in size to compensate for overscan. Content drawn outside the application frame may be clipped.
