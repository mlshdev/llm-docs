> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem](https://developer.apple.com/documentation/appkit/nsstatusitem)

# NSStatusItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An individual element displayed in the system menu bar.

## Declaration

```swift
class NSStatusItem
```

<a id="overview"></a>

## Overview

The [NSStatusBar](nsstatusbar.md) method [statusItem(withLength:)](nsstatusbar/statusitem%28withlength_%29.md) creates instances of this class and automatically adds them to the menu bar. Use the [button](nsstatusitem/button.md) property to customize the appearance and behavior of the status item.

## Topics

### Getting the item’s status bar

- [statusBar](nsstatusitem/statusbar.md): The status bar that displays the status item.

### Managing the status item’s behavior

- [behavior](nsstatusitem/behavior-swift.property.md): The set of allowed behaviors for the status item.
- [NSStatusItem.Behavior](nsstatusitem/behavior-swift.struct.md): A set of optional status item behaviors.
- [button](nsstatusitem/button.md): The button displayed in the status bar.
- [menu](nsstatusitem/menu.md): The pull-down menu displayed when the user clicks the status item.

### Configuring the status item’s appearance

- [isVisible](nsstatusitem/isvisible.md): A Boolean value indicating if the menu bar currently displays the status item.
- [length](nsstatusitem/length.md): The amount of space in the status bar that should be allocated to the status item.
- [squareLength](nsstatusitem/squarelength.md): A status item length that is equal to the status bar’s thickness.
- [variableLength](nsstatusitem/variablelength.md): A status item length that dynamically adjusts to the width of its contents.
- [view](nsstatusitem/view.md): The custom view the status item displays at its position in the status bar.

### Configuring target-action behavior

- [target](nsstatusitem/target.md): The object that receives the status item’s action message when someone clicks the status item.
- [action](nsstatusitem/action.md): The selector the status item sends to its target when someone clicks the status item.

### Managing the expanded interface

- [expandedInterfaceDelegate](nsstatusitem/expandedinterfacedelegate.md): The delegate that manages the lifecycle of the status item’s expanded interface.
- [expandedInterfaceSession](nsstatusitem/expandedinterfacesession.md): A session object that tracks the lifecycle of the status item’s active expanded interface.

### Setting the autosave name

- [autosaveName](nsstatusitem/autosavename-swift.property.md): A unique name for saving and restoring information about a status item.
- [NSStatusItem.AutosaveName](nsstatusitem/autosavename-swift.typealias.md)

### Deprecated

- [isEnabled](nsstatusitem/isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [doubleAction](nsstatusitem/doubleaction.md): Deprecated. The selector that is sent to the status item’s target when the status item is double-clicked.
- [sendAction(on:)](nsstatusitem/sendaction%28on_%29.md): Deprecated. Sets the conditions on which the status item sends action messages to its target.
- [popUpMenu(\_:)](nsstatusitem/popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [title](nsstatusitem/title.md): Deprecated. The string that is displayed at the status item’s position in the status bar.
- [attributedTitle](nsstatusitem/attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [image](nsstatusitem/image.md): Deprecated. The image that is displayed at the status item’s position in the status bar.
- [alternateImage](nsstatusitem/alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](nsstatusitem/highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](nsstatusitem/tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.
- [drawStatusBarBackground(in:withHighlight:)](nsstatusitem/drawstatusbarbackground%28in_withhighlight_%29.md): Deprecated. Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Menu Bar Items

- [NSStatusBar](nsstatusbar.md): An object that manages a collection of status items displayed within the system-wide menu bar.
- [NSStatusBarButton](nsstatusbarbutton.md): The appearance and behavior of an item in the systemwide menu bar.

# NSStatusItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An individual element displayed in the system menu bar.

## Declaration

```objectivec
@interface NSStatusItem : NSObject
```

<a id="overview"></a>

## Overview

The [NSStatusBar](nsstatusbar.md) method [statusItemWithLength:](nsstatusbar/statusitem%28withlength_%29.md) creates instances of this class and automatically adds them to the menu bar. Use the [button](nsstatusitem/button.md) property to customize the appearance and behavior of the status item.

## Topics

### Getting the item’s status bar

- [statusBar](nsstatusitem/statusbar.md): The status bar that displays the status item.

### Managing the status item’s behavior

- [behavior](nsstatusitem/behavior-swift.property.md): The set of allowed behaviors for the status item.
- [NSStatusItemBehavior](nsstatusitem/behavior-swift.struct.md): A set of optional status item behaviors.
- [button](nsstatusitem/button.md): The button displayed in the status bar.
- [menu](nsstatusitem/menu.md): The pull-down menu displayed when the user clicks the status item.

### Configuring the status item’s appearance

- [visible](nsstatusitem/isvisible.md): A Boolean value indicating if the menu bar currently displays the status item.
- [length](nsstatusitem/length.md): The amount of space in the status bar that should be allocated to the status item.
- [NSSquareStatusItemLength](nsstatusitem/squarelength.md): A status item length that is equal to the status bar’s thickness.
- [NSVariableStatusItemLength](nsstatusitem/variablelength.md): A status item length that dynamically adjusts to the width of its contents.
- [view](nsstatusitem/view.md): The custom view the status item displays at its position in the status bar.

### Configuring target-action behavior

- [target](nsstatusitem/target.md): The object that receives the status item’s action message when someone clicks the status item.
- [action](nsstatusitem/action.md): The selector the status item sends to its target when someone clicks the status item.

### Managing the expanded interface

- [expandedInterfaceDelegate](nsstatusitem/expandedinterfacedelegate.md): The delegate that manages the lifecycle of the status item’s expanded interface.
- [expandedInterfaceSession](nsstatusitem/expandedinterfacesession.md): A session object that tracks the lifecycle of the status item’s active expanded interface.

### Setting the autosave name

- [autosaveName](nsstatusitem/autosavename-swift.property.md): A unique name for saving and restoring information about a status item.
- [NSStatusItemAutosaveName](nsstatusitem/autosavename-swift.typealias.md)

### Deprecated

- [enabled](nsstatusitem/isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [doubleAction](nsstatusitem/doubleaction.md): Deprecated. The selector that is sent to the status item’s target when the status item is double-clicked.
- [sendActionOn:](nsstatusitem/sendaction%28on_%29.md): Deprecated. Sets the conditions on which the status item sends action messages to its target.
- [popUpStatusItemMenu:](nsstatusitem/popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [title](nsstatusitem/title.md): Deprecated. The string that is displayed at the status item’s position in the status bar.
- [attributedTitle](nsstatusitem/attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [image](nsstatusitem/image.md): Deprecated. The image that is displayed at the status item’s position in the status bar.
- [alternateImage](nsstatusitem/alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](nsstatusitem/highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](nsstatusitem/tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.
- [drawStatusBarBackgroundInRect:withHighlight:](nsstatusitem/drawstatusbarbackground%28in_withhighlight_%29.md): Deprecated. Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Menu Bar Items

- [NSStatusBar](nsstatusbar.md): An object that manages a collection of status items displayed within the system-wide menu bar.
- [NSStatusBarButton](nsstatusbarbutton.md): The appearance and behavior of an item in the systemwide menu bar.
