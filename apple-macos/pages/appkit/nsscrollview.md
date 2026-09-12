> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview](https://developer.apple.com/documentation/appkit/nsscrollview)

# NSScrollView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A view that displays a portion of a document view and provides scroll bars that allow the user to move the document view within the scroll view.

## Declaration

```swift
class NSScrollView
```

<a id="overview"></a>

## Overview

The [NSScrollView](nsscrollview.md) class is the central coordinator for AppKit’s scrolling machinery, which is composed of this class, and the [NSClipView](nsclipview.md) and [NSScroller](nsscroller.md) classes.

When using an [NSClipView](nsclipview.md) object within a scroll view (the usual configuration), you should issue messages that control background drawing state to the scroll view directly, rather than messaging the clip view.

## Topics

### Calculating Layout

- [frameSize(forContentSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:)](nsscrollview/framesize%28forcontentsize_horizontalscrollerclass_verticalscrollerclass_bordertype_controlsize_scrollerstyle_%29.md): Returns the frame size of a scroll view that contains a content view with the specified size.
- [contentSize(forFrameSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:)](nsscrollview/contentsize%28forframesize_horizontalscrollerclass_verticalscrollerclass_bordertype_controlsize_scrollerstyle_%29.md): Returns the content size calculated from the frame size and the specified specifications.

### Determining Component Sizes

- [contentSize](nsscrollview/contentsize.md): The size of the scroll view’s content view.
- [documentVisibleRect](nsscrollview/documentvisiblerect.md): The portion of the document view, in its own coordinate system, visible through the scroll view’s content view.

### Managing Graphics Attributes

- [backgroundColor](nsscrollview/backgroundcolor.md): The color of the content view’s background.
- [drawsBackground](nsscrollview/drawsbackground.md): A Boolean that indicates whether the scroll view draws its background.
- [borderType](nsscrollview/bordertype.md): A value that specifies the appearance of the scroll view’s border.
- [documentCursor](nsscrollview/documentcursor.md): The content view’s document cursor.

### Managing the Views

- [contentView](nsscrollview/contentview.md): The scroll view’s content view, the view that clips the document view.
- [documentView](nsscrollview/documentview.md): The view the scroll view scrolls within its content view.
- [addFloatingSubview(\_:for:)](nsscrollview/addfloatingsubview%28__for_%29.md): Adds a floating subview to the document view.

### Managing Scrollers

- [horizontalScroller](nsscrollview/horizontalscroller.md): The scroll view’s horizontal scroller.
- [hasHorizontalScroller](nsscrollview/hashorizontalscroller.md): A Boolean that indicates whether the scroll view has a horizontal scroller.
- [verticalScroller](nsscrollview/verticalscroller.md): The scroll view’s vertical scroller.
- [hasVerticalScroller](nsscrollview/hasverticalscroller.md): A Boolean that indicates whether the scroll view has a vertical scroller.
- [autohidesScrollers](nsscrollview/autohidesscrollers.md): A Boolean that indicates whether the scroll view automatically hides its scroll bars when they are not needed.

### Managing Rulers

- [rulerViewClass](nsscrollview/rulerviewclass.md): Returns the default class to be used for ruler objects in NSScrollViews.
- [hasHorizontalRuler](nsscrollview/hashorizontalruler.md): A Boolean that indicates whether the scroll view keeps a horizontal ruler object.
- [horizontalRulerView](nsscrollview/horizontalrulerview.md): The scroll view’s horizontal ruler view.
- [hasVerticalRuler](nsscrollview/hasverticalruler.md): A Boolean that indicates whether the scroll view keeps a vertical ruler object.
- [verticalRulerView](nsscrollview/verticalrulerview.md): The scroll view’s vertical ruler view.
- [rulersVisible](nsscrollview/rulersvisible.md): A Boolean that indicates whether the scroll view displays its rulers.

### Managing Insets

- [automaticallyAdjustsContentInsets](nsscrollview/automaticallyadjustscontentinsets.md): A Boolean that indicates whether the scroll view automatically adjusts its content insets.
- [contentInsets](nsscrollview/contentinsets.md): The distance that the scroll view’s subviews are inset from the enclosing scroll view during tiling.
- [scrollerInsets](nsscrollview/scrollerinsets.md): The distance the scrollers are inset from the edge of the scroll view.

### Scroller Style

- [scrollerKnobStyle](nsscrollview/scrollerknobstyle.md): The knob style of scroll views that use the overlay scroller style.
- [scrollerStyle](nsscrollview/scrollerstyle.md): The scroller style used by the scroll view.

### Setting Scrolling Behavior

- [lineScroll](nsscrollview/linescroll.md): The scroll view’s line by line scroll amount.
- [horizontalLineScroll](nsscrollview/horizontallinescroll.md): The scroll view’s horizontal line by line scroll amount.
- [verticalLineScroll](nsscrollview/verticallinescroll.md): The scroll view’s vertical line by line scroll amount.
- [pageScroll](nsscrollview/pagescroll.md): The amount of the document view kept visible when scrolling page by page.
- [horizontalPageScroll](nsscrollview/horizontalpagescroll.md): The amount of the document view kept visible when scrolling horizontally page by page.
- [verticalPageScroll](nsscrollview/verticalpagescroll.md): The amount of the document view kept visible when scrolling vertically page by page.
- [scrollsDynamically](nsscrollview/scrollsdynamically.md): A Boolean that indicates whether the scroll view redraws its document view while scrolling continuously.
- [scrollWheel(with:)](nsscrollview/scrollwheel%28with_%29.md): Scrolls the receiver up or down, in response to the user moving the mouse’s scroll wheel specified by `theEvent`.

### Updating Display After Scrolling

- [reflectScrolledClipView(\_:)](nsscrollview/reflectscrolledclipview%28__%29.md): Adjusts the receiver’s scrollers to reflect the size and positioning of its content view.

### Arranging Components

- [tile()](nsscrollview/tile%28%29.md): Lays out the components of the receiver: the content view, the scrollers, and the ruler views.

### Find Bar Positioning

- [findBarPosition](nsscrollview/findbarposition-swift.property.md): The position of the find bar.

### Specifying a Document’s Predominant Scrolling Behavior

- [usesPredominantAxisScrolling](nsscrollview/usespredominantaxisscrolling.md): A Boolean that indicates whether the scroll view uses a predominant scrolling axis for content.

### Specifying the Scroll View Elasticity

- [horizontalScrollElasticity](nsscrollview/horizontalscrollelasticity.md): The scroll view’s horizontal scrolling elasticity mode.
- [verticalScrollElasticity](nsscrollview/verticalscrollelasticity.md): The scroll view’s vertical scrolling elasticity mode.

### Flashing Overlay Scroll Bars

- [flashScrollers()](nsscrollview/flashscrollers%28%29.md): Flash the overlay scroll bars.

### Zooming the Scroll View

- [allowsMagnification](nsscrollview/allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnification](nsscrollview/magnification.md): The amount by which the content is currently scaled.
- [magnify(toFit:)](nsscrollview/magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [maxMagnification](nsscrollview/maxmagnification.md): The maximum value to which the content can be magnified.
- [minMagnification](nsscrollview/minmagnification.md): The minimum value to which the content can be magnified.
- [setMagnification(\_:centeredAt:)](nsscrollview/setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.

### Constants

- [NSScrollView.Elasticity](nsscrollview/elasticity.md): These constants determine the elasticity behavior for an axis of the scrollview.
- [NSScrollView.FindBarPosition](nsscrollview/findbarposition-swift.enum.md): These constants define the position of the find bar in relation to the scroll view.

### Notifications

- [willStartLiveMagnifyNotification](nsscrollview/willstartlivemagnifynotification.md): Posted at the beginning of a magnify gesture.
- [didEndLiveMagnifyNotification](nsscrollview/didendlivemagnifynotification.md): Posted at the end of a magnify gesture.
- [willStartLiveScrollNotification](nsscrollview/willstartlivescrollnotification.md): Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).
- [didLiveScrollNotification](nsscrollview/didlivescrollnotification.md): Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.
- [didEndLiveScrollNotification](nsscrollview/didendlivescrollnotification.md): Posted on the main thread at the end of live scroll tracking.

### Initializers

- [init(coder:)](nsscrollview/init%28coder_%29.md)
- [init(frame:)](nsscrollview/init%28frame_%29.md)

### Structures

- [NSScrollView.DidEndLiveMagnifyMessage](nsscrollview/didendlivemagnifymessage.md)
- [NSScrollView.DidEndLiveScrollMessage](nsscrollview/didendlivescrollmessage.md)
- [NSScrollView.DidLiveScrollMessage](nsscrollview/didlivescrollmessage.md)
- [NSScrollView.WillStartLiveMagnifyMessage](nsscrollview/willstartlivemagnifymessage.md)
- [NSScrollView.WillStartLiveScrollMessage](nsscrollview/willstartlivescrollmessage.md)

### Instance Properties

- [isTouchScrollingEnabled](nsscrollview/istouchscrollingenabled.md): Enable touch scrolling
- [maximumNumberOfTouchesForScrolling](nsscrollview/maximumnumberoftouchesforscrolling.md): The maximum number of touches needed for scrolling
- [minimumNumberOfTouchesForScrolling](nsscrollview/minimumnumberoftouchesforscrolling.md): The minimum number of touches needed for scrolling
- [refreshController](nsscrollview/refreshcontroller.md): The refresh controller associated with this scroll view.
- [scrollGestureForRelationships](nsscrollview/scrollgestureforrelationships.md): A gesture recognizer for setting up failure or exclusion relationships against scrolling gestures

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
- [NSTextFinderBarContainer](nstextfinderbarcontainer.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Views

- [NSScroller](nsscroller.md): An object that controls scrolling of a document view within a scroll view or other type of container view.
- [NSClipView](nsclipview.md): An object that clips a document view to a scroll view’s frame.

# NSScrollView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A view that displays a portion of a document view and provides scroll bars that allow the user to move the document view within the scroll view.

## Declaration

```objectivec
@interface NSScrollView : NSView
```

<a id="overview"></a>

## Overview

The [NSScrollView](nsscrollview.md) class is the central coordinator for AppKit’s scrolling machinery, which is composed of this class, and the [NSClipView](nsclipview.md) and [NSScroller](nsscroller.md) classes.

When using an [NSClipView](nsclipview.md) object within a scroll view (the usual configuration), you should issue messages that control background drawing state to the scroll view directly, rather than messaging the clip view.

## Topics

### Calculating Layout

- [frameSizeForContentSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:](nsscrollview/framesize%28forcontentsize_horizontalscrollerclass_verticalscrollerclass_bordertype_controlsize_scrollerstyle_%29.md): Returns the frame size of a scroll view that contains a content view with the specified size.
- [contentSizeForFrameSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:](nsscrollview/contentsize%28forframesize_horizontalscrollerclass_verticalscrollerclass_bordertype_controlsize_scrollerstyle_%29.md): Returns the content size calculated from the frame size and the specified specifications.

### Determining Component Sizes

- [contentSize](nsscrollview/contentsize.md): The size of the scroll view’s content view.
- [documentVisibleRect](nsscrollview/documentvisiblerect.md): The portion of the document view, in its own coordinate system, visible through the scroll view’s content view.

### Managing Graphics Attributes

- [backgroundColor](nsscrollview/backgroundcolor.md): The color of the content view’s background.
- [drawsBackground](nsscrollview/drawsbackground.md): A Boolean that indicates whether the scroll view draws its background.
- [borderType](nsscrollview/bordertype.md): A value that specifies the appearance of the scroll view’s border.
- [documentCursor](nsscrollview/documentcursor.md): The content view’s document cursor.

### Managing the Views

- [contentView](nsscrollview/contentview.md): The scroll view’s content view, the view that clips the document view.
- [documentView](nsscrollview/documentview.md): The view the scroll view scrolls within its content view.
- [addFloatingSubview:forAxis:](nsscrollview/addfloatingsubview%28__for_%29.md): Adds a floating subview to the document view.

### Managing Scrollers

- [horizontalScroller](nsscrollview/horizontalscroller.md): The scroll view’s horizontal scroller.
- [hasHorizontalScroller](nsscrollview/hashorizontalscroller.md): A Boolean that indicates whether the scroll view has a horizontal scroller.
- [verticalScroller](nsscrollview/verticalscroller.md): The scroll view’s vertical scroller.
- [hasVerticalScroller](nsscrollview/hasverticalscroller.md): A Boolean that indicates whether the scroll view has a vertical scroller.
- [autohidesScrollers](nsscrollview/autohidesscrollers.md): A Boolean that indicates whether the scroll view automatically hides its scroll bars when they are not needed.

### Managing Rulers

- [rulerViewClass](nsscrollview/rulerviewclass.md): Returns the default class to be used for ruler objects in NSScrollViews.
- [hasHorizontalRuler](nsscrollview/hashorizontalruler.md): A Boolean that indicates whether the scroll view keeps a horizontal ruler object.
- [horizontalRulerView](nsscrollview/horizontalrulerview.md): The scroll view’s horizontal ruler view.
- [hasVerticalRuler](nsscrollview/hasverticalruler.md): A Boolean that indicates whether the scroll view keeps a vertical ruler object.
- [verticalRulerView](nsscrollview/verticalrulerview.md): The scroll view’s vertical ruler view.
- [rulersVisible](nsscrollview/rulersvisible.md): A Boolean that indicates whether the scroll view displays its rulers.

### Managing Insets

- [automaticallyAdjustsContentInsets](nsscrollview/automaticallyadjustscontentinsets.md): A Boolean that indicates whether the scroll view automatically adjusts its content insets.
- [contentInsets](nsscrollview/contentinsets.md): The distance that the scroll view’s subviews are inset from the enclosing scroll view during tiling.
- [scrollerInsets](nsscrollview/scrollerinsets.md): The distance the scrollers are inset from the edge of the scroll view.

### Scroller Style

- [scrollerKnobStyle](nsscrollview/scrollerknobstyle.md): The knob style of scroll views that use the overlay scroller style.
- [scrollerStyle](nsscrollview/scrollerstyle.md): The scroller style used by the scroll view.

### Setting Scrolling Behavior

- [lineScroll](nsscrollview/linescroll.md): The scroll view’s line by line scroll amount.
- [horizontalLineScroll](nsscrollview/horizontallinescroll.md): The scroll view’s horizontal line by line scroll amount.
- [verticalLineScroll](nsscrollview/verticallinescroll.md): The scroll view’s vertical line by line scroll amount.
- [pageScroll](nsscrollview/pagescroll.md): The amount of the document view kept visible when scrolling page by page.
- [horizontalPageScroll](nsscrollview/horizontalpagescroll.md): The amount of the document view kept visible when scrolling horizontally page by page.
- [verticalPageScroll](nsscrollview/verticalpagescroll.md): The amount of the document view kept visible when scrolling vertically page by page.
- [scrollsDynamically](nsscrollview/scrollsdynamically.md): A Boolean that indicates whether the scroll view redraws its document view while scrolling continuously.
- [scrollWheel:](nsscrollview/scrollwheel%28with_%29.md): Scrolls the receiver up or down, in response to the user moving the mouse’s scroll wheel specified by `theEvent`.

### Updating Display After Scrolling

- [reflectScrolledClipView:](nsscrollview/reflectscrolledclipview%28__%29.md): Adjusts the receiver’s scrollers to reflect the size and positioning of its content view.

### Arranging Components

- [tile](nsscrollview/tile%28%29.md): Lays out the components of the receiver: the content view, the scrollers, and the ruler views.

### Find Bar Positioning

- [findBarPosition](nsscrollview/findbarposition-swift.property.md): The position of the find bar.

### Specifying a Document’s Predominant Scrolling Behavior

- [usesPredominantAxisScrolling](nsscrollview/usespredominantaxisscrolling.md): A Boolean that indicates whether the scroll view uses a predominant scrolling axis for content.

### Specifying the Scroll View Elasticity

- [horizontalScrollElasticity](nsscrollview/horizontalscrollelasticity.md): The scroll view’s horizontal scrolling elasticity mode.
- [verticalScrollElasticity](nsscrollview/verticalscrollelasticity.md): The scroll view’s vertical scrolling elasticity mode.

### Flashing Overlay Scroll Bars

- [flashScrollers](nsscrollview/flashscrollers%28%29.md): Flash the overlay scroll bars.

### Zooming the Scroll View

- [allowsMagnification](nsscrollview/allowsmagnification.md): Allows the user to magnify the scroll view.
- [magnification](nsscrollview/magnification.md): The amount by which the content is currently scaled.
- [magnifyToFitRect:](nsscrollview/magnify%28tofit_%29.md): Magnifies the content view proportionally such that the given rectangle fits centered in the scroll view.
- [maxMagnification](nsscrollview/maxmagnification.md): The maximum value to which the content can be magnified.
- [minMagnification](nsscrollview/minmagnification.md): The minimum value to which the content can be magnified.
- [setMagnification:centeredAtPoint:](nsscrollview/setmagnification%28__centeredat_%29.md): Magnify the content by the given amount and center the result on the given point.

### Deprecated Methods

- [frameSizeForContentSize:hasHorizontalScroller:hasVerticalScroller:borderType:](nsscrollview/framesizeforcontentsize_hashorizontalscroller_hasverticalscroller_bordertype_.md): Deprecated. Returns the frame size of an scroll view that contains a content view with the specified size.
- [contentSizeForFrameSize:hasHorizontalScroller:hasVerticalScroller:borderType:](nsscrollview/contentsizeforframesize_hashorizontalscroller_hasverticalscroller_bordertype_.md): Deprecated. Returns the content size calculated from the frame size and the specified specifications.

### Constants

- [NSScrollElasticity](nsscrollview/elasticity.md): These constants determine the elasticity behavior for an axis of the scrollview.
- [NSScrollViewFindBarPosition](nsscrollview/findbarposition-swift.enum.md): These constants define the position of the find bar in relation to the scroll view.

### Notifications

- [NSScrollViewWillStartLiveMagnifyNotification](nsscrollview/willstartlivemagnifynotification.md): Posted at the beginning of a magnify gesture.
- [NSScrollViewDidEndLiveMagnifyNotification](nsscrollview/didendlivemagnifynotification.md): Posted at the end of a magnify gesture.
- [NSScrollViewWillStartLiveScrollNotification](nsscrollview/willstartlivescrollnotification.md): Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).
- [NSScrollViewDidLiveScrollNotification](nsscrollview/didlivescrollnotification.md): Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.
- [NSScrollViewDidEndLiveScrollNotification](nsscrollview/didendlivescrollnotification.md): Posted on the main thread at the end of live scroll tracking.

### Initializers

- [initWithCoder:](nsscrollview/init%28coder_%29.md)
- [initWithFrame:](nsscrollview/init%28frame_%29.md)

### Instance Properties

- [touchScrollingEnabled](nsscrollview/istouchscrollingenabled.md): Enable touch scrolling
- [maximumNumberOfTouchesForScrolling](nsscrollview/maximumnumberoftouchesforscrolling.md): The maximum number of touches needed for scrolling
- [minimumNumberOfTouchesForScrolling](nsscrollview/minimumnumberoftouchesforscrolling.md): The minimum number of touches needed for scrolling
- [refreshController](nsscrollview/refreshcontroller.md): The refresh controller associated with this scroll view.
- [scrollGestureForRelationships](nsscrollview/scrollgestureforrelationships.md): A gesture recognizer for setting up failure or exclusion relationships against scrolling gestures

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [NSTextFinderBarContainer](nstextfinderbarcontainer.md)

## See Also

### Views

- [NSScroller](nsscroller.md): An object that controls scrolling of a document view within a scroll view or other type of container view.
- [NSClipView](nsclipview.md): An object that clips a document view to a scroll view’s frame.
