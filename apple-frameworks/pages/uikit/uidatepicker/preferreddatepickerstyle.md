> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/preferreddatepickerstyle](https://developer.apple.com/documentation/uikit/uidatepicker/preferreddatepickerstyle)

# preferredDatePickerStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

The preferred style of the date picker.

## Declaration

```swift
var preferredDatePickerStyle: UIDatePickerStyle { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the display style that you prefer. If the style changes, the date picker may generate a layout pass to update the display.

The default style is [UIDatePickerStyle.automatic](../uidatepickerstyle/automatic.md). For a list of styles, see [UIDatePickerStyle](../uidatepickerstyle.md).

## See Also

### Configuring the date picker style

- [datePickerStyle](datepickerstyle.md): The current style of the date picker.
- [UIDatePickerStyle](../uidatepickerstyle.md): Styles that determine the appearance of a date picker.

# preferredDatePickerStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

The preferred style of the date picker.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UIDatePickerStyle preferredDatePickerStyle;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the display style that you prefer. If the style changes, the date picker may generate a layout pass to update the display.

The default style is [UIDatePickerStyleAutomatic](../uidatepickerstyle/automatic.md). For a list of styles, see [UIDatePickerStyle](../uidatepickerstyle.md).

## See Also

### Configuring the date picker style

- [datePickerStyle](datepickerstyle.md): The current style of the date picker.
- [UIDatePickerStyle](../uidatepickerstyle.md): Styles that determine the appearance of a date picker.
