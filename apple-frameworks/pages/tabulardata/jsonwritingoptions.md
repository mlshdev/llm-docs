> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/jsonwritingoptions

# JSONWritingOptions

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A set of JSON file-reading options.

## Declaration

```swift
struct JSONWritingOptions
```

## Topics

### Initializers

- [init()](jsonwritingoptions/init%28%29.md): Creates a set of options for writing a JSON file.

### Instance Properties

- [dateFormatter](jsonwritingoptions/dateformatter.md): A closure that maps dates to their string representations.
- [prettyPrint](jsonwritingoptions/prettyprint.md): A Boolean value that indicates whether to split lines and indent the generated JSON.
- [sortKeys](jsonwritingoptions/sortkeys.md): A Boolean value that indicates whether to sort the keys.
