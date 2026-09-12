> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/systemextensions/allowedsystemextensiontypes-data.dictionary](https://developer.apple.com/documentation/devicemanagement/systemextensions/allowedsystemextensiontypes-data.dictionary)

# SystemExtensions.AllowedSystemExtensionTypes

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.15+

A dictionary that maps team identifiers to system extensions.

## Declaration

```
object SystemExtensions.AllowedSystemExtensionTypes
```

## Properties

- `ANY` — `[string]`: The mapping of team identifier to an array of strings, where each string is a type of system extension that you can install for that team identifier.

## See Also

### Objects

- [SystemExtensions.AllowedSystemExtensions](allowedsystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers that are allowed.
- [SystemExtensions.NonRemovableFromUISystemExtensions](nonremovablefromuisystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers of extensions that are non-removable.
- [SystemExtensions.NonRemovableSystemExtensions](nonremovablesystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers of extensions that are non-removable.
- [SystemExtensions.RemovableSystemExtensions](removablesystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers of extensions that are removable.
