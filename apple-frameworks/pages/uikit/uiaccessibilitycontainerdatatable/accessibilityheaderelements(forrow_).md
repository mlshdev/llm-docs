> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycontainerdatatable/accessibilityheaderelements(forrow:)](https://developer.apple.com/documentation/uikit/uiaccessibilitycontainerdatatable/accessibilityheaderelements(forrow:))

# accessibilityHeaderElements(forRow:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the accessibility element for the specified row header.

## Declaration

```swift
optional func accessibilityHeaderElements(forRow row: Int) -> [any UIAccessibilityContainerDataTableCell]?
```

## Parameters

- `row`: The index of the row containing the header.

<a id="return-value"></a>

## Return Value

The accessibility elements for the specified row header.

## See Also

### Providing header elements

- [accessibilityHeaderElements(forColumn:)](accessibilityheaderelements%28forcolumn_%29.md): Returns the accessibility element for the specified column header.

# accessibilityHeaderElementsForRow: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the accessibility element for the specified row header.

## Declaration

```objectivec
- (NSArray<id<UIAccessibilityContainerDataTableCell>> *) accessibilityHeaderElementsForRow:(NSUInteger) row;
```

## Parameters

- `row`: The index of the row containing the header.

<a id="return-value"></a>

## Return Value

The accessibility elements for the specified row header.

## See Also

### Providing header elements

- [accessibilityHeaderElementsForColumn:](accessibilityheaderelements%28forcolumn_%29.md): Returns the accessibility element for the specified column header.
