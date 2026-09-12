> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/style](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/style)

# NSSegmentedControl.Style (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

The following constants specify the visual style used to display the segmented control. They are used by [segmentStyle](segmentstyle.md).

## Declaration

```swift
enum Style
```

## Topics

### Constants

- [NSSegmentedControl.Style.automatic](style/automatic.md): The appearance of the segmented control is automatically determined based on the type of window in which the control is displayed and the position within the window.
- [NSSegmentedControl.Style.rounded](style/rounded.md): The control is displayed using the rounded style.
- [NSSegmentedControl.Style.texturedRounded](style/texturedrounded.md): The control is displayed using the textured rounded style. In macOS 10.7 and later, this style uses the artwork defined for [NSSegmentedControl.Style.texturedSquare](style/texturedsquare.md), so you should specify [NSSegmentedControl.Style.texturedSquare](style/texturedsquare.md) instead.
- [NSSegmentedControl.Style.roundRect](style/roundrect.md): The control is displayed using the round rect style.
- [NSSegmentedControl.Style.texturedSquare](style/texturedsquare.md): The control is displayed using the textured square style.
- [NSSegmentedControl.Style.capsule](style/capsule.md): The control is displayed using the capsule style. In macOS 10.7 and later, this style uses the artwork defined for [NSSegmentedControl.Style.texturedSquare](style/texturedsquare.md), so you should specify [NSSegmentedControl.Style.texturedSquare](style/texturedsquare.md) instead.
- [NSSegmentedControl.Style.smallSquare](style/smallsquare.md): The control is displayed using the small square style.
- [NSSegmentedControl.Style.separated](style/separated.md): The segments in the control are displayed very close to each other but not touching. For example, Safari in macOS 10.10 and later uses this style for the previous and next page segmented control.

### Initializers

- [init(rawValue:)](style/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the segment behavior

- [trackingMode](trackingmode.md): The type of tracking behavior the control exhibits.
- [NSSegmentedControl.SwitchTracking](switchtracking.md): Constants that specify the type of tracking behavior a segmented control exhibits.
- [segmentStyle](segmentstyle.md): The visual style used to display the control.
- [role](role-swift.property.md)
- [NSSegmentedControl.Role](role-swift.enum.md)

# NSSegmentStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

The following constants specify the visual style used to display the segmented control. They are used by [segmentStyle](segmentstyle.md).

## Declaration

```objectivec
enum NSSegmentStyle : NSInteger;
```

## Topics

### Constants

- [NSSegmentStyleAutomatic](style/automatic.md): The appearance of the segmented control is automatically determined based on the type of window in which the control is displayed and the position within the window.
- [NSSegmentStyleRounded](style/rounded.md): The control is displayed using the rounded style.
- [NSSegmentStyleTexturedRounded](style/texturedrounded.md): The control is displayed using the textured rounded style. In macOS 10.7 and later, this style uses the artwork defined for [NSSegmentStyleTexturedSquare](style/texturedsquare.md), so you should specify [NSSegmentStyleTexturedSquare](style/texturedsquare.md) instead.
- [NSSegmentStyleRoundRect](style/roundrect.md): The control is displayed using the round rect style.
- [NSSegmentStyleTexturedSquare](style/texturedsquare.md): The control is displayed using the textured square style.
- [NSSegmentStyleCapsule](style/capsule.md): The control is displayed using the capsule style. In macOS 10.7 and later, this style uses the artwork defined for [NSSegmentStyleTexturedSquare](style/texturedsquare.md), so you should specify [NSSegmentStyleTexturedSquare](style/texturedsquare.md) instead.
- [NSSegmentStyleSmallSquare](style/smallsquare.md): The control is displayed using the small square style.
- [NSSegmentStyleSeparated](style/separated.md): The segments in the control are displayed very close to each other but not touching. For example, Safari in macOS 10.10 and later uses this style for the previous and next page segmented control.

## See Also

### Specifying the segment behavior

- [trackingMode](trackingmode.md): The type of tracking behavior the control exhibits.
- [NSSegmentSwitchTracking](switchtracking.md): Constants that specify the type of tracking behavior a segmented control exhibits.
- [segmentStyle](segmentstyle.md): The visual style used to display the control.
- [role](role-swift.property.md)
- [NSSegmentedControlRole](role-swift.enum.md)
