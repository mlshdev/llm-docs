> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvreadingoptions/trueencodings](https://developer.apple.com/documentation/tabulardata/csvreadingoptions/trueencodings)

# trueEncodings

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The set of strings that stores acceptable spellings for true Boolean values.

## Declaration

```swift
var trueEncodings: Set<String>
```

<a id="discussion"></a>

## Discussion

Defaults to `["1", "True", "TRUE", "true"]`.
