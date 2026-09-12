> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatstyleconfiguration/notation/scientific](https://developer.apple.com/documentation/foundation/numberformatstyleconfiguration/notation/scientific)

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
