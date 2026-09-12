> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:shouldshowcellexpansionforrow:column:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:shouldshowcellexpansionforrow:column:))

# browser(\_:shouldShowCellExpansionForRow:column:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked to allow the delegate to control cell expansion for a specific row and column.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, shouldShowCellExpansionForRow row: Int, column: Int) -> Bool
```

## Parameters

- `browser`: The browser.
- `row`: The index of the row requesting an expansion tooltip.
- `column`: The index of the column containing the requesting row.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the cell expansion tooltip; [false](https://developer.apple.com/documentation/swift/false) to disallow it.

<a id="Discussion"></a>

## Discussion

Cell expansion can occur when the mouse hovers over the specified cell and the cell contents are unable to be fully displayed within the cell. If this method returns YES, the full cell contents will be shown in a special floating tool tip view, otherwise the content is truncated.

# browser:shouldShowCellExpansionForRow:column: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked to allow the delegate to control cell expansion for a specific row and column.

## Declaration

```objectivec
- (BOOL) browser:(NSBrowser *) browser shouldShowCellExpansionForRow:(NSInteger) row column:(NSInteger) column;
```

## Parameters

- `browser`: The browser.
- `row`: The index of the row requesting an expansion tooltip.
- `column`: The index of the column containing the requesting row.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the cell expansion tooltip; [false](https://developer.apple.com/documentation/swift/false) to disallow it.

<a id="Discussion"></a>

## Discussion

Cell expansion can occur when the mouse hovers over the specified cell and the cell contents are unable to be fully displayed within the cell. If this method returns YES, the full cell contents will be shown in a special floating tool tip view, otherwise the content is truncated.
