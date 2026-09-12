> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepickerstyleconfiguration](https://developer.apple.com/documentation/swiftui/datepickerstyleconfiguration)

# DatePickerStyleConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 10.0+

The properties of a `DatePicker`.

## Declaration

```swift
struct DatePickerStyleConfiguration
```

## Topics

### Establishing the date range

- [minimumDate](datepickerstyleconfiguration/minimumdate.md): The oldest selectable date.
- [maximumDate](datepickerstyleconfiguration/maximumdate.md): The most recent selectable date.

### Labeling the date picker

- [label](datepickerstyleconfiguration/label-swift.property.md): A description of the `DatePicker`.
- [DatePickerStyleConfiguration.Label](datepickerstyleconfiguration/label-swift.struct.md): A type-erased label of a `DatePicker`.
- [displayedComponents](datepickerstyleconfiguration/displayedcomponents.md): The date components that the user is able to view and edit.

### Selecting the date

- [selection](datepickerstyleconfiguration/selection.md): The date value being displayed and selected.
- [$selection](datepickerstyleconfiguration/$selection.md)

## See Also

### Creating custom date picker styles

- [makeBody(configuration:)](datepickerstyle/makebody%28configuration_%29.md): Returns the appearance and interaction content for a `DatePicker`.
- [DatePickerStyle.Configuration](datepickerstyle/configuration.md): A type alias for the properties of a `DatePicker`.
- [Body](datepickerstyle/body.md): A view representing the appearance and interaction of a `DatePicker`.
