> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedappdistribution/managedappdistributionerror/failurereason

# failureReason

**Framework:** ManagedAppDistribution  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 2.4+

A detailed description of the error.

## Declaration

```swift
var failureReason: String? { get }
```

<a id="discussion"></a>

## Discussion

This appears in the body of an alert.

## See Also

### Providing error information

- [description](description.md): A localized description of the error.
- [errorDescription](errordescription.md): A brief description of the error.
- [recoveryOptions](recoveryoptions.md): A set of possible recovery options to present.
- [recoverySuggestion](recoverysuggestion.md): A suggestion for recovering from the error.
- [localizedStringResource](localizedstringresource.md): A set of localized error strings.
