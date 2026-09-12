> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/decorationcontainerview](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/decorationcontainerview)

# decorationContainerView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The view that Writing Tools uses to display background decorations such as proofreading marks.

## Declaration

```swift
weak var decorationContainerView: NSView? { get set }
```

<a id="discussion"></a>

## Discussion

Writing Tools uses the view in this property to host proofreading marks and other visual elements that show any suggested changes. Set this property to a subview situated visibly below the text in your custom text view. It’s also satisfactory to place this view visually in front of the text. Make sure the size of the view is big enough to cover all of the affected text. If you don’t assign a value to this property, the coordinator places its own decoration view behind the subviews in your custom view. The default value of this property is `nil`.

If you display your view’s text using multiple text containers, implement the [writingToolsCoordinator(\_:requestsSingleContainerSubrangesOf:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md) and [writingToolsCoordinator(\_:requestsDecorationContainerViewFor:in:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestsdecorationcontainerviewfor_in_completion_%29.md) methods to provide separate decoration views for each container.

## See Also

### Getting the host views for effects

- [effectContainerView](effectcontainerview.md): The view that Writing Tools uses to display visual effects during the text-rewriting process.

# decorationContainerView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The view that Writing Tools uses to display background decorations such as proofreading marks.

## Declaration

```objectivec
@property (weak, nullable) NSView * decorationContainerView;
```

<a id="discussion"></a>

## Discussion

Writing Tools uses the view in this property to host proofreading marks and other visual elements that show any suggested changes. Set this property to a subview situated visibly below the text in your custom text view. It’s also satisfactory to place this view visually in front of the text. Make sure the size of the view is big enough to cover all of the affected text. If you don’t assign a value to this property, the coordinator places its own decoration view behind the subviews in your custom view. The default value of this property is `nil`.

If you display your view’s text using multiple text containers, implement the [writingToolsCoordinator:requestsSingleContainerSubrangesOfRange:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestssinglecontainersubrangesof_in_completion_%29.md) and [writingToolsCoordinator:requestsDecorationContainerViewForRange:inContext:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestsdecorationcontainerviewfor_in_completion_%29.md) methods to provide separate decoration views for each container.

## See Also

### Getting the host views for effects

- [effectContainerView](effectcontainerview.md): The view that Writing Tools uses to display visual effects during the text-rewriting process.
