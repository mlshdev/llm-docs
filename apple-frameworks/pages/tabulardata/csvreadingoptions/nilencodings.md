> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvreadingoptions/nilencodings](https://developer.apple.com/documentation/tabulardata/csvreadingoptions/nilencodings)

# nilEncodings

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The set of strings that stores acceptable spellings for empty values.

## Declaration

```swift
var nilEncodings: Set<String>
```

<a id="discussion"></a>

## Discussion

Defaults to `["", "#N/A", "#N/A N/A", "#NA", "N/A", "NA", "NULL", "n/a", "null"]`.
