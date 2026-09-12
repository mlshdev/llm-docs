> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvwritingoptions/dateformatter](https://developer.apple.com/documentation/tabulardata/csvwritingoptions/dateformatter)

# dateFormatter

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

A closure that maps dates to their string representations.

## Declaration

```swift
var dateFormatter: (Date) -> String { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to ISO 8601 encoding.
