> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/datestyle/timer](https://developer.apple.com/documentation/swiftui/text/datestyle/timer)

# timer

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A style displaying a date as timer counting from now.

## Declaration

```swift
static let timer: Text.DateStyle
```

<a id="discussion"></a>

## Discussion

```swift
Text(event.startDate, style: .timer)
```

Example output: 2:32 36:59:01

## See Also

### Getting text date styles

- [date](date.md): A style displaying a date.
- [offset](offset.md): A style displaying a date as offset from now.
- [relative](relative.md): A style displaying a date as relative to now.
- [time](time.md): A style displaying only the time component for a date.
