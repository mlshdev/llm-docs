> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview](https://developer.apple.com/documentation/appkit/nssplitview)

# NSSplitView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A view that arranges two or more views in a linear stack running horizontally or vertically.

## Declaration

```swift
class NSSplitView
```

<a id="overview"></a>

## Overview

A split view manages the dividers and orientation for a split view controller ([NSSplitViewController](nssplitviewcontroller.md)). By default, dividers have a horizontal orientation so that the split view arranges its panes vertically from top to bottom.

Divider indices are zero-based. If the [isVertical](nssplitview/isvertical.md) property is [false](https://developer.apple.com/documentation/swift/false), which is the default value, the top divider has an index of `0`. If [isVertical](nssplitview/isvertical.md) is [true](https://developer.apple.com/documentation/swift/true), the leading divider has an index of `0`.

## Topics

### Customizing the Split View Behavior

- [delegate](nssplitview/delegate.md): The split view’s delegate.
- [NSSplitViewDelegate](nssplitviewdelegate.md): A set of optional methods that a delegate of a split view implements.

### Arranging Subviews

- [arrangesAllSubviews](nssplitview/arrangesallsubviews.md): A Boolean value that determines whether the split view arranges all of its subviews as split panes.
- [arrangedSubviews](nssplitview/arrangedsubviews.md): The array of views that the split view arranges as its split panes.
- [addArrangedSubview(\_:)](nssplitview/addarrangedsubview%28__%29.md): Adds a view as an arranged split pane.
- [insertArrangedSubview(\_:at:)](nssplitview/insertarrangedsubview%28__at_%29.md): Adds a view as an arranged split pane at the specified index.
- [removeArrangedSubview(\_:)](nssplitview/removearrangedsubview%28__%29.md): Removes a view as an arranged split pane.

### Managing Subviews

- [adjustSubviews()](nssplitview/adjustsubviews%28%29.md): Adjusts the sizes of the split view’s subviews so they (plus the dividers) fill the split view.
- [isSubviewCollapsed(\_:)](nssplitview/issubviewcollapsed%28__%29.md): Returns whether the specified view is in a collapsed state.
- [holdingPriorityForSubview(at:)](nssplitview/holdingpriorityforsubview%28at_%29.md): Returns the priority of the subview’s width or height when resizing.
- [setHoldingPriority(\_:forSubviewAt:)](nssplitview/setholdingpriority%28__forsubviewat_%29.md): Sets the priority for split view subviews to maintain their width or height.

### Managing Divider Orientation

- [isVertical](nssplitview/isvertical.md): A Boolean value that determines the geometric orientation of the split view’s dividers.

### Configuring and Drawing Dividers

- [dividerStyle](nssplitview/dividerstyle-swift.property.md): The style of divider between views.
- [NSSplitView.DividerStyle](nssplitview/dividerstyle-swift.enum.md): Constants that specify the style of the split view’s dividers.
- [dividerColor](nssplitview/dividercolor.md): The color of the dividers that the split view draws between subviews.
- [dividerThickness](nssplitview/dividerthickness.md): The thickness of the dividers for the split view.
- [drawDivider(in:)](nssplitview/drawdivider%28in_%29.md): Draws a divider between two of the split view’s subviews.

### Saving Subview Positions

- [autosaveName](nssplitview/autosavename-swift.property.md): The name to use when the system automatically saves the split view’s divider configuration.
- [NSSplitView.AutosaveName](nssplitview/autosavename-swift.typealias.md): The type that specifies the split view’s autosave name.

### Constraining Split Position

- [minPossiblePositionOfDivider(at:)](nssplitview/minpossiblepositionofdivider%28at_%29.md): Returns the minimum possible position of the divider at the specified index.
- [maxPossiblePositionOfDivider(at:)](nssplitview/maxpossiblepositionofdivider%28at_%29.md): Returns the maximum possible position of the divider at the specified index.
- [setPosition(\_:ofDividerAt:)](nssplitview/setposition%28__ofdividerat_%29.md): Updates the location of a divider you specify by index.

### Managing Notifications

- [willResizeSubviewsNotification](nssplitview/willresizesubviewsnotification.md): A notification that posts before a change to the size of some or all subviews of a split view.
- [didResizeSubviewsNotification](nssplitview/didresizesubviewsnotification.md): A notification that posts after a change to the size of some or all subviews of a split view.

### Structures

- [NSSplitView.DidResizeSubviewsMessage](nssplitview/didresizesubviewsmessage.md)
- [NSSplitView.WillResizeSubviewsMessage](nssplitview/willresizesubviewsmessage.md)

## Relationships

### Inherits From

- [NSView](nsview.md)

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

## See Also

### Split View Interface

- [NSSplitViewController](nssplitviewcontroller.md): An object that manages an array of adjacent child views, and has a split view object for managing dividers between those views.
- [NSSplitViewItem](nssplitviewitem.md): An item in a split view controller.

# NSSplitView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A view that arranges two or more views in a linear stack running horizontally or vertically.

## Declaration

```objectivec
@interface NSSplitView : NSView
```

<a id="overview"></a>

## Overview

A split view manages the dividers and orientation for a split view controller ([NSSplitViewController](nssplitviewcontroller.md)). By default, dividers have a horizontal orientation so that the split view arranges its panes vertically from top to bottom.

Divider indices are zero-based. If the [vertical](nssplitview/isvertical.md) property is [false](https://developer.apple.com/documentation/swift/false), which is the default value, the top divider has an index of `0`. If [vertical](nssplitview/isvertical.md) is [true](https://developer.apple.com/documentation/swift/true), the leading divider has an index of `0`.

## Topics

### Customizing the Split View Behavior

- [delegate](nssplitview/delegate.md): The split view’s delegate.
- [NSSplitViewDelegate](nssplitviewdelegate.md): A set of optional methods that a delegate of a split view implements.

### Arranging Subviews

- [arrangesAllSubviews](nssplitview/arrangesallsubviews.md): A Boolean value that determines whether the split view arranges all of its subviews as split panes.
- [arrangedSubviews](nssplitview/arrangedsubviews.md): The array of views that the split view arranges as its split panes.
- [addArrangedSubview:](nssplitview/addarrangedsubview%28__%29.md): Adds a view as an arranged split pane.
- [insertArrangedSubview:atIndex:](nssplitview/insertarrangedsubview%28__at_%29.md): Adds a view as an arranged split pane at the specified index.
- [removeArrangedSubview:](nssplitview/removearrangedsubview%28__%29.md): Removes a view as an arranged split pane.

### Managing Subviews

- [adjustSubviews](nssplitview/adjustsubviews%28%29.md): Adjusts the sizes of the split view’s subviews so they (plus the dividers) fill the split view.
- [isSubviewCollapsed:](nssplitview/issubviewcollapsed%28__%29.md): Returns whether the specified view is in a collapsed state.
- [holdingPriorityForSubviewAtIndex:](nssplitview/holdingpriorityforsubview%28at_%29.md): Returns the priority of the subview’s width or height when resizing.
- [setHoldingPriority:forSubviewAtIndex:](nssplitview/setholdingpriority%28__forsubviewat_%29.md): Sets the priority for split view subviews to maintain their width or height.

### Managing Divider Orientation

- [vertical](nssplitview/isvertical.md): A Boolean value that determines the geometric orientation of the split view’s dividers.

### Configuring and Drawing Dividers

- [dividerStyle](nssplitview/dividerstyle-swift.property.md): The style of divider between views.
- [NSSplitViewDividerStyle](nssplitview/dividerstyle-swift.enum.md): Constants that specify the style of the split view’s dividers.
- [dividerColor](nssplitview/dividercolor.md): The color of the dividers that the split view draws between subviews.
- [dividerThickness](nssplitview/dividerthickness.md): The thickness of the dividers for the split view.
- [drawDividerInRect:](nssplitview/drawdivider%28in_%29.md): Draws a divider between two of the split view’s subviews.

### Saving Subview Positions

- [autosaveName](nssplitview/autosavename-swift.property.md): The name to use when the system automatically saves the split view’s divider configuration.
- [NSSplitViewAutosaveName](nssplitview/autosavename-swift.typealias.md): The type that specifies the split view’s autosave name.

### Constraining Split Position

- [minPossiblePositionOfDividerAtIndex:](nssplitview/minpossiblepositionofdivider%28at_%29.md): Returns the minimum possible position of the divider at the specified index.
- [maxPossiblePositionOfDividerAtIndex:](nssplitview/maxpossiblepositionofdivider%28at_%29.md): Returns the maximum possible position of the divider at the specified index.
- [setPosition:ofDividerAtIndex:](nssplitview/setposition%28__ofdividerat_%29.md): Updates the location of a divider you specify by index.

### Managing Notifications

- [NSSplitViewWillResizeSubviewsNotification](nssplitview/willresizesubviewsnotification.md): A notification that posts before a change to the size of some or all subviews of a split view.
- [NSSplitViewDidResizeSubviewsNotification](nssplitview/didresizesubviewsnotification.md): A notification that posts after a change to the size of some or all subviews of a split view.

### Deprecated

- [isPaneSplitter](nssplitview/ispanesplitter.md): Deprecated. The type of pane splitter.
- [setIsPaneSplitter:](nssplitview/setispanesplitter_.md): Deprecated. Sets the type of splitter.

## Relationships

### Inherits From

- [NSView](nsview.md)

## See Also

### Split View Interface

- [NSSplitViewController](nssplitviewcontroller.md): An object that manages an array of adjacent child views, and has a split view object for managing dividers between those views.
- [NSSplitViewItem](nssplitviewitem.md): An item in a split view controller.
