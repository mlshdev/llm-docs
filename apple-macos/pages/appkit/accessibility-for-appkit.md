> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/accessibility-for-appkit](https://developer.apple.com/documentation/appkit/accessibility-for-appkit)

# Accessibility for AppKit (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Make your AppKit apps accessible to everyone who uses macOS.

<a id="overview"></a>

## Overview

Making your app accessible means making it usable by everyone. By designing your app with accessibility in mind, you make it possible for everyone to enjoy your app. For more information, see [Accessibility](https://developer.apple.com/documentation/accessibility).

AppKit controls and views come with built-in accessibility, providing an accessible user experience by default. Typically, you don’t need to do extra work to enable the standard accessibility features.

In some cases, you might want to modify the default values to better represent your app, to provide additional context, or to modify the user’s flow through the app. AppKit makes these customizations straightforward, involving a few lines of code or Interface Builder adjustments as you define your user interface. For more information about customizing accessibility for AppKit elements, see  [NSAccessibilityProtocol](nsaccessibilityprotocol.md).

If your app contains custom user interface elements that subclass [NSView](nsview.md), enhance the accessibility of those elements using the role-based protocols in [Custom Controls](custom-controls.md). If your app contains custom user interface elements that don’t inherit from [NSView](nsview.md) or one of the other AppKit classes with built-in accessibility, make those elements accessible by subclassing [NSAccessibilityElement](nsaccessibilityelement-swift.class.md).

If you build your app with SwiftUI, see [Accessibility modifiers](https://developer.apple.com/documentation/swiftui/view-accessibility).

## Topics

### Essentials

- [Integrating accessibility into your app](https://developer.apple.com/documentation/accessibility/integrating-accessibility-into-your-app): Make your app more accessible to users with disabilities by adding accessibility features.
- [Accessibility design for Mac Catalyst](https://developer.apple.com/documentation/accessibility/accessibility_design_for_mac_catalyst): Improve navigation in your app by using keyboard shortcuts and accessibility containers.

### AppKit Elements

If you’re using a standard AppKit user interface element, you can override its existing accessibility attributes or use it as-is.

- [NSAccessibilityProtocol](nsaccessibilityprotocol.md): The complete list of properties and methods for accessible elements.
- [NSAccessibility](nsaccessibility-swift.struct.md): A namespace for accessibility symbols for AppKit apps.

### Custom View Subclasses

If you’re subclassing an AppKit view to create a custom user interface element, you can adopt one or more role-specific protocols to enhance that element’s accessibility.

- [Custom Controls](custom-controls.md): Support accessibility for custom user interface elements by adopting a role-specific protocol and implementing its methods.
- [Accessibility Functions](accessibility-functions.md): Global accessibility functions for custom views and controls.

### Custom Elements

If you’re designing a completely custom user interface element that doesn’t subclass an AppKit view, you must subclass the accessibility element class.

- [NSAccessibilityElement](nsaccessibilityelement-swift.class.md): The basic infrastructure necessary for interacting with an assistive app.

### Accessibility Types

- [NSAccessibility.Action](nsaccessibility-swift.struct/action.md): Constants that describe types of actions.
- [NSAccessibility.AnnotationAttributeKey](nsaccessibility-swift.struct/annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibilityAnnotationPosition](nsaccessibilityannotationposition.md): Constants that specify the position where the annotation applies.
- [NSAccessibility.Attribute](nsaccessibility-swift.struct/attribute.md): Constants that describe attributes.
- [NSAccessibility.FontAttributeKey](nsaccessibility-swift.struct/fontattributekey.md): Keys for font attributes.
- [NSAccessibilityOrientation](nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
- [NSAccessibility.OrientationValue](nsaccessibility-swift.struct/orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibility.ParameterizedAttribute](nsaccessibility-swift.struct/parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibility.Role](nsaccessibility-swift.struct/role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerType](nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibility.RulerMarkerTypeValue](nsaccessibility-swift.struct/rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibility.RulerUnitValue](nsaccessibility-swift.struct/rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibility.SortDirectionValue](nsaccessibility-swift.struct/sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibility.Subrole](nsaccessibility-swift.struct/subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
- [NSAccessibilityUnits](nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.

## See Also

### User Interactions

- [Mouse, Keyboard, and Trackpad](mouse-keyboard-and-trackpad.md): Handle events related to mouse, keyboard, and trackpad input.
- [Menus, Cursors, and the Dock](menus-cursors-and-the-dock.md): Implement menus and cursors to facilitate interactions with your app, and use your app’s Dock tile to convey updated information.
- [Gestures](gestures.md): Encapsulate your app’s event-handling logic in gesture recognizers so that you can reuse that code throughout your app.
- [Touch Bar](touch-bar.md): Display interactive content and controls in the Touch Bar.
- [Drag and Drop](drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.

# Accessibility for AppKit (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Make your AppKit apps accessible to everyone who uses macOS.

<a id="overview"></a>

## Overview

Making your app accessible means making it usable by everyone. By designing your app with accessibility in mind, you make it possible for everyone to enjoy your app. For more information, see [Accessibility](https://developer.apple.com/documentation/accessibility).

AppKit controls and views come with built-in accessibility, providing an accessible user experience by default. Typically, you don’t need to do extra work to enable the standard accessibility features.

In some cases, you might want to modify the default values to better represent your app, to provide additional context, or to modify the user’s flow through the app. AppKit makes these customizations straightforward, involving a few lines of code or Interface Builder adjustments as you define your user interface. For more information about customizing accessibility for AppKit elements, see  [NSAccessibility](nsaccessibilityprotocol.md).

If your app contains custom user interface elements that subclass [NSView](nsview.md), enhance the accessibility of those elements using the role-based protocols in [Custom Controls](custom-controls.md). If your app contains custom user interface elements that don’t inherit from [NSView](nsview.md) or one of the other AppKit classes with built-in accessibility, make those elements accessible by subclassing [NSAccessibilityElement](nsaccessibilityelement-swift.class.md).

If you build your app with SwiftUI, see [Accessibility modifiers](https://developer.apple.com/documentation/swiftui/view-accessibility).

## Topics

### Essentials

- [Integrating accessibility into your app](https://developer.apple.com/documentation/accessibility/integrating-accessibility-into-your-app): Make your app more accessible to users with disabilities by adding accessibility features.
- [Accessibility design for Mac Catalyst](https://developer.apple.com/documentation/accessibility/accessibility_design_for_mac_catalyst): Improve navigation in your app by using keyboard shortcuts and accessibility containers.

### AppKit Elements

If you’re using a standard AppKit user interface element, you can override its existing accessibility attributes or use it as-is.

- [NSAccessibility](nsaccessibilityprotocol.md): The complete list of properties and methods for accessible elements.

### Custom View Subclasses

If you’re subclassing an AppKit view to create a custom user interface element, you can adopt one or more role-specific protocols to enhance that element’s accessibility.

- [Custom Controls](custom-controls.md): Support accessibility for custom user interface elements by adopting a role-specific protocol and implementing its methods.
- [Accessibility Functions](accessibility-functions.md): Global accessibility functions for custom views and controls.

### Custom Elements

If you’re designing a completely custom user interface element that doesn’t subclass an AppKit view, you must subclass the accessibility element class.

- [NSAccessibilityElement](nsaccessibilityelement-swift.class.md): The basic infrastructure necessary for interacting with an assistive app.

### Accessibility Types

- [NSAccessibilityActionName](nsaccessibility-swift.struct/action.md): Constants that describe types of actions.
- [NSAccessibilityAnnotationAttributeKey](nsaccessibility-swift.struct/annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibilityAnnotationPosition](nsaccessibilityannotationposition.md): Constants that specify the position where the annotation applies.
- [NSAccessibilityAttributeName](nsaccessibility-swift.struct/attribute.md): Constants that describe attributes.
- [NSAccessibilityFontAttributeKey](nsaccessibility-swift.struct/fontattributekey.md): Keys for font attributes.
- [NSAccessibilityOrientation](nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
- [NSAccessibilityOrientationValue](nsaccessibility-swift.struct/orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibilityParameterizedAttributeName](nsaccessibility-swift.struct/parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibilityRole](nsaccessibility-swift.struct/role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerType](nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibilityRulerMarkerTypeValue](nsaccessibility-swift.struct/rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibilityRulerUnitValue](nsaccessibility-swift.struct/rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibilitySortDirectionValue](nsaccessibility-swift.struct/sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySubrole](nsaccessibility-swift.struct/subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
- [NSAccessibilityUnits](nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.

## See Also

### User Interactions

- [Mouse, Keyboard, and Trackpad](mouse-keyboard-and-trackpad.md): Handle events related to mouse, keyboard, and trackpad input.
- [Menus, Cursors, and the Dock](menus-cursors-and-the-dock.md): Implement menus and cursors to facilitate interactions with your app, and use your app’s Dock tile to convey updated information.
- [Gestures](gestures.md): Encapsulate your app’s event-handling logic in gesture recognizers so that you can reuse that code throughout your app.
- [Touch Bar](touch-bar.md): Display interactive content and controls in the Touch Bar.
- [Drag and Drop](drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
