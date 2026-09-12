> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:contextmenuconfigurationforitemsat:point:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:contextmenuconfigurationforitemsat:point:))

# collectionView(\_:contextMenuConfigurationForItemsAt:point:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 17.0+ · visionOS 1.0+

Asks the delegate for a context-menu configuration for the items at the specified index paths.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, contextMenuConfigurationForItemsAt indexPaths: [IndexPath], point: CGPoint) -> UIContextMenuConfiguration?
```

## Parameters

- `collectionView`: The collection view containing the items.
- `indexPaths`: An array of index paths corresponding to the items the menu acts on. An empty array indicates that a person is invoking the menu from a location that doesn’t map to an item index path, like the space between cells. An array with multiple index paths indicates that a person is invoking the menu on an item in a multiple selection.
- `point`: The location of the interaction in the collection view’s coordinate space.

<a id="return-value"></a>

## Return Value

A contextual menu configuration object describing the menu to present. Returning `nil` prevents the interaction from beginning. Returning an empty configuration causes the interaction to begin, and then end with a cancellation effect. You can use this cancellation effect to indicate to people that it’s possible to present a menu from this element, but that there aren’t any actions currently available.

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when a person invokes a context menu from the collection view. Implement this method to build a [UIContextMenuConfiguration](../uicontextmenuconfiguration.md) according to the index paths the system passes in to this method. The following code example shows different context-menu configurations for zero, one, and multiple index paths.

```swift
func collectionView(_ collectionView: UICollectionView, contextMenuConfigurationForItemsAt indexPaths: [IndexPath], point: CGPoint) -> UIContextMenuConfiguration? {
    return UIContextMenuConfiguration(actionProvider: { suggestedActions in
        if indexPaths.count == 0 {
            // Construct an empty-space menu.
            return UIMenu(children: [
                UIAction(title: "New Folder") { _ in /* Implement the action. */ }
            ])
        }
        else if indexPaths.count == 1 {
            // Construct a single-item menu.
            return UIMenu(children: [
                UIAction(title: "Copy") { _ in /* Implement the action. */ },
                UIAction(title: "Delete", attributes: .destructive) { _ in /* Implement the action. */ }
            ])
        }
        else {
            // Construct a multiple-item menu.
            return UIMenu(children: [
                UIAction(title: "New Folder With Selection") { _ in /* Implement the action. */ }
            ])
        }
    })
}
```

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [collectionView(\_:willDisplayContextMenu:animator:)](collectionview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [collectionView(\_:willEndContextMenuInteraction:animator:)](collectionview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [collectionView(\_:willPerformPreviewActionForMenuWith:animator:)](collectionview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.
- [collectionView(\_:contextMenuConfiguration:highlightPreviewForItemAt:)](collectionview%28__contextmenuconfiguration_highlightpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction begins.
- [collectionView(\_:contextMenuConfiguration:dismissalPreviewForItemAt:)](collectionview%28__contextmenuconfiguration_dismissalpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction ends.

# collectionView:contextMenuConfigurationForItemsAtIndexPaths:point: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 17.0+ · visionOS 1.0+

Asks the delegate for a context-menu configuration for the items at the specified index paths.

## Declaration

```objectivec
- (UIContextMenuConfiguration *) collectionView:(UICollectionView *) collectionView contextMenuConfigurationForItemsAtIndexPaths:(NSArray<NSIndexPath *> *) indexPaths point:(CGPoint) point;
```

## Parameters

- `collectionView`: The collection view containing the items.
- `indexPaths`: An array of index paths corresponding to the items the menu acts on. An empty array indicates that a person is invoking the menu from a location that doesn’t map to an item index path, like the space between cells. An array with multiple index paths indicates that a person is invoking the menu on an item in a multiple selection.
- `point`: The location of the interaction in the collection view’s coordinate space.

<a id="return-value"></a>

## Return Value

A contextual menu configuration object describing the menu to present. Returning `nil` prevents the interaction from beginning. Returning an empty configuration causes the interaction to begin, and then end with a cancellation effect. You can use this cancellation effect to indicate to people that it’s possible to present a menu from this element, but that there aren’t any actions currently available.

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when a person invokes a context menu from the collection view. Implement this method to build a [UIContextMenuConfiguration](../uicontextmenuconfiguration.md) according to the index paths the system passes in to this method. The following code example shows different context-menu configurations for zero, one, and multiple index paths.

```swift
func collectionView(_ collectionView: UICollectionView, contextMenuConfigurationForItemsAt indexPaths: [IndexPath], point: CGPoint) -> UIContextMenuConfiguration? {
    return UIContextMenuConfiguration(actionProvider: { suggestedActions in
        if indexPaths.count == 0 {
            // Construct an empty-space menu.
            return UIMenu(children: [
                UIAction(title: "New Folder") { _ in /* Implement the action. */ }
            ])
        }
        else if indexPaths.count == 1 {
            // Construct a single-item menu.
            return UIMenu(children: [
                UIAction(title: "Copy") { _ in /* Implement the action. */ },
                UIAction(title: "Delete", attributes: .destructive) { _ in /* Implement the action. */ }
            ])
        }
        else {
            // Construct a multiple-item menu.
            return UIMenu(children: [
                UIAction(title: "New Folder With Selection") { _ in /* Implement the action. */ }
            ])
        }
    })
}
```

## See Also

### Managing context menus

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [collectionView:willDisplayContextMenuWithConfiguration:animator:](collectionview%28__willdisplaycontextmenu_animator_%29.md): Informs the delegate when a context menu will appear.
- [collectionView:willEndContextMenuInteractionWithConfiguration:animator:](collectionview%28__willendcontextmenuinteraction_animator_%29.md): Informs the delegate when a context menu will disappear.
- [collectionView:willPerformPreviewActionForMenuWithConfiguration:animator:](collectionview%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a user triggers a commit by tapping the preview.
- [collectionView:contextMenuConfiguration:highlightPreviewForItemAtIndexPath:](collectionview%28__contextmenuconfiguration_highlightpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction begins.
- [collectionView:contextMenuConfiguration:dismissalPreviewForItemAtIndexPath:](collectionview%28__contextmenuconfiguration_dismissalpreviewforitemat_%29.md): Asks the delegate for a preview of the item at the specified index path when a context-menu interaction ends.
