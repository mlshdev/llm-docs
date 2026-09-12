> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepicker/init(_:selection:in:displayedcomponents:)](https://developer.apple.com/documentation/swiftui/datepicker/init(_:selection:in:displayedcomponents:))

# init(\_:selection:in:displayedComponents:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an instance that selects a `Date` in a closed range.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, selection: Binding<Date>, in range: ClosedRange<Date>, displayedComponents: DatePicker<Label>.Components = [.hourAndMinute, .date])
```

## Parameters

- `titleResource`: The localized title of `self`, describing its purpose.
- `selection`: The date value being displayed and selected.
- `range`: The inclusive range of selectable dates.
- `displayedComponents`: The date components that user is able to view and edit. Defaults to `[.hourAndMinute, .date]`. On watchOS, if `.hourAndMinute` or `.hourMinuteAndSecond` are included with `.date`, only `.date` is displayed.

## See Also

### Creating a date picker for specific dates

- [init(selection:in:displayedComponents:label:)](init%28selection_in_displayedcomponents_label_%29.md): Conforms when `Label` conforms to `View`. Creates an instance that selects a `Date` in a closed range.
