> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/groupactivities/spatialtemplaterole/roleidentifier

# roleIdentifier

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The unique identifier string for the role.

## Declaration

```swift
var roleIdentifier: String { get }
```

<a id="discussion"></a>

## Discussion

Provide unique strings for each distinct role in your custom spatial template.

## Default Implementations

### SpatialTemplateRole Implementations

- [roleIdentifier](roleidentifier-7vj8a.md): Conforms when `Self` conforms to `RawRepresentable` and `RawValue` is `String`. The unique identifier string for the role.
