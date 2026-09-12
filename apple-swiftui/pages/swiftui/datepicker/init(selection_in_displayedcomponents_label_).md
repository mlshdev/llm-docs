> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepicker/init(selection:in:displayedcomponents:label:)](https://developer.apple.com/documentation/swiftui/datepicker/init(selection:in:displayedcomponents:label:))

# init(selection:in:displayedComponents:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

Creates an instance that selects a `Date` in a closed range.

## Declaration

```swift
nonisolated init(selection: Binding<Date>, in range: ClosedRange<Date>, displayedComponents: DatePicker<Label>.Components = [.hourAndMinute, .date], @ContentBuilder label: () -> Label)
```

## Parameters

- `selection`: The date value being displayed and selected.
- `range`: The inclusive range of selectable dates.
- `displayedComponents`: The date components that user is able to view and edit. Defaults to `[.hourAndMinute, .date]`. On watchOS, if `.hourAndMinute` or `.hourMinuteAndSecond` are included with `.date`, only `.date` is displayed.
- `label`: A view that describes the use of the date.

## See Also

### Creating a date picker for specific dates

- [init(\_:selection:in:displayedComponents:)](init%28__selection_in_displayedcomponents_%29.md): Conforms when `Label` is `Text`. Creates an instance that selects a `Date` in a closed range.
