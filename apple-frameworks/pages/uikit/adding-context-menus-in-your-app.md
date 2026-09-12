> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/adding-context-menus-in-your-app](https://developer.apple.com/documentation/uikit/adding-context-menus-in-your-app)

# Adding context menus in your app (Swift)

**Framework:** UIKit  
**Kind:** Sample Code  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · Xcode 12.0+

Provide quick access to useful actions by adding context menus to your iOS app.

<a id="Overview"></a>

## Overview

This sample project demonstrates how to add context menus to user-interface elements such as views, controls, table views, collection views, and web views. Apps enhance and extend context menus with actions, nested submenu actions, and custom previews. For more information on context menu design, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/controls/context-menus/).

<a id="Create-a-context-menu"></a>

### Create a context menu

This sample shows two ways to create context menus:

1. For a [UIView](uiview.md), the sample creates a [UIContextMenuInteraction](uicontextmenuinteraction.md) object and attaches it to that view. The `UIContextMenuInteraction` object focuses the user’s attention on a specific portion of the UI, and provides actions for the user to perform on that content. Then, the app adopts the [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md) protocol and provides a [UIContextMenuConfiguration](uicontextmenuconfiguration.md) object.
2. For more specific UI elements like tables, collections, and web views, the app adopts specific protocols for those elements that return a `UIContextMenuConfiguration`.

Adopt `UIContextMenuInteractionDelegate` to manage the lifecycle of context menus. The app implements [contextMenuInteraction(\_:configurationForMenuAtLocation:)](uicontextmenuinteractiondelegate/contextmenuinteraction%28__configurationformenuatlocation_%29.md) to return a `UIContextMenuConfiguration` object. This configuration object consists of an optional `identifier`, a `previewProvider` that returns a [UIViewController](uiviewcontroller.md), and an `actionProvider` that returns a [UIMenu](uimenu.md) with a set of [UIAction](uiaction.md) items.

Context menus with rich content also provide a [UITargetedPreview](uitargetedpreview.md), an object that describes the source view when opening and animating the contextual menu. A `UITargetedPreview` specifies the view to use during animated transitions.

<a id="Add-a-context-menu-to-a-view"></a>

### Add a context menu to a view

This sample adds a context menu to a `UIView` by calling [addInteraction(\_:)](uiview/addinteraction%28__%29.md).

```swift
let interaction = UIContextMenuInteraction(delegate: self)
imageView.addInteraction(interaction)
```

When the user touches and holds on that view, the view asks its delegate to provide the context menu by calling `contextMenuInteraction(_:configurationForMenuAtLocation:)`.

```swift
func contextMenuInteraction(_ interaction: UIContextMenuInteraction,
                            configurationForMenuAtLocation location: CGPoint) -> UIContextMenuConfiguration? {
    return UIContextMenuConfiguration(identifier: nil,
                                      previewProvider: nil,
                                      actionProvider: {
            suggestedActions in
        let inspectAction =
            UIAction(title: NSLocalizedString("InspectTitle", comment: ""),
                     image: UIImage(systemName: "arrow.up.square")) { action in
                self.performInspect()
            }
            
        let duplicateAction =
            UIAction(title: NSLocalizedString("DuplicateTitle", comment: ""),
                     image: UIImage(systemName: "plus.square.on.square")) { action in
                self.performDuplicate()
            }
            
        let deleteAction =
            UIAction(title: NSLocalizedString("DeleteTitle", comment: ""),
                     image: UIImage(systemName: "trash"),
                     attributes: .destructive) { action in
                self.performDelete()
            }
                                        
        return UIMenu(title: "", children: [inspectAction, duplicateAction, deleteAction])
    })
}
```

<a id="Add-a-context-menu-to-a-table-view"></a>

### Add a context menu to a table view

This sample adds a context menu to a [UITableView](uitableview.md) when the user touches and holds a [UITableViewCell](uitableviewcell.md). `UITableView` asks its delegate to provide the context menu by calling [tableView(\_:contextMenuConfigurationForRowAt:point:)](uitableviewdelegate/tableview%28__contextmenuconfigurationforrowat_point_%29.md).

```swift
override func tableView(_ tableView: UITableView,
                        contextMenuConfigurationForRowAt indexPath: IndexPath,
                        point: CGPoint) -> UIContextMenuConfiguration? {
    return UIContextMenuConfiguration(identifier: nil,
                                      previewProvider: nil,
                                      actionProvider: {
            suggestedActions in
        let inspectAction =
            UIAction(title: NSLocalizedString("InspectTitle", comment: ""),
                     image: UIImage(systemName: "arrow.up.square")) { action in
                self.performInspect(indexPath)
            }
        let duplicateAction =
            UIAction(title: NSLocalizedString("DuplicateTitle", comment: ""),
                     image: UIImage(systemName: "plus.square.on.square")) { action in
                self.performDuplicate(indexPath)
            }
        let deleteAction =
            UIAction(title: NSLocalizedString("DeleteTitle", comment: ""),
                     image: UIImage(systemName: "trash"),
                     attributes: .destructive) { action in
                self.performDelete(indexPath)
            }
        return UIMenu(title: "", children: [inspectAction, duplicateAction, deleteAction])
    })
}
```

<a id="Add-a-context-menu-to-a-collection-view"></a>

### Add a context menu to a collection view

This sample adds a context menu to a [UICollectionView](uicollectionview.md) when the user touches and holds a [UICollectionViewCell](uicollectionviewcell.md). `UICollectionView` asks its delegate to provide the context menu by calling [collectionView(\_:contextMenuConfigurationForItemAt:point:)](uicollectionviewdelegate/collectionview%28__contextmenuconfigurationforitemat_point_%29.md).

```swift
override func collectionView(_ collectionView: UICollectionView,
                             contextMenuConfigurationForItemAt indexPath: IndexPath,
                             point: CGPoint) -> UIContextMenuConfiguration? {
    return UIContextMenuConfiguration(identifier: nil, previewProvider: nil) { suggestedActions in
        let inspectAction = self.inspectAction(indexPath)
        let duplicateAction = self.duplicateAction(indexPath)
        let deleteAction = self.deleteAction(indexPath)
        return UIMenu(title: "", children: [inspectAction, duplicateAction, deleteAction])
    }
}
```

<a id="Add-a-context-menu-to-a-control"></a>

### Add a context menu to a control

This sample adds a context menu to a [UIControl](uicontrol.md). UIKit attaches a context menu to a `UIControl` in two different ways:

- By setting the `menu` property with a `UIMenu` object

```swift
let inspectAction = self.inspectAction()
let duplicateAction = self.duplicateAction()
let deleteAction = self.deleteAction()
buttonMenuAsPrimary.menu = UIMenu(title: "", children: [inspectAction, duplicateAction, deleteAction])
buttonMenuAsPrimary.showsMenuAsPrimaryAction = true
```

- By adding a `UIContextMenuInteraction` object

```swift
let interaction = UIContextMenuInteraction(delegate: self)
buttonMenu.addInteraction(interaction)
```

When the user touches and holds on that control, the app asks its delegate to provide a context menu by calling [contextMenuInteraction(\_:configurationForMenuAtLocation:)](uicontextmenuinteractiondelegate/contextmenuinteraction%28__configurationformenuatlocation_%29.md)

```swift
func contextMenuInteraction(_ interaction: UIContextMenuInteraction,
                            configurationForMenuAtLocation location: CGPoint) -> UIContextMenuConfiguration? {
    return UIContextMenuConfiguration(identifier: nil,
                                      previewProvider: nil,
                                      actionProvider: {
            suggestedActions in
        // Use the ContextMenu protocol to produce the UIActions.
        let inspectAction = self.inspectAction()
        let duplicateAction = self.duplicateAction()
        let deleteAction = self.deleteAction()
        return UIMenu(title: "", children: [inspectAction, duplicateAction, deleteAction])
    })
}
```

<a id="Add-a-context-menu-to-a-web-view"></a>

### Add a context menu to a web view

Select the Basic test case from the sample’s Web Views outline item. When the user touches and holds on the link within the [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview), the app presents a [`SFSafariViewController`](../safariservices/sfsafariviewcontroller.md) to show that link content with a set of default `UIAction` items. When the user touches the view controller, the user moves out of the app and into Safari.

Select the Preview Provider test case from the sample’s Web Views outline item. When the user touches and holds on the link within the `WKWebView`, the app presents a custom view controller.

This sample intercepts and adds to that context menu by adopting the [`WKUIDelegate`](https://developer.apple.com/documentation/webkit/wkuidelegate) protocol. `WKWebView` asks its delegate to provide the context menu by calling [`webView(_:contextMenuConfigurationForElement:completionHandler:)`](https://developer.apple.com/documentation/webkit/wkuidelegate/webview%28_:contextmenuconfigurationforelement:completionhandler:%29).

```swift
func webView(_ webView: WKWebView,
             contextMenuConfigurationForElement elementInfo: WKContextMenuElementInfo,
             completionHandler: @escaping (UIContextMenuConfiguration?) -> Void) {
    let configuration =
        UIContextMenuConfiguration(identifier: nil,
                                   previewProvider: { return SFSafariViewController(url: elementInfo.linkURL!) },
                                   actionProvider: { elements in
            guard elements.isEmpty == false else { return nil }
                                    
            // Add our custom action to the existing actions passed in.
            var elementsToUse = elements
            let inspectAction = self.extraAction(elementInfo.linkURL!)
            let editMenu = UIMenu(title: "", options: .displayInline, children: [inspectAction])
            elementsToUse.append(editMenu)
                   
            let contextMenuTitle = elementInfo.linkURL?.lastPathComponent
            return UIMenu(title: contextMenuTitle!, image: nil, identifier: nil, options: [], children: elementsToUse)
        }
    )
    completionHandler(configuration)
}
```

## See Also

### Creating a context menu interaction object

- [init(delegate:)](uicontextmenuinteraction/init%28delegate_%29.md): Creates a context menu interaction object with the specified delegate object.
- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.

# Adding context menus in your app (Objective-C)

**Framework:** UIKit  
**Kind:** Sample Code  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · Xcode 12.0+

Provide quick access to useful actions by adding context menus to your iOS app.

<a id="Overview"></a>

## Overview

This sample project demonstrates how to add context menus to user-interface elements such as views, controls, table views, collection views, and web views. Apps enhance and extend context menus with actions, nested submenu actions, and custom previews. For more information on context menu design, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/controls/context-menus/).

<a id="Create-a-context-menu"></a>

### Create a context menu

This sample shows two ways to create context menus:

1. For a [UIView](uiview.md), the sample creates a [UIContextMenuInteraction](uicontextmenuinteraction.md) object and attaches it to that view. The `UIContextMenuInteraction` object focuses the user’s attention on a specific portion of the UI, and provides actions for the user to perform on that content. Then, the app adopts the [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md) protocol and provides a [UIContextMenuConfiguration](uicontextmenuconfiguration.md) object.
2. For more specific UI elements like tables, collections, and web views, the app adopts specific protocols for those elements that return a `UIContextMenuConfiguration`.

Adopt `UIContextMenuInteractionDelegate` to manage the lifecycle of context menus. The app implements [contextMenuInteraction:configurationForMenuAtLocation:](uicontextmenuinteractiondelegate/contextmenuinteraction%28__configurationformenuatlocation_%29.md) to return a `UIContextMenuConfiguration` object. This configuration object consists of an optional `identifier`, a `previewProvider` that returns a [UIViewController](uiviewcontroller.md), and an `actionProvider` that returns a [UIMenu](uimenu.md) with a set of [UIAction](uiaction.md) items.

Context menus with rich content also provide a [UITargetedPreview](uitargetedpreview.md), an object that describes the source view when opening and animating the contextual menu. A `UITargetedPreview` specifies the view to use during animated transitions.

<a id="Add-a-context-menu-to-a-view"></a>

### Add a context menu to a view

This sample adds a context menu to a `UIView` by calling [addInteraction:](uiview/addinteraction%28__%29.md).

```swift
let interaction = UIContextMenuInteraction(delegate: self)
imageView.addInteraction(interaction)
```

When the user touches and holds on that view, the view asks its delegate to provide the context menu by calling `contextMenuInteraction(_:configurationForMenuAtLocation:)`.

```swift
func contextMenuInteraction(_ interaction: UIContextMenuInteraction,
                            configurationForMenuAtLocation location: CGPoint) -> UIContextMenuConfiguration? {
    return UIContextMenuConfiguration(identifier: nil,
                                      previewProvider: nil,
                                      actionProvider: {
            suggestedActions in
        let inspectAction =
            UIAction(title: NSLocalizedString("InspectTitle", comment: ""),
                     image: UIImage(systemName: "arrow.up.square")) { action in
                self.performInspect()
            }
            
        let duplicateAction =
            UIAction(title: NSLocalizedString("DuplicateTitle", comment: ""),
                     image: UIImage(systemName: "plus.square.on.square")) { action in
                self.performDuplicate()
            }
            
        let deleteAction =
            UIAction(title: NSLocalizedString("DeleteTitle", comment: ""),
                     image: UIImage(systemName: "trash"),
                     attributes: .destructive) { action in
                self.performDelete()
            }
                                        
        return UIMenu(title: "", children: [inspectAction, duplicateAction, deleteAction])
    })
}
```

<a id="Add-a-context-menu-to-a-table-view"></a>

### Add a context menu to a table view

This sample adds a context menu to a [UITableView](uitableview.md) when the user touches and holds a [UITableViewCell](uitableviewcell.md). `UITableView` asks its delegate to provide the context menu by calling [tableView:contextMenuConfigurationForRowAtIndexPath:point:](uitableviewdelegate/tableview%28__contextmenuconfigurationforrowat_point_%29.md).

```swift
override func tableView(_ tableView: UITableView,
                        contextMenuConfigurationForRowAt indexPath: IndexPath,
                        point: CGPoint) -> UIContextMenuConfiguration? {
    return UIContextMenuConfiguration(identifier: nil,
                                      previewProvider: nil,
                                      actionProvider: {
            suggestedActions in
        let inspectAction =
            UIAction(title: NSLocalizedString("InspectTitle", comment: ""),
                     image: UIImage(systemName: "arrow.up.square")) { action in
                self.performInspect(indexPath)
            }
        let duplicateAction =
            UIAction(title: NSLocalizedString("DuplicateTitle", comment: ""),
                     image: UIImage(systemName: "plus.square.on.square")) { action in
                self.performDuplicate(indexPath)
            }
        let deleteAction =
            UIAction(title: NSLocalizedString("DeleteTitle", comment: ""),
                     image: UIImage(systemName: "trash"),
                     attributes: .destructive) { action in
                self.performDelete(indexPath)
            }
        return UIMenu(title: "", children: [inspectAction, duplicateAction, deleteAction])
    })
}
```

<a id="Add-a-context-menu-to-a-collection-view"></a>

### Add a context menu to a collection view

This sample adds a context menu to a [UICollectionView](uicollectionview.md) when the user touches and holds a [UICollectionViewCell](uicollectionviewcell.md). `UICollectionView` asks its delegate to provide the context menu by calling [collectionView:contextMenuConfigurationForItemAtIndexPath:point:](uicollectionviewdelegate/collectionview%28__contextmenuconfigurationforitemat_point_%29.md).

```swift
override func collectionView(_ collectionView: UICollectionView,
                             contextMenuConfigurationForItemAt indexPath: IndexPath,
                             point: CGPoint) -> UIContextMenuConfiguration? {
    return UIContextMenuConfiguration(identifier: nil, previewProvider: nil) { suggestedActions in
        let inspectAction = self.inspectAction(indexPath)
        let duplicateAction = self.duplicateAction(indexPath)
        let deleteAction = self.deleteAction(indexPath)
        return UIMenu(title: "", children: [inspectAction, duplicateAction, deleteAction])
    }
}
```

<a id="Add-a-context-menu-to-a-control"></a>

### Add a context menu to a control

This sample adds a context menu to a [UIControl](uicontrol.md). UIKit attaches a context menu to a `UIControl` in two different ways:

- By setting the `menu` property with a `UIMenu` object

```swift
let inspectAction = self.inspectAction()
let duplicateAction = self.duplicateAction()
let deleteAction = self.deleteAction()
buttonMenuAsPrimary.menu = UIMenu(title: "", children: [inspectAction, duplicateAction, deleteAction])
buttonMenuAsPrimary.showsMenuAsPrimaryAction = true
```

- By adding a `UIContextMenuInteraction` object

```swift
let interaction = UIContextMenuInteraction(delegate: self)
buttonMenu.addInteraction(interaction)
```

When the user touches and holds on that control, the app asks its delegate to provide a context menu by calling [contextMenuInteraction:configurationForMenuAtLocation:](uicontextmenuinteractiondelegate/contextmenuinteraction%28__configurationformenuatlocation_%29.md)

```swift
func contextMenuInteraction(_ interaction: UIContextMenuInteraction,
                            configurationForMenuAtLocation location: CGPoint) -> UIContextMenuConfiguration? {
    return UIContextMenuConfiguration(identifier: nil,
                                      previewProvider: nil,
                                      actionProvider: {
            suggestedActions in
        // Use the ContextMenu protocol to produce the UIActions.
        let inspectAction = self.inspectAction()
        let duplicateAction = self.duplicateAction()
        let deleteAction = self.deleteAction()
        return UIMenu(title: "", children: [inspectAction, duplicateAction, deleteAction])
    })
}
```

<a id="Add-a-context-menu-to-a-web-view"></a>

### Add a context menu to a web view

Select the Basic test case from the sample’s Web Views outline item. When the user touches and holds on the link within the [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview), the app presents a [`SFSafariViewController`](../safariservices/sfsafariviewcontroller.md) to show that link content with a set of default `UIAction` items. When the user touches the view controller, the user moves out of the app and into Safari.

Select the Preview Provider test case from the sample’s Web Views outline item. When the user touches and holds on the link within the `WKWebView`, the app presents a custom view controller.

This sample intercepts and adds to that context menu by adopting the [`WKUIDelegate`](https://developer.apple.com/documentation/webkit/wkuidelegate) protocol. `WKWebView` asks its delegate to provide the context menu by calling [`webView(_:contextMenuConfigurationForElement:completionHandler:)`](https://developer.apple.com/documentation/webkit/wkuidelegate/webview%28_:contextmenuconfigurationforelement:completionhandler:%29).

```swift
func webView(_ webView: WKWebView,
             contextMenuConfigurationForElement elementInfo: WKContextMenuElementInfo,
             completionHandler: @escaping (UIContextMenuConfiguration?) -> Void) {
    let configuration =
        UIContextMenuConfiguration(identifier: nil,
                                   previewProvider: { return SFSafariViewController(url: elementInfo.linkURL!) },
                                   actionProvider: { elements in
            guard elements.isEmpty == false else { return nil }
                                    
            // Add our custom action to the existing actions passed in.
            var elementsToUse = elements
            let inspectAction = self.extraAction(elementInfo.linkURL!)
            let editMenu = UIMenu(title: "", options: .displayInline, children: [inspectAction])
            elementsToUse.append(editMenu)
                   
            let contextMenuTitle = elementInfo.linkURL?.lastPathComponent
            return UIMenu(title: contextMenuTitle!, image: nil, identifier: nil, options: [], children: elementsToUse)
        }
    )
    completionHandler(configuration)
}
```

## See Also

### Creating a context menu interaction object

- [initWithDelegate:](uicontextmenuinteraction/init%28delegate_%29.md): Creates a context menu interaction object with the specified delegate object.
- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
