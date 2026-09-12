> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/languageavailability/status/supported](https://developer.apple.com/documentation/translation/languageavailability/status/supported)

# LanguageAvailability.Status.supported

**Framework:** Translation  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

The framework supports the language or language pairing, but can’t yet use it.

## Declaration

```swift
case supported
```

<a id="discussion"></a>

## Discussion

A language or language pairing is ready for use in a translation after it downloads and installs.

## See Also

### Checking availability status

- [LanguageAvailability.Status.installed](installed.md): The framework supports the language or language pairing and has it downloaded and ready for use in a translation.
- [LanguageAvailability.Status.unsupported](unsupported.md): The framework doesn’t support the language or language pairing.
