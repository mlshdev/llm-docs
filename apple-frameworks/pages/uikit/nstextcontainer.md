> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontainer](https://developer.apple.com/documentation/uikit/nstextcontainer)

# NSTextContainer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A region where text layout occurs.

## Declaration

```swift
class NSTextContainer
```

<a id="overview"></a>

## Overview

An [NSLayoutManager](nslayoutmanager.md) uses [NSTextContainer](nstextcontainer.md) to determine where to break lines, lay out portions of text, and so on. An [NSTextContainer](nstextcontainer.md) object typically defines rectangular regions, but you can define exclusion paths inside the text container to create regions where text doesn’t flow. You can also subclass to create text containers with nonrectangular regions, such as circular regions, regions with holes in them, or regions that flow alongside graphics.

You can access instances of the [NSTextContainer](nstextcontainer.md), [NSLayoutManager](nslayoutmanager.md), and [NSTextStorage](nstextstorage.md) classes from threads other than the main thread as long as the app guarantees access from only one thread at a time.

## Topics

### Creating a text container

- [init(size:)](nstextcontainer/init%28size_%29.md): Initializes a text container with a specified bounding rectangle.
- [init(coder:)](nstextcontainer/init%28coder_%29.md): Creates a text container from data in an unarchiver.

### Managing text components

- [layoutManager](nstextcontainer/layoutmanager.md): The text container’s layout manager.
- [textLayoutManager](nstextcontainer/textlayoutmanager.md): The [NSTextLayoutManager](nstextlayoutmanager.md) owning the text container.
- [replaceLayoutManager(\_:)](nstextcontainer/replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.
- [textView](https://developer.apple.com/documentation/appkit/nstextcontainer/textview): The text container’s text view.

### Defining the container shape

- [size](nstextcontainer/size.md): The size of the text container’s bounding rectangle.
- [exclusionPaths](nstextcontainer/exclusionpaths.md): An array of path objects that represents the regions where text doesn’t display in the text container.
- [lineBreakMode](nstextcontainer/linebreakmode.md): The behavior of the last line inside the text container.
- [widthTracksTextView](nstextcontainer/widthtrackstextview.md): A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.
- [heightTracksTextView](nstextcontainer/heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.

### Constraining text layout

- [maximumNumberOfLines](nstextcontainer/maximumnumberoflines.md): The maximum number of lines that the text container can store.
- [lineFragmentPadding](nstextcontainer/linefragmentpadding.md): The value for the text inset within line fragment rectangles.
- [lineFragmentRect(forProposedRect:at:writingDirection:remaining:)](nstextcontainer/linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.
- [isSimpleRectangularTextContainer](nstextcontainer/issimplerectangulartextcontainer.md): A Boolean that indicates whether the text container’s region is a rectangle with no holes or gaps, and whose edges are parallel to the text view’s coordinate system axes.

### Deprecated

- [init(containerSize:)](https://developer.apple.com/documentation/appkit/nstextcontainer/init%28containersize:%29): Deprecated. Initializes a text container with a specified bounding rectangle.
- [lineFragmentRect(forProposedRect:sweepDirection:movementDirection:remaining:)](https://developer.apple.com/documentation/appkit/nstextcontainer/linefragmentrect%28forproposedrect:sweepdirection:movementdirection:remaining:%29): Deprecated. Calculates and returns the longest rectangle available in the proposed rectangle for displaying text.
- [contains(\_:)](https://developer.apple.com/documentation/appkit/nstextcontainer/contains%28_:%29): Deprecated. Queries whether a point lies within the text container’s region or on the region’s edge—not simply within its bounding rectangle.
- [containerSize](https://developer.apple.com/documentation/appkit/nstextcontainer/containersize): Deprecated. The size of the text container’s bounding rectangle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md)

## See Also

### Layout

- [Using TextKit 2 to interact with text](using-textkit-2-to-interact-with-text.md): Interact with text by managing text selection and inserting custom text elements.
- [Display text with a custom layout](display-text-with-a-custom-layout.md): Lay out text in a custom-shaped container and apply glyph substitutions.
- [Managing viewport layout and attachment reuse in text views](managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass.md): Customize layout and preserve attachment views in your text view subclass.
- [NSTextLayoutManager](nstextlayoutmanager.md): The primary class that you use to manage text layout and presentation for custom text displays.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextLineFragment](nstextlinefragment.md): A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.
- [NSTextViewportLayoutController](nstextviewportlayoutcontroller.md): Manages the layout process inside the viewport interacting with its delegate.
- [NSTextViewportRenderingSurface](nstextviewportrenderingsurface.md): A protocol that identifies a view or layer as a drawable element for a text layout fragment.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.

# NSTextContainer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A region where text layout occurs.

## Declaration

```objectivec
@interface NSTextContainer : NSObject
```

<a id="overview"></a>

## Overview

An [NSLayoutManager](nslayoutmanager.md) uses [NSTextContainer](nstextcontainer.md) to determine where to break lines, lay out portions of text, and so on. An [NSTextContainer](nstextcontainer.md) object typically defines rectangular regions, but you can define exclusion paths inside the text container to create regions where text doesn’t flow. You can also subclass to create text containers with nonrectangular regions, such as circular regions, regions with holes in them, or regions that flow alongside graphics.

You can access instances of the [NSTextContainer](nstextcontainer.md), [NSLayoutManager](nslayoutmanager.md), and [NSTextStorage](nstextstorage.md) classes from threads other than the main thread as long as the app guarantees access from only one thread at a time.

## Topics

### Creating a text container

- [initWithSize:](nstextcontainer/init%28size_%29.md): Initializes a text container with a specified bounding rectangle.
- [initWithCoder:](nstextcontainer/init%28coder_%29.md): Creates a text container from data in an unarchiver.

### Managing text components

- [layoutManager](nstextcontainer/layoutmanager.md): The text container’s layout manager.
- [textLayoutManager](nstextcontainer/textlayoutmanager.md): The [NSTextLayoutManager](nstextlayoutmanager.md) owning the text container.
- [replaceLayoutManager:](nstextcontainer/replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.
- [textView](https://developer.apple.com/documentation/appkit/nstextcontainer/textview): The text container’s text view.

### Defining the container shape

- [size](nstextcontainer/size.md): The size of the text container’s bounding rectangle.
- [exclusionPaths](nstextcontainer/exclusionpaths.md): An array of path objects that represents the regions where text doesn’t display in the text container.
- [lineBreakMode](nstextcontainer/linebreakmode.md): The behavior of the last line inside the text container.
- [widthTracksTextView](nstextcontainer/widthtrackstextview.md): A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.
- [heightTracksTextView](nstextcontainer/heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.

### Constraining text layout

- [maximumNumberOfLines](nstextcontainer/maximumnumberoflines.md): The maximum number of lines that the text container can store.
- [lineFragmentPadding](nstextcontainer/linefragmentpadding.md): The value for the text inset within line fragment rectangles.
- [lineFragmentRectForProposedRect:atIndex:writingDirection:remainingRect:](nstextcontainer/linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md): Returns the bounds of a line fragment rectangle inside the text container for the proposed rectangle.
- [simpleRectangularTextContainer](nstextcontainer/issimplerectangulartextcontainer.md): A Boolean that indicates whether the text container’s region is a rectangle with no holes or gaps, and whose edges are parallel to the text view’s coordinate system axes.

### Deprecated

- [initWithContainerSize:](https://developer.apple.com/documentation/appkit/nstextcontainer/init%28containersize:%29): Deprecated. Initializes a text container with a specified bounding rectangle.
- [lineFragmentRectForProposedRect:sweepDirection:movementDirection:remainingRect:](https://developer.apple.com/documentation/appkit/nstextcontainer/linefragmentrect%28forproposedrect:sweepdirection:movementdirection:remaining:%29): Deprecated. Calculates and returns the longest rectangle available in the proposed rectangle for displaying text.
- [containsPoint:](https://developer.apple.com/documentation/appkit/nstextcontainer/contains%28_:%29): Deprecated. Queries whether a point lies within the text container’s region or on the region’s edge—not simply within its bounding rectangle.
- [containerSize](https://developer.apple.com/documentation/appkit/nstextcontainer/containersize): Deprecated. The size of the text container’s bounding rectangle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md)

## See Also

### Layout

- [Using TextKit 2 to interact with text](using-textkit-2-to-interact-with-text.md): Interact with text by managing text selection and inserting custom text elements.
- [Display text with a custom layout](display-text-with-a-custom-layout.md): Lay out text in a custom-shaped container and apply glyph substitutions.
- [Managing viewport layout and attachment reuse in text views](managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass.md): Customize layout and preserve attachment views in your text view subclass.
- [NSTextLayoutManager](nstextlayoutmanager.md): The primary class that you use to manage text layout and presentation for custom text displays.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextLineFragment](nstextlinefragment.md): A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.
- [NSTextViewportLayoutController](nstextviewportlayoutcontroller.md): Manages the layout process inside the viewport interacting with its delegate.
- [NSTextViewportRenderingSurface](nstextviewportrenderingsurface.md): A protocol that identifies a view or layer as a drawable element for a text layout fragment.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.
