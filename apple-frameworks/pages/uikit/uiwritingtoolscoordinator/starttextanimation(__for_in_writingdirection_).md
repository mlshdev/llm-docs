> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/starttextanimation(_:for:in:writingdirection:)](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/starttextanimation(_:for:in:writingdirection:))

# startTextAnimation(\_:for:in:writingDirection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Used to support the presentation of grammar issues in text. When an issue is first identified and indicated, call this to have it animated.

## Declaration

```swift
func startTextAnimation(_ textAnimation: UIWritingToolsCoordinator.TextAnimation, for range: NSRange, in context: UIWritingToolsCoordinator.Context, writingDirection: NSWritingDirection) -> UUID?
```

<a id="discussion"></a>

## Discussion

The context should be large enough to contain the range being indicated, and the range should be the range of the issue within the context. Returns a UUID that can be used to cancel the animation, or nil if the animation cannot be performed. Calls delegate methods to prepare for the animation (which should hide the text), request previews (with and without underlines), and finish the animation (which should show the text).

# startTextAnimation:forRange:inContext:writingDirection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Used to support the presentation of grammar issues in text. When an issue is first identified and indicated, call this to have it animated.

## Declaration

```objectivec
- (NSUUID *) startTextAnimation:(UIWritingToolsCoordinatorTextAnimation) textAnimation forRange:(NSRange) range inContext:(UIWritingToolsCoordinatorContext *) context writingDirection:(NSWritingDirection) writingDirection;
```

<a id="discussion"></a>

## Discussion

The context should be large enough to contain the range being indicated, and the range should be the range of the issue within the context. Returns a UUID that can be used to cancel the animation, or nil if the animation cannot be performed. Calls delegate methods to prepare for the animation (which should hide the text), request previews (with and without underlines), and finish the animation (which should show the text).
