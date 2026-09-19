> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/componentset/subscript(_:)-47rhg

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Gets or sets the component with a specific dynamically supplied type.

## Declaration

```swift
@MainActor @preconcurrency subscript(componentType: any Component.Type) -> (any Component)? { get set }
```

## See Also

### Accessing members

- [subscript(\_:)](subscript%28__%29-5wdsf.md): Gets or sets the component of the specified type.
