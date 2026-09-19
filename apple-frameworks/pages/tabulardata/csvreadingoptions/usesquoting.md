> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/csvreadingoptions/usesquoting

# usesQuoting

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether to enable quoting.

## Declaration

```swift
var usesQuoting: Bool
```

<a id="discussion"></a>

## Discussion

When `true`, the contents of a quoted field can contain special characters, such as the field delimiter and newlines. Defaults to `true`.
