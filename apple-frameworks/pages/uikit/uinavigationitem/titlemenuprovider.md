> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/titlemenuprovider](https://developer.apple.com/documentation/uikit/uinavigationitem/titlemenuprovider)

# titleMenuProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A closure that generates the navigation item’s title menu.

## Declaration

```swift
var titleMenuProvider: (([UIMenuElement]) -> UIMenu?)? { get set }
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this closure to create a context menu that appears when a person taps the title of the navigation item. UIKit passes in a set of menu element suggestions that you can either use directly or modify in this closure to customize the menu.

```swift
// Use suggested menu elements directly.
navigationItem.titleMenuProvider = { suggestions in
    return UIMenu(children: suggestions)
}

// Add a custom menu element to the suggestions.
navigationItem.titleMenuProvider = { suggestions in
    var finalMenuElements = suggestions
    finalMenuElements.append(UICommand(title: "Save", 
                                       image: UIImage(systemName: "square.and.arrow.down"), 
                                      action: #selector(self.save)))
    return UIMenu(children: finalMenuElements)
}
```

Before displaying the title menu, UIKit validates each element in the menu you return by traversing the responder chain, starting with the navigation controller’s [topViewController](../uinavigationcontroller/topviewcontroller.md). For selector-based menu elements, implement your methods on [topViewController](../uinavigationcontroller/topviewcontroller.md) or farther up in the responder chain if you want those elements to appear in the title menu. For more information, see [canPerformAction(\_:withSender:)](../uiresponder/canperformaction%28__withsender_%29.md).

> **Tip**

>  You don’t need to assign a [titleMenuProvider](titlemenuprovider.md) if you only want to show Rename in your title menu. If you assign a `renameDelegate` without setting a [titleMenuProvider](titlemenuprovider.md), UIKit automatically generates a title menu containing the Rename menu element only.

## See Also

### Customizing the title menu

- [documentProperties](documentproperties.md): An object that provides the document header for the title menu.
- [UIDocumentProperties](../uidocumentproperties.md): Information that UIKit uses to generate a document header for a navigation item’s title menu.

# titleMenuProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A closure that generates the navigation item’s title menu.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIMenu *(^)(NSArray<UIMenuElement *> *) titleMenuProvider;
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this closure to create a context menu that appears when a person taps the title of the navigation item. UIKit passes in a set of menu element suggestions that you can either use directly or modify in this closure to customize the menu.

```swift
// Use suggested menu elements directly.
navigationItem.titleMenuProvider = { suggestions in
    return UIMenu(children: suggestions)
}

// Add a custom menu element to the suggestions.
navigationItem.titleMenuProvider = { suggestions in
    var finalMenuElements = suggestions
    finalMenuElements.append(UICommand(title: "Save", 
                                       image: UIImage(systemName: "square.and.arrow.down"), 
                                      action: #selector(self.save)))
    return UIMenu(children: finalMenuElements)
}
```

Before displaying the title menu, UIKit validates each element in the menu you return by traversing the responder chain, starting with the navigation controller’s [topViewController](../uinavigationcontroller/topviewcontroller.md). For selector-based menu elements, implement your methods on [topViewController](../uinavigationcontroller/topviewcontroller.md) or farther up in the responder chain if you want those elements to appear in the title menu. For more information, see [canPerformAction:withSender:](../uiresponder/canperformaction%28__withsender_%29.md).

> **Tip**

>  You don’t need to assign a [titleMenuProvider](titlemenuprovider.md) if you only want to show Rename in your title menu. If you assign a `renameDelegate` without setting a [titleMenuProvider](titlemenuprovider.md), UIKit automatically generates a title menu containing the Rename menu element only.

## See Also

### Customizing the title menu

- [documentProperties](documentproperties.md): An object that provides the document header for the title menu.
- [UIDocumentProperties](../uidocumentproperties.md): Information that UIKit uses to generate a document header for a navigation item’s title menu.
