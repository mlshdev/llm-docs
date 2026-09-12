> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityunits](https://developer.apple.com/documentation/appkit/nsaccessibilityunits)

# NSAccessibilityUnits (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Values that indicate the unit values of a ruler or layout area.

## Declaration

```swift
enum NSAccessibilityUnits
```

<a id="overview"></a>

## Overview

This constant is used with the [accessibilityHorizontalUnits](nsaccessibility-c.protocol/accessibilityhorizontalunits.md), [accessibilityVerticalUnits](nsaccessibility-c.protocol/accessibilityverticalunits.md), and [accessibilityUnits](nsaccessibility-c.protocol/accessibilityunits.md) properties.

## Topics

### Constants

- [NSAccessibilityUnits.unknown](nsaccessibilityunits/unknown.md): The units are unknown.
- [NSAccessibilityUnits.inches](nsaccessibilityunits/inches.md): The units are inches.
- [NSAccessibilityUnits.centimeters](nsaccessibilityunits/centimeters.md): The units are centimeters.
- [NSAccessibilityUnits.points](nsaccessibilityunits/points.md): The units are points.
- [NSAccessibilityUnits.picas](nsaccessibilityunits/picas.md): The units are picas.

### Initializers

- [init(rawValue:)](nsaccessibilityunits/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

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

# NSAccessibilityUnits (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Values that indicate the unit values of a ruler or layout area.

## Declaration

```objectivec
enum NSAccessibilityUnits : NSInteger;
```

<a id="overview"></a>

## Overview

This constant is used with the [accessibilityHorizontalUnits](nsaccessibility-c.protocol/accessibilityhorizontalunits.md), [accessibilityVerticalUnits](nsaccessibility-c.protocol/accessibilityverticalunits.md), and [accessibilityUnits](nsaccessibility-c.protocol/accessibilityunits.md) properties.

## Topics

### Constants

- [NSAccessibilityUnitsUnknown](nsaccessibilityunits/unknown.md): The units are unknown.
- [NSAccessibilityUnitsInches](nsaccessibilityunits/inches.md): The units are inches.
- [NSAccessibilityUnitsCentimeters](nsaccessibilityunits/centimeters.md): The units are centimeters.
- [NSAccessibilityUnitsPoints](nsaccessibilityunits/points.md): The units are points.
- [NSAccessibilityUnitsPicas](nsaccessibilityunits/picas.md): The units are picas.

## See Also

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
