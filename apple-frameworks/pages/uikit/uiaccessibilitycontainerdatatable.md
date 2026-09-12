> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycontainerdatatable](https://developer.apple.com/documentation/uikit/uiaccessibilitycontainerdatatable)

# UIAccessibilityContainerDataTable (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Methods that convey information about the contents of a table.

## Declaration

```swift
@MainActor protocol UIAccessibilityContainerDataTable : NSObjectProtocol
```

## Topics

### Providing cell elements

- [accessibilityDataTableCellElement(forRow:column:)](uiaccessibilitycontainerdatatable/accessibilitydatatablecellelement%28forrow_column_%29.md): Returns the accessibility element for the specified cell.

### Providing the table dimensions

- [accessibilityColumnCount()](uiaccessibilitycontainerdatatable/accessibilitycolumncount%28%29.md): Returns the total number of columns in the table.
- [accessibilityRowCount()](uiaccessibilitycontainerdatatable/accessibilityrowcount%28%29.md): Returns the total number of rows in the table.

### Providing header elements

- [accessibilityHeaderElements(forColumn:)](uiaccessibilitycontainerdatatable/accessibilityheaderelements%28forcolumn_%29.md): Returns the accessibility element for the specified column header.
- [accessibilityHeaderElements(forRow:)](uiaccessibilitycontainerdatatable/accessibilityheaderelements%28forrow_%29.md): Returns the accessibility element for the specified row header.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Containers

- [UIAccessibilityContainerDataTableCell](uiaccessibilitycontainerdatatablecell.md): Methods that provide the location of a cell in a table.
- [UIAccessibilityContainerType](uiaccessibilitycontainertype.md): Constants that indicate the type of content in a data-based container.

# UIAccessibilityContainerDataTable (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Methods that convey information about the contents of a table.

## Declaration

```objectivec
@protocol UIAccessibilityContainerDataTable <NSObject>
```

## Topics

### Providing cell elements

- [accessibilityDataTableCellElementForRow:column:](uiaccessibilitycontainerdatatable/accessibilitydatatablecellelement%28forrow_column_%29.md): Returns the accessibility element for the specified cell.

### Providing the table dimensions

- [accessibilityColumnCount](uiaccessibilitycontainerdatatable/accessibilitycolumncount%28%29.md): Returns the total number of columns in the table.
- [accessibilityRowCount](uiaccessibilitycontainerdatatable/accessibilityrowcount%28%29.md): Returns the total number of rows in the table.

### Providing header elements

- [accessibilityHeaderElementsForColumn:](uiaccessibilitycontainerdatatable/accessibilityheaderelements%28forcolumn_%29.md): Returns the accessibility element for the specified column header.
- [accessibilityHeaderElementsForRow:](uiaccessibilitycontainerdatatable/accessibilityheaderelements%28forrow_%29.md): Returns the accessibility element for the specified row header.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Containers

- [UIAccessibilityContainerDataTableCell](uiaccessibilitycontainerdatatablecell.md): Methods that provide the location of a cell in a table.
- [UIAccessibilityContainerType](uiaccessibilitycontainertype.md): Constants that indicate the type of content in a data-based container.
