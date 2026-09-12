> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestsdecorationcontainerviewfor:in:completion:)](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestsdecorationcontainerviewfor:in:completion:))

# writingToolsCoordinator(\_:requestsDecorationContainerViewFor:in:completion:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Asks the delegate to provide a decoration view for the specified range of text.

## Declaration

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: NSWritingToolsCoordinator, requestsDecorationContainerViewFor range: NSRange, in context: NSWritingToolsCoordinator.Context, completion: @escaping @Sendable (NSView) -> Void)
```

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: NSWritingToolsCoordinator, decorationContainerViewFor range: NSRange, in context: NSWritingToolsCoordinator.Context) async -> NSView
```

## Parameters

- `writingToolsCoordinator`: The coordinator object requesting information from your custom view.
- `range`: The range of text to consider in the specified `context` object. The location value of this range is relative to the beginning of the text in your context object, and it’s your responsibility to match that location to the correct location in your text storage. If you initialized the context object with the entire contents of your view’s text storage, you can use `range` as-is to access that text storage. However, if you initialized the context object with only a portion of your view’s text, add the starting location of your context object’s text to this value to get the correct range for that text storage.
- `context`: The context object that contains the text to consider. Use this object to locate the appropriate text storage object for your view.
- `completion`: A completion handler to execute when you are done. The handler has no return value and takes an [NSView](../../nsview.md) object as a parameter. You must call this handler at some point during your implementation.

<a id="discussion"></a>

## Discussion

If your view uses multiple [NSTextContainer](../../nstextcontainer.md) objects to draw text in different regions, use this method to provide Writing Tools with the view to use for the specified range of text. After calling your delegate’s [writingToolsCoordinator(\_:requestsSingleContainerSubrangesOf:in:completion:)](writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md) method, Writing Tools calls this method for each subrange of text you provided. Find or provide a view situated visibly below the specified text in your text view. It’s also satisfactory to provide a view that’s visually in front of the text. Writing Tools uses the provided view to host any proofreading marks for the specified range of text.

If your view has only one text container, use the coordinator’s [decorationContainerView](../decorationcontainerview.md) property to specify the view to use for proofreading marks.

## See Also

### Providing animation container views dynamically

- [writingToolsCoordinator(\_:requestsSingleContainerSubrangesOf:in:completion:)](writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md): Asks the delegate to divide the specified range of text into the separate containers that render that text.

# writingToolsCoordinator:requestsDecorationContainerViewForRange:inContext:completion: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Asks the delegate to provide a decoration view for the specified range of text.

## Declaration

```objectivec
- (void) writingToolsCoordinator:(NSWritingToolsCoordinator *) writingToolsCoordinator requestsDecorationContainerViewForRange:(NSRange) range inContext:(NSWritingToolsCoordinatorContext *) context completion:(void (^)(NSView *)) completion;
```

## Parameters

- `writingToolsCoordinator`: The coordinator object requesting information from your custom view.
- `range`: The range of text to consider in the specified `context` object. The location value of this range is relative to the beginning of the text in your context object, and it’s your responsibility to match that location to the correct location in your text storage. If you initialized the context object with the entire contents of your view’s text storage, you can use `range` as-is to access that text storage. However, if you initialized the context object with only a portion of your view’s text, add the starting location of your context object’s text to this value to get the correct range for that text storage.
- `context`: The context object that contains the text to consider. Use this object to locate the appropriate text storage object for your view.
- `completion`: A completion handler to execute when you are done. The handler has no return value and takes an [NSView](../../nsview.md) object as a parameter. You must call this handler at some point during your implementation.

<a id="discussion"></a>

## Discussion

If your view uses multiple [NSTextContainer](../../nstextcontainer.md) objects to draw text in different regions, use this method to provide Writing Tools with the view to use for the specified range of text. After calling your delegate’s [writingToolsCoordinator:requestsSingleContainerSubrangesOfRange:inContext:completion:](writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md) method, Writing Tools calls this method for each subrange of text you provided. Find or provide a view situated visibly below the specified text in your text view. It’s also satisfactory to provide a view that’s visually in front of the text. Writing Tools uses the provided view to host any proofreading marks for the specified range of text.

If your view has only one text container, use the coordinator’s [decorationContainerView](../decorationcontainerview.md) property to specify the view to use for proofreading marks.

## See Also

### Providing animation container views dynamically

- [writingToolsCoordinator:requestsSingleContainerSubrangesOfRange:inContext:completion:](writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md): Asks the delegate to divide the specified range of text into the separate containers that render that text.
