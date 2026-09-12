> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/overscancompensation-swift.enum/insetapplicationframe](https://developer.apple.com/documentation/uikit/uiscreen/overscancompensation-swift.enum/insetapplicationframe)

# insetApplicationFrame (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The application frame is reduced in size to compensate for overscan. Content drawn outside the application frame may be clipped.

## Declaration

```swift
static var insetApplicationFrame: UIScreen.OverscanCompensation { get }
```

## See Also

### Constants

- [UIScreen.OverscanCompensation.scale](scale.md): The final composited framebuffer for the screen is scaled so that all pixels lie in the area visible on the screen.
- [UIScreen.OverscanCompensation.insetBounds](insetbounds.md): The screen bounds are reduced in size so that all pixels in the framebuffer are visible on the screen.
- [UIScreen.OverscanCompensation.none](none.md): No scaling occurs. Use [overscanCompensationInsets](../overscancompensationinsets.md) to get the insets required to avoid clipping.

# UIScreenOverscanCompensationInsetApplicationFrame (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The application frame is reduced in size to compensate for overscan. Content drawn outside the application frame may be clipped.

## Declaration

```objectivec
UIScreenOverscanCompensationInsetApplicationFrame
```

## See Also

### Constants

- [UIScreenOverscanCompensationScale](scale.md): The final composited framebuffer for the screen is scaled so that all pixels lie in the area visible on the screen.
- [UIScreenOverscanCompensationInsetBounds](insetbounds.md): The screen bounds are reduced in size so that all pixels in the framebuffer are visible on the screen.
- [UIScreenOverscanCompensationNone](none.md): No scaling occurs. Use [overscanCompensationInsets](../overscancompensationinsets.md) to get the insets required to avoid clipping.
