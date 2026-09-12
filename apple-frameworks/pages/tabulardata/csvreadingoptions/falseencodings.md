> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvreadingoptions/falseencodings](https://developer.apple.com/documentation/tabulardata/csvreadingoptions/falseencodings)

# falseEncodings

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The set of strings that stores acceptable spellings for false Boolean values.

## Declaration

```swift
var falseEncodings: Set<String>
```

<a id="discussion"></a>

## Discussion

Defaults to `["0", "False", "FALSE", "false"]`.
