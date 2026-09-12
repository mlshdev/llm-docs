> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/partrenderer/instruction](https://developer.apple.com/documentation/hvf/partrenderer/instruction)

# PartRenderer.Instruction

**Framework:** hvf  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The set of instructions passed to a render context

## Declaration

```swift
enum Instruction
```

## Topics

### Enumeration Cases

- [PartRenderer.Instruction.addCubic(cp1:cp2:on:)](instruction/addcubic%28cp1_cp2_on_%29.md)
- [PartRenderer.Instruction.addLine(\_:)](instruction/addline%28__%29.md)
- [PartRenderer.Instruction.addPoint(\_:)](instruction/addpoint%28__%29.md)
- [PartRenderer.Instruction.addQuad(off:on:)](instruction/addquad%28off_on_%29.md)
- [PartRenderer.Instruction.beginPart(id:name:)](instruction/beginpart%28id_name_%29.md): The name value is for client use and is not set by the loader or scaler
- [PartRenderer.Instruction.beginPath](instruction/beginpath.md)
- [PartRenderer.Instruction.closePath](instruction/closepath.md)
- [PartRenderer.Instruction.endPart(id:name:)](instruction/endpart%28id_name_%29.md): The name value is for client use and is not set by the loader or scaler
- [PartRenderer.Instruction.endPath](instruction/endpath.md)
- [PartRenderer.Instruction.stop](instruction/stop.md)
