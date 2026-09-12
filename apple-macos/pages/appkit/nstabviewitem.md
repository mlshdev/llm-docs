> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewitem](https://developer.apple.com/documentation/appkit/nstabviewitem)

# NSTabViewItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An item in a tab view.

## Declaration

```swift
class NSTabViewItem
```

<a id="overview"></a>

## Overview

An [NSTabViewItem](nstabviewitem.md) is a convenient way for presenting information in multiple pages. A tab view is usually distinguished by a row of tabs that give the visual appearance of folder tabs. When the user clicks a tab, the tab view displays a view page provided by your application. A tab view keeps a zero-based array of tab view items, one for each tab in the view.

## Topics

### Creating a Tab View Item

- [init(identifier:)](nstabviewitem/init%28identifier_%29.md): Performs default initialization for the receiver.

### Working with Labels

- [drawLabel(\_:in:)](nstabviewitem/drawlabel%28__in_%29.md): Draws the receiver’s label in `tabRect`, which is the area between the curved end caps.
- [label](nstabviewitem/label.md): Sets the label text for the receiver to `label`.
- [sizeOfLabel(\_:)](nstabviewitem/sizeoflabel%28__%29.md): Calculates the size of the receiver’s label.

### Checking the Tab Display State

- [tabState](nstabviewitem/tabstate.md): Returns the current display state of the tab associated with the receiver.

### Assigning an Identifier Object

- [identifier](nstabviewitem/identifier.md): Sets the receiver’s optional identifier object to `identifier`.

### Setting the Color

- [color](nstabviewitem/color.md): Sets the background color for content in the view.

### Assigning a View

- [view](nstabviewitem/view.md): Sets the view associated with the receiver to `view`.

### Setting the Initial First Responder

- [initialFirstResponder](nstabviewitem/initialfirstresponder.md): Sets the initial first responder for the view associated with the receiver (the view that is displayed when a user clicks on the tab) to `view`.

### Accessing the Parent Tab View

- [tabView](nstabviewitem/tabview.md): Returns the parent tab view for the receiver.

### Getting and Setting Tooltips

- [toolTip](nstabviewitem/tooltip.md): Sets the tooltip displayed for the tab view item.

### Constants

- [NSTabViewItem.State](nstabviewitem/state.md): These constants describe the current display state of a tab:

### Initializers

- [init(viewController:)](nstabviewitem/init%28viewcontroller_%29.md)
- [init(coder:)](nstabviewitem/init%28coder_%29.md)

### Instance Properties

- [image](nstabviewitem/image.md): Gets and set the image for this tab view item. The image may only be used in certain tab view styles and options.
- [viewController](nstabviewitem/viewcontroller.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Tab View Interface

- [NSTabViewController](nstabviewcontroller.md): A container view controller that manages a tab view interface, which organizes multiple pages of content but displays only one page at a time.
- [NSTabView](nstabview.md): A multipage interface that displays one page at a time.

# NSTabViewItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An item in a tab view.

## Declaration

```objectivec
@interface NSTabViewItem : NSObject
```

<a id="overview"></a>

## Overview

An [NSTabViewItem](nstabviewitem.md) is a convenient way for presenting information in multiple pages. A tab view is usually distinguished by a row of tabs that give the visual appearance of folder tabs. When the user clicks a tab, the tab view displays a view page provided by your application. A tab view keeps a zero-based array of tab view items, one for each tab in the view.

## Topics

### Creating a Tab View Item

- [initWithIdentifier:](nstabviewitem/init%28identifier_%29.md): Performs default initialization for the receiver.

### Working with Labels

- [drawLabel:inRect:](nstabviewitem/drawlabel%28__in_%29.md): Draws the receiver’s label in `tabRect`, which is the area between the curved end caps.
- [label](nstabviewitem/label.md): Sets the label text for the receiver to `label`.
- [sizeOfLabel:](nstabviewitem/sizeoflabel%28__%29.md): Calculates the size of the receiver’s label.

### Checking the Tab Display State

- [tabState](nstabviewitem/tabstate.md): Returns the current display state of the tab associated with the receiver.

### Assigning an Identifier Object

- [identifier](nstabviewitem/identifier.md): Sets the receiver’s optional identifier object to `identifier`.

### Setting the Color

- [color](nstabviewitem/color.md): Sets the background color for content in the view.

### Assigning a View

- [view](nstabviewitem/view.md): Sets the view associated with the receiver to `view`.

### Setting the Initial First Responder

- [initialFirstResponder](nstabviewitem/initialfirstresponder.md): Sets the initial first responder for the view associated with the receiver (the view that is displayed when a user clicks on the tab) to `view`.

### Accessing the Parent Tab View

- [tabView](nstabviewitem/tabview.md): Returns the parent tab view for the receiver.

### Getting and Setting Tooltips

- [toolTip](nstabviewitem/tooltip.md): Sets the tooltip displayed for the tab view item.

### Constants

- [NSTabState](nstabviewitem/state.md): These constants describe the current display state of a tab:

### Initializers

- [tabViewItemWithViewController:](nstabviewitem/init%28viewcontroller_%29.md)

### Instance Properties

- [image](nstabviewitem/image.md): Gets and set the image for this tab view item. The image may only be used in certain tab view styles and options.
- [viewController](nstabviewitem/viewcontroller.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Tab View Interface

- [NSTabViewController](nstabviewcontroller.md): A container view controller that manages a tab view interface, which organizes multiple pages of content but displays only one page at a time.
- [NSTabView](nstabview.md): A multipage interface that displays one page at a time.
