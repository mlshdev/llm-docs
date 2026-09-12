> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimatablepropertycontainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)

# NSAnimatablePropertyContainer (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** iOS 10.13+ · iPadOS 10.13+ · Mac Catalyst 13.1+ · macOS 10.5+

A set of methods that defines a way to add animation to an existing class with a minimum of API impact.

## Declaration

```swift
protocol NSAnimatablePropertyContainer
```

<a id="overview"></a>

## Overview

The [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md) protocol returns a proxy object for the receiver that can be used to initiate implied animation of property changes. An object’s animator proxy should be treated as if it was the object itself, and may be passed to any code that accepts the object as a parameter. Sending of key-value-coding compliant “set” messages to the proxy will trigger animation for automatically animated properties of its target object.

An object’s automatically animated properties are those for which [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md) finds and returns a [CAAnimation](https://developer.apple.com/documentation/quartzcore/caanimation) object instead of `nil`, often because [animator()](nsanimatablepropertycontainer/animator%28%29.md) specifies a default animation for the key.

It’s perfectly valid to set a new value for a property for which an animation that is currently in progress; this simply sets a new target value for that property, with animation to the new target proceeding from whatever current value the property has reached. An in-flight property animation can be stopped by setting a new value for the property bracketed by an [NSAnimationContext](nsanimationcontext.md) with 0.0 as the duration.

## Topics

### Getting the Animator Proxy

- [animator()](nsanimatablepropertycontainer/animator%28%29.md): Returns a proxy object for the receiver that can be used to initiate implied animation for property changes.

### Managing Animations for Properties

- [animations](nsanimatablepropertycontainer/animations.md): Sets the option dictionary that maps event trigger keys to animation objects.
- [animation(forKey:)](nsanimatablepropertycontainer/animation%28forkey_%29.md): Returns the animation that should be performed for the specified key.
- [defaultAnimation(forKey:)](nsanimatablepropertycontainer/defaultanimation%28forkey_%29.md): Returns the default animation that should be performed for the specified key.
- [NSAnimatablePropertyKey](nsanimatablepropertykey.md)

### Constants

- [Transition Animation Keys](transition-animation-keys.md): The following constants define the keys that reference the transitions used as views are made visible and hidden.

## Relationships

### Conforming Types

- [NSBackgroundExtensionView](nsbackgroundextensionview.md)
- [NSBox](nsbox.md)
- [NSBrowser](nsbrowser.md)
- [NSButton](nsbutton.md)
- [NSClipView](nsclipview.md)
- [NSCollectionView](nscollectionview.md)
- [NSColorPanel](nscolorpanel.md)
- [NSColorWell](nscolorwell.md)
- [NSComboBox](nscombobox.md)
- [NSComboButton](nscombobutton.md)
- [NSControl](nscontrol.md)
- [NSDatePicker](nsdatepicker.md)
- [NSFontPanel](nsfontpanel.md)
- [NSForm](nsform.md)
- [NSGlassEffectContainerView](nsglasseffectcontainerview.md)
- [NSGlassEffectView](nsglasseffectview.md)
- [NSGridView](nsgridview.md)
- [NSImageView](nsimageview.md)
- [NSLayoutConstraint](nslayoutconstraint.md)
- [NSLevelIndicator](nslevelindicator.md)
- [NSMatrix](nsmatrix.md)
- [NSOpenGLView](nsopenglview.md)
- [NSOpenPanel](nsopenpanel.md)
- [NSOutlineView](nsoutlineview.md)
- [NSPageController](nspagecontroller.md)
- [NSPanel](nspanel.md)
- [NSPathControl](nspathcontrol.md)
- [NSPopUpButton](nspopupbutton.md)
- [NSPredicateEditor](nspredicateeditor.md)
- [NSProgressIndicator](nsprogressindicator.md)
- [NSRuleEditor](nsruleeditor.md)
- [NSRulerView](nsrulerview.md)
- [NSSavePanel](nssavepanel.md)
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
- [NSSplitViewItem](nssplitviewitem.md)
- [NSSplitViewItemAccessoryViewController](nssplitviewitemaccessoryviewcontroller.md)
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
- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md)
- [NSTokenField](nstokenfield.md)
- [NSView](nsview.md)
- [NSVisualEffectView](nsvisualeffectview.md)
- [NSWindow](nswindow.md)

## See Also

### View-Based Animations

- [NSViewAnimation](nsviewanimation.md): An animation of an app’s views, limited to changes in frame location and size, and to fade-in and fade-out effects.
- [NSAnimationContext](nsanimationcontext.md): An animation context, which contains information about environment and state.
- [NSAnimation.Progress](nsanimation/progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationEffect](nsanimationeffect.md): Deprecated. The type for standard system animation effects, which include both display and sound.

# NSAnimatablePropertyContainer (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

A set of methods that defines a way to add animation to an existing class with a minimum of API impact.

## Declaration

```objectivec
@protocol NSAnimatablePropertyContainer
```

<a id="overview"></a>

## Overview

The [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md) protocol returns a proxy object for the receiver that can be used to initiate implied animation of property changes. An object’s animator proxy should be treated as if it was the object itself, and may be passed to any code that accepts the object as a parameter. Sending of key-value-coding compliant “set” messages to the proxy will trigger animation for automatically animated properties of its target object.

An object’s automatically animated properties are those for which [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md) finds and returns a [CAAnimation](https://developer.apple.com/documentation/quartzcore/caanimation) object instead of `nil`, often because [animator](nsanimatablepropertycontainer/animator%28%29.md) specifies a default animation for the key.

It’s perfectly valid to set a new value for a property for which an animation that is currently in progress; this simply sets a new target value for that property, with animation to the new target proceeding from whatever current value the property has reached. An in-flight property animation can be stopped by setting a new value for the property bracketed by an [NSAnimationContext](nsanimationcontext.md) with 0.0 as the duration.

## Topics

### Getting the Animator Proxy

- [animator](nsanimatablepropertycontainer/animator%28%29.md): Returns a proxy object for the receiver that can be used to initiate implied animation for property changes.

### Managing Animations for Properties

- [animations](nsanimatablepropertycontainer/animations.md): Sets the option dictionary that maps event trigger keys to animation objects.
- [animationForKey:](nsanimatablepropertycontainer/animation%28forkey_%29.md): Returns the animation that should be performed for the specified key.
- [defaultAnimationForKey:](nsanimatablepropertycontainer/defaultanimation%28forkey_%29.md): Returns the default animation that should be performed for the specified key.
- [NSAnimatablePropertyKey](nsanimatablepropertykey.md)

### Constants

- [Transition Animation Keys](transition-animation-keys.md): The following constants define the keys that reference the transitions used as views are made visible and hidden.

## Relationships

### Conforming Types

- [NSLayoutConstraint](nslayoutconstraint.md)
- [NSPageController](nspagecontroller.md)
- [NSSplitViewItem](nssplitviewitem.md)
- [NSSplitViewItemAccessoryViewController](nssplitviewitemaccessoryviewcontroller.md)
- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md)
- [NSView](nsview.md)
- [NSWindow](nswindow.md)

## See Also

### View-Based Animations

- [NSViewAnimation](nsviewanimation.md): An animation of an app’s views, limited to changes in frame location and size, and to fade-in and fade-out effects.
- [NSAnimationContext](nsanimationcontext.md): An animation context, which contains information about environment and state.
- [NSAnimationProgress](nsanimation/progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationEffect](nsanimationeffect.md): Deprecated. The type for standard system animation effects, which include both display and sound.
