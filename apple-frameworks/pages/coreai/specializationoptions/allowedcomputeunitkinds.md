> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/specializationoptions/allowedcomputeunitkinds](https://developer.apple.com/documentation/coreai/specializationoptions/allowedcomputeunitkinds)

# allowedComputeUnitKinds

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The set of compute units the specialized model can use.

## Declaration

```swift
var allowedComputeUnitKinds: Set<ComputeUnitKind> { get }
```

<a id="discussion"></a>

## Discussion

The model may use all or any subset of the kinds in this set during inference.

## See Also

### Configuring compute units

- [preferredComputeUnitKind](preferredcomputeunitkind.md): The preferred compute unit kind, if one was specified.
