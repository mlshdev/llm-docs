> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatepicker/datepickerstyle](https://developer.apple.com/documentation/uikit/uidatepicker/datepickerstyle)

# datePickerStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

The current style of the date picker.

## Declaration

```swift
var datePickerStyle: UIDatePickerStyle { get }
```

<a id="Discussion"></a>

## Discussion

This property always returns a concrete style, never [UIDatePickerStyle.automatic](../uidatepickerstyle/automatic.md).

## See Also

### Configuring the date picker style

- [preferredDatePickerStyle](preferreddatepickerstyle.md): The preferred style of the date picker.
- [UIDatePickerStyle](../uidatepickerstyle.md): Styles that determine the appearance of a date picker.

# datePickerStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

The current style of the date picker.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) UIDatePickerStyle datePickerStyle;
```

<a id="Discussion"></a>

## Discussion

This property always returns a concrete style, never [UIDatePickerStyleAutomatic](../uidatepickerstyle/automatic.md).

## See Also

### Configuring the date picker style

- [preferredDatePickerStyle](preferreddatepickerstyle.md): The preferred style of the date picker.
- [UIDatePickerStyle](../uidatepickerstyle.md): Styles that determine the appearance of a date picker.
