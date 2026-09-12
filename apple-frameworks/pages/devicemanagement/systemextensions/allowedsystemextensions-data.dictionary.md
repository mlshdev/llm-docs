> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/systemextensions/allowedsystemextensions-data.dictionary](https://developer.apple.com/documentation/devicemanagement/systemextensions/allowedsystemextensions-data.dictionary)

# SystemExtensions.AllowedSystemExtensions

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.15+

A dictionary that maps team identifiers to bundle identifiers that are allowed.

## Declaration

```
object SystemExtensions.AllowedSystemExtensions
```

## Properties

- `ANY` — `[string]`: The mapping of team identifiers to arrays of bundle identifiers, where the bundle identifier defines the system extension to install.

## See Also

### Objects

- [SystemExtensions.AllowedSystemExtensionTypes](allowedsystemextensiontypes-data.dictionary.md): A dictionary that maps team identifiers to system extensions.
- [SystemExtensions.NonRemovableFromUISystemExtensions](nonremovablefromuisystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers of extensions that are non-removable.
- [SystemExtensions.NonRemovableSystemExtensions](nonremovablesystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers of extensions that are non-removable.
- [SystemExtensions.RemovableSystemExtensions](removablesystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers of extensions that are removable.
