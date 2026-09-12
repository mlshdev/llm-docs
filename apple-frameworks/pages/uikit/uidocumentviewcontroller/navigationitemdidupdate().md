> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentviewcontroller/navigationitemdidupdate()](https://developer.apple.com/documentation/uikit/uidocumentviewcontroller/navigationitemdidupdate())

# navigationItemDidUpdate() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Provides an opportunity to customize the navigation items after the navigation bar updates.

## Declaration

```swift
func navigationItemDidUpdate()
```

<a id="Discussion"></a>

## Discussion

The system calls `navigationItemDidUpdate()` every time `UIDocumentViewController` makes changes to the navigation item. Customize the navigation items in this method.

This example adds buttons to the navigation bar and customizes the toolbar:

```swift
class EditorViewController:
        UIDocumentViewController,
        UINavigationItemRenameDelegate {

    override func navigationItemDidUpdate() {
        navigationItem.customizationIdentifier = "editorViewCustomization"
        configureCenterItemGroups()
        navigationItem.rightBarButtonItem = splitView.previewVisibilityBarButton
    }

}
```

# navigationItemDidUpdate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Provides an opportunity to customize the navigation items after the navigation bar updates.

## Declaration

```objectivec
- (void) navigationItemDidUpdate;
```

<a id="Discussion"></a>

## Discussion

The system calls `navigationItemDidUpdate()` every time `UIDocumentViewController` makes changes to the navigation item. Customize the navigation items in this method.

This example adds buttons to the navigation bar and customizes the toolbar:

```swift
class EditorViewController:
        UIDocumentViewController,
        UINavigationItemRenameDelegate {

    override func navigationItemDidUpdate() {
        navigationItem.customizationIdentifier = "editorViewCustomization"
        configureCenterItemGroups()
        navigationItem.rightBarButtonItem = splitView.previewVisibilityBarButton
    }

}
```
