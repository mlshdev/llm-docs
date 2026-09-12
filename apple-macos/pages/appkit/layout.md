> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/layout](https://developer.apple.com/documentation/appkit/layout)

# Layout (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Specify the size and position your view relative to other nearby views using rules that update your view hierarchy automatically.

## Topics

### Respecting the View’s Safe Area

- [safeAreaRect](nsview/safearearect.md): A rectangle in the view’s coordinate system that contains the unobscured portion of the view.
- [safeAreaInsets](nsview/safeareainsets.md): The distances from the edges of your view that define the safe area.
- [additionalSafeAreaInsets](nsview/additionalsafeareainsets.md): Custom insets that you specify to modify your view’s safe area
- [safeAreaLayoutGuide](nsview/safearealayoutguide.md): The layout guide you use to position content inside your view’s safe area.

### Managing the Content Layout Direction

- [userInterfaceLayoutDirection](nsview/userinterfacelayoutdirection.md): The layout direction for content in the view.

### Opting In to Auto Layout

- [requiresConstraintBasedLayout](nsview/requiresconstraintbasedlayout.md): Returns a Boolean value indicating whether the view depends on the constraint-based layout system.
- [translatesAutoresizingMaskIntoConstraints](nsview/translatesautoresizingmaskintoconstraints.md): A Boolean value indicating whether the view’s autoresizing mask is translated into constraints for the constraint-based layout system.

### Creating Constraints Using Layout Anchors

- [bottomAnchor](nsview/bottomanchor.md): A layout anchor representing the bottom edge of the view’s frame.
- [centerXAnchor](nsview/centerxanchor.md): A layout anchor representing the horizontal center of the view’s frame.
- [centerYAnchor](nsview/centeryanchor.md): A layout anchor representing the vertical center of the view’s frame.
- [firstBaselineAnchor](nsview/firstbaselineanchor.md): A layout anchor representing the baseline for the topmost line of text in the view.
- [heightAnchor](nsview/heightanchor.md): A layout anchor representing the height of the view’s frame.
- [lastBaselineAnchor](nsview/lastbaselineanchor.md): A layout anchor representing the baseline for the bottommost line of text in the view.
- [leadingAnchor](nsview/leadinganchor.md): A layout anchor representing the leading edge of the view’s frame.
- [leftAnchor](nsview/leftanchor.md): A layout anchor representing the left edge of the view’s frame.
- [rightAnchor](nsview/rightanchor.md): A layout anchor representing the right edge of the view’s frame.
- [topAnchor](nsview/topanchor.md): A layout anchor representing the top edge of the view’s frame.
- [trailingAnchor](nsview/trailinganchor.md): A layout anchor representing the trailing edge of the view’s frame.
- [widthAnchor](nsview/widthanchor.md): A layout anchor representing the width of the view’s frame.

### Managing the View’s Constraints

- [constraints](nsview/constraints.md): Returns the constraints held by the view.
- [addConstraint(\_:)](nsview/addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints(\_:)](nsview/addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint(\_:)](nsview/removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints(\_:)](nsview/removeconstraints%28__%29.md): Removes the specified constraints from the view.

### Measuring in Auto Layout

- [fittingSize](nsview/fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [intrinsicContentSize](nsview/intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize()](nsview/invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriority(for:)](nsview/contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority(\_:for:)](nsview/setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriority(for:)](nsview/contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority(\_:for:)](nsview/setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
- [noIntrinsicMetric](nsview/nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.

### Managing Layout Guides

- [addLayoutGuide(\_:)](nsview/addlayoutguide%28__%29.md): Adds the provided layout guide to the view.
- [removeLayoutGuide(\_:)](nsview/removelayoutguide%28__%29.md): Removes the provided layout guide from the view.
- [layoutGuides](nsview/layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](nsview/layoutmarginsguide.md): A layout guide that provides the recommended amount of padding for content inside of a view.

### Aligning Views with Auto Layout

- [alignmentRect(forFrame:)](nsview/alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frame(forAlignmentRect:)](nsview/frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](nsview/alignmentrectinsets.md): The insets (in points) from the view’s frame that define its content rectangle.
- [baselineOffsetFromBottom](nsview/baselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its baseline.
- [firstBaselineOffsetFromTop](nsview/firstbaselineoffsetfromtop.md): The distance (in points) between the top of the view’s alignment rectangle and its topmost baseline.
- [lastBaselineOffsetFromBottom](nsview/lastbaselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its bottommost baseline.

### Triggering Auto Layout

- [needsLayout](nsview/needslayout.md): A Boolean value indicating whether the view needs a layout pass before it can be drawn.
- [layout()](nsview/layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [layoutSubtreeIfNeeded()](nsview/layoutsubtreeifneeded%28%29.md): Updates the layout of the receiving view and its subviews based on the current views and constraints.
- [needsUpdateConstraints](nsview/needsupdateconstraints.md): A Boolean value indicating whether the view’s constraints need to be updated.
- [updateConstraints()](nsview/updateconstraints%28%29.md): Update constraints for the view.
- [updateConstraintsForSubtreeIfNeeded()](nsview/updateconstraintsforsubtreeifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.

### Enabling and Disabling Constraints

- [isHorizontalContentSizeConstraintActive](nsview/ishorizontalcontentsizeconstraintactive.md): A Boolean value that indicates whether the view’s horizontal size constraints are active.
- [isVerticalContentSizeConstraintActive](nsview/isverticalcontentsizeconstraintactive.md): A Boolean value that indicates whether the view’s vertical size constraints are active.

### Debugging Auto Layout

- [constraintsAffectingLayout(for:)](nsview/constraintsaffectinglayout%28for_%29.md): Returns the constraints impacting the layout of the view for a given orientation.
- [hasAmbiguousLayout](nsview/hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the layout of the view incompletely specify the location of the view.
- [exerciseAmbiguityInLayout()](nsview/exerciseambiguityinlayout%28%29.md): Randomly changes the frame of a view with an ambiguous layout between the different valid values.

### Resizing Subviews

- [autoresizesSubviews](nsview/autoresizessubviews.md): A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.
- [autoresizingMask](nsview/autoresizingmask-swift.property.md): The options that determine how the view is resized relative to its superview.
- [NSView.AutoresizingMask](nsview/autoresizingmask-swift.struct.md): Constants that specify the autoresizing behaviors for views.
- [resizeSubviews(withOldSize:)](nsview/resizesubviews%28witholdsize_%29.md): Informs the view’s subviews that the view’s bounds rectangle size has changed.
- [resize(withOldSuperviewSize:)](nsview/resize%28witholdsuperviewsize_%29.md): Informs the view that the bounds size of its superview has changed.

## See Also

### Managing the view’s content

- [Drawing](nsview-drawing.md): Draw the content of custom views and update that content when the view’s size or appearance changes.
- [Printing](nsview-printing.md): Create a printable version of your view’s content and handle pagination and printer-related behaviors.
- [NSViewContentSelectionInfo](nsviewcontentselectioninfo.md)

# Layout (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Specify the size and position your view relative to other nearby views using rules that update your view hierarchy automatically.

## Topics

### Respecting the View’s Safe Area

- [safeAreaRect](nsview/safearearect.md): A rectangle in the view’s coordinate system that contains the unobscured portion of the view.
- [safeAreaInsets](nsview/safeareainsets.md): The distances from the edges of your view that define the safe area.
- [additionalSafeAreaInsets](nsview/additionalsafeareainsets.md): Custom insets that you specify to modify your view’s safe area
- [safeAreaLayoutGuide](nsview/safearealayoutguide.md): The layout guide you use to position content inside your view’s safe area.

### Managing the Content Layout Direction

- [userInterfaceLayoutDirection](nsview/userinterfacelayoutdirection.md): The layout direction for content in the view.

### Opting In to Auto Layout

- [requiresConstraintBasedLayout](nsview/requiresconstraintbasedlayout.md): Returns a Boolean value indicating whether the view depends on the constraint-based layout system.
- [translatesAutoresizingMaskIntoConstraints](nsview/translatesautoresizingmaskintoconstraints.md): A Boolean value indicating whether the view’s autoresizing mask is translated into constraints for the constraint-based layout system.

### Creating Constraints Using Layout Anchors

- [bottomAnchor](nsview/bottomanchor.md): A layout anchor representing the bottom edge of the view’s frame.
- [centerXAnchor](nsview/centerxanchor.md): A layout anchor representing the horizontal center of the view’s frame.
- [centerYAnchor](nsview/centeryanchor.md): A layout anchor representing the vertical center of the view’s frame.
- [firstBaselineAnchor](nsview/firstbaselineanchor.md): A layout anchor representing the baseline for the topmost line of text in the view.
- [heightAnchor](nsview/heightanchor.md): A layout anchor representing the height of the view’s frame.
- [lastBaselineAnchor](nsview/lastbaselineanchor.md): A layout anchor representing the baseline for the bottommost line of text in the view.
- [leadingAnchor](nsview/leadinganchor.md): A layout anchor representing the leading edge of the view’s frame.
- [leftAnchor](nsview/leftanchor.md): A layout anchor representing the left edge of the view’s frame.
- [rightAnchor](nsview/rightanchor.md): A layout anchor representing the right edge of the view’s frame.
- [topAnchor](nsview/topanchor.md): A layout anchor representing the top edge of the view’s frame.
- [trailingAnchor](nsview/trailinganchor.md): A layout anchor representing the trailing edge of the view’s frame.
- [widthAnchor](nsview/widthanchor.md): A layout anchor representing the width of the view’s frame.

### Managing the View’s Constraints

- [constraints](nsview/constraints.md): Returns the constraints held by the view.
- [addConstraint:](nsview/addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints:](nsview/addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint:](nsview/removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints:](nsview/removeconstraints%28__%29.md): Removes the specified constraints from the view.

### Measuring in Auto Layout

- [fittingSize](nsview/fittingsize.md): The minimum size of the view that satisfies the constraints it holds.
- [intrinsicContentSize](nsview/intrinsiccontentsize.md): The natural size for the receiving view, considering only properties of the view itself.
- [invalidateIntrinsicContentSize](nsview/invalidateintrinsiccontentsize%28%29.md): Invalidates the view’s intrinsic content size.
- [contentCompressionResistancePriorityForOrientation:](nsview/contentcompressionresistancepriority%28for_%29.md): Returns the priority with which a view resists being made smaller than its intrinsic size.
- [setContentCompressionResistancePriority:forOrientation:](nsview/setcontentcompressionresistancepriority%28__for_%29.md): Sets the priority with which a view resists being made smaller than its intrinsic size.
- [contentHuggingPriorityForOrientation:](nsview/contenthuggingpriority%28for_%29.md): Returns the priority with which a view resists being made larger than its intrinsic size.
- [setContentHuggingPriority:forOrientation:](nsview/setcontenthuggingpriority%28__for_%29.md): Sets the priority with which a view resists being made larger than its intrinsic size.
- [NSViewNoIntrinsicMetric](nsview/nointrinsicmetric.md): A value that tells the layout system to ignore the intrinsic size value for a given dimension.

### Managing Layout Guides

- [addLayoutGuide:](nsview/addlayoutguide%28__%29.md): Adds the provided layout guide to the view.
- [removeLayoutGuide:](nsview/removelayoutguide%28__%29.md): Removes the provided layout guide from the view.
- [layoutGuides](nsview/layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](nsview/layoutmarginsguide.md): A layout guide that provides the recommended amount of padding for content inside of a view.

### Aligning Views with Auto Layout

- [alignmentRectForFrame:](nsview/alignmentrect%28forframe_%29.md): Returns the view’s alignment rectangle for a given frame.
- [frameForAlignmentRect:](nsview/frame%28foralignmentrect_%29.md): Returns the view’s frame for a given alignment rectangle.
- [alignmentRectInsets](nsview/alignmentrectinsets.md): The insets (in points) from the view’s frame that define its content rectangle.
- [baselineOffsetFromBottom](nsview/baselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its baseline.
- [firstBaselineOffsetFromTop](nsview/firstbaselineoffsetfromtop.md): The distance (in points) between the top of the view’s alignment rectangle and its topmost baseline.
- [lastBaselineOffsetFromBottom](nsview/lastbaselineoffsetfrombottom.md): The distance (in points) between the bottom of the view’s alignment rectangle and its bottommost baseline.

### Triggering Auto Layout

- [needsLayout](nsview/needslayout.md): A Boolean value indicating whether the view needs a layout pass before it can be drawn.
- [layout](nsview/layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [layoutSubtreeIfNeeded](nsview/layoutsubtreeifneeded%28%29.md): Updates the layout of the receiving view and its subviews based on the current views and constraints.
- [needsUpdateConstraints](nsview/needsupdateconstraints.md): A Boolean value indicating whether the view’s constraints need to be updated.
- [updateConstraints](nsview/updateconstraints%28%29.md): Update constraints for the view.
- [updateConstraintsForSubtreeIfNeeded](nsview/updateconstraintsforsubtreeifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.

### Enabling and Disabling Constraints

- [horizontalContentSizeConstraintActive](nsview/ishorizontalcontentsizeconstraintactive.md): A Boolean value that indicates whether the view’s horizontal size constraints are active.
- [verticalContentSizeConstraintActive](nsview/isverticalcontentsizeconstraintactive.md): A Boolean value that indicates whether the view’s vertical size constraints are active.

### Debugging Auto Layout

- [constraintsAffectingLayoutForOrientation:](nsview/constraintsaffectinglayout%28for_%29.md): Returns the constraints impacting the layout of the view for a given orientation.
- [hasAmbiguousLayout](nsview/hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the layout of the view incompletely specify the location of the view.
- [exerciseAmbiguityInLayout](nsview/exerciseambiguityinlayout%28%29.md): Randomly changes the frame of a view with an ambiguous layout between the different valid values.

### Resizing Subviews

- [autoresizesSubviews](nsview/autoresizessubviews.md): A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.
- [autoresizingMask](nsview/autoresizingmask-swift.property.md): The options that determine how the view is resized relative to its superview.
- [NSAutoresizingMaskOptions](nsview/autoresizingmask-swift.struct.md): Constants that specify the autoresizing behaviors for views.
- [resizeSubviewsWithOldSize:](nsview/resizesubviews%28witholdsize_%29.md): Informs the view’s subviews that the view’s bounds rectangle size has changed.
- [resizeWithOldSuperviewSize:](nsview/resize%28witholdsuperviewsize_%29.md): Informs the view that the bounds size of its superview has changed.

## See Also

### Managing the view’s content

- [Drawing](nsview-drawing.md): Draw the content of custom views and update that content when the view’s size or appearance changes.
- [Printing](nsview-printing.md): Create a printable version of your view’s content and handle pagination and printer-related behaviors.
- [NSViewContentSelectionInfo](nsviewcontentselectioninfo.md)
