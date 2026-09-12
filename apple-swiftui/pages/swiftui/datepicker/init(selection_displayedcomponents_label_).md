> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepicker/init(selection:displayedcomponents:label:)](https://developer.apple.com/documentation/swiftui/datepicker/init(selection:displayedcomponents:label:))

# init(selection:displayedComponents:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

Creates an instance that selects a `Date` with an unbounded range.

## Declaration

```swift
nonisolated init(selection: Binding<Date>, displayedComponents: DatePicker<Label>.Components = [.hourAndMinute, .date], @ContentBuilder label: () -> Label)
```

## Parameters

- `selection`: The date value being displayed and selected.
- `displayedComponents`: The date components that user is able to view and edit. Defaults to `[.hourAndMinute, .date]`. On watchOS, if `.hourAndMinute` or `.hourMinuteAndSecond` are included with `.date`, only `.date` is displayed.
- `label`: A view that describes the use of the date.

## See Also

### Creating a date picker for any date

- [init(\_:selection:displayedComponents:)](init%28__selection_displayedcomponents_%29.md): Conforms when `Label` is `Text`. Creates an instance that selects a `Date` with an unbounded range.
