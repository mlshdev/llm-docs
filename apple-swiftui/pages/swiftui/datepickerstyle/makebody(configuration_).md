> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepickerstyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/datepickerstyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the appearance and interaction content for a `DatePicker`.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the date picker.

<a id="discussion"></a>

## Discussion

The system calls this method for each [DatePicker](../datepicker.md) instance in a view hierarchy where this style is the current date picker style.

## See Also

### Creating custom date picker styles

- [DatePickerStyleConfiguration](../datepickerstyleconfiguration.md): The properties of a `DatePicker`.
- [DatePickerStyle.Configuration](configuration.md): A type alias for the properties of a `DatePicker`.
- [Body](body.md): A view representing the appearance and interaction of a `DatePicker`.
