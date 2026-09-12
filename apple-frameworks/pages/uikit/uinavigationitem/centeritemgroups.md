> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/centeritemgroups](https://developer.apple.com/documentation/uikit/uinavigationitem/centeritemgroups)

# centerItemGroups (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Customizable item groups to display in the center section of the navigation bar.

## Declaration

```swift
var centerItemGroups: [UIBarButtonItemGroup] { get set }
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify *center item groups*, groups of controls that appear in the navigation bar to provide quick access to your app’s capabilities. Center items appear in the center of the navigation bar for the [UINavigationItem.ItemStyle.browser](itemstyle/browser.md) and [UINavigationItem.ItemStyle.editor](itemstyle/editor.md) styles, and in the overflow menu for the [UINavigationItem.ItemStyle.navigator](itemstyle/navigator.md) style.

Optionally, you can allow people to customize the layout of center item groups and preserve that customization across app launches. When you create center item groups, you can choose from three types of behaviors:

- Create a fixed group to disallow moving or removing that group from the navigation bar.
- Create a movable group to allow moving a group in the navigation bar, but not removing it.
- Create an optional group to allow moving, removing, or adding back that group.

The following code enables center item layout customization by assigning a [customizationIdentifier](customizationidentifier.md). Then, it shows two approaches to creating center item groups: creating a group from an array of items and creating a group from a single item.

```swift
// Specify a unique customization identifier to enable navigation bar layout customization.
navigationItem.customizationIdentifier = "MyCustomNavigationItem"

// Create a fixed group with multiple items.
let editingGroup = UIBarButtonItemGroup.fixedGroup(items: [
    UIBarButtonItem(title: "Undo", image: UIImage(systemName: "arrow.uturn.backward"), primaryAction: UIAction { _ in
        // Implement undo action.
    }),
    UIBarButtonItem(title: "Redo", image: UIImage(systemName: "arrow.uturn.forward"), primaryAction: UIAction { _ in
        // Implement redo action.
    })
])

// Create a movable group from a single item.
let croppingItem = UIBarButtonItem(title: "Crop", image: UIImage(systemName: "crop"), primaryAction: UIAction { _ in
    // Implement crop action.
})
let croppingGroup = croppingItem.creatingMovableGroup(customizationIdentifier: "Cropping")

navigationItem.centerItemGroups = [editingGroup, croppingGroup]
```

## See Also

### Specifying custom views

- [leadingItemGroups](leadingitemgroups.md): Item groups to display in the leading section of the navigation bar.
- [trailingItemGroups](trailingitemgroups.md): Item groups to display in the trailing section of the navigation bar.
- [pinnedTrailingGroup](pinnedtrailinggroup.md): The item group to display on the trailing edge of the navigation bar, on the trailing side of the overflow and search items.
- [titleView](titleview.md): A custom view that displays in the center of the navigation bar when the receiver is the top item.
- [subtitleView](subtitleview.md): A custom view to display below the title in the navigation bar.
- [largeSubtitleView](largesubtitleview.md): A custom view to display below the large title.
- [leftBarButtonItems](leftbarbuttonitems.md): An array of custom bar button items to display on the left (or leading) side of the navigation bar when the navigation item is the top item.
- [leftBarButtonItem](leftbarbuttonitem.md): A custom bar button item that displays on the left (or leading) edge of the navigation bar when the navigation item is the top item.
- [rightBarButtonItems](rightbarbuttonitems.md): An array of custom bar button items to display on the right (or trailing) side of the navigation bar when the navigation item is the top item.
- [rightBarButtonItem](rightbarbuttonitem.md): A custom bar button item that displays on the right (or trailing) edge of the navigation bar when the navigation item is the top item.
- [setLeftBarButtonItems(\_:animated:)](setleftbarbuttonitems%28__animated_%29.md): Sets the left bar button items, optionally animating the transition to the new items.
- [setLeftBarButton(\_:animated:)](setleftbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the new item.
- [setRightBarButtonItems(\_:animated:)](setrightbarbuttonitems%28__animated_%29.md): Sets the right bar button items, optionally animating the transition to the new items.
- [setRightBarButton(\_:animated:)](setrightbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the view.

# centerItemGroups (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Customizable item groups to display in the center section of the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<UIBarButtonItemGroup *> * centerItemGroups;
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify *center item groups*, groups of controls that appear in the navigation bar to provide quick access to your app’s capabilities. Center items appear in the center of the navigation bar for the [UINavigationItemStyleBrowser](itemstyle/browser.md) and [UINavigationItemStyleEditor](itemstyle/editor.md) styles, and in the overflow menu for the [UINavigationItemStyleNavigator](itemstyle/navigator.md) style.

Optionally, you can allow people to customize the layout of center item groups and preserve that customization across app launches. When you create center item groups, you can choose from three types of behaviors:

- Create a fixed group to disallow moving or removing that group from the navigation bar.
- Create a movable group to allow moving a group in the navigation bar, but not removing it.
- Create an optional group to allow moving, removing, or adding back that group.

The following code enables center item layout customization by assigning a [customizationIdentifier](customizationidentifier.md). Then, it shows two approaches to creating center item groups: creating a group from an array of items and creating a group from a single item.

```swift
// Specify a unique customization identifier to enable navigation bar layout customization.
navigationItem.customizationIdentifier = "MyCustomNavigationItem"

// Create a fixed group with multiple items.
let editingGroup = UIBarButtonItemGroup.fixedGroup(items: [
    UIBarButtonItem(title: "Undo", image: UIImage(systemName: "arrow.uturn.backward"), primaryAction: UIAction { _ in
        // Implement undo action.
    }),
    UIBarButtonItem(title: "Redo", image: UIImage(systemName: "arrow.uturn.forward"), primaryAction: UIAction { _ in
        // Implement redo action.
    })
])

// Create a movable group from a single item.
let croppingItem = UIBarButtonItem(title: "Crop", image: UIImage(systemName: "crop"), primaryAction: UIAction { _ in
    // Implement crop action.
})
let croppingGroup = croppingItem.creatingMovableGroup(customizationIdentifier: "Cropping")

navigationItem.centerItemGroups = [editingGroup, croppingGroup]
```

## See Also

### Specifying custom views

- [leadingItemGroups](leadingitemgroups.md): Item groups to display in the leading section of the navigation bar.
- [trailingItemGroups](trailingitemgroups.md): Item groups to display in the trailing section of the navigation bar.
- [pinnedTrailingGroup](pinnedtrailinggroup.md): The item group to display on the trailing edge of the navigation bar, on the trailing side of the overflow and search items.
- [titleView](titleview.md): A custom view that displays in the center of the navigation bar when the receiver is the top item.
- [subtitleView](subtitleview.md): A custom view to display below the title in the navigation bar.
- [largeSubtitleView](largesubtitleview.md): A custom view to display below the large title.
- [leftBarButtonItems](leftbarbuttonitems.md): An array of custom bar button items to display on the left (or leading) side of the navigation bar when the navigation item is the top item.
- [leftBarButtonItem](leftbarbuttonitem.md): A custom bar button item that displays on the left (or leading) edge of the navigation bar when the navigation item is the top item.
- [rightBarButtonItems](rightbarbuttonitems.md): An array of custom bar button items to display on the right (or trailing) side of the navigation bar when the navigation item is the top item.
- [rightBarButtonItem](rightbarbuttonitem.md): A custom bar button item that displays on the right (or trailing) edge of the navigation bar when the navigation item is the top item.
- [setLeftBarButtonItems:animated:](setleftbarbuttonitems%28__animated_%29.md): Sets the left bar button items, optionally animating the transition to the new items.
- [setLeftBarButtonItem:animated:](setleftbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the new item.
- [setRightBarButtonItems:animated:](setrightbarbuttonitems%28__animated_%29.md): Sets the right bar button items, optionally animating the transition to the new items.
- [setRightBarButtonItem:animated:](setrightbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the view.
