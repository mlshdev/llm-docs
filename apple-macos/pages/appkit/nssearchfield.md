> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield](https://developer.apple.com/documentation/appkit/nssearchfield)

# NSSearchField (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A text field optimized for performing text-based searches.

## Declaration

```swift
class NSSearchField
```

<a id="overview"></a>

## Overview

[NSSearchField](nssearchfield.md) provides a customized text field for entering search data. The class also provides a search button, a cancel button, and a pop-up icon menu for listing recent search strings and custom search categories.

An [NSSearchField](nssearchfield.md) object wraps an [NSSearchFieldCell](nssearchfieldcell.md) object. The cell provides access to most search field attributes and a comprehensive programmatic interface for manipulating the search field. You can use an [NSSearchField](nssearchfield.md) object to manipulate some aspects of the search field.

For additional information about search fields and how to implement them, see the [NSSearchFieldCell](nssearchfieldcell.md) class.

## Topics

### Managing Search

- [delegate](nssearchfield/delegate.md): The delegate for the search field, or `nil` if the search field doesn’t have a delegate.
- [NSSearchFieldDelegate](nssearchfielddelegate.md): A protocol that a search field delegate can use to determine when a search started or ended.

### Managing Menu Templates

- [searchMenuTemplate](nssearchfield/searchmenutemplate.md): The menu object used to dynamically construct the search field’s pop-up icon menu.
- [clearRecentsMenuItemTag](nssearchfield/clearrecentsmenuitemtag.md): The menu item for clearing the current set of recent string searches in the menu.
- [noRecentsMenuItemTag](nssearchfield/norecentsmenuitemtag.md): The menu item that describes a lack of recent search strings.
- [recentsMenuItemTag](nssearchfield/recentsmenuitemtag.md): The location of recent search strings in the “recents” menu group.
- [recentsTitleMenuItemTag](nssearchfield/recentstitlemenuitemtag.md): The menu item that provides the title of the menu group for recent search strings.

### Managing Search Modes

- [sendsSearchStringImmediately](nssearchfield/sendssearchstringimmediately.md): A Boolean value indicating whether the cell calls its action method immediately when an appropriate action occurs.
- [sendsWholeSearchString](nssearchfield/sendswholesearchstring.md): A Boolean value indicating whether the cell calls its search action method when the user clicks the search button or presses Return, or after each keystroke.

### Managing Recent Searches

- [recentSearches](nssearchfield/recentsearches.md): The list of recent search strings for the control.
- [maximumRecents](nssearchfield/maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [recentsAutosaveName](nssearchfield/recentsautosavename-swift.property.md): The name under which the search field automatically archives the list of recent search strings.
- [NSSearchField.RecentsAutosaveName](nssearchfield/recentsautosavename-swift.typealias.md): The string that stores the name under which a search field automatically archives a list of recent search strings.

### Getting Search Field Metrics

- [cancelButtonBounds](nssearchfield/cancelbuttonbounds.md): The rectangle for the cancel button within the bounds of the search field.
- [searchButtonBounds](nssearchfield/searchbuttonbounds.md): The rectangle for the search button within the bounds of the search field.
- [searchTextBounds](nssearchfield/searchtextbounds.md): The rectangle for the search text within the bounds of the search field.

### Deprecated Symbols

- [centersPlaceholder](nssearchfield/centersplaceholder.md): Deprecated. A Boolean value that determines whether the search field’s components are centered within the control.
- [rectForCancelButton(whenCentered:)](nssearchfield/rectforcancelbutton%28whencentered_%29.md): Deprecated. The rectangle for the cancel button within the bounds of the search field.
- [rectForSearchButton(whenCentered:)](nssearchfield/rectforsearchbutton%28whencentered_%29.md): Deprecated. The rectangle for the search button within the bounds of the search field.
- [rectForSearchText(whenCentered:)](nssearchfield/rectforsearchtext%28whencentered_%29.md): Deprecated. The rectangle for the search text within the bounds of the field.

## Relationships

### Inherits From

- [NSTextField](nstextfield.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAccessibilityStaticText](nsaccessibilitystatictext.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTextContent](nstextcontent.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSSearchField (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A text field optimized for performing text-based searches.

## Declaration

```objectivec
@interface NSSearchField : NSTextField
```

<a id="overview"></a>

## Overview

[NSSearchField](nssearchfield.md) provides a customized text field for entering search data. The class also provides a search button, a cancel button, and a pop-up icon menu for listing recent search strings and custom search categories.

An [NSSearchField](nssearchfield.md) object wraps an [NSSearchFieldCell](nssearchfieldcell.md) object. The cell provides access to most search field attributes and a comprehensive programmatic interface for manipulating the search field. You can use an [NSSearchField](nssearchfield.md) object to manipulate some aspects of the search field.

For additional information about search fields and how to implement them, see the [NSSearchFieldCell](nssearchfieldcell.md) class.

## Topics

### Managing Search

- [delegate](nssearchfield/delegate.md): The delegate for the search field, or `nil` if the search field doesn’t have a delegate.
- [NSSearchFieldDelegate](nssearchfielddelegate.md): A protocol that a search field delegate can use to determine when a search started or ended.

### Managing Menu Templates

- [searchMenuTemplate](nssearchfield/searchmenutemplate.md): The menu object used to dynamically construct the search field’s pop-up icon menu.
- [NSSearchFieldClearRecentsMenuItemTag](nssearchfield/clearrecentsmenuitemtag.md): The menu item for clearing the current set of recent string searches in the menu.
- [NSSearchFieldNoRecentsMenuItemTag](nssearchfield/norecentsmenuitemtag.md): The menu item that describes a lack of recent search strings.
- [NSSearchFieldRecentsMenuItemTag](nssearchfield/recentsmenuitemtag.md): The location of recent search strings in the “recents” menu group.
- [NSSearchFieldRecentsTitleMenuItemTag](nssearchfield/recentstitlemenuitemtag.md): The menu item that provides the title of the menu group for recent search strings.

### Managing Search Modes

- [sendsSearchStringImmediately](nssearchfield/sendssearchstringimmediately.md): A Boolean value indicating whether the cell calls its action method immediately when an appropriate action occurs.
- [sendsWholeSearchString](nssearchfield/sendswholesearchstring.md): A Boolean value indicating whether the cell calls its search action method when the user clicks the search button or presses Return, or after each keystroke.

### Managing Recent Searches

- [recentSearches](nssearchfield/recentsearches.md): The list of recent search strings for the control.
- [maximumRecents](nssearchfield/maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [recentsAutosaveName](nssearchfield/recentsautosavename-swift.property.md): The name under which the search field automatically archives the list of recent search strings.
- [NSSearchFieldRecentsAutosaveName](nssearchfield/recentsautosavename-swift.typealias.md): The string that stores the name under which a search field automatically archives a list of recent search strings.

### Getting Search Field Metrics

- [cancelButtonBounds](nssearchfield/cancelbuttonbounds.md): The rectangle for the cancel button within the bounds of the search field.
- [searchButtonBounds](nssearchfield/searchbuttonbounds.md): The rectangle for the search button within the bounds of the search field.
- [searchTextBounds](nssearchfield/searchtextbounds.md): The rectangle for the search text within the bounds of the search field.

### Deprecated Symbols

- [centersPlaceholder](nssearchfield/centersplaceholder.md): Deprecated. A Boolean value that determines whether the search field’s components are centered within the control.
- [rectForCancelButtonWhenCentered:](nssearchfield/rectforcancelbutton%28whencentered_%29.md): Deprecated. The rectangle for the cancel button within the bounds of the search field.
- [rectForSearchButtonWhenCentered:](nssearchfield/rectforsearchbutton%28whencentered_%29.md): Deprecated. The rectangle for the search button within the bounds of the search field.
- [rectForSearchTextWhenCentered:](nssearchfield/rectforsearchtext%28whencentered_%29.md): Deprecated. The rectangle for the search text within the bounds of the field.

## Relationships

### Inherits From

- [NSTextField](nstextfield.md)
