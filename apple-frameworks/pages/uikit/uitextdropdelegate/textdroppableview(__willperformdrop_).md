> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropdelegate/textdroppableview(_:willperformdrop:)](https://developer.apple.com/documentation/uikit/uitextdropdelegate/textdroppableview(_:willperformdrop:))

# textDroppableView(\_:willPerformDrop:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the drop operation is about to happen.

## Declaration

```swift
optional func textDroppableView(_ textDroppableView: any UIView & UITextDroppable, willPerformDrop drop: any UITextDropRequest)
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `drop`: The drop request.

<a id="Discussion"></a>

## Discussion

If you need to modify the drag items before the drop operation happens, provide the text view a [pasteDelegate](../uitextpasteconfigurationsupporting/pastedelegate.md) object that implements the [paste(itemProviders:)](../uipasteconfigurationsupporting/paste%28itemproviders_%29.md) method. In the implementation, do the item conversion and paste the text.

# textDroppableView:willPerformDrop: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the drop operation is about to happen.

## Declaration

```objectivec
- (void) textDroppableView:(UIView<UITextDroppable> *) textDroppableView willPerformDrop:(id<UITextDropRequest>) drop;
```

## Parameters

- `textDroppableView`: The text view that received the drop activity.
- `drop`: The drop request.

<a id="Discussion"></a>

## Discussion

If you need to modify the drag items before the drop operation happens, provide the text view a [pasteDelegate](../uitextpasteconfigurationsupporting/pastedelegate.md) object that implements the [pasteItemProviders:](../uipasteconfigurationsupporting/paste%28itemproviders_%29.md) method. In the implementation, do the item conversion and paste the text.
