> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewcontroller/traitoverrides-1z1cc

# traitOverrides

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

A mutable container of traits you use to set trait changes for this view controller and its views.

## Declaration

```swift
@MainActor @preconcurrency var traitOverrides: UITraitOverrides { get set }
```

## See Also

### Overriding trait values

- [UITraitOverrides](../uitraitoverrides-swift.struct.md): A mutable container of traits you use to set trait changes for an object and its descendants.
- [updateTraitsIfNeeded()](updatetraitsifneeded%28%29.md): Updates traits immediately for this view controller and its view, including any view controllers and views in this subtree.
