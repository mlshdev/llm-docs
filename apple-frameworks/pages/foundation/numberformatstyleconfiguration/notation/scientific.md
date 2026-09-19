> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/numberformatstyleconfiguration/notation/scientific

# scientific

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A notation constant that formats values with scientific notation.

## Declaration

```swift
static var scientific: NumberFormatStyleConfiguration.Notation { get }
```

<a id="Discussion"></a>

## Discussion

The following example shows the effect of using scientific notation with a format style:

```swift
let scientific = 12345.formatted(.number
    .notation(.scientific)) // 1.2345E4"

```

## See Also

### Notations

- [automatic](automatic.md): A notation that automatically provides locale-appropriate behavior.
- [compactName](compactname.md): A locale-appropriate compact name notation.
