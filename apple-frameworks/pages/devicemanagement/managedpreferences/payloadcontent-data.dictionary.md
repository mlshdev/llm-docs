> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedpreferences/payloadcontent-data.dictionary](https://developer.apple.com/documentation/devicemanagement/managedpreferences/payloadcontent-data.dictionary)

# ManagedPreferences.PayloadContent

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The dictionary containing app preference domains. The key names are application preference domain identifiers (for example, `com.example.my-app`), or the string `.GlobalPreferences` for the global domain. The values are the corresponding forced and set-once preferences.

## Declaration

```
object ManagedPreferences.PayloadContent
```

## Properties

- `ANY` — `ManagedPreferences.PayloadContent.ANY` (required): The dictionary containing app preference domains.

## Topics

### Objects

- [ManagedPreferences.PayloadContent.ANY](payloadcontent-data.dictionary/any-data.dictionary.md): The dictionary containing app preference domains.
