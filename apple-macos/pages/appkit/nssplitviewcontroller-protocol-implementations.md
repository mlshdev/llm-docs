> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller-protocol-implementations](https://developer.apple.com/documentation/appkit/nssplitviewcontroller-protocol-implementations)

# Protocol Implementations (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Access the split view controller’s implementations of protocol methods.

<a id="overview"></a>

## Overview

[NSSplitViewController](nssplitviewcontroller.md) conforms to [NSSplitViewDelegate](nssplitviewdelegate.md) to serve as its split view’s delegate. This page lists the split view controller type’s implementations of those protocol methods. If you override these methods in a subclass, you must call `super`.

[NSSplitViewController](nssplitviewcontroller.md) also conforms to [NSUserInterfaceValidations](nsuserinterfacevalidations.md) by implementing [validateUserInterfaceItem(\_:)](nssplitviewcontroller/validateuserinterfaceitem%28__%29.md).

## Topics

### Configuring and Drawing View Dividers

- [splitView(\_:effectiveRect:forDrawnRect:ofDividerAt:)](nssplitviewcontroller/splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the split view controller to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView(\_:shouldHideDividerAt:)](nssplitviewcontroller/splitview%28__shouldhidedividerat_%29.md): Allows the split view controller to determine whether the user can drag a divider or adjust it off the edge of the split view.
- [splitView(\_:additionalEffectiveRectOfDividerAt:)](nssplitviewcontroller/splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the split view controller to return an additional rectangle where mouse clicks can initiate divider dragging.

### Managing Subviews

- [splitView(\_:canCollapseSubview:)](nssplitviewcontroller/splitview%28__cancollapsesubview_%29.md): Allows the split view controller to determine whether the user can collapse and expand the specified subview.
- [splitView(\_:shouldCollapseSubview:forDoubleClickOnDividerAt:)](nssplitviewcontroller/splitview%28__shouldcollapsesubview_fordoubleclickondividerat_%29.md): Deprecated. Allows the split view controller to determine if a subview collapses in response to a double click.

### Validating User Interface Items

- [validateUserInterfaceItem(\_:)](nssplitviewcontroller/validateuserinterfaceitem%28__%29.md): Returns a Boolean value that indicates whether to enable the specified item.

# Protocol Implementations (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Access the split view controller’s implementations of protocol methods.

<a id="overview"></a>

## Overview

[NSSplitViewController](nssplitviewcontroller.md) conforms to [NSSplitViewDelegate](nssplitviewdelegate.md) to serve as its split view’s delegate. This page lists the split view controller type’s implementations of those protocol methods. If you override these methods in a subclass, you must call `super`.

[NSSplitViewController](nssplitviewcontroller.md) also conforms to [NSUserInterfaceValidations](nsuserinterfacevalidations.md) by implementing [validateUserInterfaceItem:](nssplitviewcontroller/validateuserinterfaceitem%28__%29.md).

## Topics

### Configuring and Drawing View Dividers

- [splitView:effectiveRect:forDrawnRect:ofDividerAtIndex:](nssplitviewcontroller/splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the split view controller to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView:shouldHideDividerAtIndex:](nssplitviewcontroller/splitview%28__shouldhidedividerat_%29.md): Allows the split view controller to determine whether the user can drag a divider or adjust it off the edge of the split view.
- [splitView:additionalEffectiveRectOfDividerAtIndex:](nssplitviewcontroller/splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the split view controller to return an additional rectangle where mouse clicks can initiate divider dragging.

### Managing Subviews

- [splitView:canCollapseSubview:](nssplitviewcontroller/splitview%28__cancollapsesubview_%29.md): Allows the split view controller to determine whether the user can collapse and expand the specified subview.
- [splitView:shouldCollapseSubview:forDoubleClickOnDividerAtIndex:](nssplitviewcontroller/splitview%28__shouldcollapsesubview_fordoubleclickondividerat_%29.md): Deprecated. Allows the split view controller to determine if a subview collapses in response to a double click.

### Validating User Interface Items

- [validateUserInterfaceItem:](nssplitviewcontroller/validateuserinterfaceitem%28__%29.md): Returns a Boolean value that indicates whether to enable the specified item.
