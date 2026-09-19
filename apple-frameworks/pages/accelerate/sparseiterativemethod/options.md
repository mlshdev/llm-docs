> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparseiterativemethod/options

# options (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The options for the method.

## Declaration

```swift
var options: SparseIterativeMethod.__Unnamed_union_options
```

## See Also

### Instance Properties

- [method](method.md): The iterative method this structure represents.

# options (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The options for the method.

## Declaration

```objectivec
union { ... } options;
```

## Topics

### Instance Properties

- [base](options/base.md)
- [cg](options/cg.md): Conjugate Gradient Options.
- [gmres](options/gmres.md): Right-preconditioned (F/DQ)GMRES Parameters Options.
- [lsmr](options/lsmr.md): LSMR is MINRES specialised for solving least squares.
- [padding](options/padding.md)

## See Also

### Instance Properties

- [method](method.md): The iterative method this structure represents.
