> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/weatherkit/weathererror/failurereason

# failureReason

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A localized message describing the reason for the failure.

## Declaration

```swift
var failureReason: String? { get }
```

## See Also

### Getting the error properties

- [errorDescription](errordescription.md): A localized message describing what error occurred.
- [helpAnchor](helpanchor.md): A localized message providing text if the user requests help.
- [recoverySuggestion](recoverysuggestion.md): A localized message describing how to recover from the failure.
