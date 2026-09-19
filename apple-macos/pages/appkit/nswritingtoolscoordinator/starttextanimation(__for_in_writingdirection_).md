> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/starttextanimation(_:for:in:writingdirection:)

# startTextAnimation(\_:for:in:writingDirection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```swift
func startTextAnimation(_ textAnimation: NSWritingToolsCoordinator.TextAnimation, for range: NSRange, in context: NSWritingToolsCoordinator.Context, writingDirection: NSWritingDirection) -> UUID?
```

# startTextAnimation:forRange:inContext:writingDirection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```objectivec
- (NSUUID *) startTextAnimation:(NSWritingToolsCoordinatorTextAnimation) textAnimation forRange:(NSRange) range inContext:(NSWritingToolsCoordinatorContext *) context writingDirection:(NSWritingDirection) writingDirection;
```
