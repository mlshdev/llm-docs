> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/datestyle/time](https://developer.apple.com/documentation/swiftui/text/datestyle/time)

# time

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A style displaying only the time component for a date.

## Declaration

```swift
static let time: Text.DateStyle
```

<a id="discussion"></a>

## Discussion

```swift
Text(event.startDate, style: .time)
```

Example output: 11:23PM

## See Also

### Getting text date styles

- [date](date.md): A style displaying a date.
- [offset](offset.md): A style displaying a date as offset from now.
- [relative](relative.md): A style displaying a date as relative to now.
- [timer](timer.md): A style displaying a date as timer counting from now.
