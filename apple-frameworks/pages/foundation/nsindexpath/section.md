> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/section](https://developer.apple.com/documentation/foundation/nsindexpath/section)

# section (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An index number identifying a section in a table view or collection view.

## Declaration

```swift
var section: Int { get }
```

## See Also

### Using Special Node Names

- [init(forRow:inSection:)](init%28forrow_insection_%29.md): Initializes an index path with the indexes of a specific row and section in a table view.
- [init(forItem:inSection:)](init%28foritem_insection_%29.md): Initializes an index path with the indexes of a specific item and section in a collection view.
- [row](row.md): An index number identifying a row in a section of a table view.
- [item](item.md): An index number identifying an item in a section of a collection view.

# section (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An index number identifying a section in a table view or collection view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger section;
```

```objectivec
@property (readonly) NSInteger section;
```

## See Also

### Using Special Node Names

- [indexPathForRow:inSection:](init%28forrow_insection_%29.md): Initializes an index path with the indexes of a specific row and section in a table view.
- [indexPathForItem:inSection:](init%28foritem_insection_%29.md): Initializes an index path with the indexes of a specific item and section in a collection view.
- [row](row.md): An index number identifying a row in a section of a table view.
- [item](item.md): An index number identifying an item in a section of a collection view.
