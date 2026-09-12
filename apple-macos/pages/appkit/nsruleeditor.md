> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor](https://developer.apple.com/documentation/appkit/nsruleeditor)

# NSRuleEditor (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An interface for configuring a rule-based list of options.

## Declaration

```swift
class NSRuleEditor
```

<a id="overview"></a>

## Overview

A rule editor lets the user visually create and configure a list of options that are expressed as a predicate. (For more information, see [NSPredicate](https://developer.apple.com/documentation/foundation/nspredicate).) Each row displayed by the rule editor represents a particular path down a tree of choices. The rule editor’s delegate provides the tree of choices to be displayed. The rule editor presents those choices to the user as a row of popup buttons, static text fields, and custom views.

`NSRuleEditor` exposes one binding, `rows`. You can bind `rows` to an ordered collection (such as an instance of `NSMutableArray`). Each object in the collection should have the following properties:

- **@“rowType”**: An integer representing the type of the row (`NSRuleEditorRowType`).
- **@“subrows”**: An ordered to-many relation (such as an instance of `NSMutableArray`) containing the directly nested subrows for the given row.
- **@“displayValues”**: An ordered to-many relation containing the display values for the row.
- **@“criteria”**: An ordered to-many relation containing the criteria for the row.

> **Note**

> If you override [viewDidMoveToWindow()](nsview/viewdidmovetowindow%28%29.md) in a subclass of [NSRuleEditor](nsruleeditor.md), you must invoke super’s implementation.

## Topics

### Configuring the Delegate

- [delegate](nsruleeditor/delegate.md): The rule editor’s delegate.
- [NSRuleEditorDelegate](nsruleeditordelegate.md): The `NSRuleEditorDelegate` protocol defines the optional methods implemented by delegates of [NSRuleEditor](nsruleeditor.md) objects.

### Configuring a Rule Editor

- [isEditable](nsruleeditor/iseditable.md): A Boolean value that determines whether the rule editor is editable.
- [nestingMode](nsruleeditor/nestingmode-swift.property.md): The rule editor’s nesting mode.
- [NSRuleEditor.NestingMode](nsruleeditor/nestingmode-swift.enum.md): Specifies a type for nesting modes.
- [canRemoveAllRows](nsruleeditor/canremoveallrows.md): A Boolean value that indicates whether all the rows can be removed.
- [rowHeight](nsruleeditor/rowheight.md): The rule editor’s row height.

### Working with Formatting

- [formattingDictionary](nsruleeditor/formattingdictionary.md): The formatting dictionary for the rule editor.
- [formattingStringsFilename](nsruleeditor/formattingstringsfilename.md): The name of the rule editor’s strings file.

### Providing Data

- [reloadCriteria()](nsruleeditor/reloadcriteria%28%29.md): Instructs the receiver to refetch criteria from its delegate.
- [setCriteria(\_:andDisplayValues:forRowAt:)](nsruleeditor/setcriteria%28__anddisplayvalues_forrowat_%29.md): Modifies the row at a given index to contain the given items and values.
- [criteria(forRow:)](nsruleeditor/criteria%28forrow_%29.md): Returns the currently chosen items for a given row.
- [displayValues(forRow:)](nsruleeditor/displayvalues%28forrow_%29.md): Returns the chosen values for a given row.

### Obtaining Row Information

- [numberOfRows](nsruleeditor/numberofrows.md): The number of rows in the rule editor.
- [parentRow(forRow:)](nsruleeditor/parentrow%28forrow_%29.md): Returns the index of the parent of a given row.
- [row(forDisplayValue:)](nsruleeditor/row%28fordisplayvalue_%29.md): Returns the index of the row containing a given value.
- [rowType(forRow:)](nsruleeditor/rowtype%28forrow_%29.md): Returns the type of a given row.
- [NSRuleEditor.RowType](nsruleeditor/rowtype.md): Specifies a type for row types.
- [subrowIndexes(forRow:)](nsruleeditor/subrowindexes%28forrow_%29.md): Returns the immediate subrows of a given row.

### Working with the Selection

- [selectedRowIndexes](nsruleeditor/selectedrowindexes.md): The indexes of the rule editor’s selected rows.
- [selectRowIndexes(\_:byExtendingSelection:)](nsruleeditor/selectrowindexes%28__byextendingselection_%29.md): Sets in the receiver the indexes of rows that are selected.

### Manipulating Rows

- [addRow(\_:)](nsruleeditor/addrow%28__%29.md): Adds a row to the receiver.
- [insertRow(at:with:asSubrowOfRow:animate:)](nsruleeditor/insertrow%28at_with_assubrowofrow_animate_%29.md): Adds a new row of a given type at a given location.
- [removeRow(at:)](nsruleeditor/removerow%28at_%29.md): Removes the row at a given index.
- [removeRows(at:includeSubrows:)](nsruleeditor/removerows%28at_includesubrows_%29.md): Removes the rows at given indexes.

### Working with Predicates

- [predicate](nsruleeditor/predicate.md): The rule editor’s predicate.
- [reloadPredicate()](nsruleeditor/reloadpredicate%28%29.md): Instructs the receiver to regenerate its predicate by invoking the corresponding delegate method.
- [predicate(forRow:)](nsruleeditor/predicate%28forrow_%29.md): Returns the predicate for a given row.

### Supporting Bindings

- [rowClass](nsruleeditor/rowclass.md): The class used to create a new row in the “rows” binding.
- [rowTypeKeyPath](nsruleeditor/rowtypekeypath.md): The key path for the row type.
- [subrowsKeyPath](nsruleeditor/subrowskeypath.md): The key path for the subrows.
- [criteriaKeyPath](nsruleeditor/criteriakeypath.md): The criteria key path.
- [displayValuesKeyPath](nsruleeditor/displayvalueskeypath.md): The display values key path.

### Notifications

- [rowsDidChangeNotification](nsruleeditor/rowsdidchangenotification.md): This notification is posted to the default notification center whenever the view’s rows change.

### Structures

- [NSRuleEditor.RowsDidChangeMessage](nsruleeditor/rowsdidchangemessage.md)

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Inherited By

- [NSPredicateEditor](nspredicateeditor.md)

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
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.

# NSRuleEditor (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An interface for configuring a rule-based list of options.

## Declaration

```objectivec
@interface NSRuleEditor : NSControl
```

<a id="overview"></a>

## Overview

A rule editor lets the user visually create and configure a list of options that are expressed as a predicate. (For more information, see [NSPredicate](https://developer.apple.com/documentation/foundation/nspredicate).) Each row displayed by the rule editor represents a particular path down a tree of choices. The rule editor’s delegate provides the tree of choices to be displayed. The rule editor presents those choices to the user as a row of popup buttons, static text fields, and custom views.

`NSRuleEditor` exposes one binding, `rows`. You can bind `rows` to an ordered collection (such as an instance of `NSMutableArray`). Each object in the collection should have the following properties:

- **@“rowType”**: An integer representing the type of the row (`NSRuleEditorRowType`).
- **@“subrows”**: An ordered to-many relation (such as an instance of `NSMutableArray`) containing the directly nested subrows for the given row.
- **@“displayValues”**: An ordered to-many relation containing the display values for the row.
- **@“criteria”**: An ordered to-many relation containing the criteria for the row.

> **Note**

> If you override [viewDidMoveToWindow](nsview/viewdidmovetowindow%28%29.md) in a subclass of [NSRuleEditor](nsruleeditor.md), you must invoke super’s implementation.

## Topics

### Configuring the Delegate

- [delegate](nsruleeditor/delegate.md): The rule editor’s delegate.
- [NSRuleEditorDelegate](nsruleeditordelegate.md): The `NSRuleEditorDelegate` protocol defines the optional methods implemented by delegates of [NSRuleEditor](nsruleeditor.md) objects.

### Configuring a Rule Editor

- [editable](nsruleeditor/iseditable.md): A Boolean value that determines whether the rule editor is editable.
- [nestingMode](nsruleeditor/nestingmode-swift.property.md): The rule editor’s nesting mode.
- [NSRuleEditorNestingMode](nsruleeditor/nestingmode-swift.enum.md): Specifies a type for nesting modes.
- [canRemoveAllRows](nsruleeditor/canremoveallrows.md): A Boolean value that indicates whether all the rows can be removed.
- [rowHeight](nsruleeditor/rowheight.md): The rule editor’s row height.

### Working with Formatting

- [formattingDictionary](nsruleeditor/formattingdictionary.md): The formatting dictionary for the rule editor.
- [formattingStringsFilename](nsruleeditor/formattingstringsfilename.md): The name of the rule editor’s strings file.

### Providing Data

- [reloadCriteria](nsruleeditor/reloadcriteria%28%29.md): Instructs the receiver to refetch criteria from its delegate.
- [setCriteria:andDisplayValues:forRowAtIndex:](nsruleeditor/setcriteria%28__anddisplayvalues_forrowat_%29.md): Modifies the row at a given index to contain the given items and values.
- [criteriaForRow:](nsruleeditor/criteria%28forrow_%29.md): Returns the currently chosen items for a given row.
- [displayValuesForRow:](nsruleeditor/displayvalues%28forrow_%29.md): Returns the chosen values for a given row.

### Obtaining Row Information

- [numberOfRows](nsruleeditor/numberofrows.md): The number of rows in the rule editor.
- [parentRowForRow:](nsruleeditor/parentrow%28forrow_%29.md): Returns the index of the parent of a given row.
- [rowForDisplayValue:](nsruleeditor/row%28fordisplayvalue_%29.md): Returns the index of the row containing a given value.
- [rowTypeForRow:](nsruleeditor/rowtype%28forrow_%29.md): Returns the type of a given row.
- [NSRuleEditorRowType](nsruleeditor/rowtype.md): Specifies a type for row types.
- [subrowIndexesForRow:](nsruleeditor/subrowindexes%28forrow_%29.md): Returns the immediate subrows of a given row.

### Working with the Selection

- [selectedRowIndexes](nsruleeditor/selectedrowindexes.md): The indexes of the rule editor’s selected rows.
- [selectRowIndexes:byExtendingSelection:](nsruleeditor/selectrowindexes%28__byextendingselection_%29.md): Sets in the receiver the indexes of rows that are selected.

### Manipulating Rows

- [addRow:](nsruleeditor/addrow%28__%29.md): Adds a row to the receiver.
- [insertRowAtIndex:withType:asSubrowOfRow:animate:](nsruleeditor/insertrow%28at_with_assubrowofrow_animate_%29.md): Adds a new row of a given type at a given location.
- [removeRowAtIndex:](nsruleeditor/removerow%28at_%29.md): Removes the row at a given index.
- [removeRowsAtIndexes:includeSubrows:](nsruleeditor/removerows%28at_includesubrows_%29.md): Removes the rows at given indexes.

### Working with Predicates

- [predicate](nsruleeditor/predicate.md): The rule editor’s predicate.
- [reloadPredicate](nsruleeditor/reloadpredicate%28%29.md): Instructs the receiver to regenerate its predicate by invoking the corresponding delegate method.
- [predicateForRow:](nsruleeditor/predicate%28forrow_%29.md): Returns the predicate for a given row.

### Supporting Bindings

- [rowClass](nsruleeditor/rowclass.md): The class used to create a new row in the “rows” binding.
- [rowTypeKeyPath](nsruleeditor/rowtypekeypath.md): The key path for the row type.
- [subrowsKeyPath](nsruleeditor/subrowskeypath.md): The key path for the subrows.
- [criteriaKeyPath](nsruleeditor/criteriakeypath.md): The criteria key path.
- [displayValuesKeyPath](nsruleeditor/displayvalueskeypath.md): The display values key path.

### Notifications

- [NSRuleEditorRowsDidChangeNotification](nsruleeditor/rowsdidchangenotification.md): This notification is posted to the default notification center whenever the view’s rows change.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Inherited By

- [NSPredicateEditor](nspredicateeditor.md)

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
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.
