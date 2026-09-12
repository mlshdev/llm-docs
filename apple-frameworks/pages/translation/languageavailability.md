> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/languageavailability](https://developer.apple.com/documentation/translation/languageavailability)

# LanguageAvailability

**Framework:** Translation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

A check for language support and status.

## Declaration

```swift
class LanguageAvailability
```

<a id="overview"></a>

## Overview

Use this class to check and see whether the framework supports the language or language pairing you want to offer as a translation. For example, to check if someone’s device supports a translation you can do the following:

```swift
func translationIsSupported(from source: Locale.Language, to target: Locale.Language) async -> Bool {
    let availability = LanguageAvailability()
    let status = await availability.status(from: source, to: target)
    switch status {
    case .installed, .supported:
        return true
    case .unsupported
        return false
    }
}
```

## Topics

### Creating a language availability

- [init()](languageavailability/init%28%29.md): Creates an instance to check what languages are available.
- [init(preferredStrategy:)](languageavailability/init%28preferredstrategy_%29.md): Creates an instance for checking language availability with a preferred translation strategy.

### Configuring language availability

- [preferredStrategy](languageavailability/preferredstrategy.md): The preferred strategy of translation to check availability for.

### Getting supported languages

- [supportedLanguages](languageavailability/supportedlanguages.md): A list of translation languages the framework supports.

### Checking language availability

- [status(from:to:)](languageavailability/status%28from_to_%29.md): Checks for the installation of a specific language pairing and whether it’s ready for translation.
- [status(for:to:)](languageavailability/status%28for_to_%29.md): Checks to see if the framework supports the language pairing based off a string of sample text.
- [LanguageAvailability.Status](languageavailability/status.md): The availability status for a language or language pairing.
