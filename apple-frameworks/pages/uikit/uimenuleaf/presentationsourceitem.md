> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuleaf/presentationsourceitem](https://developer.apple.com/documentation/uikit/uimenuleaf/presentationsourceitem)

# presentationSourceItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The item you can use as an anchor for subsequent presentations.

## Declaration

```swift
var presentationSourceItem: (any UIPopoverPresentationControllerSourceItem)? { get }
```

<a id="Discussion"></a>

## Discussion

The system populates this property during the execution of the menu element’s action (its handler or selector). For example, for a menu element in a menu that presents from a [UIButton](../uibutton.md), the system may populate this property with that button.

Use this property to specify where to anchor popovers when a person taps the menu element, like in the following code.

```swift
let share = UIAction(title: "Share") { [unowned self] action in
    let shareVC = UIActivityViewController(activityItems: items, applicationActivities: activities)
    shareVC.modalPresentationStyle = .popover
    shareVC.popoverPresentationController?.sourceItem = action.presentationSourceItem
    present(shareVC, animated: true)
}
```

## See Also

### Managing the appearance

- [title](title.md): A short display title for the menu element.
- [discoverabilityTitle](discoverabilitytitle.md): A long, informative title to use in the keyboard shortcut overlay.
- [image](image.md): An image that appears next to the menu element.
- [attributes](attributes.md): The attributes that determine the style of the menu element.

# presentationSourceItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The item you can use as an anchor for subsequent presentations.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<UIPopoverPresentationControllerSourceItem> presentationSourceItem;
```

<a id="Discussion"></a>

## Discussion

The system populates this property during the execution of the menu element’s action (its handler or selector). For example, for a menu element in a menu that presents from a [UIButton](../uibutton.md), the system may populate this property with that button.

Use this property to specify where to anchor popovers when a person taps the menu element, like in the following code.

```swift
let share = UIAction(title: "Share") { [unowned self] action in
    let shareVC = UIActivityViewController(activityItems: items, applicationActivities: activities)
    shareVC.modalPresentationStyle = .popover
    shareVC.popoverPresentationController?.sourceItem = action.presentationSourceItem
    present(shareVC, animated: true)
}
```

## See Also

### Managing the appearance

- [title](title.md): A short display title for the menu element.
- [discoverabilityTitle](discoverabilitytitle.md): A long, informative title to use in the keyboard shortcut overlay.
- [image](image.md): An image that appears next to the menu element.
- [attributes](attributes.md): The attributes that determine the style of the menu element.
