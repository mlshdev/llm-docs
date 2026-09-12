> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/attribute/selectedtextranges](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/attribute/selectedtextranges)

# selectedTextRanges (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

An array of `NSValue` (`rangeValue`) ranges of selected text (`NSArray`).

## Declaration

```swift
static let selectedTextRanges: NSAccessibility.Attribute
```

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

# NSAccessibilitySelectedTextRangesAttribute (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

An array of `NSValue` (`rangeValue`) ranges of selected text (`NSArray`).

## Declaration

```objectivec
extern NSAccessibilityAttributeName const NSAccessibilitySelectedTextRangesAttribute;
```

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
