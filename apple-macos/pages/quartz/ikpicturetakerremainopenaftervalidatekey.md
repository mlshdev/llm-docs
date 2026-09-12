> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikpicturetakerremainopenaftervalidatekey](https://developer.apple.com/documentation/quartz/ikpicturetakerremainopenaftervalidatekey)

# IKPictureTakerRemainOpenAfterValidateKey (Swift)

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A key that determines if the picture taker UI should remain open after the user selects done.

## Declaration

```swift
let IKPictureTakerRemainOpenAfterValidateKey: String
```

<a id="discussion"></a>

## Discussion

This allows the application to programmatically dismiss the panel. The associated value is an `NSNumber` object that contains a `BOOL` value whose default value is [false](https://developer.apple.com/documentation/swift/false)

## See Also

### Constants

- [IKImageBrowserDropOn](ikimagebrowserdropon.md): Drop the item on the cell.
- [IKImageBrowserDropBefore](ikimagebrowserdropbefore.md): Drop the item before the cell.
- [IKFilterBrowserDefaultInputImage](ikfilterbrowserdefaultinputimage.md): The key for the default input image.
- [IKFilterBrowserExcludeCategories](ikfilterbrowserexcludecategories.md): The key for excluding filter categories.
- [IKFilterBrowserExcludeFilters](ikfilterbrowserexcludefilters.md): The key for excluding filters.
- [IKFilterBrowserShowCategories](ikfilterbrowsershowcategories.md): The key for showing categories. The associated value is a `BOOL` value that determines if the filter browser should show the category list.
- [IKFilterBrowserShowPreview](ikfilterbrowsershowpreview.md): The associated value is a `BOOL` value that determines if the filter browser should provide a preview.
- [IKImageBrowserBackgroundColorKey](ikimagebrowserbackgroundcolorkey.md): A key for the background color of the image browser view.
- [IKImageBrowserCellBackgroundLayer](ikimagebrowsercellbackgroundlayer.md): Layer displayed in the background.
- [IKImageBrowserCellForegroundLayer](ikimagebrowsercellforegroundlayer.md): Layer displayed in the foreground.
- [IKImageBrowserCellPlaceHolderLayer](ikimagebrowsercellplaceholderlayer.md): Layer displayed as a placeholder when an image is not yet available.
- [IKImageBrowserCellSelectionLayer](ikimagebrowsercellselectionlayer.md): Layer displayed as the selection.
- [IKImageBrowserCellsHighlightedTitleAttributesKey](ikimagebrowsercellshighlightedtitleattributeskey.md): A key for the highlighted title attribute for an item in the image browser view.
- [IKImageBrowserCellsOutlineColorKey](ikimagebrowsercellsoutlinecolorkey.md): A key for the outline color for an item in the image browser view.
- [IKImageBrowserCellsSubtitleAttributesKey](ikimagebrowsercellssubtitleattributeskey.md): A key for a subtitle attribute for an item in the image browser view.

# IKPictureTakerRemainOpenAfterValidateKey (Objective-C)

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A key that determines if the picture taker UI should remain open after the user selects done.

## Declaration

```objectivec
extern NSString * const IKPictureTakerRemainOpenAfterValidateKey;
```

<a id="discussion"></a>

## Discussion

This allows the application to programmatically dismiss the panel. The associated value is an `NSNumber` object that contains a `BOOL` value whose default value is [false](https://developer.apple.com/documentation/swift/false)

## See Also

### Constants

- [IKFilterBrowserFilterDoubleClickNotification](ikfilterbrowserfilterdoubleclicknotification.md): Posted when the user double-clicks a filter in the filter browser.
- [IKFilterBrowserFilterSelectedNotification](ikfilterbrowserfilterselectednotification.md): Posted when the user clicks a filter name in the filter browser.
- [IKFilterBrowserWillPreviewFilterNotification](ikfilterbrowserwillpreviewfilternotification.md): Posted before showing a filter preview, allowing an application to set the parameters of a filter.
- [IKImageBrowserDropOn](ikimagebrowserdropon.md): Drop the item on the cell.
- [IKImageBrowserDropBefore](ikimagebrowserdropbefore.md): Drop the item before the cell.
- [IKFilterBrowserDefaultInputImage](ikfilterbrowserdefaultinputimage.md): The key for the default input image.
- [IKFilterBrowserExcludeCategories](ikfilterbrowserexcludecategories.md): The key for excluding filter categories.
- [IKFilterBrowserExcludeFilters](ikfilterbrowserexcludefilters.md): The key for excluding filters.
- [IKFilterBrowserShowCategories](ikfilterbrowsershowcategories.md): The key for showing categories. The associated value is a `BOOL` value that determines if the filter browser should show the category list.
- [IKFilterBrowserShowPreview](ikfilterbrowsershowpreview.md): The associated value is a `BOOL` value that determines if the filter browser should provide a preview.
- [IKImageBrowserBackgroundColorKey](ikimagebrowserbackgroundcolorkey.md): A key for the background color of the image browser view.
- [IKImageBrowserCellBackgroundLayer](ikimagebrowsercellbackgroundlayer.md): Layer displayed in the background.
- [IKImageBrowserCellForegroundLayer](ikimagebrowsercellforegroundlayer.md): Layer displayed in the foreground.
- [IKImageBrowserCellPlaceHolderLayer](ikimagebrowsercellplaceholderlayer.md): Layer displayed as a placeholder when an image is not yet available.
- [IKImageBrowserCellSelectionLayer](ikimagebrowsercellselectionlayer.md): Layer displayed as the selection.
