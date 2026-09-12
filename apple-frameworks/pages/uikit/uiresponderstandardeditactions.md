> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponderstandardeditactions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)

# UIResponderStandardEditActions (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of standard methods that apps can adopt to support editing.

## Declaration

```swift
@MainActor protocol UIResponderStandardEditActions : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Responder objects can implement the methods of this protocol to handle standard editing-related actions. For example, a [UIEditMenuInteraction](uieditmenuinteraction.md) object displays the actions in an edit menu using these methods. UIKit searches the responder chain for an object that implements the appropriate method, calling the method on the first object that implements it.

## Topics

### Handling copy, cut, paste, and delete commands

- [cut(\_:)](uiresponderstandardeditactions/cut%28__%29.md): Removes the selected content and writes the data for it to the pasteboard.
- [copy(\_:)](uiresponderstandardeditactions/copy%28__%29.md): Copies the selected content to the pasteboard.
- [paste(\_:)](uiresponderstandardeditactions/paste%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface.
- [pasteAndGo(\_:)](uiresponderstandardeditactions/pasteandgo%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [pasteAndMatchStyle(\_:)](uiresponderstandardeditactions/pasteandmatchstyle%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface using the text style of the target.
- [pasteAndSearch(\_:)](uiresponderstandardeditactions/pasteandsearch%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and performs a search.
- [delete(\_:)](uiresponderstandardeditactions/delete%28__%29.md): Removes the selected content from your interface.

### Handling find and replace commands

- [find(\_:)](uiresponderstandardeditactions/find%28__%29.md): Begins a search for content in your app’s interface.
- [findNext(\_:)](uiresponderstandardeditactions/findnext%28__%29.md): Finds the next match in your app’s interface.
- [findPrevious(\_:)](uiresponderstandardeditactions/findprevious%28__%29.md): Finds the previous match in your app’s interface.
- [findAndReplace(\_:)](uiresponderstandardeditactions/findandreplace%28__%29.md): Begins a search for content in your app’s interface and provides a replacement.
- [useSelectionForFind(\_:)](uiresponderstandardeditactions/useselectionforfind%28__%29.md): Begins a search for the selected content in your app’s interface.

### Handling selection commands

- [select(\_:)](uiresponderstandardeditactions/select%28__%29.md): Selects the content in your responder.
- [selectAll(\_:)](uiresponderstandardeditactions/selectall%28__%29.md): Selects all of the content in the current responder.

### Handling data commands

- [duplicate(\_:)](uiresponderstandardeditactions/duplicate%28__%29.md): Duplicates data.
- [export(\_:)](uiresponderstandardeditactions/export%28__%29.md): Exports data in different file formats or to other apps.
- [move(\_:)](uiresponderstandardeditactions/move%28__%29.md): Prompts a person to specify a new location and moves data to that location.
- [rename(\_:)](uiresponderstandardeditactions/rename%28__%29.md): Changes a title.

### Handling a print command

- [printContent(\_:)](uiresponderstandardeditactions/printcontent%28__%29.md): Tells your app to print available content.

### Handling styled text editing

- [toggleBoldface(\_:)](uiresponderstandardeditactions/toggleboldface%28__%29.md): Toggles the bold style information of the selected text.
- [toggleItalics(\_:)](uiresponderstandardeditactions/toggleitalics%28__%29.md): Toggles the italic style information of the selected text.
- [toggleUnderline(\_:)](uiresponderstandardeditactions/toggleunderline%28__%29.md): Toggles the underline style information of the selected text.

### Handling writing direction changes

- [makeTextWritingDirectionLeftToRight(\_:)](uiresponderstandardeditactions/maketextwritingdirectionlefttoright%28__%29.md): Changes the writing direction to left-to-right.
- [makeTextWritingDirectionRightToLeft(\_:)](uiresponderstandardeditactions/maketextwritingdirectionrighttoleft%28__%29.md): Changes the writing direction to right-to-left.

### Handling size changes

- [increaseSize(\_:)](uiresponderstandardeditactions/increasesize%28__%29.md): Increases the size of the current object by one unit.
- [decreaseSize(\_:)](uiresponderstandardeditactions/decreasesize%28__%29.md): Decreases the size of the current object by one unit.

### Handling other text formatting changes

- [updateTextAttributes(conversionHandler:)](uiresponderstandardeditactions/updatetextattributes%28conversionhandler_%29.md): Tells your app to update the attributes of the currently selected text.

### Instance Methods

- [alignCenter(\_:)](uiresponderstandardeditactions/aligncenter%28__%29.md)
- [alignJustified(\_:)](uiresponderstandardeditactions/alignjustified%28__%29.md)
- [alignLeft(\_:)](uiresponderstandardeditactions/alignleft%28__%29.md)
- [alignRight(\_:)](uiresponderstandardeditactions/alignright%28__%29.md)
- [newFromPasteboard(\_:)](uiresponderstandardeditactions/newfrompasteboard%28__%29.md)
- [performClose(\_:)](uiresponderstandardeditactions/performclose%28__%29.md)
- [showWritingTools(\_:)](uiresponderstandardeditactions/showwritingtools%28__%29.md)
- [toggleInspector(\_:)](uiresponderstandardeditactions/toggleinspector%28__%29.md)
- [toggleSidebar(\_:)](uiresponderstandardeditactions/togglesidebar%28__%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIAccessibilityElement](uiaccessibilityelement.md)
- [UIActionSheet](uiactionsheet.md)
- [UIActivityIndicatorView](uiactivityindicatorview.md)
- [UIActivityViewController](uiactivityviewcontroller.md)
- [UIAlertController](uialertcontroller.md)
- [UIAlertView](uialertview.md)
- [UIApplication](uiapplication.md)
- [UIBackgroundExtensionView](uibackgroundextensionview.md)
- [UIButton](uibutton.md)
- [UICalendarView](uicalendarview.md)
- [UICloudSharingController](uicloudsharingcontroller.md)
- [UICollectionReusableView](uicollectionreusableview.md)
- [UICollectionView](uicollectionview.md)
- [UICollectionViewCell](uicollectionviewcell.md)
- [UICollectionViewController](uicollectionviewcontroller.md)
- [UICollectionViewListCell](uicollectionviewlistcell.md)
- [UIColorPickerViewController](uicolorpickerviewcontroller.md)
- [UIColorWell](uicolorwell.md)
- [UIContentUnavailableView](uicontentunavailableview.md)
- [UIControl](uicontrol.md)
- [UIDatePicker](uidatepicker.md)
- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md)
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md)
- [UIDocumentPickerExtensionViewController](uidocumentpickerextensionviewcontroller.md)
- [UIDocumentPickerViewController](uidocumentpickerviewcontroller.md)
- [UIDocumentViewController](uidocumentviewcontroller.md)
- [UIEventAttributionView](uieventattributionview.md)
- [UIFontPickerViewController](uifontpickerviewcontroller.md)
- [UIImagePickerController](uiimagepickercontroller.md)
- [UIImageView](uiimageview.md)
- [UIInputView](uiinputview.md)
- [UIInputViewController](uiinputviewcontroller.md)
- [UILabel](uilabel.md)
- [UIListContentView](uilistcontentview.md)
- [UINavigationBar](uinavigationbar.md)
- [UINavigationController](uinavigationcontroller.md)
- [UIPageControl](uipagecontrol.md)
- [UIPageViewController](uipageviewcontroller.md)
- [UIPasteControl](uipastecontrol.md)
- [UIPickerView](uipickerview.md)
- [UIPopoverBackgroundView](uipopoverbackgroundview.md)
- [UIProgressView](uiprogressview.md)
- [UIReferenceLibraryViewController](uireferencelibraryviewcontroller.md)
- [UIRefreshControl](uirefreshcontrol.md)
- [UIResponder](uiresponder.md)
- [UIScene](uiscene.md)
- [UIScrollView](uiscrollview.md)
- [UISearchBar](uisearchbar.md)
- [UISearchContainerViewController](uisearchcontainerviewcontroller.md)
- [UISearchController](uisearchcontroller.md)
- [UISearchTextField](uisearchtextfield.md)
- [UISegmentedControl](uisegmentedcontrol.md)
- [UISlider](uislider.md)
- [UISplitViewController](uisplitviewcontroller.md)
- [UIStackView](uistackview.md)
- [UIStandardTextCursorView](uistandardtextcursorview.md)
- [UIStepper](uistepper.md)
- [UISwitch](uiswitch.md)
- [UITabBar](uitabbar.md)
- [UITabBarController](uitabbarcontroller.md)
- [UITableView](uitableview.md)
- [UITableViewCell](uitableviewcell.md)
- [UITableViewController](uitableviewcontroller.md)
- [UITableViewHeaderFooterView](uitableviewheaderfooterview.md)
- [UITextField](uitextfield.md)
- [UITextFormattingViewController](uitextformattingviewcontroller.md)
- [UITextView](uitextview.md)
- [UIToolbar](uitoolbar.md)
- [UIVideoEditorController](uivideoeditorcontroller.md)
- [UIView](uiview.md)
- [UIViewController](uiviewcontroller.md)
- [UIVisualEffectView](uivisualeffectview.md)
- [UIWebView](uiwebview.md)
- [UIWindow](uiwindow.md)
- [UIWindowScene](uiwindowscene.md)

## See Also

### Edit menus

- [UIEditMenuInteraction](uieditmenuinteraction.md): An interaction that provides edit operations using a menu.
- [UIEditMenuInteractionDelegate](uieditmenuinteractiondelegate.md): The methods for customizing the menu the interaction displays.
- [UIEditMenuConfiguration](uieditmenuconfiguration.md): An object containing the configuration details for the menu your app presents in response to an edit menu interaction.

# UIResponderStandardEditActions (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of standard methods that apps can adopt to support editing.

## Declaration

```objectivec
@protocol UIResponderStandardEditActions <NSObject>
```

<a id="overview"></a>

## Overview

Responder objects can implement the methods of this protocol to handle standard editing-related actions. For example, a [UIEditMenuInteraction](uieditmenuinteraction.md) object displays the actions in an edit menu using these methods. UIKit searches the responder chain for an object that implements the appropriate method, calling the method on the first object that implements it.

## Topics

### Handling copy, cut, paste, and delete commands

- [cut:](uiresponderstandardeditactions/cut%28__%29.md): Removes the selected content and writes the data for it to the pasteboard.
- [copy:](uiresponderstandardeditactions/copy%28__%29.md): Copies the selected content to the pasteboard.
- [paste:](uiresponderstandardeditactions/paste%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface.
- [pasteAndGo:](uiresponderstandardeditactions/pasteandgo%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [pasteAndMatchStyle:](uiresponderstandardeditactions/pasteandmatchstyle%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface using the text style of the target.
- [pasteAndSearch:](uiresponderstandardeditactions/pasteandsearch%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and performs a search.
- [delete:](uiresponderstandardeditactions/delete%28__%29.md): Removes the selected content from your interface.

### Handling find and replace commands

- [find:](uiresponderstandardeditactions/find%28__%29.md): Begins a search for content in your app’s interface.
- [findNext:](uiresponderstandardeditactions/findnext%28__%29.md): Finds the next match in your app’s interface.
- [findPrevious:](uiresponderstandardeditactions/findprevious%28__%29.md): Finds the previous match in your app’s interface.
- [findAndReplace:](uiresponderstandardeditactions/findandreplace%28__%29.md): Begins a search for content in your app’s interface and provides a replacement.
- [useSelectionForFind:](uiresponderstandardeditactions/useselectionforfind%28__%29.md): Begins a search for the selected content in your app’s interface.

### Handling selection commands

- [select:](uiresponderstandardeditactions/select%28__%29.md): Selects the content in your responder.
- [selectAll:](uiresponderstandardeditactions/selectall%28__%29.md): Selects all of the content in the current responder.

### Handling data commands

- [duplicate:](uiresponderstandardeditactions/duplicate%28__%29.md): Duplicates data.
- [export:](uiresponderstandardeditactions/export%28__%29.md): Exports data in different file formats or to other apps.
- [move:](uiresponderstandardeditactions/move%28__%29.md): Prompts a person to specify a new location and moves data to that location.
- [rename:](uiresponderstandardeditactions/rename%28__%29.md): Changes a title.

### Handling a print command

- [print:](uiresponderstandardeditactions/printcontent%28__%29.md): Tells your app to print available content.

### Handling styled text editing

- [toggleBoldface:](uiresponderstandardeditactions/toggleboldface%28__%29.md): Toggles the bold style information of the selected text.
- [toggleItalics:](uiresponderstandardeditactions/toggleitalics%28__%29.md): Toggles the italic style information of the selected text.
- [toggleUnderline:](uiresponderstandardeditactions/toggleunderline%28__%29.md): Toggles the underline style information of the selected text.

### Handling writing direction changes

- [makeTextWritingDirectionLeftToRight:](uiresponderstandardeditactions/maketextwritingdirectionlefttoright%28__%29.md): Changes the writing direction to left-to-right.
- [makeTextWritingDirectionRightToLeft:](uiresponderstandardeditactions/maketextwritingdirectionrighttoleft%28__%29.md): Changes the writing direction to right-to-left.

### Handling size changes

- [increaseSize:](uiresponderstandardeditactions/increasesize%28__%29.md): Increases the size of the current object by one unit.
- [decreaseSize:](uiresponderstandardeditactions/decreasesize%28__%29.md): Decreases the size of the current object by one unit.

### Handling other text formatting changes

- [updateTextAttributesWithConversionHandler:](uiresponderstandardeditactions/updatetextattributes%28conversionhandler_%29.md): Tells your app to update the attributes of the currently selected text.

### Instance Methods

- [alignCenter:](uiresponderstandardeditactions/aligncenter%28__%29.md)
- [alignJustified:](uiresponderstandardeditactions/alignjustified%28__%29.md)
- [alignLeft:](uiresponderstandardeditactions/alignleft%28__%29.md)
- [alignRight:](uiresponderstandardeditactions/alignright%28__%29.md)
- [newFromPasteboard:](uiresponderstandardeditactions/newfrompasteboard%28__%29.md)
- [performClose:](uiresponderstandardeditactions/performclose%28__%29.md)
- [showWritingTools:](uiresponderstandardeditactions/showwritingtools%28__%29.md)
- [toggleInspector:](uiresponderstandardeditactions/toggleinspector%28__%29.md)
- [toggleSidebar:](uiresponderstandardeditactions/togglesidebar%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIResponder](uiresponder.md)

## See Also

### Edit menus

- [UIEditMenuInteraction](uieditmenuinteraction.md): An interaction that provides edit operations using a menu.
- [UIEditMenuInteractionDelegate](uieditmenuinteractiondelegate.md): The methods for customizing the menu the interaction displays.
- [UIEditMenuConfiguration](uieditmenuconfiguration.md): An object containing the configuration details for the menu your app presents in response to an edit menu interaction.
