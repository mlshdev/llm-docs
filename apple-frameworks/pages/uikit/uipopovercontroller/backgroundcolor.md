> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/backgroundcolor](https://developer.apple.com/documentation/uikit/uipopovercontroller/backgroundcolor)

# backgroundColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The color of the popover’s backdrop view.

## Declaration

```swift
@NSCopying var backgroundColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to customize the background color of your popover. Changing the value of this property while the popover is visible triggers an animated changeover to the new color. The default value of this property is `nil`, which corresponds to the default background color.

## See Also

### Customizing the popover appearance

- [layoutMargins](layoutmargins.md): Deprecated. The margins that define the portion of the screen in which it is permissible to display the popover.
- [backgroundViewClass](backgroundviewclass.md): Deprecated. The class to use for displaying the popover background content.

# backgroundColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The color of the popover’s backdrop view.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

Use this property to customize the background color of your popover. Changing the value of this property while the popover is visible triggers an animated changeover to the new color. The default value of this property is `nil`, which corresponds to the default background color.

## See Also

### Customizing the popover appearance

- [popoverLayoutMargins](layoutmargins.md): Deprecated. The margins that define the portion of the screen in which it is permissible to display the popover.
- [popoverBackgroundViewClass](backgroundviewclass.md): Deprecated. The class to use for displaying the popover background content.
