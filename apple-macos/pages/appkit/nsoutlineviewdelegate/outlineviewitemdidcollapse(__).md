> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineviewitemdidcollapse(_:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineviewitemdidcollapse(_:))

# outlineViewItemDidCollapse(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Invoked when the did collapse notification is posted—that is, whenever the user collapses an item in the outline view.

## Declaration

```swift
@MainActor optional func outlineViewItemDidCollapse(_ notification: Notification)
```

## Parameters

- `notification`: The posted notification.

<a id="Discussion"></a>

## Discussion

This method is invoked as a result of posting an [itemDidCollapseNotification](../nsoutlineview/itemdidcollapsenotification.md).

## See Also

### Working with the Outline Column

- [outlineViewColumnDidMove(\_:)](outlineviewcolumndidmove%28__%29.md): Invoked whenever the user moves a column in the outline view.
- [outlineViewColumnDidResize(\_:)](outlineviewcolumndidresize%28__%29.md): Invoked whenever the user resizes a column in the outline view.
- [outlineViewItemWillExpand(\_:)](outlineviewitemwillexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to expand an item in the outline view.
- [outlineViewItemDidExpand(\_:)](outlineviewitemdidexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user expands an item in the outline view.
- [outlineViewItemWillCollapse(\_:)](outlineviewitemwillcollapse%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to collapse an item in the outline view.

# outlineViewItemDidCollapse: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the did collapse notification is posted—that is, whenever the user collapses an item in the outline view.

## Declaration

```objectivec
- (void) outlineViewItemDidCollapse:(NSNotification *) notification;
```

## Parameters

- `notification`: The posted notification.

<a id="Discussion"></a>

## Discussion

This method is invoked as a result of posting an [NSOutlineViewItemDidCollapseNotification](../nsoutlineview/itemdidcollapsenotification.md).

## See Also

### Working with the Outline Column

- [outlineViewColumnDidMove:](outlineviewcolumndidmove%28__%29.md): Invoked whenever the user moves a column in the outline view.
- [outlineViewColumnDidResize:](outlineviewcolumndidresize%28__%29.md): Invoked whenever the user resizes a column in the outline view.
- [outlineViewItemWillExpand:](outlineviewitemwillexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to expand an item in the outline view.
- [outlineViewItemDidExpand:](outlineviewitemdidexpand%28__%29.md): Invoked when `notification` is posted—that is, whenever the user expands an item in the outline view.
- [outlineViewItemWillCollapse:](outlineviewitemwillcollapse%28__%29.md): Invoked when `notification` is posted—that is, whenever the user is about to collapse an item in the outline view.
