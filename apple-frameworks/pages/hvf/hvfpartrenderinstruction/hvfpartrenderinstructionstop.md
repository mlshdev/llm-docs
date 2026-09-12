> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvfpartrenderinstruction/hvfpartrenderinstructionstop](https://developer.apple.com/documentation/hvf/hvfpartrenderinstruction/hvfpartrenderinstructionstop)

# HVFPartRenderInstructionStop

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Instruction noting that rendering is ended.

## Declaration

```objectivec
HVFPartRenderInstructionStop
```

<a id="discussion"></a>

## Discussion

The scaler does not currently issue this instruction. You can pass it to your render context directly to signal it to take any closing actions.
