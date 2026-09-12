> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestsboundingbezierpathsfor:in:completion:)](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestsboundingbezierpathsfor:in:completion:))

# writingToolsCoordinator(\_:requestsBoundingBezierPathsFor:in:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Asks the delegate to provide the bounding paths for the specified text in your view.

## Declaration

```swift
func writingToolsCoordinator(_ writingToolsCoordinator: UIWritingToolsCoordinator, requestsBoundingBezierPathsFor range: NSRange, in context: UIWritingToolsCoordinator.Context, completion: @escaping @Sendable ([UIBezierPath]) -> Void)
```

```swift
func writingToolsCoordinator(_ writingToolsCoordinator: UIWritingToolsCoordinator, boundingBezierPathsFor range: NSRange, context: UIWritingToolsCoordinator.Context) async -> [UIBezierPath]
```

## Parameters

- `writingToolsCoordinator`: The coordinator object requesting information from your custom view.
- `range`: The range of text to evaluate. This range is relative to the text in your context object, and it’s your responsibility to match that location to the correct location in your text storage. If you initialized the context object with the entire contents of your view’s text storage, you can use `range` as-is to access that text storage. However, if you initialized the context object with only a portion of your view’s text, add the starting location of your context object’s text to this value to get the correct range for that text storage.
- `context`: The context object with the target text. Use this object to find the text in your view’s text storage.
- `completion`: A handler to execute with the required information. The handler has no return value and takes an array of Bezier paths as a parameter. You must call this handler at some point during your method’s implementation.

<a id="discussion"></a>

## Discussion

After applying proofreading marks to your view’s text, Writing Tools lets the person accept or reject individual suggestions. To facilitate interactions, the coordinator asks your delegate to provide one or more Bezier paths that surround those proofreading suggestions. For each distinct range of text with a suggestion, it calls this method to get the Bezier paths that surround the corresponding text.

After you determine the location of the specified range of text in your view’s text storage, call the [enumerateTextSegments(in:type:options:using:)](https://developer.apple.com/documentation/appkit/nstextlayoutmanager/enumeratetextsegments%28in:type:options:using:%29) method of your view’s [NSTextLayoutManager](../../nstextlayoutmanager.md) to compute the selection rectangles for that text. That method finds the text segments that contain the text and returns the frame rectangle for each one. Create a Bezier path for each rectangle, and convert the coordinates of each path to the coordinate space of the view in your coordinator’s [decorationContainerView](../decorationcontainerview.md) property. Pass the resulting paths to the completion handler.

## See Also

### Displaying proofreading marks

- [writingToolsCoordinator(\_:requestsRangeInContextWithIdentifierFor:completion:)](writingtoolscoordinator%28__requestsrangeincontextwithidentifierfor_completion_%29.md): Deprecated. Asks the delegate to provide the location of the character at the specified point in your view’s coordinate system.
- [writingToolsCoordinator(\_:requestsUnderlinePathsFor:in:completion:)](writingtoolscoordinator%28__requestsunderlinepathsfor_in_completion_%29.md): Asks the delegate to provide an underline shape for the specified text during a proofreading session.

# writingToolsCoordinator:requestsBoundingBezierPathsForRange:inContext:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

Asks the delegate to provide the bounding paths for the specified text in your view.

## Declaration

```objectivec
- (void) writingToolsCoordinator:(UIWritingToolsCoordinator *) writingToolsCoordinator requestsBoundingBezierPathsForRange:(NSRange) range inContext:(UIWritingToolsCoordinatorContext *) context completion:(void (^)(NSArray<UIBezierPath *> *)) completion;
```

## Parameters

- `writingToolsCoordinator`: The coordinator object requesting information from your custom view.
- `range`: The range of text to evaluate. This range is relative to the text in your context object, and it’s your responsibility to match that location to the correct location in your text storage. If you initialized the context object with the entire contents of your view’s text storage, you can use `range` as-is to access that text storage. However, if you initialized the context object with only a portion of your view’s text, add the starting location of your context object’s text to this value to get the correct range for that text storage.
- `context`: The context object with the target text. Use this object to find the text in your view’s text storage.
- `completion`: A handler to execute with the required information. The handler has no return value and takes an array of Bezier paths as a parameter. You must call this handler at some point during your method’s implementation.

<a id="discussion"></a>

## Discussion

After applying proofreading marks to your view’s text, Writing Tools lets the person accept or reject individual suggestions. To facilitate interactions, the coordinator asks your delegate to provide one or more Bezier paths that surround those proofreading suggestions. For each distinct range of text with a suggestion, it calls this method to get the Bezier paths that surround the corresponding text.

After you determine the location of the specified range of text in your view’s text storage, call the [enumerateTextSegmentsInRange:type:options:usingBlock:](https://developer.apple.com/documentation/appkit/nstextlayoutmanager/enumeratetextsegments%28in:type:options:using:%29) method of your view’s [NSTextLayoutManager](../../nstextlayoutmanager.md) to compute the selection rectangles for that text. That method finds the text segments that contain the text and returns the frame rectangle for each one. Create a Bezier path for each rectangle, and convert the coordinates of each path to the coordinate space of the view in your coordinator’s [decorationContainerView](../decorationcontainerview.md) property. Pass the resulting paths to the completion handler.

## See Also

### Displaying proofreading marks

- [writingToolsCoordinator:requestsRangeInContextWithIdentifierForPoint:completion:](writingtoolscoordinator%28__requestsrangeincontextwithidentifierfor_completion_%29.md): Deprecated. Asks the delegate to provide the location of the character at the specified point in your view’s coordinate system.
- [writingToolsCoordinator:requestsUnderlinePathsForRange:inContext:completion:](writingtoolscoordinator%28__requestsunderlinepathsfor_in_completion_%29.md): Asks the delegate to provide an underline shape for the specified text during a proofreading session.
