> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/crashdiagnostic/objectivecexceptionreason/formatstring

# formatString

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A string representing the exception message before arguments are substituted.

## Declaration

```swift
let formatString: String
```

## See Also

### Exception description

- [composedMessage](composedmessage.md): A human-readable message string summarizing the reason for the exception.
- [arguments](arguments.md): Arguments passed to the format string.
