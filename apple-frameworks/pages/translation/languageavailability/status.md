> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/languageavailability/status](https://developer.apple.com/documentation/translation/languageavailability/status)

# LanguageAvailability.Status

**Framework:** Translation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

The availability status for a language or language pairing.

## Declaration

```swift
enum Status
```

<a id="overview"></a>

## Overview

A language must download and install before you can use it in a translation.

## Topics

### Checking availability status

- [LanguageAvailability.Status.installed](status/installed.md): The framework supports the language or language pairing and has it downloaded and ready for use in a translation.
- [LanguageAvailability.Status.supported](status/supported.md): The framework supports the language or language pairing, but can’t yet use it.
- [LanguageAvailability.Status.unsupported](status/unsupported.md): The framework doesn’t support the language or language pairing.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking language availability

- [status(from:to:)](status%28from_to_%29.md): Checks for the installation of a specific language pairing and whether it’s ready for translation.
- [status(for:to:)](status%28for_to_%29.md): Checks to see if the framework supports the language pairing based off a string of sample text.
