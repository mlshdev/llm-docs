> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparseopaquepreconditioner_double/type

# type (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The preconditioner type.

## Declaration

```swift
var type: SparsePreconditioner_t
```

## See Also

### Inspecting Preconditioner Properties

- [apply](apply.md): A function that calculates *Y = PX*, where *P* is the preconditioner.
- [mem](mem.md): The unaltered memory pointer that passes as the first parameter of the apply function.

# type (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The preconditioner type.

## Declaration

```objectivec
SparsePreconditioner_t type;
```

## See Also

### Inspecting Preconditioner Properties

- [apply](apply.md): A function that calculates *Y = PX*, where *P* is the preconditioner.
- [mem](mem.md): The unaltered memory pointer that passes as the first parameter of the apply function.
