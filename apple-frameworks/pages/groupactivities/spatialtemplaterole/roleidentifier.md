> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplaterole/roleidentifier](https://developer.apple.com/documentation/groupactivities/spatialtemplaterole/roleidentifier)

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
