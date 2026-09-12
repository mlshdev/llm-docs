> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview](https://developer.apple.com/documentation/appkit/nsstackview)

# NSStackView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.9+

A view that arranges an array of views horizontally or vertically and updates their placement and sizing when the window size changes.

## Declaration

```swift
class NSStackView
```

<a id="overview"></a>

## Overview

A stack view employs Auto Layout (the system’s constraint-based layout feature) to arrange and align an array of views according to your specification. For more information on using a stack view effectively, see [NSLayoutConstraint](nslayoutconstraint.md).

<a id="Basic-Features-of-Stack-Views"></a>

### Basic Features of Stack Views

A stack view supports vertical and horizontal layouts and interacts dynamically with window resizing and Cocoa animations. You can easily reconfigure the contents of a stack view at runtime. That is, after you create and configure a stack view in Interface Builder, you can add or remove views dynamically without explicitly working with layout constraints. For example, if you configure a stack view with three checkboxes and dynamically add a fourth, the stack view automatically adds constraints as needed, according to the stack view’s configuration. The new checkbox gains dynamic layout configuration from the stack view.

Stack views are nestable: a stack view is a valid element in the [views](nsstackview/views.md) array of another stack view.

> **Important**

>  Do not add views or constraints to a stack view’s private views. A stack view’s private views might change in future versions of macOS and are not guaranteed to be encoded or decoded with the [NSCoder](https://developer.apple.com/documentation/foundation/nscoder) class.

For more information on [NSStackView](nsstackview.md), see [Organize Your User Interface with a Stack View](organize-your-user-interface-with-a-stack-view.md).

<a id="Layout-Direction-and-Gravity-Areas"></a>

### Layout Direction and Gravity Areas

A stack view has three so-called *gravity areas* that each identify a section of the stack view’s layout. A horizontal stack view, which is the default type, has a leading, a center, and a trailing gravity area. The ordering of these areas depends on the value of the stack view’s [userInterfaceLayoutDirection](nsview/userinterfacelayoutdirection.md) property (inherited from the [NSView](nsview.md) class). In a left to right language, the leading gravity area in a horizontal stack view is on the left. To enforce a left to right layout independently of language, explicitly set the layout direction by calling the inherited [userInterfaceLayoutDirection](nsview/userinterfacelayoutdirection.md) method on your stack view instance.

To specify vertical layout, use the [orientation](nsstackview/orientation.md) property and the [NSUserInterfaceLayoutOrientation.vertical](nsuserinterfacelayoutorientation/vertical.md) constant from the [NSUserInterfaceLayoutOrientation](nsuserinterfacelayoutorientation.md) enumeration. In a vertical stack view, the gravity areas always are top, center, and bottom.

<a id="View-Detachment-and-Hiding"></a>

### View Detachment and Hiding

A stack view can automatically detach and reattach its views in response to layout changes, such as window resizing performed by the user, or resizing/repositioning of another view in the same view hierarchy. A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory. A view that is hidden, but not detached, remains part of the view hierarchy and continues to participate in Auto Layout, but it is not visible and doesn’t receive input events.

To allow views to detach, set the so-called *clipping resistance* for a stack view to a value lower than its default of [required](nslayoutconstraint/priority-swift.struct/required.md). See the [setClippingResistancePriority(\_:for:)](nsstackview/setclippingresistancepriority%28__for_%29.md) method.

You can influence which views detach first (and reattach last). Do this by setting the so-called *visibility priority* for each view whose detachment order you want to specify. A view with a lower visibility priority detaches before one with a higher priority, and reattaches after it. See the [NSStackView.VisibilityPriority](nsstackview/visibilitypriority.md) enumeration and the [setVisibilityPriority(\_:for:)](nsstackview/setvisibilitypriority%28__for_%29.md) method.

To explicitly detach a view from a stack view, call the [setVisibilityPriority(\_:for:)](nsstackview/setvisibilitypriority%28__for_%29.md) method with a value of [notVisible](nsstackview/visibilitypriority/notvisible.md). To explicitly reattach a view to a stack view, call the same method with a value of [mustHold](nsstackview/visibilitypriority/musthold.md). If you hide a view that belongs to a stack view (by setting the view’s [isHidden](nsview/ishidden.md) property to [true](https://developer.apple.com/documentation/swift/true)), the view detaches from the stack view by default. Use the [detachesHiddenViews](nsstackview/detacheshiddenviews.md) property to change the default behavior.

The system calls a stack view delegate method when a view is about to be detached and when a view has been reattached, giving you the opportunity to run code at those times. See [NSStackViewDelegate](nsstackviewdelegate.md).

## Topics

### Creating a Stack View

- [init(views:)](nsstackview/init%28views_%29.md): Creates and returns a stack view with a specified array of views.

### Responding to Stack-Related Changes

- [delegate](nsstackview/delegate.md): The delegate object for the stack view.
- [NSStackViewDelegate](nsstackviewdelegate.md): A set of methods you use to respond to a stack view detaching and reattaching views.

### Managing Views in Gravity Areas

- [addView(\_:in:)](nsstackview/addview%28__in_%29.md): Adds a view to the end of the stack view gravity area.
- [insertView(\_:at:in:)](nsstackview/insertview%28__at_in_%29.md): Adds a view to a stack view gravity area at a specified index position.
- [setViews(\_:in:)](nsstackview/setviews%28__in_%29.md): Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.
- [removeView(\_:)](nsstackview/removeview%28__%29.md): Removes a specified view from the stack view.
- [NSStackView.Gravity](nsstackview/gravity.md): The gravity areas available in a stack view.

### Managing the Arranged Subviews

- [addArrangedSubview(\_:)](nsstackview/addarrangedsubview%28__%29.md): Adds the specified view to the end of the arranged subviews list.
- [insertArrangedSubview(\_:at:)](nsstackview/insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeArrangedSubview(\_:)](nsstackview/removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.
- [arrangedSubviews](nsstackview/arrangedsubviews.md): The array of views arranged by the stack view.

### Inspecting a Stack View

- [views](nsstackview/views.md): The array of views owned by the stack view.
- [views(in:)](nsstackview/views%28in_%29.md): Returns the array of views in the specified gravity area in the stack view.
- [detachedViews](nsstackview/detachedviews.md): An array that contains the detached views from all the stack view’s gravity areas.
- [clippingResistancePriority(for:)](nsstackview/clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [huggingPriority(for:)](nsstackview/huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

### Configuring the Stack View Layout

- [orientation](nsstackview/orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](nsstackview/alignment.md): The view alignment within the stack view.
- [spacing](nsstackview/spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [useDefaultSpacing](nsstackview/usedefaultspacing.md)
- [edgeInsets](nsstackview/edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](nsstackview/hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](nsstackview/distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackView.Distribution](nsstackview/distribution-swift.enum.md)

### Configuring Views in a Stack View

- [customSpacing(after:)](nsstackview/customspacing%28after_%29.md): Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.
- [setCustomSpacing(\_:after:)](nsstackview/setcustomspacing%28__after_%29.md): Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.
- [visibilityPriority(for:)](nsstackview/visibilitypriority%28for_%29.md): Returns the visibility priority for a specified view in the stack view.
- [setVisibilityPriority(\_:for:)](nsstackview/setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [NSStackView.VisibilityPriority](nsstackview/visibilitypriority.md): The various Auto Layout priorities for a view in the stack view to remain attached.
- [useDefaultSpacing](nsstackview/usedefaultspacing.md)

### Configuring Dynamic Behavior for a Stack View

- [detachesHiddenViews](nsstackview/detacheshiddenviews.md): A Boolean value that indicates whether the stack view removes hidden views from its view hierarchy.
- [setClippingResistancePriority(\_:for:)](nsstackview/setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [setHuggingPriority(\_:for:)](nsstackview/sethuggingpriority%28__for_%29.md): Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.

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

# NSStackView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.9+

A view that arranges an array of views horizontally or vertically and updates their placement and sizing when the window size changes.

## Declaration

```objectivec
@interface NSStackView : NSView
```

<a id="overview"></a>

## Overview

A stack view employs Auto Layout (the system’s constraint-based layout feature) to arrange and align an array of views according to your specification. For more information on using a stack view effectively, see [NSLayoutConstraint](nslayoutconstraint.md).

<a id="Basic-Features-of-Stack-Views"></a>

### Basic Features of Stack Views

A stack view supports vertical and horizontal layouts and interacts dynamically with window resizing and Cocoa animations. You can easily reconfigure the contents of a stack view at runtime. That is, after you create and configure a stack view in Interface Builder, you can add or remove views dynamically without explicitly working with layout constraints. For example, if you configure a stack view with three checkboxes and dynamically add a fourth, the stack view automatically adds constraints as needed, according to the stack view’s configuration. The new checkbox gains dynamic layout configuration from the stack view.

Stack views are nestable: a stack view is a valid element in the [views](nsstackview/views.md) array of another stack view.

> **Important**

>  Do not add views or constraints to a stack view’s private views. A stack view’s private views might change in future versions of macOS and are not guaranteed to be encoded or decoded with the [NSCoder](https://developer.apple.com/documentation/foundation/nscoder) class.

For more information on [NSStackView](nsstackview.md), see [Organize Your User Interface with a Stack View](organize-your-user-interface-with-a-stack-view.md).

<a id="Layout-Direction-and-Gravity-Areas"></a>

### Layout Direction and Gravity Areas

A stack view has three so-called *gravity areas* that each identify a section of the stack view’s layout. A horizontal stack view, which is the default type, has a leading, a center, and a trailing gravity area. The ordering of these areas depends on the value of the stack view’s [userInterfaceLayoutDirection](nsview/userinterfacelayoutdirection.md) property (inherited from the [NSView](nsview.md) class). In a left to right language, the leading gravity area in a horizontal stack view is on the left. To enforce a left to right layout independently of language, explicitly set the layout direction by calling the inherited [userInterfaceLayoutDirection](nsview/userinterfacelayoutdirection.md) method on your stack view instance.

To specify vertical layout, use the [orientation](nsstackview/orientation.md) property and the [NSUserInterfaceLayoutOrientationVertical](nsuserinterfacelayoutorientation/vertical.md) constant from the [NSUserInterfaceLayoutOrientation](nsuserinterfacelayoutorientation.md) enumeration. In a vertical stack view, the gravity areas always are top, center, and bottom.

<a id="View-Detachment-and-Hiding"></a>

### View Detachment and Hiding

A stack view can automatically detach and reattach its views in response to layout changes, such as window resizing performed by the user, or resizing/repositioning of another view in the same view hierarchy. A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory. A view that is hidden, but not detached, remains part of the view hierarchy and continues to participate in Auto Layout, but it is not visible and doesn’t receive input events.

To allow views to detach, set the so-called *clipping resistance* for a stack view to a value lower than its default of [NSLayoutPriorityRequired](nslayoutconstraint/priority-swift.struct/required.md). See the [setClippingResistancePriority:forOrientation:](nsstackview/setclippingresistancepriority%28__for_%29.md) method.

You can influence which views detach first (and reattach last). Do this by setting the so-called *visibility priority* for each view whose detachment order you want to specify. A view with a lower visibility priority detaches before one with a higher priority, and reattaches after it. See the [NSStackViewVisibilityPriority](nsstackview/visibilitypriority.md) enumeration and the [setVisibilityPriority:forView:](nsstackview/setvisibilitypriority%28__for_%29.md) method.

To explicitly detach a view from a stack view, call the [setVisibilityPriority:forView:](nsstackview/setvisibilitypriority%28__for_%29.md) method with a value of [NSStackViewVisibilityPriorityNotVisible](nsstackview/visibilitypriority/notvisible.md). To explicitly reattach a view to a stack view, call the same method with a value of [NSStackViewVisibilityPriorityMustHold](nsstackview/visibilitypriority/musthold.md). If you hide a view that belongs to a stack view (by setting the view’s [hidden](nsview/ishidden.md) property to [true](https://developer.apple.com/documentation/swift/true)), the view detaches from the stack view by default. Use the [detachesHiddenViews](nsstackview/detacheshiddenviews.md) property to change the default behavior.

The system calls a stack view delegate method when a view is about to be detached and when a view has been reattached, giving you the opportunity to run code at those times. See [NSStackViewDelegate](nsstackviewdelegate.md).

## Topics

### Creating a Stack View

- [stackViewWithViews:](nsstackview/init%28views_%29.md): Creates and returns a stack view with a specified array of views.

### Responding to Stack-Related Changes

- [delegate](nsstackview/delegate.md): The delegate object for the stack view.
- [NSStackViewDelegate](nsstackviewdelegate.md): A set of methods you use to respond to a stack view detaching and reattaching views.

### Managing Views in Gravity Areas

- [addView:inGravity:](nsstackview/addview%28__in_%29.md): Adds a view to the end of the stack view gravity area.
- [insertView:atIndex:inGravity:](nsstackview/insertview%28__at_in_%29.md): Adds a view to a stack view gravity area at a specified index position.
- [setViews:inGravity:](nsstackview/setviews%28__in_%29.md): Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.
- [removeView:](nsstackview/removeview%28__%29.md): Removes a specified view from the stack view.
- [NSStackViewGravity](nsstackview/gravity.md): The gravity areas available in a stack view.

### Managing the Arranged Subviews

- [addArrangedSubview:](nsstackview/addarrangedsubview%28__%29.md): Adds the specified view to the end of the arranged subviews list.
- [insertArrangedSubview:atIndex:](nsstackview/insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeArrangedSubview:](nsstackview/removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.
- [arrangedSubviews](nsstackview/arrangedsubviews.md): The array of views arranged by the stack view.

### Inspecting a Stack View

- [views](nsstackview/views.md): The array of views owned by the stack view.
- [viewsInGravity:](nsstackview/views%28in_%29.md): Returns the array of views in the specified gravity area in the stack view.
- [detachedViews](nsstackview/detachedviews.md): An array that contains the detached views from all the stack view’s gravity areas.
- [clippingResistancePriorityForOrientation:](nsstackview/clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [huggingPriorityForOrientation:](nsstackview/huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

### Configuring the Stack View Layout

- [orientation](nsstackview/orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](nsstackview/alignment.md): The view alignment within the stack view.
- [spacing](nsstackview/spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [NSStackViewSpacingUseDefault](nsstackview/usedefaultspacing.md)
- [edgeInsets](nsstackview/edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](nsstackview/hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](nsstackview/distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackViewDistribution](nsstackview/distribution-swift.enum.md)

### Configuring Views in a Stack View

- [customSpacingAfterView:](nsstackview/customspacing%28after_%29.md): Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.
- [setCustomSpacing:afterView:](nsstackview/setcustomspacing%28__after_%29.md): Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.
- [visibilityPriorityForView:](nsstackview/visibilitypriority%28for_%29.md): Returns the visibility priority for a specified view in the stack view.
- [setVisibilityPriority:forView:](nsstackview/setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [NSStackViewVisibilityPriority](nsstackview/visibilitypriority.md): The various Auto Layout priorities for a view in the stack view to remain attached.
- [NSStackViewSpacingUseDefault](nsstackview/usedefaultspacing.md)

### Configuring Dynamic Behavior for a Stack View

- [detachesHiddenViews](nsstackview/detacheshiddenviews.md): A Boolean value that indicates whether the stack view removes hidden views from its view hierarchy.
- [setClippingResistancePriority:forOrientation:](nsstackview/setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [setHuggingPriority:forOrientation:](nsstackview/sethuggingpriority%28__for_%29.md): Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.

## Relationships

### Inherits From

- [NSView](nsview.md)
