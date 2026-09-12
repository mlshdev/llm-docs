> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineviewcolumndidmove(_:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineviewcolumndidmove(_:))

# outlineViewColumnDidMove(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Invoked whenever the user moves a column in the outline view.

## Declaration

```swift
@MainActor optional func outlineViewColumnDidMove(_ notification: Notification)
```

## Parameters

- `notification`: The posted notification.

<a id="Discussion"></a>

## Discussion

This method is invoked as a result of posting an [columnDidMoveNotification](../nsoutlineview/columndidmovenotification.md).

## See Also

### Working with the Outline Column

- [outlineViewColumnDidResize(\_:)](outlineviewcolumndidresize%28__%29.md): Invoked whenever the user resizes a column in the outline view.
- [outlineViewItemWillExpand(\_:)](outlineviewitemwillexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to expand an item in the outline view.
- [outlineViewItemDidExpand(\_:)](outlineviewitemdidexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user expands an item in the outline view.
- [outlineViewItemWillCollapse(\_:)](outlineviewitemwillcollapse%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to collapse an item in the outline view.
- [outlineViewItemDidCollapse(\_:)](outlineviewitemdidcollapse%28__%29.md): Invoked when the did collapse notification is posted—that is, whenever the user collapses an item in the outline view.

# outlineViewColumnDidMove: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked whenever the user moves a column in the outline view.

## Declaration

```objectivec
- (void) outlineViewColumnDidMove:(NSNotification *) notification;
```

## Parameters

- `notification`: The posted notification.

<a id="Discussion"></a>

## Discussion

This method is invoked as a result of posting an [NSOutlineViewColumnDidMoveNotification](../nsoutlineview/columndidmovenotification.md).

## See Also

### Working with the Outline Column

- [outlineViewColumnDidResize:](outlineviewcolumndidresize%28__%29.md): Invoked whenever the user resizes a column in the outline view.
- [outlineViewItemWillExpand:](outlineviewitemwillexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to expand an item in the outline view.
- [outlineViewItemDidExpand:](outlineviewitemdidexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user expands an item in the outline view.
- [outlineViewItemWillCollapse:](outlineviewitemwillcollapse%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to collapse an item in the outline view.
- [outlineViewItemDidCollapse:](outlineviewitemdidcollapse%28__%29.md): Invoked when the did collapse notification is posted—that is, whenever the user collapses an item in the outline view.
