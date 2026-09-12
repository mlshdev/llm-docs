> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/overscancompensation-swift.enum/none](https://developer.apple.com/documentation/uikit/uiscreen/overscancompensation-swift.enum/none)

# UIScreen.OverscanCompensation.none (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+

No scaling occurs. Use [overscanCompensationInsets](../overscancompensationinsets.md) to get the insets required to avoid clipping.

## Declaration

```swift
case none
```

## See Also

### Constants

- [UIScreen.OverscanCompensation.scale](scale.md): The final composited framebuffer for the screen is scaled so that all pixels lie in the area visible on the screen.
- [UIScreen.OverscanCompensation.insetBounds](insetbounds.md): The screen bounds are reduced in size so that all pixels in the framebuffer are visible on the screen.
- [insetApplicationFrame](insetapplicationframe.md): Deprecated. The application frame is reduced in size to compensate for overscan. Content drawn outside the application frame may be clipped.

# UIScreenOverscanCompensationNone (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+

No scaling occurs. Use [overscanCompensationInsets](../overscancompensationinsets.md) to get the insets required to avoid clipping.

## Declaration

```objectivec
UIScreenOverscanCompensationNone
```

## See Also

### Constants

- [UIScreenOverscanCompensationScale](scale.md): The final composited framebuffer for the screen is scaled so that all pixels lie in the area visible on the screen.
- [UIScreenOverscanCompensationInsetBounds](insetbounds.md): The screen bounds are reduced in size so that all pixels in the framebuffer are visible on the screen.
- [UIScreenOverscanCompensationInsetApplicationFrame](insetapplicationframe.md): Deprecated. The application frame is reduced in size to compensate for overscan. Content drawn outside the application frame may be clipped.
