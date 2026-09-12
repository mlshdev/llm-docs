> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/systemextensions/removablesystemextensions-data.dictionary](https://developer.apple.com/documentation/devicemanagement/systemextensions/removablesystemextensions-data.dictionary)

# SystemExtensions.RemovableSystemExtensions

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 12.0+

A dictionary that maps team identifiers to bundle identifiers of extensions that are removable.

## Declaration

```
object SystemExtensions.RemovableSystemExtensions
```

## Properties

- `ANY` — `[string]`: The dictionary maps team identifiers (keys) to arrays of bundle identifiers, where the bundle identifier defines the system extension.

## See Also

### Objects

- [SystemExtensions.AllowedSystemExtensionTypes](allowedsystemextensiontypes-data.dictionary.md): A dictionary that maps team identifiers to system extensions.
- [SystemExtensions.AllowedSystemExtensions](allowedsystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers that are allowed.
- [SystemExtensions.NonRemovableFromUISystemExtensions](nonremovablefromuisystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers of extensions that are non-removable.
- [SystemExtensions.NonRemovableSystemExtensions](nonremovablesystemextensions-data.dictionary.md): A dictionary that maps team identifiers to bundle identifiers of extensions that are non-removable.
