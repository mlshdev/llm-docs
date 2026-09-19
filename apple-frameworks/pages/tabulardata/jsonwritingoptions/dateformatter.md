> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/jsonwritingoptions/dateformatter

# dateFormatter

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A closure that maps dates to their string representations.

## Declaration

```swift
var dateFormatter: (Date) -> String
```

<a id="discussion"></a>

## Discussion

Defaults to ISO 8601 encoding.
