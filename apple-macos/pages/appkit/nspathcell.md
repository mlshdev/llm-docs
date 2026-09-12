> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell](https://developer.apple.com/documentation/appkit/nspathcell)

# NSPathCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

The user interface of a path control object.

## Declaration

```swift
class NSPathCell
```

<a id="overview"></a>

## Overview

[NSPathCell](nspathcell.md) maintains a collection of [NSPathComponentCell](nspathcomponentcell.md) objects that represent a particular path to be displayed to the user.

The path shown can be set with the [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md) method. Doing so removes all displayed `NSPathComponentCell` objects and automatically fills the control with `NSPathComponentCell` objects set to have the appropriate icons, display titles, and `NSURL` values for the particular path component they represent. Alternatively, you can fill the control manually by setting the cell array or directly modifying existing cells.

Both an action and double-click action can be set for the path control. To find out what path component cell was clicked in the action, you can read the value of [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md). When the style is set to [NSPathControl.Style.popUp](nspathcontrol/style/popup.md), the action is still sent, and the [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md) value for the represented menu item is correctly set. The [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md) value is valid only when the action is being sent. It is also valid when the keyboard is used to invoke the action.

Automatic animated expansion of partially hidden `NSPathComponentCell` objects happens if you correctly call [mouseEntered(with:)](nsresponder/mouseentered%28with_%29.md) and [mouseExited(with:)](nsresponder/mouseexited%28with_%29.md) for each `NSPathComponentCell` in the `NSPathCell` object. This is not required if the [pathStyle](nspathcell/pathstyle.md) is set to [NSPathControl.Style.popUp](nspathcontrol/style/popup.md), or if you wish to not have the animation.

`NSPathCell` supports several path display styles. [NSPathControl.Style.standard](nspathcontrol/style/standard.md) has a light blue background with arrows indicating the path. [NSPathStyleNavigationBar](nspathstyle/nspathstylenavigationbar.md) has more defined arrows (chevrons) and looks a little like a segmented button. [NSPathControl.Style.popUp](nspathcontrol/style/popup.md) looks and works like an [NSPopUpButton](nspopupbutton.md) object to display the full path, or, if the cell is editable, select a new path.

If the cell’s [isEditable](nscell/iseditable.md) method returns [true](https://developer.apple.com/documentation/swift/true) (the default), you can drag and drop into the cell to change the value. You can constrain what can be dropped using UTIs (Uniform Type Identifiers) with [allowedTypes](nspathcell/allowedtypes.md) or the appropriate delegate methods on `NSPathControl`.

If the cell’s [isSelectable](nscell/isselectable.md) method returns [true](https://developer.apple.com/documentation/swift/true) (the default), the cell’s contents can automatically be dragged out. The proper UTI, filename, and URL are placed on the pasteboard. You can further control or limit this by using the appropriate delegate methods on `NSPathControl`.

If the cell is editable and has the path style set to [NSPathControl.Style.popUp](nspathcontrol/style/popup.md), an additional item in the pop-up menu allows selecting another location. By default, an `NSOpenPanel` object is configured based on the allowed types. The `NSOpenPanel` object can be customized with a delegate method.

<a id="Setting-the-control-size"></a>

## Setting the control size

When setting the [controlSize](nscell/controlsize.md) property, `NSPathCell` properly respects the control size for the [NSPathControl.Style.standard](nspathcontrol/style/standard.md) and [NSPathControl.Style.popUp](nspathcontrol/style/popup.md) styles. When the control size is set, the new size is propagated to subcells. When the path style is set to [NSPathStyleNavigationBar](nspathstyle/nspathstylenavigationbar.md), you cannot change the control size, and it is always set to [NSSmallControlSize](nssmallcontrolsize.md). Attempting to change the control size when the path style is [NSPathStyleNavigationBar](nspathstyle/nspathstylenavigationbar.md) causes an assertion. Setting the path style to [NSPathStyleNavigationBar](nspathstyle/nspathstylenavigationbar.md) forces the control size to be [NSSmallControlSize](nssmallcontrolsize.md).

## Topics

### Displaying Hidden Components

- [mouseEntered(with:frame:in:)](nspathcell/mouseentered%28with_frame_in_%29.md): Displays the cell component over which the mouse is hovering.
- [mouseExited(with:frame:in:)](nspathcell/mouseexited%28with_frame_in_%29.md): Hides the cell component over which the mouse is hovering.

### Setting the Allowed Types

- [allowedTypes](nspathcell/allowedtypes.md): Sets the component types allowed in the path when the cell is editable.

### Setting the Control Style

- [pathStyle](nspathcell/pathstyle.md): Sets the receiver’s path style.

### Setting the Object Value

- [setObjectValue(\_:)](nspathcell/setobjectvalue%28__%29.md): Sets the receiver’s object value.

### Setting Cell Appearance

- [placeholderAttributedString](nspathcell/placeholderattributedstring.md): Sets the value of the placeholder attributed string.
- [placeholderString](nspathcell/placeholderstring.md): Returns the placeholder string.
- [backgroundColor](nspathcell/backgroundcolor.md): Returns the current background color of the receiver.

### Managing Path Components

- [pathComponentCellClass](nspathcell/pathcomponentcellclass.md): Returns the class used to create `pathComponentCell` objects when automatically filling up the control.
- [rect(of:withFrame:in:)](nspathcell/rect%28of_withframe_in_%29.md): Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.
- [pathComponentCell(at:withFrame:in:)](nspathcell/pathcomponentcell%28at_withframe_in_%29.md): Returns the cell located at the given point within the given frame of the given view.
- [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.
- [pathComponentCells](nspathcell/pathcomponentcells.md): Sets the array of `NSPathComponentCell` objects currently being displayed.

### Setting the Double-Click Action

- [doubleAction](nspathcell/doubleaction.md): Sets the receiver’s double-click action.

### Setting the Path

- [url](nspathcell/url.md): Returns the path displayed by the receiver.
- [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.

### Setting the Delegate

- [delegate](nspathcell/delegate.md): Sets the receiver’s delegate.

### Constants

- [NSPathControl.Style](nspathcontrol/style.md): `NSPathStyle` constants represent the different visual and behavioral styles an `NSPathControl` or `NSPathCell` object can have.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

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
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSOpenSavePanelDelegate](nsopensavepaneldelegate.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cells

- [NSPathCellDelegate](nspathcelldelegate.md): A set of methods that enable the delegate of a path cell object to customize the Open panel or pop-up menu of a path whose style is set to [NSPathControl.Style.popUp](nspathcontrol/style/popup.md).
- [NSPathComponentCell](nspathcomponentcell.md): A component of a path.
- [NSPathControlItem](nspathcontrolitem.md)

# NSPathCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

The user interface of a path control object.

## Declaration

```objectivec
@interface NSPathCell : NSActionCell
```

<a id="overview"></a>

## Overview

[NSPathCell](nspathcell.md) maintains a collection of [NSPathComponentCell](nspathcomponentcell.md) objects that represent a particular path to be displayed to the user.

The path shown can be set with the [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md) method. Doing so removes all displayed `NSPathComponentCell` objects and automatically fills the control with `NSPathComponentCell` objects set to have the appropriate icons, display titles, and `NSURL` values for the particular path component they represent. Alternatively, you can fill the control manually by setting the cell array or directly modifying existing cells.

Both an action and double-click action can be set for the path control. To find out what path component cell was clicked in the action, you can read the value of [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md). When the style is set to [NSPathStylePopUp](nspathcontrol/style/popup.md), the action is still sent, and the [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md) value for the represented menu item is correctly set. The [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md) value is valid only when the action is being sent. It is also valid when the keyboard is used to invoke the action.

Automatic animated expansion of partially hidden `NSPathComponentCell` objects happens if you correctly call [mouseEntered:](nsresponder/mouseentered%28with_%29.md) and [mouseExited:](nsresponder/mouseexited%28with_%29.md) for each `NSPathComponentCell` in the `NSPathCell` object. This is not required if the [pathStyle](nspathcell/pathstyle.md) is set to [NSPathStylePopUp](nspathcontrol/style/popup.md), or if you wish to not have the animation.

`NSPathCell` supports several path display styles. [NSPathStyleStandard](nspathcontrol/style/standard.md) has a light blue background with arrows indicating the path. [NSPathStyleNavigationBar](nspathstyle/nspathstylenavigationbar.md) has more defined arrows (chevrons) and looks a little like a segmented button. [NSPathStylePopUp](nspathcontrol/style/popup.md) looks and works like an [NSPopUpButton](nspopupbutton.md) object to display the full path, or, if the cell is editable, select a new path.

If the cell’s [editable](nscell/iseditable.md) method returns [true](https://developer.apple.com/documentation/swift/true) (the default), you can drag and drop into the cell to change the value. You can constrain what can be dropped using UTIs (Uniform Type Identifiers) with [allowedTypes](nspathcell/allowedtypes.md) or the appropriate delegate methods on `NSPathControl`.

If the cell’s [selectable](nscell/isselectable.md) method returns [true](https://developer.apple.com/documentation/swift/true) (the default), the cell’s contents can automatically be dragged out. The proper UTI, filename, and URL are placed on the pasteboard. You can further control or limit this by using the appropriate delegate methods on `NSPathControl`.

If the cell is editable and has the path style set to [NSPathStylePopUp](nspathcontrol/style/popup.md), an additional item in the pop-up menu allows selecting another location. By default, an `NSOpenPanel` object is configured based on the allowed types. The `NSOpenPanel` object can be customized with a delegate method.

<a id="Setting-the-control-size"></a>

## Setting the control size

When setting the [controlSize](nscell/controlsize.md) property, `NSPathCell` properly respects the control size for the [NSPathStyleStandard](nspathcontrol/style/standard.md) and [NSPathStylePopUp](nspathcontrol/style/popup.md) styles. When the control size is set, the new size is propagated to subcells. When the path style is set to [NSPathStyleNavigationBar](nspathstyle/nspathstylenavigationbar.md), you cannot change the control size, and it is always set to [NSSmallControlSize](nssmallcontrolsize.md). Attempting to change the control size when the path style is [NSPathStyleNavigationBar](nspathstyle/nspathstylenavigationbar.md) causes an assertion. Setting the path style to [NSPathStyleNavigationBar](nspathstyle/nspathstylenavigationbar.md) forces the control size to be [NSSmallControlSize](nssmallcontrolsize.md).

## Topics

### Displaying Hidden Components

- [mouseEntered:withFrame:inView:](nspathcell/mouseentered%28with_frame_in_%29.md): Displays the cell component over which the mouse is hovering.
- [mouseExited:withFrame:inView:](nspathcell/mouseexited%28with_frame_in_%29.md): Hides the cell component over which the mouse is hovering.

### Setting the Allowed Types

- [allowedTypes](nspathcell/allowedtypes.md): Sets the component types allowed in the path when the cell is editable.

### Setting the Control Style

- [pathStyle](nspathcell/pathstyle.md): Sets the receiver’s path style.

### Setting the Object Value

- [setObjectValue:](nspathcell/setobjectvalue%28__%29.md): Sets the receiver’s object value.

### Setting Cell Appearance

- [placeholderAttributedString](nspathcell/placeholderattributedstring.md): Sets the value of the placeholder attributed string.
- [placeholderString](nspathcell/placeholderstring.md): Returns the placeholder string.
- [backgroundColor](nspathcell/backgroundcolor.md): Returns the current background color of the receiver.

### Managing Path Components

- [pathComponentCellClass](nspathcell/pathcomponentcellclass.md): Returns the class used to create `pathComponentCell` objects when automatically filling up the control.
- [rectOfPathComponentCell:withFrame:inView:](nspathcell/rect%28of_withframe_in_%29.md): Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.
- [pathComponentCellAtPoint:withFrame:inView:](nspathcell/pathcomponentcell%28at_withframe_in_%29.md): Returns the cell located at the given point within the given frame of the given view.
- [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.
- [pathComponentCells](nspathcell/pathcomponentcells.md): Sets the array of `NSPathComponentCell` objects currently being displayed.

### Setting the Double-Click Action

- [doubleAction](nspathcell/doubleaction.md): Sets the receiver’s double-click action.

### Setting the Path

- [URL](nspathcell/url.md): Returns the path displayed by the receiver.
- [clickedPathComponentCell](nspathcell/clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.

### Setting the Delegate

- [delegate](nspathcell/delegate.md): Sets the receiver’s delegate.

### Constants

- [NSPathStyle](nspathcontrol/style.md): `NSPathStyle` constants represent the different visual and behavioral styles an `NSPathControl` or `NSPathCell` object can have.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

### Conforms To

- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSOpenSavePanelDelegate](nsopensavepaneldelegate.md)

## See Also

### Cells

- [NSPathCellDelegate](nspathcelldelegate.md): A set of methods that enable the delegate of a path cell object to customize the Open panel or pop-up menu of a path whose style is set to [NSPathStylePopUp](nspathcontrol/style/popup.md).
- [NSPathComponentCell](nspathcomponentcell.md): A component of a path.
- [NSPathControlItem](nspathcontrolitem.md)
