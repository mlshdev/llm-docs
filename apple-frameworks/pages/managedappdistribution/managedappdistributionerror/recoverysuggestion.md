> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedappdistribution/managedappdistributionerror/recoverysuggestion

# recoverySuggestion

**Framework:** ManagedAppDistribution  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 2.4+

A suggestion for recovering from the error.

## Declaration

```swift
var recoverySuggestion: String? { get }
```

## See Also

### Providing error information

- [description](description.md): A localized description of the error.
- [errorDescription](errordescription.md): A brief description of the error.
- [failureReason](failurereason.md): A detailed description of the error.
- [recoveryOptions](recoveryoptions.md): A set of possible recovery options to present.
- [localizedStringResource](localizedstringresource.md): A set of localized error strings.
