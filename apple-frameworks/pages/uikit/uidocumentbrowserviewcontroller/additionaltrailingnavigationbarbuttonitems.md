> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/additionaltrailingnavigationbarbuttonitems](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/additionaltrailingnavigationbarbuttonitems)

# additionalTrailingNavigationBarButtonItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Additional bar button items that the document browser displays on the trailing side of its navigation bar.

## Declaration

```swift
var additionalTrailingNavigationBarButtonItems: [UIBarButtonItem] { get set }
```

## Mentioned In

- [Adding custom actions and activities](../adding-custom-actions-and-activities.md)

<a id="Discussion"></a>

## Discussion

Actions triggered by these items don’t have any access to the browser’s content or to the URLs of selected items. Use these bar button items for global actions only (actions that don’t affect a specific document or folder).

> **Note**

>  Bar button items added using this property don’t appear in Mac apps built with Mac Catalyst. You must find another way to display these actions (for example, using [UIMenuBuilder](../uimenubuilder.md) to add the actions to your app’s menu).

## See Also

### Modifying the browser’s appearance

- [browserUserInterfaceStyle](browseruserinterfacestyle-swift.property.md): The visual style for the document browser.
- [UIDocumentBrowserViewController.BrowserUserInterfaceStyle](browseruserinterfacestyle-swift.enum.md): Styles that define the document browser’s appearance.
- [additionalLeadingNavigationBarButtonItems](additionalleadingnavigationbarbuttonitems.md): Additional bar button items that the document browser displays on the leading side of its navigation bar.
- [shouldShowFileExtensions](shouldshowfileextensions.md): A Boolean value that determines whether the browser always shows file extensions.
- [localizedCreateDocumentActionTitle](localizedcreatedocumentactiontitle.md): The title for the Create Document button.
- [defaultDocumentAspectRatio](defaultdocumentaspectratio.md): The aspect ratio for the Create Document button.

# additionalTrailingNavigationBarButtonItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Additional bar button items that the document browser displays on the trailing side of its navigation bar.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<UIBarButtonItem *> * additionalTrailingNavigationBarButtonItems;
```

## Mentioned In

- [Adding custom actions and activities](../adding-custom-actions-and-activities.md)

<a id="Discussion"></a>

## Discussion

Actions triggered by these items don’t have any access to the browser’s content or to the URLs of selected items. Use these bar button items for global actions only (actions that don’t affect a specific document or folder).

> **Note**

>  Bar button items added using this property don’t appear in Mac apps built with Mac Catalyst. You must find another way to display these actions (for example, using [UIMenuBuilder](../uimenubuilder.md) to add the actions to your app’s menu).

## See Also

### Modifying the browser’s appearance

- [browserUserInterfaceStyle](browseruserinterfacestyle-swift.property.md): The visual style for the document browser.
- [UIDocumentBrowserUserInterfaceStyle](browseruserinterfacestyle-swift.enum.md): Styles that define the document browser’s appearance.
- [additionalLeadingNavigationBarButtonItems](additionalleadingnavigationbarbuttonitems.md): Additional bar button items that the document browser displays on the leading side of its navigation bar.
- [shouldShowFileExtensions](shouldshowfileextensions.md): A Boolean value that determines whether the browser always shows file extensions.
- [localizedCreateDocumentActionTitle](localizedcreatedocumentactiontitle.md): The title for the Create Document button.
- [defaultDocumentAspectRatio](defaultdocumentaspectratio.md): The aspect ratio for the Create Document button.
