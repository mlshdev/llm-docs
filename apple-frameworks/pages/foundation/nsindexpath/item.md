> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/item](https://developer.apple.com/documentation/foundation/nsindexpath/item)

# item (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An index number identifying an item in a section of a collection view.

## Declaration

```swift
var item: Int { get }
```

<a id="Discussion"></a>

## Discussion

The section the item is in is identified by the value of [section](section.md).

## See Also

### Using Special Node Names

- [init(forRow:inSection:)](init%28forrow_insection_%29.md): Initializes an index path with the indexes of a specific row and section in a table view.
- [init(forItem:inSection:)](init%28foritem_insection_%29.md): Initializes an index path with the indexes of a specific item and section in a collection view.
- [section](section.md): An index number identifying a section in a table view or collection view.
- [row](row.md): An index number identifying a row in a section of a table view.

# item (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An index number identifying an item in a section of a collection view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger item;
```

```objectivec
@property (readonly) NSInteger item;
```

<a id="Discussion"></a>

## Discussion

The section the item is in is identified by the value of [section](section.md).

## See Also

### Using Special Node Names

- [indexPathForRow:inSection:](init%28forrow_insection_%29.md): Initializes an index path with the indexes of a specific row and section in a table view.
- [indexPathForItem:inSection:](init%28foritem_insection_%29.md): Initializes an index path with the indexes of a specific item and section in a collection view.
- [section](section.md): An index number identifying a section in a table view or collection view.
- [row](row.md): An index number identifying a row in a section of a table view.
