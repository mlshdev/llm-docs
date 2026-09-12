> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/systemextensions/nonremovablesystemextensions-data.dictionary](https://developer.apple.com/documentation/devicemanagement/systemextensions/nonremovablesystemextensions-data.dictionary)

# SystemExtensions.NonRemovableSystemExtensions

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 15.0+

A dictionary that maps team identifiers to bundle identifiers of extensions that are non-removable.

## Declaration

```
object SystemExtensions.NonRemovableSystemExtensions
```

## Properties

- `ANY` — `[string]`: System extension bundle identifiers

## See Also

### Objects

- [SystemExtensions.AllowedSystemExtensionTypes](allowedsystemextensiontypes-data.dictionary.md): A dictionary that maps team identifiers to system extensions.
- [SystemExtensions.AllowedSystemExtensions](allowedsystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers that are allowed.
- [SystemExtensions.NonRemovableFromUISystemExtensions](nonremovablefromuisystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers of extensions that are non-removable.
- [SystemExtensions.RemovableSystemExtensions](removablesystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers of extensions that are removable.
