> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/passcodesettingscustomregexobject](https://developer.apple.com/documentation/devicemanagement/passcodesettingscustomregexobject)

# PasscodeSettingsCustomRegexObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 14.0+

Specifies a regular expression, and its description, to enforce password compliance. Use the simpler passcode settings whenever possible, and rely on regular expression matching only when necessary. Mistakes in regular expressions can lead to frustrating user experiences, such as unsatisfiable passcode policies, or policy descriptions that don’t match the enforced policy.

## Declaration

```
object PasscodeSettingsCustomRegexObject
```

## Properties

- `Description` — `PasscodeSettingsCustomRegex_DescriptionObject`: A dictionary with supported OS language IDs for the keys (such as `en-US`), and values that represent a localized description of the policy that the regular expression enforces. Use the special `default` key for languages that the dictionary doesn’t contain.
- `Regex` — `string` (required): A regular expression string to match against the password to determine whether it complies with a policy. The regular expression uses the ICU syntax. The string can’t exceed 2048 characters in length.

## Topics

### Objects

- [PasscodeSettingsCustomRegex_DescriptionObject](passcodesettingscustomregex_descriptionobject.md): A dictionary with supported OS language IDs for the keys (such as `en-US`), and values that represent a localized description of the policy that the regular expression enforces. Use the special `default` key for languages that the dictionary doesn’t contain.
