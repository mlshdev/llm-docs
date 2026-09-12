> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestsdecorationcontainerviewfor:in:completion:)](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestsdecorationcontainerviewfor:in:completion:))

# writingToolsCoordinator(\_:requestsDecorationContainerViewFor:in:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Asks the delegate to provide a decoration view for the specified range of text.

## Declaration

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: UIWritingToolsCoordinator, requestsDecorationContainerViewFor range: NSRange, in context: UIWritingToolsCoordinator.Context, completion: @escaping @Sendable (UIView) -> Void)
```

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: UIWritingToolsCoordinator, decorationContainerViewFor range: NSRange, in context: UIWritingToolsCoordinator.Context) async -> UIView
```

## Parameters

- `writingToolsCoordinator`: The coordinator object requesting information from your custom view.
- `range`: The range of text to consider in the specified `context` object. The location value of this range is relative to the beginning of the text in your context object, and it’s your responsibility to match that location to the correct location in your text storage. If you initialized the context object with the entire contents of your view’s text storage, you can use `range` as-is to access that text storage. However, if you initialized the context object with only a portion of your view’s text, add the starting location of your context object’s text to this value to get the correct range for that text storage.
- `context`: The context object that contains the text to consider. Use this object to locate the appropriate text storage object for your view.
- `completion`: A completion handler to execute when you are done. The handler has no return value and takes a [UIView](../../uiview.md) object as a parameter. You must call this handler at some point during your implementation.

<a id="discussion"></a>

## Discussion

If your view uses multiple [NSTextContainer](../../nstextcontainer.md) objects to draw text in different regions, use this method to provide Writing Tools with the view to use for the specified range of text. After calling your delegate’s [writingToolsCoordinator(\_:requestsSingleContainerSubrangesOf:in:completion:)](writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md) method, Writing Tools calls this method for each subrange of text you provided. Find or provide a view situated visibly below the specified text in your text view. It’s also satisfactory to provide a view that’s visually in front of the text. Writing Tools uses the provided view to host any proofreading marks for the specified range of text.

If your view has only one text container, use the coordinator’s [decorationContainerView](../decorationcontainerview.md) property to specify the view to use for proofreading marks.

## See Also

### Providing animation container views dynamically

- [writingToolsCoordinator(\_:requestsSingleContainerSubrangesOf:in:completion:)](writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md): Asks the delegate to divide the specified range of text into the separate containers that render that text.

# writingToolsCoordinator:requestsDecorationContainerViewForRange:inContext:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Asks the delegate to provide a decoration view for the specified range of text.

## Declaration

```objectivec
- (void) writingToolsCoordinator:(UIWritingToolsCoordinator *) writingToolsCoordinator requestsDecorationContainerViewForRange:(NSRange) range inContext:(UIWritingToolsCoordinatorContext *) context completion:(void (^)(UIView *)) completion;
```

## Parameters

- `writingToolsCoordinator`: The coordinator object requesting information from your custom view.
- `range`: The range of text to consider in the specified `context` object. The location value of this range is relative to the beginning of the text in your context object, and it’s your responsibility to match that location to the correct location in your text storage. If you initialized the context object with the entire contents of your view’s text storage, you can use `range` as-is to access that text storage. However, if you initialized the context object with only a portion of your view’s text, add the starting location of your context object’s text to this value to get the correct range for that text storage.
- `context`: The context object that contains the text to consider. Use this object to locate the appropriate text storage object for your view.
- `completion`: A completion handler to execute when you are done. The handler has no return value and takes a [UIView](../../uiview.md) object as a parameter. You must call this handler at some point during your implementation.

<a id="discussion"></a>

## Discussion

If your view uses multiple [NSTextContainer](../../nstextcontainer.md) objects to draw text in different regions, use this method to provide Writing Tools with the view to use for the specified range of text. After calling your delegate’s [writingToolsCoordinator:requestsSingleContainerSubrangesOfRange:inContext:completion:](writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md) method, Writing Tools calls this method for each subrange of text you provided. Find or provide a view situated visibly below the specified text in your text view. It’s also satisfactory to provide a view that’s visually in front of the text. Writing Tools uses the provided view to host any proofreading marks for the specified range of text.

If your view has only one text container, use the coordinator’s [decorationContainerView](../decorationcontainerview.md) property to specify the view to use for proofreading marks.

## See Also

### Providing animation container views dynamically

- [writingToolsCoordinator:requestsSingleContainerSubrangesOfRange:inContext:completion:](writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md): Asks the delegate to divide the specified range of text into the separate containers that render that text.
