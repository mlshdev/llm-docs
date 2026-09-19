> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiaccessibilitycontainerdatatable/accessibilityheaderelements(forcolumn:)

# accessibilityHeaderElements(forColumn:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the accessibility element for the specified column header.

## Declaration

```swift
optional func accessibilityHeaderElements(forColumn column: Int) -> [any UIAccessibilityContainerDataTableCell]?
```

## Parameters

- `column`: The index of the column containing the header.

<a id="return-value"></a>

## Return Value

The accessibility elements for the specified column header.

## See Also

### Providing header elements

- [accessibilityHeaderElements(forRow:)](accessibilityheaderelements%28forrow_%29.md): Returns the accessibility element for the specified row header.

# accessibilityHeaderElementsForColumn: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the accessibility element for the specified column header.

## Declaration

```objectivec
- (NSArray<id<UIAccessibilityContainerDataTableCell>> *) accessibilityHeaderElementsForColumn:(NSUInteger) column;
```

## Parameters

- `column`: The index of the column containing the header.

<a id="return-value"></a>

## Return Value

The accessibility elements for the specified column header.

## See Also

### Providing header elements

- [accessibilityHeaderElementsForRow:](accessibilityheaderelements%28forrow_%29.md): Returns the accessibility element for the specified row header.
