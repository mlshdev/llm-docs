> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar](https://developer.apple.com/documentation/uikit/uisearchbar)

# UISearchBar (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A specialized view for receiving search-related information from the user.

## Declaration

```swift
@MainActor class UISearchBar
```

<a id="overview"></a>

## Overview

[UISearchBar](uisearchbar.md) provides a text field for entering text, a search button, a bookmark button, and a cancel button. A search bar doesn’t actually perform any searches. You use a delegate, an object conforming to the [UISearchBarDelegate](uisearchbardelegate.md) protocol, to implement the actions when the user enters text or clicks buttons. For details about interacting with the text field, accessing its content, and using tokens, see [UISearchTextField](uisearchtextfield.md) and [UISearchToken](uisearchtoken.md).

<a id="Customize-appearance"></a>

### Customize appearance

You can customize the appearance of search bars one at a time, or you can use the appearance proxy (`[UISearchBar appearance]`) to customize the appearance of all search bars in an app.

In general, you should specify a value for the normal state to be used by other states which don’t have a custom value set. Similarly, when a property is dependent on the bar metrics (on iPhone, in landscape orientation bars have a different height from standard), you should specify a value for `UIBarMetricsDefault`.

## Topics

### Creating a search bar

- [init()](uisearchbar/init%28%29.md): Initializes the search bar to its default state.
- [init(coder:)](uisearchbar/init%28coder_%29.md): Creates a search bar from data in a given unarchiver.
- [init(frame:)](uisearchbar/init%28frame_%29.md): Creates a search bar with a specified frame.

### Handling search bar interactions

- [delegate](uisearchbar/delegate.md): The search bar’s delegate object.
- [UISearchBarDelegate](uisearchbardelegate.md): A collection of optional methods that you implement to make a search bar control functional.

### Getting the search text

- [placeholder](uisearchbar/placeholder.md): The string to display when there’s no other text in the text field.
- [prompt](uisearchbar/prompt.md): A single line of text displayed at the top of the search bar.
- [text](uisearchbar/text.md): The current or starting search text.
- [searchTextField](uisearchbar/searchtextfield.md): The text field that the user enters a search query into.

### Configuring the search bar

- [isEnabled](uisearchbar/isenabled.md): A Boolean value indicating whether the search bar is in the enabled state.
- [barTintColor](uisearchbar/bartintcolor.md): The tint color to apply to the search bar background.
- [searchBarStyle](uisearchbar/searchbarstyle.md): A search bar style that specifies the search bar’s appearance.
- [UISearchBar.Style](uisearchbar/style.md): Specifies whether the search bar has a background.
- [tintColor](uisearchbar/tintcolor.md): The tint color to apply to key elements in the search bar.
- [isTranslucent](uisearchbar/istranslucent.md): A Boolean value that indicates whether the search bar is translucent (true) or not (false).
- [barStyle](uisearchbar/barstyle.md): A bar style that specifies the search bar’s appearance.
- [UIBarStyle](uibarstyle.md): Defines the stylistic appearance of different types of views.

### Customizing the keyboard shortcut items

- [inputAssistantItem](uisearchbar/inputassistantitem.md): The input assistant to use for configuring the keyboard’s shortcuts bar.

### Configuring the search interface

- [showsBookmarkButton](uisearchbar/showsbookmarkbutton.md): A Boolean value indicating whether the bookmark button is displayed.
- [showsCancelButton](uisearchbar/showscancelbutton.md): A Boolean value indicating whether the cancel button is displayed.
- [setShowsCancelButton(\_:animated:)](uisearchbar/setshowscancelbutton%28__animated_%29.md): Sets the display state of the cancel button optionally with animation.
- [showsSearchResultsButton](uisearchbar/showssearchresultsbutton.md): A Boolean value indicating whether the search results button is displayed.
- [isSearchResultsButtonSelected](uisearchbar/issearchresultsbuttonselected.md): A Boolean value indicating whether the search results button is selected.

### Customizing the search bar appearance

- [backgroundImage](uisearchbar/backgroundimage.md): The background image for the search bar.
- [backgroundImage(for:barMetrics:)](uisearchbar/backgroundimage%28for_barmetrics_%29.md): Returns the image used for the background in a given position and with given metrics.
- [setBackgroundImage(\_:for:barMetrics:)](uisearchbar/setbackgroundimage%28__for_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.
- [image(for:state:)](uisearchbar/image%28for_state_%29.md): Returns the image for a given search bar icon type and control state.
- [setImage(\_:for:state:)](uisearchbar/setimage%28__for_state_%29.md): Sets the image for a given search bar icon type and control state.
- [positionAdjustment(for:)](uisearchbar/positionadjustment%28for_%29.md): Returns the position adjustment for a given icon.
- [setPositionAdjustment(\_:for:)](uisearchbar/setpositionadjustment%28__for_%29.md): Returns the position adjustment for a given icon.
- [inputAccessoryView](uisearchbar/inputaccessoryview.md): A custom input accessory view for the keyboard of the search bar.
- [searchFieldBackgroundImage(for:)](uisearchbar/searchfieldbackgroundimage%28for_%29.md): Returns the search text field image for a given state.
- [setSearchFieldBackgroundImage(\_:for:)](uisearchbar/setsearchfieldbackgroundimage%28__for_%29.md): Sets the search text field image for a given state.
- [searchFieldBackgroundPositionAdjustment](uisearchbar/searchfieldbackgroundpositionadjustment.md): The offset of the search text field background in the search bar.
- [searchTextPositionAdjustment](uisearchbar/searchtextpositionadjustment.md): The offset of the text within the search text field background.

### Configuring scope bar buttons

- [scopeButtonTitles](uisearchbar/scopebuttontitles.md): An array of strings indicating the titles of the scope buttons.
- [selectedScopeButtonIndex](uisearchbar/selectedscopebuttonindex.md): The index of the selected scope button.
- [showsScopeBar](uisearchbar/showsscopebar.md): Specifies whether the scope bar is displayed.
- [setShowsScope(\_:animated:)](uisearchbar/setshowsscope%28__animated_%29.md): Specifies whether the scope bar is displayed, optionally using an animation.

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](uisearchbar/scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImage(for:)](uisearchbar/scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage(\_:for:)](uisearchbar/setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImage(forLeftSegmentState:rightSegmentState:)](uisearchbar/scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage(\_:forLeftSegmentState:rightSegmentState:)](uisearchbar/setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributes(for:)](uisearchbar/scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes(\_:for:)](uisearchbar/setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.

### Managing dictation

- [isLookToDictateEnabled](uisearchbar/islooktodictateenabled.md)
- [UILookToDictateCapable](uilooktodictatecapable.md)

### Constants

- [UISearchBar.Icon](uisearchbar/icon.md): Constants to identify the icons used in the search bar.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearance](uiappearance.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIBarPositioning](uibarpositioning.md)
- [UICoordinateSpace](uicoordinatespace.md)
- [UIDynamicItem](uidynamicitem.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIFocusItem](uifocusitem.md)
- [UIFocusItemContainer](uifocusitemcontainer.md)
- [UILargeContentViewerItem](uilargecontentvieweritem.md)
- [UILookToDictateCapable](uilooktodictatecapable.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UITextInputTraits](uitextinputtraits.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Search interface

- [UISearchContainerViewController](uisearchcontainerviewcontroller.md): A view controller that manages the presentation of search results in your interface.
- [UISearchController](uisearchcontroller.md): A view controller that manages the display of search results based on interactions with a search bar.
- [UISearchResultsUpdating](uisearchresultsupdating.md): A set of methods that let you update search results based on information the user enters into the search bar.
- [Displaying searchable content by using a search controller](displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [Using suggested searches with a search controller](using-suggested-searches-with-a-search-controller.md): Create a search interface with a table view of suggested searches.

# UISearchBar (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A specialized view for receiving search-related information from the user.

## Declaration

```objectivec
@interface UISearchBar : UIView
```

<a id="overview"></a>

## Overview

[UISearchBar](uisearchbar.md) provides a text field for entering text, a search button, a bookmark button, and a cancel button. A search bar doesn’t actually perform any searches. You use a delegate, an object conforming to the [UISearchBarDelegate](uisearchbardelegate.md) protocol, to implement the actions when the user enters text or clicks buttons. For details about interacting with the text field, accessing its content, and using tokens, see [UISearchTextField](uisearchtextfield.md) and [UISearchToken](uisearchtoken.md).

<a id="Customize-appearance"></a>

### Customize appearance

You can customize the appearance of search bars one at a time, or you can use the appearance proxy (`[UISearchBar appearance]`) to customize the appearance of all search bars in an app.

In general, you should specify a value for the normal state to be used by other states which don’t have a custom value set. Similarly, when a property is dependent on the bar metrics (on iPhone, in landscape orientation bars have a different height from standard), you should specify a value for `UIBarMetricsDefault`.

## Topics

### Creating a search bar

- [init](uisearchbar/init%28%29.md): Initializes the search bar to its default state.
- [initWithCoder:](uisearchbar/init%28coder_%29.md): Creates a search bar from data in a given unarchiver.
- [initWithFrame:](uisearchbar/init%28frame_%29.md): Creates a search bar with a specified frame.

### Handling search bar interactions

- [delegate](uisearchbar/delegate.md): The search bar’s delegate object.
- [UISearchBarDelegate](uisearchbardelegate.md): A collection of optional methods that you implement to make a search bar control functional.

### Getting the search text

- [placeholder](uisearchbar/placeholder.md): The string to display when there’s no other text in the text field.
- [prompt](uisearchbar/prompt.md): A single line of text displayed at the top of the search bar.
- [text](uisearchbar/text.md): The current or starting search text.
- [searchTextField](uisearchbar/searchtextfield.md): The text field that the user enters a search query into.

### Configuring the search bar

- [enabled](uisearchbar/isenabled.md): A Boolean value indicating whether the search bar is in the enabled state.
- [barTintColor](uisearchbar/bartintcolor.md): The tint color to apply to the search bar background.
- [searchBarStyle](uisearchbar/searchbarstyle.md): A search bar style that specifies the search bar’s appearance.
- [UISearchBarStyle](uisearchbar/style.md): Specifies whether the search bar has a background.
- [tintColor](uisearchbar/tintcolor.md): The tint color to apply to key elements in the search bar.
- [translucent](uisearchbar/istranslucent.md): A Boolean value that indicates whether the search bar is translucent (true) or not (false).
- [barStyle](uisearchbar/barstyle.md): A bar style that specifies the search bar’s appearance.
- [UIBarStyle](uibarstyle.md): Defines the stylistic appearance of different types of views.

### Customizing the keyboard shortcut items

- [inputAssistantItem](uisearchbar/inputassistantitem.md): The input assistant to use for configuring the keyboard’s shortcuts bar.

### Configuring the search interface

- [showsBookmarkButton](uisearchbar/showsbookmarkbutton.md): A Boolean value indicating whether the bookmark button is displayed.
- [showsCancelButton](uisearchbar/showscancelbutton.md): A Boolean value indicating whether the cancel button is displayed.
- [setShowsCancelButton:animated:](uisearchbar/setshowscancelbutton%28__animated_%29.md): Sets the display state of the cancel button optionally with animation.
- [showsSearchResultsButton](uisearchbar/showssearchresultsbutton.md): A Boolean value indicating whether the search results button is displayed.
- [searchResultsButtonSelected](uisearchbar/issearchresultsbuttonselected.md): A Boolean value indicating whether the search results button is selected.

### Customizing the search bar appearance

- [backgroundImage](uisearchbar/backgroundimage.md): The background image for the search bar.
- [backgroundImageForBarPosition:barMetrics:](uisearchbar/backgroundimage%28for_barmetrics_%29.md): Returns the image used for the background in a given position and with given metrics.
- [setBackgroundImage:forBarPosition:barMetrics:](uisearchbar/setbackgroundimage%28__for_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.
- [imageForSearchBarIcon:state:](uisearchbar/image%28for_state_%29.md): Returns the image for a given search bar icon type and control state.
- [setImage:forSearchBarIcon:state:](uisearchbar/setimage%28__for_state_%29.md): Sets the image for a given search bar icon type and control state.
- [positionAdjustmentForSearchBarIcon:](uisearchbar/positionadjustment%28for_%29.md): Returns the position adjustment for a given icon.
- [setPositionAdjustment:forSearchBarIcon:](uisearchbar/setpositionadjustment%28__for_%29.md): Returns the position adjustment for a given icon.
- [inputAccessoryView](uisearchbar/inputaccessoryview.md): A custom input accessory view for the keyboard of the search bar.
- [searchFieldBackgroundImageForState:](uisearchbar/searchfieldbackgroundimage%28for_%29.md): Returns the search text field image for a given state.
- [setSearchFieldBackgroundImage:forState:](uisearchbar/setsearchfieldbackgroundimage%28__for_%29.md): Sets the search text field image for a given state.
- [searchFieldBackgroundPositionAdjustment](uisearchbar/searchfieldbackgroundpositionadjustment.md): The offset of the search text field background in the search bar.
- [searchTextPositionAdjustment](uisearchbar/searchtextpositionadjustment.md): The offset of the text within the search text field background.

### Configuring scope bar buttons

- [scopeButtonTitles](uisearchbar/scopebuttontitles.md): An array of strings indicating the titles of the scope buttons.
- [selectedScopeButtonIndex](uisearchbar/selectedscopebuttonindex.md): The index of the selected scope button.
- [showsScopeBar](uisearchbar/showsscopebar.md): Specifies whether the scope bar is displayed.
- [setShowsScopeBar:animated:](uisearchbar/setshowsscope%28__animated_%29.md): Specifies whether the scope bar is displayed, optionally using an animation.

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](uisearchbar/scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImageForState:](uisearchbar/scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage:forState:](uisearchbar/setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImageForLeftSegmentState:rightSegmentState:](uisearchbar/scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage:forLeftSegmentState:rightSegmentState:](uisearchbar/setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributesForState:](uisearchbar/scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes:forState:](uisearchbar/setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.

### Managing dictation

- [lookToDictateEnabled](uisearchbar/islooktodictateenabled.md)
- [UILookToDictateCapable](uilooktodictatecapable.md)

### Constants

- [UISearchBarIcon](uisearchbar/icon.md): Constants to identify the icons used in the search bar.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [UIBarPositioning](uibarpositioning.md)
- [UILookToDictateCapable](uilooktodictatecapable.md)
- [UITextInputTraits](uitextinputtraits.md)

## See Also

### Search interface

- [UISearchContainerViewController](uisearchcontainerviewcontroller.md): A view controller that manages the presentation of search results in your interface.
- [UISearchController](uisearchcontroller.md): A view controller that manages the display of search results based on interactions with a search bar.
- [UISearchResultsUpdating](uisearchresultsupdating.md): A set of methods that let you update search results based on information the user enters into the search bar.
- [Displaying searchable content by using a search controller](displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [Using suggested searches with a search controller](using-suggested-searches-with-a-search-controller.md): Create a search interface with a table view of suggested searches.
