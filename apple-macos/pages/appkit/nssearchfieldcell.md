> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfieldcell](https://developer.apple.com/documentation/appkit/nssearchfieldcell)

# NSSearchFieldCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The programmatic interface for text fields that are used for text-based searches.

## Declaration

```swift
class NSSearchFieldCell
```

<a id="overview"></a>

## Overview

The [NSSearchFieldCell](nssearchfieldcell.md) class defines the programmatic interface for text fields that are optimized for text-based searches. An [NSSearchFieldCell](nssearchfieldcell.md) object is “wrapped” by an [NSSearchField](nssearchfield.md) control object, which directly inherits from the [NSTextField](nstextfield.md) class. The search field implemented by these classes presents a standard user interface for searches, including a search button, a cancel button, and a pop-up icon menu for listing recent search strings and custom search categories.

When the user types and then pauses, the cell’s action message is sent to its target. You can query the cell’s string value for the current text to search for. Do not rely on the sender of the action to be an [NSMenu](nsmenu.md) object because the menu may change. If you need to change the menu, modify the search menu template and update the value in the [searchMenuTemplate](nssearchfieldcell/searchmenutemplate.md) property.

## Topics

### Managing buttons

- [searchButtonCell](nssearchfieldcell/searchbuttoncell.md): The button cell used to display the search-button image.
- [resetSearchButtonCell()](nssearchfieldcell/resetsearchbuttoncell%28%29.md): Resets the search button cell to its default attributes.
- [cancelButtonCell](nssearchfieldcell/cancelbuttoncell.md): The button cell used to display the cancel-button image.
- [resetCancelButtonCell()](nssearchfieldcell/resetcancelbuttoncell%28%29.md): Resets the cancel button cell to its default attributes.

### Custom layout

- [searchTextRect(forBounds:)](nssearchfieldcell/searchtextrect%28forbounds_%29.md): Modifies the bounding rectangle for the search-text field cell.
- [searchButtonRect(forBounds:)](nssearchfieldcell/searchbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the search button cell.
- [cancelButtonRect(forBounds:)](nssearchfieldcell/cancelbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the cancel button cell.

### Managing menu templates

- [searchMenuTemplate](nssearchfieldcell/searchmenutemplate.md): The menu object used to dynamically construct the search field’s pop-up icon menu.

### Managing search modes

- [sendsWholeSearchString](nssearchfieldcell/sendswholesearchstring.md): A Boolean value indicating whether the cell calls its search action method when the user clicks the search button (or presses Return) or after each keystroke.
- [sendsSearchStringImmediately](nssearchfieldcell/sendssearchstringimmediately.md): A Boolean value indicating whether the cell calls its action method immediately when an appropriate action occurs.

### Managing recent search strings

- [maximumRecents](nssearchfieldcell/maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [recentSearches](nssearchfieldcell/recentsearches.md): An array of the recent search strings to display in the pop-up icon menu of the search field.
- [recentsAutosaveName](nssearchfieldcell/recentsautosavename.md): The autosave name under which the search field automatically saves the list of recent search strings.

### Constants

- [Menu tags](menu-tags.md): Constants for identifying special menu items in the search-menu template.

### Initializers

- [init(coder:)](nssearchfieldcell/init%28coder_%29.md)
- [init(textCell:)](nssearchfieldcell/init%28textcell_%29.md)

## Relationships

### Inherits From

- [NSTextFieldCell](nstextfieldcell.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSSearchFieldCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The programmatic interface for text fields that are used for text-based searches.

## Declaration

```objectivec
@interface NSSearchFieldCell : NSTextFieldCell
```

<a id="overview"></a>

## Overview

The [NSSearchFieldCell](nssearchfieldcell.md) class defines the programmatic interface for text fields that are optimized for text-based searches. An [NSSearchFieldCell](nssearchfieldcell.md) object is “wrapped” by an [NSSearchField](nssearchfield.md) control object, which directly inherits from the [NSTextField](nstextfield.md) class. The search field implemented by these classes presents a standard user interface for searches, including a search button, a cancel button, and a pop-up icon menu for listing recent search strings and custom search categories.

When the user types and then pauses, the cell’s action message is sent to its target. You can query the cell’s string value for the current text to search for. Do not rely on the sender of the action to be an [NSMenu](nsmenu.md) object because the menu may change. If you need to change the menu, modify the search menu template and update the value in the [searchMenuTemplate](nssearchfieldcell/searchmenutemplate.md) property.

## Topics

### Managing buttons

- [searchButtonCell](nssearchfieldcell/searchbuttoncell.md): The button cell used to display the search-button image.
- [resetSearchButtonCell](nssearchfieldcell/resetsearchbuttoncell%28%29.md): Resets the search button cell to its default attributes.
- [cancelButtonCell](nssearchfieldcell/cancelbuttoncell.md): The button cell used to display the cancel-button image.
- [resetCancelButtonCell](nssearchfieldcell/resetcancelbuttoncell%28%29.md): Resets the cancel button cell to its default attributes.

### Custom layout

- [searchTextRectForBounds:](nssearchfieldcell/searchtextrect%28forbounds_%29.md): Modifies the bounding rectangle for the search-text field cell.
- [searchButtonRectForBounds:](nssearchfieldcell/searchbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the search button cell.
- [cancelButtonRectForBounds:](nssearchfieldcell/cancelbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the cancel button cell.

### Managing menu templates

- [searchMenuTemplate](nssearchfieldcell/searchmenutemplate.md): The menu object used to dynamically construct the search field’s pop-up icon menu.

### Managing search modes

- [sendsWholeSearchString](nssearchfieldcell/sendswholesearchstring.md): A Boolean value indicating whether the cell calls its search action method when the user clicks the search button (or presses Return) or after each keystroke.
- [sendsSearchStringImmediately](nssearchfieldcell/sendssearchstringimmediately.md): A Boolean value indicating whether the cell calls its action method immediately when an appropriate action occurs.

### Managing recent search strings

- [maximumRecents](nssearchfieldcell/maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [recentSearches](nssearchfieldcell/recentsearches.md): An array of the recent search strings to display in the pop-up icon menu of the search field.
- [recentsAutosaveName](nssearchfieldcell/recentsautosavename.md): The autosave name under which the search field automatically saves the list of recent search strings.

### Constants

- [Menu tags](menu-tags.md): Constants for identifying special menu items in the search-menu template.

### Initializers

- [initWithCoder:](nssearchfieldcell/init%28coder_%29.md)
- [initTextCell:](nssearchfieldcell/init%28textcell_%29.md)

## Relationships

### Inherits From

- [NSTextFieldCell](nstextfieldcell.md)
