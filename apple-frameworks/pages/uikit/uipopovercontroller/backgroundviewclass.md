> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/backgroundviewclass](https://developer.apple.com/documentation/uikit/uipopovercontroller/backgroundviewclass)

# backgroundViewClass (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The class to use for displaying the popover background content.

## Declaration

```swift
var backgroundViewClass: AnyClass? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which indicates that the popover controller should use the default popover appearance. Setting this property to a value other than `nil` causes the popover controller to use the specified class to draw the popover’s background content. The class you specify must be a subclass of [UIPopoverBackgroundView](../uipopoverbackgroundview.md).

## See Also

### Customizing the popover appearance

- [layoutMargins](layoutmargins.md): Deprecated. The margins that define the portion of the screen in which it is permissible to display the popover.
- [backgroundColor](backgroundcolor.md): Deprecated. The color of the popover’s backdrop view.

# popoverBackgroundViewClass (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The class to use for displaying the popover background content.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) Class popoverBackgroundViewClass;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which indicates that the popover controller should use the default popover appearance. Setting this property to a value other than `nil` causes the popover controller to use the specified class to draw the popover’s background content. The class you specify must be a subclass of [UIPopoverBackgroundView](../uipopoverbackgroundview.md).

## See Also

### Customizing the popover appearance

- [popoverLayoutMargins](layoutmargins.md): Deprecated. The margins that define the portion of the screen in which it is permissible to display the popover.
- [backgroundColor](backgroundcolor.md): Deprecated. The color of the popover’s backdrop view.
