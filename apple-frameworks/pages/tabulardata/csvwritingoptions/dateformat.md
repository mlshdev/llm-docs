> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvwritingoptions/dateformat](https://developer.apple.com/documentation/tabulardata/csvwritingoptions/dateformat)

# dateFormat

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The format the CSV file generator uses to create date strings.

> Use dateFormatter instead.

## Declaration

```swift
var dateFormat: String?
```

<a id="discussion"></a>

## Discussion

Defaults to `nil`, which uses ISO 8601 encoding.
