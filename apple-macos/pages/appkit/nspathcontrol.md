> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontrol](https://developer.apple.com/documentation/appkit/nspathcontrol)

# NSPathControl (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A display of a file system path or virtual path information.

## Declaration

```swift
class NSPathControl
```

<a id="overview"></a>

## Overview

The [NSPathControl](nspathcontrol.md) class uses [NSPathCell](nspathcell.md) to implement its user interface. [NSPathControl](nspathcontrol.md) provides cover methods for most [NSPathCell](nspathcell.md) methods—the cover method simply invokes the corresponding cell method. See also [NSPathComponentCell](nspathcomponentcell.md), which represents individual components of the path, and two associated protocols: [NSPathCellDelegate](nspathcelldelegate.md) and [NSPathControlDelegate](nspathcontroldelegate.md).

[NSPathControl](nspathcontrol.md) has three styles represented by the [NSPathControl.Style](nspathcontrol/style.md) enumeration constants [NSPathControl.Style.standard](nspathcontrol/style/standard.md), [NSPathStyleNavigationBar](nspathstyle/nspathstylenavigationbar.md), and [NSPathControl.Style.popUp](nspathcontrol/style/popup.md). The represented path can be a file system path or any other type of path leading through a sequence of nodes or components, as defined by the programmer.

[NSPathControl](nspathcontrol.md) automatically supports drag and drop, which can be further customized via delegate methods. To accept drag and drop, [NSPathControl](nspathcontrol.md) calls [registerForDraggedTypes(\_:)](nsview/registerfordraggedtypes%28__%29.md) with [NSFilenamesPboardType](nsfilenamespboardtype.md) and [NSURLPboardType](nsurlpboardtype.md). When the URL value in the [NSPathControl](nspathcontrol.md) object changes because of an automatic drag and drop operation or the user selecting a new path via the open panel, the action is sent. In OS X v10.5 the value returned by [clickedPathComponentCell()](nspathcontrol/clickedpathcomponentcell%28%29.md) is `nil`, in macOS 10.6 and later, [clickedPathComponentCell()](nspathcontrol/clickedpathcomponentcell%28%29.md) returns the clicked cell.

## Topics

### Setting the Control Style

- [pathStyle](nspathcontrol/pathstyle.md): The receiver’s path style.

### Setting the Background Color

- [backgroundColor](nspathcontrol/backgroundcolor.md): The receiver’s background color.

### Managing Path Components

- [clickedPathComponentCell()](nspathcontrol/clickedpathcomponentcell%28%29.md): Deprecated. Returns the clicked cell.
- [pathComponentCells()](nspathcontrol/pathcomponentcells%28%29.md): Deprecated. Returns an array of the `NSPathComponentCell` objects currently being displayed.
- [setPathComponentCells(\_:)](nspathcontrol/setpathcomponentcells%28__%29.md): Deprecated. Sets the array of `NSPathComponentCell` objects currently being displayed.

### Setting the Double-Click Action

- [doubleAction](nspathcontrol/doubleaction.md): The receiver’s double-click action method.

### Setting the Path

- [url](nspathcontrol/url.md): The path value displayed by the receiver.

### Setting the Delegate

- [delegate](nspathcontrol/delegate.md): The receiver’s delegate.

### Setting the Drag Operation Mask

- [setDraggingSourceOperationMask(\_:forLocal:)](nspathcontrol/setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.

### Setting Popup Menu

- [menu](nspathcontrol/menu.md): The menu that is used for the path control’s cells.

### Instance Properties

- [allowedTypes](nspathcontrol/allowedtypes.md)
- [clickedPathItem](nspathcontrol/clickedpathitem.md)
- [isEditable](nspathcontrol/iseditable.md)
- [pathItems](nspathcontrol/pathitems.md)
- [placeholderAttributedString](nspathcontrol/placeholderattributedstring.md)
- [placeholderString](nspathcontrol/placeholderstring.md)

### Enumerations

- [NSPathControl.Style](nspathcontrol/style.md): `NSPathStyle` constants represent the different visual and behavioral styles an `NSPathControl` or `NSPathCell` object can have.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSPathControl (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A display of a file system path or virtual path information.

## Declaration

```objectivec
@interface NSPathControl : NSControl
```

<a id="overview"></a>

## Overview

The [NSPathControl](nspathcontrol.md) class uses [NSPathCell](nspathcell.md) to implement its user interface. [NSPathControl](nspathcontrol.md) provides cover methods for most [NSPathCell](nspathcell.md) methods—the cover method simply invokes the corresponding cell method. See also [NSPathComponentCell](nspathcomponentcell.md), which represents individual components of the path, and two associated protocols: [NSPathCellDelegate](nspathcelldelegate.md) and [NSPathControlDelegate](nspathcontroldelegate.md).

[NSPathControl](nspathcontrol.md) has three styles represented by the [NSPathStyle](nspathcontrol/style.md) enumeration constants [NSPathStyleStandard](nspathcontrol/style/standard.md), [NSPathStyleNavigationBar](nspathstyle/nspathstylenavigationbar.md), and [NSPathStylePopUp](nspathcontrol/style/popup.md). The represented path can be a file system path or any other type of path leading through a sequence of nodes or components, as defined by the programmer.

[NSPathControl](nspathcontrol.md) automatically supports drag and drop, which can be further customized via delegate methods. To accept drag and drop, [NSPathControl](nspathcontrol.md) calls [registerForDraggedTypes:](nsview/registerfordraggedtypes%28__%29.md) with [NSFilenamesPboardType](nsfilenamespboardtype.md) and [NSURLPboardType](nsurlpboardtype.md). When the URL value in the [NSPathControl](nspathcontrol.md) object changes because of an automatic drag and drop operation or the user selecting a new path via the open panel, the action is sent. In OS X v10.5 the value returned by [clickedPathComponentCell](nspathcontrol/clickedpathcomponentcell%28%29.md) is `nil`, in macOS 10.6 and later, [clickedPathComponentCell](nspathcontrol/clickedpathcomponentcell%28%29.md) returns the clicked cell.

## Topics

### Setting the Control Style

- [pathStyle](nspathcontrol/pathstyle.md): The receiver’s path style.

### Setting the Background Color

- [backgroundColor](nspathcontrol/backgroundcolor.md): The receiver’s background color.

### Managing Path Components

- [clickedPathComponentCell](nspathcontrol/clickedpathcomponentcell%28%29.md): Deprecated. Returns the clicked cell.
- [pathComponentCells](nspathcontrol/pathcomponentcells%28%29.md): Deprecated. Returns an array of the `NSPathComponentCell` objects currently being displayed.
- [setPathComponentCells:](nspathcontrol/setpathcomponentcells%28__%29.md): Deprecated. Sets the array of `NSPathComponentCell` objects currently being displayed.

### Setting the Double-Click Action

- [doubleAction](nspathcontrol/doubleaction.md): The receiver’s double-click action method.

### Setting the Path

- [URL](nspathcontrol/url.md): The path value displayed by the receiver.

### Setting the Delegate

- [delegate](nspathcontrol/delegate.md): The receiver’s delegate.

### Setting the Drag Operation Mask

- [setDraggingSourceOperationMask:forLocal:](nspathcontrol/setdraggingsourceoperationmask%28__forlocal_%29.md): Configures the drag operation mask.

### Setting Popup Menu

- [menu](nspathcontrol/menu.md): The menu that is used for the path control’s cells.

### Instance Properties

- [allowedTypes](nspathcontrol/allowedtypes.md)
- [clickedPathItem](nspathcontrol/clickedpathitem.md)
- [editable](nspathcontrol/iseditable.md)
- [pathItems](nspathcontrol/pathitems.md)
- [placeholderAttributedString](nspathcontrol/placeholderattributedstring.md)
- [placeholderString](nspathcontrol/placeholderstring.md)

### Enumerations

- [NSPathStyle](nspathcontrol/style.md): `NSPathStyle` constants represent the different visual and behavioral styles an `NSPathControl` or `NSPathCell` object can have.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)
