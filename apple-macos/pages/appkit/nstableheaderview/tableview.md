> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstableheaderview/tableview

# tableView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The [NSTableView](../nstableview.md) instance that this table header view belongs to.

## Declaration

```swift
weak var tableView: NSTableView? { get set }
```

<a id="Discussion"></a>

## Discussion

You should never need to set this property; it’s assigned automatically when you set the header view for an `NSTableView`.

## See Also

### Related Documentation

- [NSTableView](../nstableview.md): A set of related records, displayed in rows that represent individual records and columns that represent the attributes of those records.
- [headerView](../nstableview/headerview.md): The view object used to draw headers over columns.

# tableView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The [NSTableView](../nstableview.md) instance that this table header view belongs to.

## Declaration

```objectivec
@property (weak, nullable) NSTableView * tableView;
```

<a id="Discussion"></a>

## Discussion

You should never need to set this property; it’s assigned automatically when you set the header view for an `NSTableView`.

## See Also

### Related Documentation

- [NSTableView](../nstableview.md): A set of related records, displayed in rows that represent individual records and columns that represent the attributes of those records.
- [headerView](../nstableview/headerview.md): The view object used to draw headers over columns.
