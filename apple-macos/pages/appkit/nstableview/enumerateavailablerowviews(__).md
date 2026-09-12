> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/enumerateavailablerowviews(_:)](https://developer.apple.com/documentation/appkit/nstableview/enumerateavailablerowviews(_:))

# enumerateAvailableRowViews(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Allows the enumeration of all the table rows that are known to the table view.

## Declaration

```swift
func enumerateAvailableRowViews(_ handler: (NSTableRowView, Int) -> Void)
```

## Parameters

- `handler`: The `Block` to apply to elements in the set.

  The `Block` takes two arguments:

  - **rowView**: The view for the row.
  - **row**: The index of the row.

<a id="Discussion"></a>

## Discussion

The enumeration includes all views in the [visibleRect](../nsview/visiblerect.md); however, it may also include ones that are “in flight” due to animations or other attributes of the table.

It is preferred to use this method to efficiently make changes over all views that exist in the table.

> **Note**

>  There is no guarantee that the rows will be enumerated in the displayed order.

# enumerateAvailableRowViewsUsingBlock: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Allows the enumeration of all the table rows that are known to the table view.

## Declaration

```objectivec
- (void) enumerateAvailableRowViewsUsingBlock:(void (^)(NSTableRowView *rowView, NSInteger row)) handler;
```

## Parameters

- `handler`: The `Block` to apply to elements in the set.

  The `Block` takes two arguments:

  - **rowView**: The view for the row.
  - **row**: The index of the row.

<a id="Discussion"></a>

## Discussion

The enumeration includes all views in the [visibleRect](../nsview/visiblerect.md); however, it may also include ones that are “in flight” due to animations or other attributes of the table.

It is preferred to use this method to efficiently make changes over all views that exist in the table.

> **Note**

>  There is no guarantee that the rows will be enumerated in the displayed order.
