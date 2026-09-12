> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvfpartrenderaction](https://developer.apple.com/documentation/hvf/hvfpartrenderaction)

# HVFPartRenderAction

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Actions that a render context may return to the scaler.

## Declaration

```objectivec
enum HVFPartRenderAction : unsigned int;
```

## Topics

### Enumeration Cases

- [HVFPartRenderActionContinue](hvfpartrenderaction/hvfpartrenderactioncontinue.md): Instruct the scaler to continue rendering.
- [HVFPartRenderActionSkip](hvfpartrenderaction/hvfpartrenderactionskip.md): Instruct the scaler to skip rendering this part.
- [HVFPartRenderActionStop](hvfpartrenderaction/hvfpartrenderactionstop.md): Instruct the scaler to stop rendering.
