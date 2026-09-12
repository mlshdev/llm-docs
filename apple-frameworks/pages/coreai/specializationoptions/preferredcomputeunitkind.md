> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/specializationoptions/preferredcomputeunitkind](https://developer.apple.com/documentation/coreai/specializationoptions/preferredcomputeunitkind)

# preferredComputeUnitKind

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The preferred compute unit kind, if one was specified.

## Declaration

```swift
var preferredComputeUnitKind: ComputeUnitKind? { get }
```

<a id="discussion"></a>

## Discussion

When set, the specialization process maximizes use of this compute unit kind. Fallback to other kinds in [allowedComputeUnitKinds](allowedcomputeunitkinds.md) may still occur for operations or operation patterns that are incompatible with the preferred kind. Operation patterns refer to groups of operations that are fused or transformed together during specialization; an operation that is individually compatible with the preferred unit kind may be part of a fused pattern that is not.

## See Also

### Configuring compute units

- [allowedComputeUnitKinds](allowedcomputeunitkinds.md): The set of compute units the specialized model can use.
