> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestssinglecontainersubrangesof:in:completion:)](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestssinglecontainersubrangesof:in:completion:))

# writingToolsCoordinator(\_:requestsSingleContainerSubrangesOf:in:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Asks the delegate to divide the specified range of text into the separate containers that render that text.

## Declaration

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: UIWritingToolsCoordinator, requestsSingleContainerSubrangesOf range: NSRange, in context: UIWritingToolsCoordinator.Context, completion: @escaping @Sendable ([NSValue]) -> Void)
```

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: UIWritingToolsCoordinator, singleContainerSubrangesOf range: NSRange, in context: UIWritingToolsCoordinator.Context) async -> [NSValue]
```

## Parameters

- `writingToolsCoordinator`: The coordinator object requesting information from your custom view.
- `range`: The range of text to consider in the specified `context` object. The location value of this range is relative to the beginning of the text in your context object, and it’s your responsibility to match that location to the correct location in your text storage. If you initialized the context object with the entire contents of your view’s text storage, you can use `range` as-is to access that text storage. However, if you initialized the context object with only a portion of your view’s text, add the starting location of your context object’s text to this value to get the correct range for that text storage.
- `context`: The context object that contains the text to consider. Use this object to locate the appropriate text storage object for your view.
- `completion`: A completion handler to execute when you are done. The handler has no return value and takes an array of [NSValue](../../../foundation/nsvalue.md) types, each of which contains an [NSRange](../../../foundation/nsrange-c.struct.md). The union of the ranges you pass to this handler must equal all of the text in `range`. The order of the ranges in the array must be sequential, with each new range’s starting location coming after the previous one. There must also not be any gaps or overlap between ranges. You must call this handler at some point during your implementation.

<a id="discussion"></a>

## Discussion

If your view uses multiple [NSTextContainer](../../nstextcontainer.md) objects to draw text in different regions, use this method to tell Writing Tools about the containers that display the specified text. In your implementation, subdivide `range` to create one new range for each portion of text that resides in a different container object. For example, if the text in `range` is split between two containers, provide two new [NSRange](../../../foundation/nsrange-c.struct.md) types that reflect the portion of the total text in each container. If `range` resides completely within one container, call the completion handler with `range` as the only value in the array.

When configuring animations for your view, Writing Tools asks your delegate to provide separate previews for each of your view’s container object. Specifically, it calls your delegate’s `writingToolsCoordinator(_:requestsPreviewFor:range:context:completion:)` method separately for each range of text you return in the completion handler. Your implementation of that method must create a preview suitable for animating the content from the underlying text container.

## See Also

### Providing animation container views dynamically

- [writingToolsCoordinator(\_:requestsDecorationContainerViewFor:in:completion:)](writingtoolscoordinator%28__requestsdecorationcontainerviewfor_in_completion_%29.md): Asks the delegate to provide a decoration view for the specified range of text.

# writingToolsCoordinator:requestsSingleContainerSubrangesOfRange:inContext:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Asks the delegate to divide the specified range of text into the separate containers that render that text.

## Declaration

```objectivec
- (void) writingToolsCoordinator:(UIWritingToolsCoordinator *) writingToolsCoordinator requestsSingleContainerSubrangesOfRange:(NSRange) range inContext:(UIWritingToolsCoordinatorContext *) context completion:(void (^)(NSArray<NSValue *> *)) completion;
```

## Parameters

- `writingToolsCoordinator`: The coordinator object requesting information from your custom view.
- `range`: The range of text to consider in the specified `context` object. The location value of this range is relative to the beginning of the text in your context object, and it’s your responsibility to match that location to the correct location in your text storage. If you initialized the context object with the entire contents of your view’s text storage, you can use `range` as-is to access that text storage. However, if you initialized the context object with only a portion of your view’s text, add the starting location of your context object’s text to this value to get the correct range for that text storage.
- `context`: The context object that contains the text to consider. Use this object to locate the appropriate text storage object for your view.
- `completion`: A completion handler to execute when you are done. The handler has no return value and takes an array of [NSValue](../../../foundation/nsvalue.md) types, each of which contains an [NSRange](../../../foundation/nsrange-c.struct.md). The union of the ranges you pass to this handler must equal all of the text in `range`. The order of the ranges in the array must be sequential, with each new range’s starting location coming after the previous one. There must also not be any gaps or overlap between ranges. You must call this handler at some point during your implementation.

<a id="discussion"></a>

## Discussion

If your view uses multiple [NSTextContainer](../../nstextcontainer.md) objects to draw text in different regions, use this method to tell Writing Tools about the containers that display the specified text. In your implementation, subdivide `range` to create one new range for each portion of text that resides in a different container object. For example, if the text in `range` is split between two containers, provide two new [NSRange](../../../foundation/nsrange-c.struct.md) types that reflect the portion of the total text in each container. If `range` resides completely within one container, call the completion handler with `range` as the only value in the array.

When configuring animations for your view, Writing Tools asks your delegate to provide separate previews for each of your view’s container object. Specifically, it calls your delegate’s `writingToolsCoordinator(_:requestsPreviewFor:range:context:completion:)` method separately for each range of text you return in the completion handler. Your implementation of that method must create a preview suitable for animating the content from the underlying text container.

## See Also

### Providing animation container views dynamically

- [writingToolsCoordinator:requestsDecorationContainerViewForRange:inContext:completion:](writingtoolscoordinator%28__requestsdecorationcontainerviewfor_in_completion_%29.md): Asks the delegate to provide a decoration view for the specified range of text.
