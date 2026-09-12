> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitytable](https://developer.apple.com/documentation/appkit/nsaccessibilitytable)

# NSAccessibilityTable (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a table view.

## Declaration

```swift
protocol NSAccessibilityTable : NSAccessibilityGroup
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a table—a view that uses a row-and-column format to display a set of related records and their attributes—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityColumnHeaderUIElements()](nsaccessibilitytable/accessibilitycolumnheaderuielements%28%29.md): Returns the column header accessibility elements for the table.
- [accessibilityColumns()](nsaccessibilitytable/accessibilitycolumns%28%29.md): Returns the column accessibility elements for the table.
- [accessibilityLabel()](nsaccessibilitytable/accessibilitylabel%28%29.md): Returns a short description of the table.
- [accessibilityRowHeaderUIElements()](nsaccessibilitytable/accessibilityrowheaderuielements%28%29.md): Returns the row header accessibility elements for the table.
- [accessibilityRows()](nsaccessibilitytable/accessibilityrows%28%29.md): Returns the row accessibility elements for the table.
- [accessibilitySelectedCells()](nsaccessibilitytable/accessibilityselectedcells%28%29.md): The currently selected cells for the table.
- [accessibilitySelectedColumns()](nsaccessibilitytable/accessibilityselectedcolumns%28%29.md): Returns the currently selected columns for the table.
- [accessibilitySelectedRows()](nsaccessibilitytable/accessibilityselectedrows%28%29.md): Returns the currently selected rows for the table.
- [accessibilityVisibleCells()](nsaccessibilitytable/accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [accessibilityVisibleColumns()](nsaccessibilitytable/accessibilityvisiblecolumns%28%29.md): Returns the visible columns for the table.
- [accessibilityVisibleRows()](nsaccessibilitytable/accessibilityvisiblerows%28%29.md): Returns the visible rows for the table.
- [setAccessibilitySelectedRows(\_:)](nsaccessibilitytable/setaccessibilityselectedrows%28__%29.md): Sets the table’s currently selected rows.
- [accessibilityHeaderGroup()](nsaccessibilitytable/accessibilityheadergroup%28%29.md): Deprecated. Returns the header group for the table.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityGroup](nsaccessibilitygroup.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSAccessibilityList](nsaccessibilitylist.md)
- [NSAccessibilityOutline](nsaccessibilityoutline.md)

### Conforming Types

- [NSOutlineView](nsoutlineview.md)
- [NSTableView](nstableview.md)

## See Also

### Lists

- [NSAccessibilityList](nsaccessibilitylist.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a list view.
- [NSAccessibilityOutline](nsaccessibilityoutline.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as an outline view.
- [NSAccessibilityRow](nsaccessibilityrow.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a row for a table, list, or outline view.

# NSAccessibilityTable (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a table view.

## Declaration

```objectivec
@protocol NSAccessibilityTable <NSAccessibilityGroup>
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a table—a view that uses a row-and-column format to display a set of related records and their attributes—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityColumnHeaderUIElements](nsaccessibilitytable/accessibilitycolumnheaderuielements%28%29.md): Returns the column header accessibility elements for the table.
- [accessibilityColumns](nsaccessibilitytable/accessibilitycolumns%28%29.md): Returns the column accessibility elements for the table.
- [accessibilityLabel](nsaccessibilitytable/accessibilitylabel%28%29.md): Returns a short description of the table.
- [accessibilityRowHeaderUIElements](nsaccessibilitytable/accessibilityrowheaderuielements%28%29.md): Returns the row header accessibility elements for the table.
- [accessibilityRows](nsaccessibilitytable/accessibilityrows%28%29.md): Returns the row accessibility elements for the table.
- [accessibilitySelectedCells](nsaccessibilitytable/accessibilityselectedcells%28%29.md): The currently selected cells for the table.
- [accessibilitySelectedColumns](nsaccessibilitytable/accessibilityselectedcolumns%28%29.md): Returns the currently selected columns for the table.
- [accessibilitySelectedRows](nsaccessibilitytable/accessibilityselectedrows%28%29.md): Returns the currently selected rows for the table.
- [accessibilityVisibleCells](nsaccessibilitytable/accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [accessibilityVisibleColumns](nsaccessibilitytable/accessibilityvisiblecolumns%28%29.md): Returns the visible columns for the table.
- [accessibilityVisibleRows](nsaccessibilitytable/accessibilityvisiblerows%28%29.md): Returns the visible rows for the table.
- [setAccessibilitySelectedRows:](nsaccessibilitytable/setaccessibilityselectedrows%28__%29.md): Sets the table’s currently selected rows.
- [accessibilityHeaderGroup](nsaccessibilitytable/accessibilityheadergroup%28%29.md): Deprecated. Returns the header group for the table.

## Relationships

### Inherits From

- [NSAccessibilityGroup](nsaccessibilitygroup.md)

### Inherited By

- [NSAccessibilityList](nsaccessibilitylist.md)
- [NSAccessibilityOutline](nsaccessibilityoutline.md)

### Conforming Types

- [NSTableView](nstableview.md)

## See Also

### Lists

- [NSAccessibilityList](nsaccessibilitylist.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a list view.
- [NSAccessibilityOutline](nsaccessibilityoutline.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as an outline view.
- [NSAccessibilityRow](nsaccessibilityrow.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a row for a table, list, or outline view.
