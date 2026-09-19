> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/specializationoptions/init(preferredcomputeunitkind:)

# init(preferredComputeUnitKind:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates options with a preferred compute unit kind.

## Declaration

```swift
init(preferredComputeUnitKind: ComputeUnitKind)
```

## Parameters

- `preferredComputeUnitKind`: The compute unit kind the specialized model should prefer.

## Mentioned In

- [Managing model specialization and caching](../managing-model-specialization-and-caching.md)

<a id="discussion"></a>

## Discussion

The specialization process maximizes use of the specified compute unit kind, falling back to other allowed compute units for incompatible operations.
