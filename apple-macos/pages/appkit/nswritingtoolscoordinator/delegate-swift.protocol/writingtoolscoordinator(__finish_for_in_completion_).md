> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:finish:for:in:completion:)](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:finish:for:in:completion:))

# writingToolsCoordinator(\_:finish:for:in:completion:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Asks the delegate to clean up any state related to the specified Writing Tools animation.

## Declaration

```swift
func writingToolsCoordinator(_ writingToolsCoordinator: NSWritingToolsCoordinator, finish textAnimation: NSWritingToolsCoordinator.TextAnimation, for range: NSRange, in context: NSWritingToolsCoordinator.Context, completion: @escaping @Sendable () -> Void)
```

```swift
func writingToolsCoordinator(_ writingToolsCoordinator: NSWritingToolsCoordinator, finish textAnimation: NSWritingToolsCoordinator.TextAnimation, for range: NSRange, in context: NSWritingToolsCoordinator.Context) async
```

## Parameters

- `writingToolsCoordinator`: The coordinator object notifying you that animations are about to begin.
- `textAnimation`: The type of animation Writing Tools finished.
- `range`: The range of text that finished animating. This range is relative to the text in your context object, and it’s your responsibility to match that location to the correct location in your text storage. If you initialized the context object with the entire contents of your view’s text storage, you can use `range` as-is to access that text storage. However, if you initialized the context object with only a portion of your view’s text, add the starting location of your context object’s text to this value to get the correct range for that text storage.
- `context`: The context object that contains the original text.
- `completion`: A completion handler to execute when you are done. The handler has no return value and takes no parameters. You must call this handler at some point during your implementation.

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

Use this method to clean up any data structures you created to support the specified type of Writing Tools animation. You can also use this method to restore the visibility of any text you hid previously. When you finish your cleanup work, call the completion handler to notify Writing Tools.

Writing Tools calls this method only after previous calls to the [writingToolsCoordinator(\_:prepareFor:for:in:completion:)](writingtoolscoordinator%28__preparefor_for_in_completion_%29.md) and [writingToolsCoordinator(\_:requestsPreviewFor:of:in:completion:)](writingtoolscoordinator%28__requestspreviewfor_of_in_completion_%29.md) methods for the same animation type. However, Writing Tools can interleave calls to this method with calls to prepare an animation of a different type. In your implementation of this method, make sure the actions you take don’t interfere with other in-flight animations.

## See Also

### Animating inline text changes

- [writingToolsCoordinator(\_:requestsPreviewFor:of:in:completion:)](writingtoolscoordinator%28__requestspreviewfor_of_in_completion_%29.md): Asks the delegate for a preview image and layout information for the specified text.
- [writingToolsCoordinator(\_:requestsPreviewFor:in:completion:)](writingtoolscoordinator%28__requestspreviewfor_in_completion_%29.md): Asks the delegate for a preview image and layout information for the specified text.
- [writingToolsCoordinator(\_:prepareFor:for:in:completion:)](writingtoolscoordinator%28__preparefor_for_in_completion_%29.md): Prepare for animations for the content that Writing Tools is evaluating.

# writingToolsCoordinator:finishTextAnimation:forRange:inContext:completion: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Asks the delegate to clean up any state related to the specified Writing Tools animation.

## Declaration

```objectivec
- (void) writingToolsCoordinator:(NSWritingToolsCoordinator *) writingToolsCoordinator finishTextAnimation:(NSWritingToolsCoordinatorTextAnimation) textAnimation forRange:(NSRange) range inContext:(NSWritingToolsCoordinatorContext *) context completion:(void (^)()) completion;
```

## Parameters

- `writingToolsCoordinator`: The coordinator object notifying you that animations are about to begin.
- `textAnimation`: The type of animation Writing Tools finished.
- `range`: The range of text that finished animating. This range is relative to the text in your context object, and it’s your responsibility to match that location to the correct location in your text storage. If you initialized the context object with the entire contents of your view’s text storage, you can use `range` as-is to access that text storage. However, if you initialized the context object with only a portion of your view’s text, add the starting location of your context object’s text to this value to get the correct range for that text storage.
- `context`: The context object that contains the original text.
- `completion`: A completion handler to execute when you are done. The handler has no return value and takes no parameters. You must call this handler at some point during your implementation.

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

Use this method to clean up any data structures you created to support the specified type of Writing Tools animation. You can also use this method to restore the visibility of any text you hid previously. When you finish your cleanup work, call the completion handler to notify Writing Tools.

Writing Tools calls this method only after previous calls to the [writingToolsCoordinator:prepareForTextAnimation:forRange:inContext:completion:](writingtoolscoordinator%28__preparefor_for_in_completion_%29.md) and [writingToolsCoordinator:requestsPreviewForTextAnimation:ofRange:inContext:completion:](writingtoolscoordinator%28__requestspreviewfor_of_in_completion_%29.md) methods for the same animation type. However, Writing Tools can interleave calls to this method with calls to prepare an animation of a different type. In your implementation of this method, make sure the actions you take don’t interfere with other in-flight animations.

## See Also

### Animating inline text changes

- [writingToolsCoordinator:requestsPreviewForTextAnimation:ofRange:inContext:completion:](writingtoolscoordinator%28__requestspreviewfor_of_in_completion_%29.md): Asks the delegate for a preview image and layout information for the specified text.
- [writingToolsCoordinator:requestsPreviewForRect:inContext:completion:](writingtoolscoordinator%28__requestspreviewfor_in_completion_%29.md): Asks the delegate for a preview image and layout information for the specified text.
- [writingToolsCoordinator:prepareForTextAnimation:forRange:inContext:completion:](writingtoolscoordinator%28__preparefor_for_in_completion_%29.md): Prepare for animations for the content that Writing Tools is evaluating.
