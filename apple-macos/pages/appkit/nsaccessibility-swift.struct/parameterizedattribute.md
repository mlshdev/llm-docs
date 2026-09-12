> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/parameterizedattribute](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/parameterizedattribute)

# NSAccessibility.ParameterizedAttribute (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Values that describe parameterized attributes.

## Declaration

```swift
struct ParameterizedAttribute
```

## Topics

### Attribute Names

- [attributedStringForRange](parameterizedattribute/attributedstringforrange.md): Does not use attributes from Appkit/AttributedString.h (`NSAttributedString`).
- [boundsForRange](parameterizedattribute/boundsforrange.md): The rectangle (`NSValue` containing an `NSRect` value) enclosing the specified range of characters (`NSValue` containing an `NSRange` value). If the range crosses a line boundary, the returned rectangle will fully enclose all the lines of characters.
- [cellForColumnAndRow](parameterizedattribute/cellforcolumnandrow.md): Deprecated. The cell at the specified row and column.
- [indexForChildUIElementAttribute](parameterizedattribute/indexforchilduielementattribute.md)
- [indexForChildUIElementInNavigationOrderAttribute](parameterizedattribute/indexforchilduielementinnavigationorderattribute.md)
- [layoutPointForScreenPoint](parameterizedattribute/layoutpointforscreenpoint.md): Deprecated. The point in the layout area (`NSValue`) corresponding to the specified point on the screen (`NSValue`).
- [layoutSizeForScreenSize](parameterizedattribute/layoutsizeforscreensize.md): The size of the layout area in points (`NSValue`) corresponding to the specified screen size (`NSValue`).
- [lineForIndex](parameterizedattribute/lineforindex.md): Deprecated. The line number (`NSNumber`) of the specified character (`NSNumber`).
- [rangeForIndex](parameterizedattribute/rangeforindex.md): The full range of characters (`NSValue` containing an `NSRange` value), including the specified character, which compose a single glyph (`NSNumber`).
- [rangeForLine](parameterizedattribute/rangeforline.md): The range of characters (`NSValue` containing an `NSRange` value) corresponding to the specified line number (`NSNumber`).
- [rangeForPosition](parameterizedattribute/rangeforposition.md): The range of characters (`NSValue` containing an `NSRange` value) composing the glyph at the specified point (`NSValue` containing an `NSPoint` value).
- [resultsForSearchPredicateParameterizedAttribute](parameterizedattribute/resultsforsearchpredicateparameterizedattribute.md)
- [rtfForRange](parameterizedattribute/rtfforrange.md): The RTF data (`NSData`) describing the specified range of characters (`NSValue` containing an `NSRange` value).
- [screenPointForLayoutPoint](parameterizedattribute/screenpointforlayoutpoint.md): The screen point (`NSValue`) corresponding to the specified point in the layout area (`NSValue`).
- [screenSizeForLayoutSize](parameterizedattribute/screensizeforlayoutsize.md): The size of the screen in points (`NSValue`) corresponding to the specified size of the layout area (`NSValue`).
- [stringForRange](parameterizedattribute/stringforrange.md): The substring (`NSString`) specified by the range (`NSValue` containing an `NSRange` value).
- [styleRangeForIndex](parameterizedattribute/stylerangeforindex.md): The full range of characters (`NSValue` containing an `NSRange` value), including the specified character (`NSNumber`), which have the same style.
- [uiElementsForSearchPredicateParameterizedAttribute](parameterizedattribute/uielementsforsearchpredicateparameterizedattribute.md)

### Initializers

- [init(rawValue:)](parameterizedattribute/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessibility Types

- [NSAccessibility.Action](action.md): Constants that describe types of actions.
- [NSAccessibility.AnnotationAttributeKey](annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibilityAnnotationPosition](../nsaccessibilityannotationposition.md): Constants that specify the position where the annotation applies.
- [NSAccessibility.Attribute](attribute.md): Constants that describe attributes.
- [NSAccessibility.FontAttributeKey](fontattributekey.md): Keys for font attributes.
- [NSAccessibilityOrientation](../nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
- [NSAccessibility.OrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibility.Role](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerType](../nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibility.RulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibility.RulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibility.SortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](../nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibility.Subrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
- [NSAccessibilityUnits](../nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.

# NSAccessibilityParameterizedAttributeName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Values that describe parameterized attributes.

## Declaration

```objectivec
typedef NSString * NSAccessibilityParameterizedAttributeName;
```

## Topics

### Attribute Names

- [NSAccessibilityAttributedStringForRangeParameterizedAttribute](parameterizedattribute/attributedstringforrange.md): Does not use attributes from Appkit/AttributedString.h (`NSAttributedString`).
- [NSAccessibilityBoundsForRangeParameterizedAttribute](parameterizedattribute/boundsforrange.md): The rectangle (`NSValue` containing an `NSRect` value) enclosing the specified range of characters (`NSValue` containing an `NSRange` value). If the range crosses a line boundary, the returned rectangle will fully enclose all the lines of characters.
- [NSAccessibilityCellForColumnAndRowParameterizedAttribute](parameterizedattribute/cellforcolumnandrow.md): Deprecated. The cell at the specified row and column.
- [NSAccessibilityIndexForChildUIElementAttribute](parameterizedattribute/indexforchilduielementattribute.md)
- [NSAccessibilityIndexForChildUIElementInNavigationOrderAttribute](parameterizedattribute/indexforchilduielementinnavigationorderattribute.md)
- [NSAccessibilityLayoutPointForScreenPointParameterizedAttribute](parameterizedattribute/layoutpointforscreenpoint.md): Deprecated. The point in the layout area (`NSValue`) corresponding to the specified point on the screen (`NSValue`).
- [NSAccessibilityLayoutSizeForScreenSizeParameterizedAttribute](parameterizedattribute/layoutsizeforscreensize.md): The size of the layout area in points (`NSValue`) corresponding to the specified screen size (`NSValue`).
- [NSAccessibilityLineForIndexParameterizedAttribute](parameterizedattribute/lineforindex.md): Deprecated. The line number (`NSNumber`) of the specified character (`NSNumber`).
- [NSAccessibilityRangeForIndexParameterizedAttribute](parameterizedattribute/rangeforindex.md): The full range of characters (`NSValue` containing an `NSRange` value), including the specified character, which compose a single glyph (`NSNumber`).
- [NSAccessibilityRangeForLineParameterizedAttribute](parameterizedattribute/rangeforline.md): The range of characters (`NSValue` containing an `NSRange` value) corresponding to the specified line number (`NSNumber`).
- [NSAccessibilityRangeForPositionParameterizedAttribute](parameterizedattribute/rangeforposition.md): The range of characters (`NSValue` containing an `NSRange` value) composing the glyph at the specified point (`NSValue` containing an `NSPoint` value).
- [NSAccessibilityResultsForSearchPredicateParameterizedAttribute](parameterizedattribute/resultsforsearchpredicateparameterizedattribute.md)
- [NSAccessibilityRTFForRangeParameterizedAttribute](parameterizedattribute/rtfforrange.md): The RTF data (`NSData`) describing the specified range of characters (`NSValue` containing an `NSRange` value).
- [NSAccessibilityScreenPointForLayoutPointParameterizedAttribute](parameterizedattribute/screenpointforlayoutpoint.md): The screen point (`NSValue`) corresponding to the specified point in the layout area (`NSValue`).
- [NSAccessibilityScreenSizeForLayoutSizeParameterizedAttribute](parameterizedattribute/screensizeforlayoutsize.md): The size of the screen in points (`NSValue`) corresponding to the specified size of the layout area (`NSValue`).
- [NSAccessibilityStringForRangeParameterizedAttribute](parameterizedattribute/stringforrange.md): The substring (`NSString`) specified by the range (`NSValue` containing an `NSRange` value).
- [NSAccessibilityStyleRangeForIndexParameterizedAttribute](parameterizedattribute/stylerangeforindex.md): The full range of characters (`NSValue` containing an `NSRange` value), including the specified character (`NSNumber`), which have the same style.
- [NSAccessibilityUIElementsForSearchPredicateParameterizedAttribute](parameterizedattribute/uielementsforsearchpredicateparameterizedattribute.md)

## See Also

### Accessibility Types

- [NSAccessibilityActionName](action.md): Constants that describe types of actions.
- [NSAccessibilityAnnotationAttributeKey](annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibilityAnnotationPosition](../nsaccessibilityannotationposition.md): Constants that specify the position where the annotation applies.
- [NSAccessibilityAttributeName](attribute.md): Constants that describe attributes.
- [NSAccessibilityFontAttributeKey](fontattributekey.md): Keys for font attributes.
- [NSAccessibilityOrientation](../nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
- [NSAccessibilityOrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibilityRole](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerType](../nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibilityRulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibilityRulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibilitySortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](../nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySubrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
- [NSAccessibilityUnits](../nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.
