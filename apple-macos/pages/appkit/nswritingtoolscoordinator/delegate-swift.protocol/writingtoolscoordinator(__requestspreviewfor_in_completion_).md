> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestspreviewfor:in:completion:)](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestspreviewfor:in:completion:))

# writingToolsCoordinator(\_:requestsPreviewFor:in:completion:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Asks the delegate for a preview image and layout information for the specified text.

## Declaration

```swift
func writingToolsCoordinator(_ writingToolsCoordinator: NSWritingToolsCoordinator, requestsPreviewFor rect: NSRect, in context: NSWritingToolsCoordinator.Context, completion: @escaping @Sendable (NSTextPreview?) -> Void)
```

```swift
func writingToolsCoordinator(_ writingToolsCoordinator: NSWritingToolsCoordinator, previewFor rect: NSRect, context: NSWritingToolsCoordinator.Context) async -> NSTextPreview?
```

## Parameters

- `writingToolsCoordinator`: The coordinator object notifying you that animations are about to begin.
- `rect`: The portion of your view that contains the requested text. This rectangle is in the view’s coordinate system.
- `context`: The context object that contains the original text. Use this object to fetch the current text, and to match that text to your underlying text storage.
- `completion`: A completion handler to execute when you are done. The handler has no return value and takes an [NSTextPreview](../../nstextpreview.md) object as a parameter. You must call this handler at some point during your implementation.

<a id="discussion"></a>

## Discussion

During an interactive evaluation of your view’s text, Writing Tools creates different animations to provide feedback on what’s happening. As part of the preparation for those animations, Writing Tools asks you to provide a preview of the affected content in your view. Writing Tools uses this preview to build and execute the animations in the view stored in the [effectContainerView](../effectcontainerview.md) property of the coordinator object.

To build a preview of your content in macOS, render the requested portion of your view into an image with a transparent background and use that image to create your [NSTextPreview](../../nstextpreview.md) object directly. Set the [presentationFrame](../../nstextpreview/presentationframe.md) property to the specified rectangle. Set the [candidateRects](../../nstextpreview/candidaterects.md) property to the selection rectangles for the associated text, which you get from your view’s layout manager. Writing Tools uses this information to place your image directly above the text in your view.

For a single animation type, the system calls the [writingToolsCoordinator(\_:prepareFor:for:in:completion:)](writingtoolscoordinator%28__preparefor_for_in_completion_%29.md) method, followed sequentially by this method and then the [writingToolsCoordinator(\_:finish:for:in:completion:)](writingtoolscoordinator%28__finish_for_in_completion_%29.md) method. Each method executes asynchronously, but the system calls the next method in the sequence only after you call the completion handler of the previous method. However, multiple animations can run simultaneously, so check the `textAnimation` parameter to differentiate sequences.

## See Also

### Animating inline text changes

- [writingToolsCoordinator(\_:requestsPreviewFor:of:in:completion:)](writingtoolscoordinator%28__requestspreviewfor_of_in_completion_%29.md): Asks the delegate for a preview image and layout information for the specified text.
- [writingToolsCoordinator(\_:prepareFor:for:in:completion:)](writingtoolscoordinator%28__preparefor_for_in_completion_%29.md): Prepare for animations for the content that Writing Tools is evaluating.
- [writingToolsCoordinator(\_:finish:for:in:completion:)](writingtoolscoordinator%28__finish_for_in_completion_%29.md): Asks the delegate to clean up any state related to the specified Writing Tools animation.

# writingToolsCoordinator:requestsPreviewForRect:inContext:completion: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Asks the delegate for a preview image and layout information for the specified text.

## Declaration

```objectivec
- (void) writingToolsCoordinator:(NSWritingToolsCoordinator *) writingToolsCoordinator requestsPreviewForRect:(NSRect) rect inContext:(NSWritingToolsCoordinatorContext *) context completion:(void (^)(NSTextPreview *textPreview)) completion;
```

## Parameters

- `writingToolsCoordinator`: The coordinator object notifying you that animations are about to begin.
- `rect`: The portion of your view that contains the requested text. This rectangle is in the view’s coordinate system.
- `context`: The context object that contains the original text. Use this object to fetch the current text, and to match that text to your underlying text storage.
- `completion`: A completion handler to execute when you are done. The handler has no return value and takes an [NSTextPreview](../../nstextpreview.md) object as a parameter. You must call this handler at some point during your implementation.

<a id="discussion"></a>

## Discussion

During an interactive evaluation of your view’s text, Writing Tools creates different animations to provide feedback on what’s happening. As part of the preparation for those animations, Writing Tools asks you to provide a preview of the affected content in your view. Writing Tools uses this preview to build and execute the animations in the view stored in the [effectContainerView](../effectcontainerview.md) property of the coordinator object.

To build a preview of your content in macOS, render the requested portion of your view into an image with a transparent background and use that image to create your [NSTextPreview](../../nstextpreview.md) object directly. Set the [presentationFrame](../../nstextpreview/presentationframe.md) property to the specified rectangle. Set the [candidateRects](../../nstextpreview/candidaterects.md) property to the selection rectangles for the associated text, which you get from your view’s layout manager. Writing Tools uses this information to place your image directly above the text in your view.

For a single animation type, the system calls the [writingToolsCoordinator:prepareForTextAnimation:forRange:inContext:completion:](writingtoolscoordinator%28__preparefor_for_in_completion_%29.md) method, followed sequentially by this method and then the [writingToolsCoordinator:finishTextAnimation:forRange:inContext:completion:](writingtoolscoordinator%28__finish_for_in_completion_%29.md) method. Each method executes asynchronously, but the system calls the next method in the sequence only after you call the completion handler of the previous method. However, multiple animations can run simultaneously, so check the `textAnimation` parameter to differentiate sequences.

## See Also

### Animating inline text changes

- [writingToolsCoordinator:requestsPreviewForTextAnimation:ofRange:inContext:completion:](writingtoolscoordinator%28__requestspreviewfor_of_in_completion_%29.md): Asks the delegate for a preview image and layout information for the specified text.
- [writingToolsCoordinator:prepareForTextAnimation:forRange:inContext:completion:](writingtoolscoordinator%28__preparefor_for_in_completion_%29.md): Prepare for animations for the content that Writing Tools is evaluating.
- [writingToolsCoordinator:finishTextAnimation:forRange:inContext:completion:](writingtoolscoordinator%28__finish_for_in_completion_%29.md): Asks the delegate to clean up any state related to the specified Writing Tools animation.
