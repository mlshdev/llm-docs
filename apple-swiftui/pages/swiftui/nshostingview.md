> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingview](https://developer.apple.com/documentation/swiftui/nshostingview)

# NSHostingView

**Framework:** SwiftUI  
**Kind:** Class  
**Availability:** macOS 10.15+

An AppKit view that hosts a SwiftUI view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency class NSHostingView<Content> where Content : View
```

<a id="overview"></a>

## Overview

You use `NSHostingView` objects to integrate SwiftUI views into your AppKit view hierarchies. A hosting view is an [NSView](https://developer.apple.com/documentation/appkit/nsview) object that manages a single SwiftUI view, which may itself contain other SwiftUI views. Because it is an [NSView](https://developer.apple.com/documentation/appkit/nsview) object, you can integrate it into your existing AppKit view hierarchies to implement portions of your UI. For example, you can use a hosting view to implement a custom control.

A hosting view acts as a bridge between your SwiftUI views and your AppKit interface. During layout, the hosting view reports the content size preferences of your SwiftUI views back to the AppKit layout system so that it can size the view appropriately. The hosting view also coordinates event delivery.

## Topics

### Creating a hosting view

- [init(rootView:)](nshostingview/init%28rootview_%29.md): Creates a hosting view object that wraps the specified SwiftUI view.
- [init(coder:)](nshostingview/init%28coder_%29.md): Creates a hosting view object from the contents of the specified archive.
- [prepareForReuse()](nshostingview/prepareforreuse%28%29.md)

### Getting the root view

- [rootView](nshostingview/rootview.md): The root view of the SwiftUI view hierarchy managed by this view controller.

### Configuring the view layout behavior

- [requiresConstraintBasedLayout](nshostingview/requiresconstraintbasedlayout.md)
- [userInterfaceLayoutDirection](nshostingview/userinterfacelayoutdirection.md)
- [isFlipped](nshostingview/isflipped.md)
- [layerContentsRedrawPolicy](nshostingview/layercontentsredrawpolicy.md)
- [updateConstraints()](nshostingview/updateconstraints%28%29.md)
- [layout()](nshostingview/layout%28%29.md)
- [safeAreaRegions](nshostingview/safearearegions.md): The safe area regions that this view controller adds to its view.

### Managing keyboard interaction

- [keyDown(with:)](nshostingview/keydown%28with_%29.md): Called when the user presses a key on the keyboard while this view is in the responder chain.
- [keyUp(with:)](nshostingview/keyup%28with_%29.md): Called when the user releases a key on the keyboard while this view is in the responder chain.
- [performKeyEquivalent(with:)](nshostingview/performkeyequivalent%28with_%29.md)
- [insertText(\_:)](nshostingview/inserttext%28__%29.md)
- [didChangeValue(forKey:)](nshostingview/didchangevalue%28forkey_%29.md)
- [makeTouchBar()](nshostingview/maketouchbar%28%29.md)

### Responding to mouse events

- [mouseDown(with:)](nshostingview/mousedown%28with_%29.md)
- [mouseUp(with:)](nshostingview/mouseup%28with_%29.md)
- [otherMouseDown(with:)](nshostingview/othermousedown%28with_%29.md)
- [otherMouseUp(with:)](nshostingview/othermouseup%28with_%29.md)
- [rightMouseDown(with:)](nshostingview/rightmousedown%28with_%29.md)
- [rightMouseUp(with:)](nshostingview/rightmouseup%28with_%29.md)
- [mouseEntered(with:)](nshostingview/mouseentered%28with_%29.md)
- [mouseExited(with:)](nshostingview/mouseexited%28with_%29.md)
- [mouseDragged(with:)](nshostingview/mousedragged%28with_%29.md)
- [mouseMoved(with:)](nshostingview/mousemoved%28with_%29.md)
- [otherMouseDragged(with:)](nshostingview/othermousedragged%28with_%29.md)
- [rightMouseDragged(with:)](nshostingview/rightmousedragged%28with_%29.md)
- [cursorUpdate(with:)](nshostingview/cursorupdate%28with_%29.md)

### Responding to touch events

- [touchesBegan(with:)](nshostingview/touchesbegan%28with_%29.md)
- [touchesCancelled(with:)](nshostingview/touchescancelled%28with_%29.md)
- [touchesEnded(with:)](nshostingview/touchesended%28with_%29.md)
- [touchesMoved(with:)](nshostingview/touchesmoved%28with_%29.md)

### Responding to gestures

- [magnify(with:)](nshostingview/magnify%28with_%29.md)
- [rotate(with:)](nshostingview/rotate%28with_%29.md)
- [scrollWheel(with:)](nshostingview/scrollwheel%28with_%29.md)

### Handling drag and drop

- [validRequestor(forSendType:returnType:)](nshostingview/validrequestor%28forsendtype_returntype_%29.md)

### Providing a context menu

- [menu(for:)](nshostingview/menu%28for_%29.md)

### Responding to actions

- [responds(to:)](nshostingview/responds%28to_%29.md)
- [forwardingTarget(for:)](nshostingview/forwardingtarget%28for_%29.md)
- [doCommand(by:)](nshostingview/docommand%28by_%29.md)

### Configuring the responder behavior

- [acceptsFirstResponder](nshostingview/acceptsfirstresponder.md)
- [needsPanelToBecomeKey](nshostingview/needspaneltobecomekey.md)

### Managing the view hierarchy

- [viewWillMove(toWindow:)](nshostingview/viewwillmove%28towindow_%29.md)
- [viewDidMoveToWindow()](nshostingview/viewdidmovetowindow%28%29.md)
- [viewDidChangeBackingProperties()](nshostingview/viewdidchangebackingproperties%28%29.md)
- [viewDidChangeEffectiveAppearance()](nshostingview/viewdidchangeeffectiveappearance%28%29.md)

### Modifying the frame rectangle

- [intrinsicContentSize](nshostingview/intrinsiccontentsize.md)
- [setFrameSize(\_:)](nshostingview/setframesize%28__%29.md)
- [firstBaselineOffsetFromTop](nshostingview/firstbaselineoffsetfromtop.md)
- [lastBaselineOffsetFromBottom](nshostingview/lastbaselineoffsetfrombottom.md)
- [sizingOptions](nshostingview/sizingoptions.md): The options for how the hosting view creates and updates constraints based on the size of its SwiftUI content.
- [firstTextLineCenter](nshostingview/firsttextlinecenter.md)

### Testing for hits

- [hitTest(\_:)](nshostingview/hittest%28__%29.md)

### Managing accessibility behaviors

- [accessibilityFocusedUIElement](nshostingview/accessibilityfocuseduielement.md)
- [accessibilityChildren()](nshostingview/accessibilitychildren%28%29.md)
- [accessibilityChildrenInNavigationOrder()](nshostingview/accessibilitychildreninnavigationorder%28%29.md)
- [accessibilityHitTest(\_:)](nshostingview/accessibilityhittest%28__%29.md)
- [accessibilityRole()](nshostingview/accessibilityrole%28%29.md)
- [accessibilitySubrole()](nshostingview/accessibilitysubrole%28%29.md)
- [isAccessibilityElement()](nshostingview/isaccessibilityelement%28%29.md)

### Bridging with SwiftUI

- [sceneBridgingOptions](nshostingview/scenebridgingoptions.md): The options for which aspects of the window will be managed by this hosting view.

### Initializers

- [init(coder:rootView:)](nshostingview/init%28coder_rootview_%29.md): Creates a hosting view object from an archive and the specified SwiftUI view.

### Instance Properties

- [clipsToBounds](nshostingview/clipstobounds.md)

### Instance Methods

- [acceptsFirstMouse(for:)](nshostingview/acceptsfirstmouse%28for_%29.md)
- [beginDocument()](nshostingview/begindocument%28%29.md)
- [didAddSubview(\_:)](nshostingview/didaddsubview%28__%29.md)
- [endDocument()](nshostingview/enddocument%28%29.md)
- [observeValue(forKeyPath:of:change:context:)](nshostingview/observevalue%28forkeypath_of_change_context_%29.md)
- [shouldDelayWindowOrdering(for:)](nshostingview/shoulddelaywindowordering%28for_%29.md)
- [viewDidEndLiveResize()](nshostingview/viewdidendliveresize%28%29.md)
- [viewWillStartLiveResize()](nshostingview/viewwillstartliveresize%28%29.md)
- [willRemoveSubview(\_:)](nshostingview/willremovesubview%28__%29.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSDraggingSource](https://developer.apple.com/documentation/appkit/nsdraggingsource)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [NSUserInterfaceValidations](https://developer.apple.com/documentation/appkit/nsuserinterfacevalidations)

## See Also

### Displaying SwiftUI views in AppKit

- [Unifying your app’s animations](unifying-your-app-s-animations.md): Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.
- [NSHostingController](nshostingcontroller.md): An AppKit view controller that hosts SwiftUI view hierarchy.
- [NSHostingMenu](nshostingmenu.md): An AppKit menu with menu items that are defined by a SwiftUI View.
- [NSHostingSizingOptions](nshostingsizingoptions.md): Options for how hosting views and controllers reflect their content’s size into Auto Layout constraints.
- [NSHostingSceneRepresentation](nshostingscenerepresentation.md): An AppKit type that hosts and can present SwiftUI scenes
- [NSHostingSceneBridgingOptions](nshostingscenebridgingoptions.md): Options for how hosting views and controllers manage aspects of the associated window.
