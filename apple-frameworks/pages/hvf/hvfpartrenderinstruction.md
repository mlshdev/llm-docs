> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hvf/hvfpartrenderinstruction

# HVFPartRenderInstruction

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Instruction passed by the scaler to a callback. Some of the instructions have associated data described by the `HVFPartRenderParams` union.

## Declaration

```objectivec
enum HVFPartRenderInstruction : unsigned int;
```

## Topics

### Enumeration Cases

- [HVFPartRenderInstructionAddCubic](hvfpartrenderinstruction/hvfpartrenderinstructionaddcubic.md): Instruction to render a cubic Bezier curve (not currently used).
- [HVFPartRenderInstructionAddLine](hvfpartrenderinstruction/hvfpartrenderinstructionaddline.md): Instruction to render a line from the current location (not currently used).
- [HVFPartRenderInstructionAddPoint](hvfpartrenderinstruction/hvfpartrenderinstructionaddpoint.md): Instruction to move to the specified point.
- [HVFPartRenderInstructionAddQuad](hvfpartrenderinstruction/hvfpartrenderinstructionaddquad.md): Instruction to render a quadratic Bezier curve starting from the current location.
- [HVFPartRenderInstructionBeginPart](hvfpartrenderinstruction/hvfpartrenderinstructionbeginpart.md): Instruction noting that the scaler is beginning to render the specified part.
- [HVFPartRenderInstructionBeginPath](hvfpartrenderinstruction/hvfpartrenderinstructionbeginpath.md): Instruction noting that the scaler is beginning to render a path.
- [HVFPartRenderInstructionClosePath](hvfpartrenderinstruction/hvfpartrenderinstructionclosepath.md): Instruction to close the path currently being rendered.
- [HVFPartRenderInstructionEndPart](hvfpartrenderinstruction/hvfpartrenderinstructionendpart.md): Instruction noting that the scaler is ending the rendering of the specified part.
- [HVFPartRenderInstructionEndPath](hvfpartrenderinstruction/hvfpartrenderinstructionendpath.md): Instruction noting that the scaler is ending the rendering of a path.
- [HVFPartRenderInstructionStop](hvfpartrenderinstruction/hvfpartrenderinstructionstop.md): Instruction noting that rendering is ended.
