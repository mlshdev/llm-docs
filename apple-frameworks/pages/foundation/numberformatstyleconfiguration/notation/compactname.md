> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatstyleconfiguration/notation/compactname](https://developer.apple.com/documentation/foundation/numberformatstyleconfiguration/notation/compactname)

# compactName

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A locale-appropriate compact name notation.

## Declaration

```swift
static var compactName: NumberFormatStyleConfiguration.Notation { get }
```

<a id="Discussion"></a>

## Discussion

A compact name notation, when available in the format style’s locale, that uses prefixes or suffixes corresponding to powers of ten. The following example shows a compact name notation in the `fr_FR` locale:

```swift
let compactNameFormatted = 1234.formatted(.number
    .locale(Locale(identifier: "fr_FR"))
    .notation(.compactName)) // "1,2 k"
```

## See Also

### Notations

- [automatic](automatic.md): A notation that automatically provides locale-appropriate behavior.
- [scientific](scientific.md): A notation constant that formats values with scientific notation.
