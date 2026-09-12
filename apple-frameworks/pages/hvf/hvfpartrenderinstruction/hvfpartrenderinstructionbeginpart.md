> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvfpartrenderinstruction/hvfpartrenderinstructionbeginpart](https://developer.apple.com/documentation/hvf/hvfpartrenderinstruction/hvfpartrenderinstructionbeginpart)

# HVFPartRenderInstructionBeginPart

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Instruction noting that the scaler is beginning to render the specified part.

## Declaration

```objectivec
HVFPartRenderInstructionBeginPart
```

<a id="discussion"></a>

## Discussion

The part may be a glyph or part of a glyph. The callback can return `HVFPartRenderActionSkip` only in response to this instruction.

The `HVFPartRenderParams` union will contain the data for `beginPart`.
