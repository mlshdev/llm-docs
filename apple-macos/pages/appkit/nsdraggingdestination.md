> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingdestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)

# NSDraggingDestination (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that the destination object (or recipient) of a dragged image must implement.

## Declaration

```swift
protocol NSDraggingDestination : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The destination automatically receives [NSDraggingDestination](nsdraggingdestination.md) messages for pasteboard data types it has registered for as an image enters, moves around inside, and then exits or is released within the destination’s boundaries.

In macOS 10.7 and later [NSDraggingDestination](nsdraggingdestination.md) is a formal protocol with an updated interface. The OS X v10.6 behavior has been retained, but will be dropped in a future version of the operating system. The methods that are to be deprecated are marked as such.

## Topics

### Managing a Dragging Session Before an Image Is Released

- [draggingEntered(\_:)](nsdraggingdestination/draggingentered%28__%29.md): Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.
- [wantsPeriodicDraggingUpdates()](nsdraggingdestination/wantsperiodicdraggingupdates%28%29.md): Asks the destination object whether it wants to receive periodic [draggingUpdated(\_:)](nsdraggingdestination/draggingupdated%28__%29.md) messages.
- [draggingUpdated(\_:)](nsdraggingdestination/draggingupdated%28__%29.md): Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.
- [draggingExited(\_:)](nsdraggingdestination/draggingexited%28__%29.md): Invoked when the dragged image exits the destination’s bounds rectangle (in the case of a view object) or its frame rectangle (in the case of a window object).
- [draggingEnded(\_:)](nsdraggingdestination/draggingended%28__%29.md): Called when a drag operation ends.

### Managing a Dragging Session After an Image Is Released

- [prepareForDragOperation(\_:)](nsdraggingdestination/preparefordragoperation%28__%29.md): Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.
- [performDragOperation(\_:)](nsdraggingdestination/performdragoperation%28__%29.md): Invoked after the released image has been removed from the screen, signaling the receiver to import the pasteboard data.
- [concludeDragOperation(\_:)](nsdraggingdestination/concludedragoperation%28__%29.md): Invoked when the dragging operation is complete, signaling the receiver to perform any necessary clean-up.

### Updating Dragging Images

- [updateDraggingItemsForDrag(\_:)](nsdraggingdestination/updatedraggingitemsfordrag%28__%29.md): Invoked when the dragging images should be changed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSBackgroundExtensionView](nsbackgroundextensionview.md)
- [NSBox](nsbox.md)
- [NSBrowser](nsbrowser.md)
- [NSButton](nsbutton.md)
- [NSClipView](nsclipview.md)
- [NSCollectionView](nscollectionview.md)
- [NSColorWell](nscolorwell.md)
- [NSComboBox](nscombobox.md)
- [NSComboButton](nscombobutton.md)
- [NSControl](nscontrol.md)
- [NSDatePicker](nsdatepicker.md)
- [NSForm](nsform.md)
- [NSGlassEffectContainerView](nsglasseffectcontainerview.md)
- [NSGlassEffectView](nsglasseffectview.md)
- [NSGridView](nsgridview.md)
- [NSImageView](nsimageview.md)
- [NSLevelIndicator](nslevelindicator.md)
- [NSMatrix](nsmatrix.md)
- [NSOpenGLView](nsopenglview.md)
- [NSOutlineView](nsoutlineview.md)
- [NSPathControl](nspathcontrol.md)
- [NSPopUpButton](nspopupbutton.md)
- [NSPredicateEditor](nspredicateeditor.md)
- [NSProgressIndicator](nsprogressindicator.md)
- [NSRuleEditor](nsruleeditor.md)
- [NSRulerView](nsrulerview.md)
- [NSScrollView](nsscrollview.md)
- [NSScroller](nsscroller.md)
- [NSScrubber](nsscrubber.md)
- [NSScrubberArrangedView](nsscrubberarrangedview.md)
- [NSScrubberImageItemView](nsscrubberimageitemview.md)
- [NSScrubberItemView](nsscrubberitemview.md)
- [NSScrubberSelectionView](nsscrubberselectionview.md)
- [NSScrubberTextItemView](nsscrubbertextitemview.md)
- [NSSearchField](nssearchfield.md)
- [NSSecureTextField](nssecuretextfield.md)
- [NSSegmentedControl](nssegmentedcontrol.md)
- [NSSlider](nsslider.md)
- [NSSplitView](nssplitview.md)
- [NSStackView](nsstackview.md)
- [NSStatusBarButton](nsstatusbarbutton.md)
- [NSStepper](nsstepper.md)
- [NSSwitch](nsswitch.md)
- [NSTabView](nstabview.md)
- [NSTableCellView](nstablecellview.md)
- [NSTableHeaderView](nstableheaderview.md)
- [NSTableRowView](nstablerowview.md)
- [NSTableView](nstableview.md)
- [NSText](nstext.md)
- [NSTextField](nstextfield.md)
- [NSTextInsertionIndicator](nstextinsertionindicator.md)
- [NSTextView](nstextview.md)
- [NSTokenField](nstokenfield.md)
- [NSView](nsview.md)
- [NSVisualEffectView](nsvisualeffectview.md)

## See Also

### Drop Targets

- [NSDraggingInfo](nsdragginginfo.md): A set of methods that supply information about a dragging session.
- [NSSpringLoadingDestination](nsspringloadingdestination.md): A set of methods that the destination object (or recipient) of a dragged object can implement to support spring-loading.

# NSDraggingDestination (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that the destination object (or recipient) of a dragged image must implement.

## Declaration

```objectivec
@protocol NSDraggingDestination <NSObject>
```

<a id="overview"></a>

## Overview

The destination automatically receives [NSDraggingDestination](nsdraggingdestination.md) messages for pasteboard data types it has registered for as an image enters, moves around inside, and then exits or is released within the destination’s boundaries.

In macOS 10.7 and later [NSDraggingDestination](nsdraggingdestination.md) is a formal protocol with an updated interface. The OS X v10.6 behavior has been retained, but will be dropped in a future version of the operating system. The methods that are to be deprecated are marked as such.

## Topics

### Managing a Dragging Session Before an Image Is Released

- [draggingEntered:](nsdraggingdestination/draggingentered%28__%29.md): Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.
- [wantsPeriodicDraggingUpdates](nsdraggingdestination/wantsperiodicdraggingupdates%28%29.md): Asks the destination object whether it wants to receive periodic [draggingUpdated:](nsdraggingdestination/draggingupdated%28__%29.md) messages.
- [draggingUpdated:](nsdraggingdestination/draggingupdated%28__%29.md): Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.
- [draggingExited:](nsdraggingdestination/draggingexited%28__%29.md): Invoked when the dragged image exits the destination’s bounds rectangle (in the case of a view object) or its frame rectangle (in the case of a window object).
- [draggingEnded:](nsdraggingdestination/draggingended%28__%29.md): Called when a drag operation ends.

### Managing a Dragging Session After an Image Is Released

- [prepareForDragOperation:](nsdraggingdestination/preparefordragoperation%28__%29.md): Invoked when the image is released, allowing the receiver to agree to or refuse drag operation.
- [performDragOperation:](nsdraggingdestination/performdragoperation%28__%29.md): Invoked after the released image has been removed from the screen, signaling the receiver to import the pasteboard data.
- [concludeDragOperation:](nsdraggingdestination/concludedragoperation%28__%29.md): Invoked when the dragging operation is complete, signaling the receiver to perform any necessary clean-up.

### Updating Dragging Images

- [updateDraggingItemsForDrag:](nsdraggingdestination/updatedraggingitemsfordrag%28__%29.md): Invoked when the dragging images should be changed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSCollectionView](nscollectionview.md)
- [NSView](nsview.md)

## See Also

### Drop Targets

- [NSDraggingInfo](nsdragginginfo.md): A set of methods that supply information about a dragging session.
- [NSSpringLoadingDestination](nsspringloadingdestination.md): A set of methods that the destination object (or recipient) of a dragged object can implement to support spring-loading.
