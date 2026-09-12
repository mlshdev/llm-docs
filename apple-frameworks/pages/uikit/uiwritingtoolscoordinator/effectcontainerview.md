> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/effectcontainerview](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/effectcontainerview)

# effectContainerView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The view that Writing Tools uses to display visual effects during the text-rewriting process.

## Declaration

```swift
weak var effectContainerView: UIView? { get set }
```

<a id="discussion"></a>

## Discussion

Writing Tools uses the view in this property to host the visual effects it creates when making interactive changes to your view’s content. These visual effects let people know the state of the text and provide feedback about what’s happening to it. Set this property to a subview that sits visually above, and covers, all of the text in your custom text view. If you don’t assign a value to this property, the coordinator uses the object in its [view](../uiinteraction/view.md) property to host any visual effects.

If you display your view’s text using multiple text containers, implement the [writingToolsCoordinator(\_:requestsSingleContainerSubrangesOf:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md) method to request multiple previews.

## See Also

### Getting the host views for effects

- [decorationContainerView](decorationcontainerview.md): The view that Writing Tools uses to display background decorations such as proofreading marks.

# effectContainerView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The view that Writing Tools uses to display visual effects during the text-rewriting process.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) UIView * effectContainerView;
```

<a id="discussion"></a>

## Discussion

Writing Tools uses the view in this property to host the visual effects it creates when making interactive changes to your view’s content. These visual effects let people know the state of the text and provide feedback about what’s happening to it. Set this property to a subview that sits visually above, and covers, all of the text in your custom text view. If you don’t assign a value to this property, the coordinator uses the object in its [view](../uiinteraction/view.md) property to host any visual effects.

If you display your view’s text using multiple text containers, implement the [writingToolsCoordinator:requestsSingleContainerSubrangesOfRange:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md) method to request multiple previews.

## See Also

### Getting the host views for effects

- [decorationContainerView](decorationcontainerview.md): The view that Writing Tools uses to display background decorations such as proofreading marks.
