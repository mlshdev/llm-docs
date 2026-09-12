> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepicker](https://developer.apple.com/documentation/swiftui/datepicker)

# DatePicker

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

A control for selecting an absolute date.

## Declaration

```swift
nonisolated struct DatePicker<Label> where Label : View
```

## Mentioned In

- [Laying out a simple view](laying-out-a-simple-view.md)

<a id="overview"></a>

## Overview

Use a `DatePicker` when you want to provide a view that allows the user to select a calendar date, and optionally a time. The view binds to a [Date](https://developer.apple.com/documentation/foundation/date) instance.

The following example creates a basic `DatePicker`, which appears on iOS as text representing the date. This example limits the display to only the calendar date, not the time. When the user taps or clicks the text, a calendar view animates in, from which the user can select a date. When the user dismisses the calendar view, the view updates the bound [Date](https://developer.apple.com/documentation/foundation/date).

```swift
@State private var date = Date()

var body: some View {
    DatePicker(
        "Start Date",
        selection: $date,
        displayedComponents: [.date]
    )
}
```

![An iOS date picker, consisting of a label that says Start Date, and a](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-DatePicker-basic@2x.png)

For cases where adding a subtitle to the label is desired, use a view builder that creates multiple `Text` views where the first text represents the title and the second text represents the subtitle:

```swift
@State private var date = Date()

var body: some View {
    DatePicker(selection: $date) {
        Text("Start Date")
        Text("Select the starting date for the event")
    }
}
```

You can limit the `DatePicker` to specific ranges of dates, allowing selections only before or after a certain date, or between two dates. The following example shows a date-and-time picker that only permits selections within the year 2021 (in the `UTC` time zone).

```swift
@State private var date = Date()
let dateRange: ClosedRange<Date> = {
    let calendar = Calendar.current
    let startComponents = DateComponents(year: 2021, month: 1, day: 1)
    let endComponents = DateComponents(year: 2021, month: 12, day: 31, hour: 23, minute: 59, second: 59)
    return calendar.date(from:startComponents)!
        ...
        calendar.date(from:endComponents)!
}()

var body: some View {
    DatePicker(
        "Start Date",
         selection: $date,
         in: dateRange,
         displayedComponents: [.date, .hourAndMinute]
    )
}
```

![A SwiftUI standard date picker on iOS, with the label Start Date, and](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-DatePicker-selectFromRange@2x.png)

<a id="Styling-date-pickers"></a>

### Styling date pickers

To use a different style of date picker, use the [datePickerStyle(\_:)](view/datepickerstyle%28__%29.md) view modifier. The following example shows the graphical date picker style.

```swift
@State private var date = Date()

var body: some View {
    DatePicker(
        "Start Date",
        selection: $date,
        displayedComponents: [.date]
    )
    .datePickerStyle(.graphical)
}
```

![A SwiftUI date picker using the graphical style, with the label Start Date](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-DatePicker-graphicalStyle@2x.png)

## Topics

### Creating a date picker for any date

- [init(\_:selection:displayedComponents:)](datepicker/init%28__selection_displayedcomponents_%29.md): Conforms when `Label` is `Text`. Creates an instance that selects a `Date` with an unbounded range.
- [init(selection:displayedComponents:label:)](datepicker/init%28selection_displayedcomponents_label_%29.md): Conforms when `Label` conforms to `View`. Creates an instance that selects a `Date` with an unbounded range.

### Creating a date picker for specific dates

- [init(\_:selection:in:displayedComponents:)](datepicker/init%28__selection_in_displayedcomponents_%29.md): Conforms when `Label` is `Text`. Creates an instance that selects a `Date` in a closed range.
- [init(selection:in:displayedComponents:label:)](datepicker/init%28selection_in_displayedcomponents_label_%29.md): Conforms when `Label` conforms to `View`. Creates an instance that selects a `Date` in a closed range.

### Setting date picker components

- [DatePicker.Components](datepicker/components.md)
- [DatePickerComponents](datepickercomponents.md)

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Choosing dates

- [datePickerStyle(\_:)](view/datepickerstyle%28__%29.md): Sets the style for date pickers within this view.
- [MultiDatePicker](multidatepicker.md): A control for picking multiple dates.
- [calendar](environmentvalues/calendar.md): The current calendar that views should use when handling dates.
- [timeZone](environmentvalues/timezone.md): The current time zone that views should use when handling dates.
