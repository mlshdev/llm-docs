> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvfpartrenderparameters](https://developer.apple.com/documentation/hvf/hvfpartrenderparameters)

# HVFPartRenderParameters

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A union type describing associated data values for cases of `HVFPartRenderInstruction`.

## Declaration

```objectivec
typedef union HVFPartRenderParameters { ... } HVFPartRenderParameters;
```

## Topics

### Instance Properties

- [addCubic](hvfpartrenderparameters/addcubic.md): Data associated with the `HVFPartRenderInstructionAddCubic` instruction.
- [addPoint](hvfpartrenderparameters/addpoint.md): Data associated with the `HVFPartRenderInstructionAddPoint` and `HVFPartRenderInstructionAddLine` instructions.
- [addQuad](hvfpartrenderparameters/addquad.md): Data associated with the `HVFPartRenderInstructionAddQuad` instruction.
- [beginPart](hvfpartrenderparameters/beginpart.md): Data associated with the `HVFPartRenderInstructionBeginPart` instruction.
- [endPart](hvfpartrenderparameters/endpart.md): Data associated with the `HVFPartRenderInstructionEndPart` instruction.
- [partInfo](hvfpartrenderparameters/partinfo.md): Data associated with the `HVFPartRenderInstructionBeginPart` and `HVFPartRenderInstructionEndPart` instructions.
- [point](hvfpartrenderparameters/point.md): Data associated with the `HVFPartRenderInstructionAddPoint` and `HVFPartRenderInstructionAddLine` instructions.
