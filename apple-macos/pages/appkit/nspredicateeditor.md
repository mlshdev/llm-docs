> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditor](https://developer.apple.com/documentation/appkit/nspredicateeditor)

# NSPredicateEditor (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A defined set of rules that allows the editing of predicate objects.

## Declaration

```swift
class NSPredicateEditor
```

<a id="overview"></a>

## Overview

`NSPredicateEditor` provides an [NSPredicate](https://developer.apple.com/documentation/foundation/nspredicate) property—[objectValue](nscontrol/objectvalue.md) (inherited from [NSControl](nscontrol.md))—that you can get and set directly, and that you can bind using Cocoa bindings (you typically configure a predicate editor in Interface Builder). `NSPredicateEditor` depends on another class, [NSPredicateEditorRowTemplate](nspredicateeditorrowtemplate.md), that describes the available predicates and how to display them.

Unlike `NSRuleEditor`, `NSPredicateEditor` does not depend on its delegate to populate its rows (and *does not call the populating delegate methods*). Instead, its rows are populated from its `objectValue` property (an instance of `NSPredicate`). `NSPredicateEditor` relies on instances [NSPredicateEditorRowTemplate](nspredicateeditorrowtemplate.md), which are responsible for mapping back and forth between the displayed view values and various predicates.

`NSPredicateEditor` exposes one property, [rowTemplates](nspredicateeditor/rowtemplates.md), which is an array of [NSPredicateEditorRowTemplate](nspredicateeditorrowtemplate.md) objects.

## Topics

### Managing Row Templates

- [rowTemplates](nspredicateeditor/rowtemplates.md): The row templates for the receiver.
- [NSPredicateEditorRowTemplate](nspredicateeditorrowtemplate.md): A template that describes available predicates and how to display them.

## Relationships

### Inherits From

- [NSRuleEditor](nsruleeditor.md)

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

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
- [NSComboButton](nscombobutton.md): A button with a pull-down menu and a default action.
- [Date Picker](date-picker.md): Display a calendar date and provide controls for editing the date value.
- [NSImageView](nsimageview.md): A display of image data in a frame.
- [NSLevelIndicator](nslevelindicator.md): A visual representation of a level or quantity, using discrete values.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSPopUpButton](nspopupbutton.md): A control for selecting an item from a list.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.

# NSPredicateEditor (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A defined set of rules that allows the editing of predicate objects.

## Declaration

```objectivec
@interface NSPredicateEditor : NSRuleEditor
```

<a id="overview"></a>

## Overview

`NSPredicateEditor` provides an [NSPredicate](https://developer.apple.com/documentation/foundation/nspredicate) property—[objectValue](nscontrol/objectvalue.md) (inherited from [NSControl](nscontrol.md))—that you can get and set directly, and that you can bind using Cocoa bindings (you typically configure a predicate editor in Interface Builder). `NSPredicateEditor` depends on another class, [NSPredicateEditorRowTemplate](nspredicateeditorrowtemplate.md), that describes the available predicates and how to display them.

Unlike `NSRuleEditor`, `NSPredicateEditor` does not depend on its delegate to populate its rows (and *does not call the populating delegate methods*). Instead, its rows are populated from its `objectValue` property (an instance of `NSPredicate`). `NSPredicateEditor` relies on instances [NSPredicateEditorRowTemplate](nspredicateeditorrowtemplate.md), which are responsible for mapping back and forth between the displayed view values and various predicates.

`NSPredicateEditor` exposes one property, [rowTemplates](nspredicateeditor/rowtemplates.md), which is an array of [NSPredicateEditorRowTemplate](nspredicateeditorrowtemplate.md) objects.

## Topics

### Managing Row Templates

- [rowTemplates](nspredicateeditor/rowtemplates.md): The row templates for the receiver.
- [NSPredicateEditorRowTemplate](nspredicateeditorrowtemplate.md): A template that describes available predicates and how to display them.

## Relationships

### Inherits From

- [NSRuleEditor](nsruleeditor.md)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
- [NSComboButton](nscombobutton.md): A button with a pull-down menu and a default action.
- [Date Picker](date-picker.md): Display a calendar date and provide controls for editing the date value.
- [NSImageView](nsimageview.md): A display of image data in a frame.
- [NSLevelIndicator](nslevelindicator.md): A visual representation of a level or quantity, using discrete values.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSPopUpButton](nspopupbutton.md): A control for selecting an item from a list.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.
