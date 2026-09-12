> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/overscancompensation-swift.property](https://developer.apple.com/documentation/uikit/uiscreen/overscancompensation-swift.property)

# overscanCompensation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS

For an external screen, this property sets the desired technique to compensate for overscan.

## Declaration

```swift
var overscanCompensation: UIScreen.OverscanCompensation { get set }
```

<a id="Discussion"></a>

## Discussion

Some external displays may be unable to reliably display all of the pixels to the user. To compensate, choose one of the techniques described in the  [UIScreen.OverscanCompensation](overscancompensation-swift.enum.md) enumeration.

## See Also

### Managing overscan compensation

- [overscanCompensationInsets](overscancompensationinsets.md): The edge inset values needed to avoid clipping the rectangle.
- [UIScreen.OverscanCompensation](overscancompensation-swift.enum.md): Describes different techniques for compensating for pixel loss at the edge of the screen.

# overscanCompensation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS

For an external screen, this property sets the desired technique to compensate for overscan.

## Declaration

```objectivec
@property (nonatomic) UIScreenOverscanCompensation overscanCompensation;
```

<a id="Discussion"></a>

## Discussion

Some external displays may be unable to reliably display all of the pixels to the user. To compensate, choose one of the techniques described in the  [UIScreenOverscanCompensation](overscancompensation-swift.enum.md) enumeration.

## See Also

### Managing overscan compensation

- [overscanCompensationInsets](overscancompensationinsets.md): The edge inset values needed to avoid clipping the rectangle.
- [UIScreenOverscanCompensation](overscancompensation-swift.enum.md): Describes different techniques for compensating for pixel loss at the edge of the screen.
