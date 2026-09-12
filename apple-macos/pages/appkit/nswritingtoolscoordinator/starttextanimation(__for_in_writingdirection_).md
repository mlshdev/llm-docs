> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/starttextanimation(_:for:in:writingdirection:)](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/starttextanimation(_:for:in:writingdirection:))

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
