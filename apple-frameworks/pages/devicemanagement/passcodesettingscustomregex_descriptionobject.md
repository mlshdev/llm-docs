> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/passcodesettingscustomregex_descriptionobject](https://developer.apple.com/documentation/devicemanagement/passcodesettingscustomregex_descriptionobject)

# PasscodeSettingsCustomRegex_DescriptionObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 14.0+

A dictionary with supported OS language IDs for the keys (such as `en-US`), and values that represent a localized description of the policy that the regular expression enforces. Use the special `default` key for languages that the dictionary doesn’t contain.

## Declaration

```
object PasscodeSettingsCustomRegex_DescriptionObject
```

## Properties

- `ANY` — `string`: A localized description.
