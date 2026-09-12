> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepicker/init(_:selection:displayedcomponents:)](https://developer.apple.com/documentation/swiftui/datepicker/init(_:selection:displayedcomponents:))

# init(\_:selection:displayedComponents:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an instance that selects a `Date` with an unbounded range.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, selection: Binding<Date>, displayedComponents: DatePicker<Label>.Components = [.hourAndMinute, .date])
```

## Parameters

- `titleResource`: The localized title of `self`, describing its purpose.
- `selection`: The date value being displayed and selected.
- `displayedComponents`: The date components that user is able to view and edit. Defaults to `[.hourAndMinute, .date]`. On watchOS, if `.hourAndMinute` or `.hourMinuteAndSecond` are included with `.date`, only `.date` is displayed.

## See Also

### Creating a date picker for any date

- [init(selection:displayedComponents:label:)](init%28selection_displayedcomponents_label_%29.md): Conforms when `Label` conforms to `View`. Creates an instance that selects a `Date` with an unbounded range.
