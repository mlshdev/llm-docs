> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectiondisplayinteractiondelegate/selectioncontainerviewbelowtext(for:)](https://developer.apple.com/documentation/uikit/uitextselectiondisplayinteractiondelegate/selectioncontainerviewbelowtext(for:))

# selectionContainerViewBelowText(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the container view to hold the selection-related highlight and detail views.

## Declaration

```swift
optional func selectionContainerViewBelowText(for interaction: UITextSelectionDisplayInteraction) -> UIView?
```

## Parameters

- `interaction`: The interaction object that manages the highlight views.

<a id="return-value"></a>

## Return Value

The view in your interface you use to manage selection-related views.

<a id="Discussion"></a>

## Discussion

Implement this delegate method if you use a view other than your text input view to display selection-related content and highlights. The container view you specify must sit below the text input view itself. The interaction object uses the view you provide as the parent for the views that display the selection highlight, selection handles, and caret.

# selectionContainerViewBelowTextForSelectionDisplayInteraction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the container view to hold the selection-related highlight and detail views.

## Declaration

```objectivec
- (UIView *) selectionContainerViewBelowTextForSelectionDisplayInteraction:(UITextSelectionDisplayInteraction *) interaction;
```

## Parameters

- `interaction`: The interaction object that manages the highlight views.

<a id="return-value"></a>

## Return Value

The view in your interface you use to manage selection-related views.

<a id="Discussion"></a>

## Discussion

Implement this delegate method if you use a view other than your text input view to display selection-related content and highlights. The container view you specify must sit below the text input view itself. The interaction object uses the view you provide as the parent for the views that display the selection highlight, selection handles, and caret.
