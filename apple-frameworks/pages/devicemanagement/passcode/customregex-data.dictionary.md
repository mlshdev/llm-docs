> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/passcode/customregex-data.dictionary](https://developer.apple.com/documentation/devicemanagement/passcode/customregex-data.dictionary)

# Passcode.CustomRegex

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 14.0+ (deprecated in 27.0)

The regex defining the passcode policy.

## Declaration

```
object Passcode.CustomRegex
```

## Properties

- `passwordContentDescription` — `Passcode.CustomRegex.PasswordContentDescription`: Contains a dictionary of keys for supported OS language IDs (for example, “en-US”), and whose values represent a localized description of the policy enforced by the regular expression. Use the special `default` key can for languages that aren’t contained in the dictionary.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+ | watchOS 27+
- `passwordContentRegex` — `string` (required): A regular expression string that the system matches against the password to determine whether it complies with a policy. The regular expression uses the ICU syntax ([https://unicode-org.github.io/icu/userguide/strings/regexp.html](https://unicode-org.github.io/icu/userguide/strings/regexp.html)). The string must not exceed 2048 characters in length.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+ | watchOS 27+

## Topics

### Objects

- [Passcode.CustomRegex.PasswordContentDescription](customregex-data.dictionary/passwordcontentdescription-data.dictionary.md): Deprecated. Descriptions of the policy, localized to supported locales.
