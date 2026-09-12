> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/action](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/action)

# NSAccessibility.Action (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that describe types of actions.

## Declaration

```swift
struct Action
```

## Topics

### Actions

- [cancel](action/cancel.md): An action that cancels the operation.
- [confirm](action/confirm.md): Deprecated. An action that simulates pressing Return in the object, such as a text field.
- [decrement](action/decrement.md): An action that decrements the value of the object.
- [delete](action/delete.md): An action that deletes the value of the object.
- [increment](action/increment.md): An action that increments the value of the object.
- [pick](action/pick.md): An action that selects the object, such as a menu item.
- [press](action/press.md): An action that simulates clicking an object, such as a button.
- [raise](action/raise.md): An action that simulates bringing a window forward by clicking on its title bar.
- [scrollToVisibleAction](action/scrolltovisibleaction.md)
- [showAlternateUI](action/showalternateui.md): An action that shows an alternate UI, for example, during a mouse-hover event.
- [showDefaultUI](action/showdefaultui.md): An action that shows the original or default UI; for example, during a mouse-hover event.
- [showMenu](action/showmenu.md): An action that simulates showing a menu by clicking on it.

### Descriptions

- [description](action/description.md): Returns a standard description for an action.

### Initializers

- [init(\_:)](action/init%28__%29.md)
- [init(rawValue:)](action/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessibility Types

- [NSAccessibility.AnnotationAttributeKey](annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibilityAnnotationPosition](../nsaccessibilityannotationposition.md): Constants that specify the position where the annotation applies.
- [NSAccessibility.Attribute](attribute.md): Constants that describe attributes.
- [NSAccessibility.FontAttributeKey](fontattributekey.md): Keys for font attributes.
- [NSAccessibilityOrientation](../nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
- [NSAccessibility.OrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibility.ParameterizedAttribute](parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibility.Role](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerType](../nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibility.RulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibility.RulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibility.SortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](../nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibility.Subrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
- [NSAccessibilityUnits](../nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.

# NSAccessibilityActionName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that describe types of actions.

## Declaration

```objectivec
typedef NSString * NSAccessibilityActionName;
```

## Topics

### Actions

- [NSAccessibilityCancelAction](action/cancel.md): An action that cancels the operation.
- [NSAccessibilityConfirmAction](action/confirm.md): Deprecated. An action that simulates pressing Return in the object, such as a text field.
- [NSAccessibilityDecrementAction](action/decrement.md): An action that decrements the value of the object.
- [NSAccessibilityDeleteAction](action/delete.md): An action that deletes the value of the object.
- [NSAccessibilityIncrementAction](action/increment.md): An action that increments the value of the object.
- [NSAccessibilityPickAction](action/pick.md): An action that selects the object, such as a menu item.
- [NSAccessibilityPressAction](action/press.md): An action that simulates clicking an object, such as a button.
- [NSAccessibilityRaiseAction](action/raise.md): An action that simulates bringing a window forward by clicking on its title bar.
- [NSAccessibilityScrollToVisibleAction](action/scrolltovisibleaction.md)
- [NSAccessibilityShowAlternateUIAction](action/showalternateui.md): An action that shows an alternate UI, for example, during a mouse-hover event.
- [NSAccessibilityShowDefaultUIAction](action/showdefaultui.md): An action that shows the original or default UI; for example, during a mouse-hover event.
- [NSAccessibilityShowMenuAction](action/showmenu.md): An action that simulates showing a menu by clicking on it.

### Descriptions

- [NSAccessibilityActionDescription](action/description.md): Returns a standard description for an action.

## See Also

### Accessibility Types

- [NSAccessibilityAnnotationAttributeKey](annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibilityAnnotationPosition](../nsaccessibilityannotationposition.md): Constants that specify the position where the annotation applies.
- [NSAccessibilityAttributeName](attribute.md): Constants that describe attributes.
- [NSAccessibilityFontAttributeKey](fontattributekey.md): Keys for font attributes.
- [NSAccessibilityOrientation](../nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
- [NSAccessibilityOrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibilityParameterizedAttributeName](parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibilityRole](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerType](../nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibilityRulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibilityRulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibilitySortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](../nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySubrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
- [NSAccessibilityUnits](../nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.
