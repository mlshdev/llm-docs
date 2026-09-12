> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycontainerdatatable/accessibilitydatatablecellelement(forrow:column:)](https://developer.apple.com/documentation/uikit/uiaccessibilitycontainerdatatable/accessibilitydatatablecellelement(forrow:column:))

# accessibilityDataTableCellElement(forRow:column:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the accessibility element for the specified cell.

## Declaration

```swift
func accessibilityDataTableCellElement(forRow row: Int, column: Int) -> (any UIAccessibilityContainerDataTableCell)?
```

## Parameters

- `row`: The row of the cell.
- `column`: The column of the cell.

<a id="return-value"></a>

## Return Value

The accessibility element for the cell.

# accessibilityDataTableCellElementForRow:column: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the accessibility element for the specified cell.

## Declaration

```objectivec
- (id<UIAccessibilityContainerDataTableCell>) accessibilityDataTableCellElementForRow:(NSUInteger) row column:(NSUInteger) column;
```

## Parameters

- `row`: The row of the cell.
- `column`: The column of the cell.

<a id="return-value"></a>

## Return Value

The accessibility element for the cell.
