> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/reuseidentifier](https://developer.apple.com/documentation/uikit/uitableviewcell/reuseidentifier)

# reuseIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string for identifying a reusable cell.

## Declaration

```swift
var reuseIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

The reuse identifier is associated with a [UITableViewCell](../uitableviewcell.md) object that the table-view’s delegate creates with the intent to reuse it as the basis (for performance reasons) for multiple rows of a table view. It is assigned to the cell object in [initWithFrame:reuseIdentifier:](initwithframe_reuseidentifier_.md) and cannot be changed thereafter. A [UITableView](../uitableview.md) object maintains a queue (or list) of the currently reusable cells, each with its own reuse identifier, and makes them available to the delegate in the [dequeueReusableCell(withIdentifier:)](../uitableview/dequeuereusablecell%28withidentifier_%29.md) method.

## See Also

### Reusing cells

- [prepareForReuse()](prepareforreuse%28%29.md): Prepares a reusable cell for reuse by the table view’s delegate.

# reuseIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string for identifying a reusable cell.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * reuseIdentifier;
```

<a id="Discussion"></a>

## Discussion

The reuse identifier is associated with a [UITableViewCell](../uitableviewcell.md) object that the table-view’s delegate creates with the intent to reuse it as the basis (for performance reasons) for multiple rows of a table view. It is assigned to the cell object in [initWithFrame:reuseIdentifier:](initwithframe_reuseidentifier_.md) and cannot be changed thereafter. A [UITableView](../uitableview.md) object maintains a queue (or list) of the currently reusable cells, each with its own reuse identifier, and makes them available to the delegate in the [dequeueReusableCellWithIdentifier:](../uitableview/dequeuereusablecell%28withidentifier_%29.md) method.

## See Also

### Reusing cells

- [prepareForReuse](prepareforreuse%28%29.md): Prepares a reusable cell for reuse by the table view’s delegate.
