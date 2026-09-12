> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/attribute/orderedbyrow](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/attribute/orderedbyrow)

# orderedByRow (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

A flag that indicates whether the grid is in row major or column major order.

## Declaration

```swift
static let orderedByRow: NSAccessibility.Attribute
```

<a id="discussion"></a>

## Discussion

The value is an `NSNumber` as `boolValue`. A value of [true](https://developer.apple.com/documentation/swift/true) indicates row major order, and [false](https://developer.apple.com/documentation/swift/false) indicates column major order.

## See Also

### Attributes

- [activationPoint](activationpoint.md)
- [allowedValues](allowedvalues.md): Deprecated. The allowed values in the slider (`NSArray`).
- [alternateUIVisible](alternateuivisible.md)
- [autoInteractableAttribute](autointeractableattribute.md)
- [blockQuoteLevelAttribute](blockquotelevelattribute.md)
- [cancelButton](cancelbutton.md): The element that represents the cancel button (`id`).
- [children](children.md): Deprecated. The element’s child elements in the accessibility hierarchy (`NSArray`).
- [childrenInNavigationOrderAttribute](childreninnavigationorderattribute.md)
- [clearButton](clearbutton.md): Deprecated. The element that represents the clear button in a search field (`id`).
- [closeButton](closebutton.md): Deprecated. The element representing the close button (`id`).
- [columnCount](columncount.md): Deprecated. The number of columns in the grid (`NSNumber` as `intValue`).
- [columnHeaderUIElements](columnheaderuielements.md): The table’s column headers (`NSArray`).
- [columnIndexRange](columnindexrange.md): The column index range of the cell (an `NSValue` instance that contains the row’s starting index and index span in the table).
- [columnTitles](columntitles.md): The elements that represent the column titles (`NSArray`).
- [columns](columns.md): The table’s columns (`NSArray`).

# NSAccessibilityOrderedByRowAttribute (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

A flag that indicates whether the grid is in row major or column major order.

## Declaration

```objectivec
extern NSAccessibilityAttributeName const NSAccessibilityOrderedByRowAttribute;
```

<a id="discussion"></a>

## Discussion

The value is an `NSNumber` as `boolValue`. A value of [true](https://developer.apple.com/documentation/swift/true) indicates row major order, and [false](https://developer.apple.com/documentation/swift/false) indicates column major order.

## See Also

### Attributes

- [NSAccessibilityActivationPointAttribute](activationpoint.md)
- [NSAccessibilityAllowedValuesAttribute](allowedvalues.md): Deprecated. The allowed values in the slider (`NSArray`).
- [NSAccessibilityAlternateUIVisibleAttribute](alternateuivisible.md)
- [NSAccessibilityAutoInteractableAttribute](autointeractableattribute.md)
- [NSAccessibilityBlockQuoteLevelAttribute](blockquotelevelattribute.md)
- [NSAccessibilityCancelButtonAttribute](cancelbutton.md): The element that represents the cancel button (`id`).
- [NSAccessibilityChildrenAttribute](children.md): Deprecated. The element’s child elements in the accessibility hierarchy (`NSArray`).
- [NSAccessibilityChildrenInNavigationOrderAttribute](childreninnavigationorderattribute.md)
- [NSAccessibilityClearButtonAttribute](clearbutton.md): Deprecated. The element that represents the clear button in a search field (`id`).
- [NSAccessibilityCloseButtonAttribute](closebutton.md): Deprecated. The element representing the close button (`id`).
- [NSAccessibilityColumnCountAttribute](columncount.md): Deprecated. The number of columns in the grid (`NSNumber` as `intValue`).
- [NSAccessibilityColumnHeaderUIElementsAttribute](columnheaderuielements.md): The table’s column headers (`NSArray`).
- [NSAccessibilityColumnIndexRangeAttribute](columnindexrange.md): The column index range of the cell (an `NSValue` instance that contains the row’s starting index and index span in the table).
- [NSAccessibilityColumnTitlesAttribute](columntitles.md): The elements that represent the column titles (`NSArray`).
- [NSAccessibilityColumnsAttribute](columns.md): The table’s columns (`NSArray`).
