> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/datepickerstyle(_:)](https://developer.apple.com/documentation/swiftui/view/datepickerstyle(_:))

# datePickerStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

Sets the style for date pickers within this view.

## Declaration

```swift
nonisolated func datePickerStyle<S>(_ style: S) -> some View where S : DatePickerStyle

```

## See Also

### Choosing dates

- [DatePicker](../datepicker.md): A control for selecting an absolute date.
- [MultiDatePicker](../multidatepicker.md): A control for picking multiple dates.
- [calendar](../environmentvalues/calendar.md): The current calendar that views should use when handling dates.
- [timeZone](../environmentvalues/timezone.md): The current time zone that views should use when handling dates.
