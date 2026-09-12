> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/overscancompensation-swift.enum](https://developer.apple.com/documentation/uikit/uiscreen/overscancompensation-swift.enum)

# UIScreen.OverscanCompensation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS

Describes different techniques for compensating for pixel loss at the edge of the screen.

## Declaration

```swift
enum OverscanCompensation
```

## Topics

### Constants

- [UIScreen.OverscanCompensation.scale](overscancompensation-swift.enum/scale.md): The final composited framebuffer for the screen is scaled so that all pixels lie in the area visible on the screen.
- [UIScreen.OverscanCompensation.insetBounds](overscancompensation-swift.enum/insetbounds.md): The screen bounds are reduced in size so that all pixels in the framebuffer are visible on the screen.
- [UIScreen.OverscanCompensation.none](overscancompensation-swift.enum/none.md): No scaling occurs. Use [overscanCompensationInsets](overscancompensationinsets.md) to get the insets required to avoid clipping.
- [insetApplicationFrame](overscancompensation-swift.enum/insetapplicationframe.md): Deprecated. The application frame is reduced in size to compensate for overscan. Content drawn outside the application frame may be clipped.

### Initializers

- [init(rawValue:)](overscancompensation-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing overscan compensation

- [overscanCompensationInsets](overscancompensationinsets.md): The edge inset values needed to avoid clipping the rectangle.
- [overscanCompensation](overscancompensation-swift.property.md): For an external screen, this property sets the desired technique to compensate for overscan.

# UIScreenOverscanCompensation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS

Describes different techniques for compensating for pixel loss at the edge of the screen.

## Declaration

```objectivec
enum UIScreenOverscanCompensation : NSInteger;
```

## Topics

### Constants

- [UIScreenOverscanCompensationScale](overscancompensation-swift.enum/scale.md): The final composited framebuffer for the screen is scaled so that all pixels lie in the area visible on the screen.
- [UIScreenOverscanCompensationInsetBounds](overscancompensation-swift.enum/insetbounds.md): The screen bounds are reduced in size so that all pixels in the framebuffer are visible on the screen.
- [UIScreenOverscanCompensationNone](overscancompensation-swift.enum/none.md): No scaling occurs. Use [overscanCompensationInsets](overscancompensationinsets.md) to get the insets required to avoid clipping.
- [UIScreenOverscanCompensationInsetApplicationFrame](overscancompensation-swift.enum/insetapplicationframe.md): Deprecated. The application frame is reduced in size to compensate for overscan. Content drawn outside the application frame may be clipped.

## See Also

### Managing overscan compensation

- [overscanCompensationInsets](overscancompensationinsets.md): The edge inset values needed to avoid clipping the rectangle.
- [overscanCompensation](overscancompensation-swift.property.md): For an external screen, this property sets the desired technique to compensate for overscan.
