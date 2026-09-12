> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/init(timerinterval:pausetime:countsdown:showshours:)](https://developer.apple.com/documentation/swiftui/text/init(timerinterval:pausetime:countsdown:showshours:))

# init(timerInterval:pauseTime:countsDown:showsHours:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an instance that displays a timer counting within the provided interval.

## Declaration

```swift
init(timerInterval: ClosedRange<Date>, pauseTime: Date? = nil, countsDown: Bool = true, showsHours: Bool = true)
```

## Parameters

- `timerInterval`: The interval between where to run the timer.
- `pauseTime`: If present, the date at which to pause the timer. The default is `nil` which indicates to never pause.
- `countsDown`: Whether to count up or down. The default is `true`.
- `showsHours`: Whether to include an hours component if there are more than 60 minutes left on the timer. The default is `true`.

<a id="discussion"></a>

## Discussion

```swift
Text(
    timerInterval: Date.now...Date(timeInterval: 12 * 60, since: .now),
    pauseTime: Date.now + (10 * 60))
```

The example above shows a text that displays a timer counting down from “12:00” and will pause when reaching “10:00”.

## See Also

### Creating a text view

- [init(\_:tableName:bundle:comment:)](init%28__tablename_bundle_comment_%29.md): Creates a text view that displays localized content identified by a key.
- [init(\_:)](init%28__%29.md): Creates a text view that displays styled attributed content.
- [init(verbatim:)](init%28verbatim_%29.md): Creates a text view that displays a string literal without localization.
- [init(\_:style:)](init%28__style_%29.md): Creates an instance that displays localized dates and times using a specific style.
- [init(\_:format:)](init%28__format_%29.md): Creates a text view that displays the formatted representation of a nonstring type supported by a corresponding format style.
- [init(\_:formatter:)](init%28__formatter_%29.md): Creates a text view that displays the formatted representation of a Foundation object.
