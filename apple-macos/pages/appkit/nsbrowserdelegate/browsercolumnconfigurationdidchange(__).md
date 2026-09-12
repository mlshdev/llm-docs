> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browsercolumnconfigurationdidchange(_:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browsercolumnconfigurationdidchange(_:))

# browserColumnConfigurationDidChange(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Used by clients to implement their own column width persistence.

## Declaration

```swift
@MainActor optional func browserColumnConfigurationDidChange(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [columnConfigurationDidChangeNotification](../nsbrowser/columnconfigurationdidchangenotification.md).

<a id="Discussion"></a>

## Discussion

This method applies only to browsers with resize type [NSBrowser.ColumnResizingType.userColumnResizing](../nsbrowser/columnresizingtype-swift.enum/usercolumnresizing.md). It is invoked when the [setWidth(\_:ofColumn:)](../nsbrowser/setwidth%28__ofcolumn_%29.md) method of [NSBrowser](../nsbrowser.md) is used to change the width of any browser columns or when the user resizes any columns. If the user resizes more than one column, a single notification is posted when the user is finished resizing.

## See Also

### Related Documentation

- [setWidth(\_:ofColumn:)](../nsbrowser/setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.

### Sizing

- [browser(\_:shouldSizeColumn:forUserResize:toWidth:)](browser%28__shouldsizecolumn_foruserresize_towidth_%29.md): Used to determine a column’s initial size.
- [browser(\_:sizeToFitWidthOfColumn:)](browser%28__sizetofitwidthofcolumn_%29.md): Returns the ideal width for a column.
- [browser(\_:heightOfRow:inColumn:)](browser%28__heightofrow_incolumn_%29.md): Specifies the height of the specified row in the specified column.

# browserColumnConfigurationDidChange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Used by clients to implement their own column width persistence.

## Declaration

```objectivec
- (void) browserColumnConfigurationDidChange:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSBrowserColumnConfigurationDidChangeNotification](../nsbrowser/columnconfigurationdidchangenotification.md).

<a id="Discussion"></a>

## Discussion

This method applies only to browsers with resize type [NSBrowserUserColumnResizing](../nsbrowser/columnresizingtype-swift.enum/usercolumnresizing.md). It is invoked when the [setWidth:ofColumn:](../nsbrowser/setwidth%28__ofcolumn_%29.md) method of [NSBrowser](../nsbrowser.md) is used to change the width of any browser columns or when the user resizes any columns. If the user resizes more than one column, a single notification is posted when the user is finished resizing.

## See Also

### Related Documentation

- [setWidth:ofColumn:](../nsbrowser/setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.

### Sizing

- [browser:shouldSizeColumn:forUserResize:toWidth:](browser%28__shouldsizecolumn_foruserresize_towidth_%29.md): Used to determine a column’s initial size.
- [browser:sizeToFitWidthOfColumn:](browser%28__sizetofitwidthofcolumn_%29.md): Returns the ideal width for a column.
- [browser:heightOfRow:inColumn:](browser%28__heightofrow_incolumn_%29.md): Specifies the height of the specified row in the specified column.
