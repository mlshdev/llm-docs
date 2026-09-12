> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/appenditems(_:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/appenditems(_:))

# appendItems(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Adds the specified items to the section snapshot.

## Declaration

```swift
func appendItems(_ items: [Any])
```

## See Also

### Creating a section snapshot

- [init()](init%28%29.md): Creates an empty section snapshot.
- [ofParentItem(\_:)](ofparentitem%28__%29.md): Creates a section snapshot containing the child items of the specified parent item, excluding the parent item.
- [ofParentItem(\_:includingParentItem:)](ofparentitem%28__includingparentitem_%29.md): Creates a section snapshot containing the child items of the specified parent item, including the parent item.
- [appendItems(\_:intoParentItem:)](appenditems%28__intoparentitem_%29.md): Adds the specified items as child items of the specified parent item in the section snapshot.

# appendItems: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Adds the specified items to the section snapshot.

## Declaration

```objectivec
- (void) appendItems:(NSArray<id> *) items;
```

## See Also

### Creating a section snapshot

- [init](init%28%29.md): Creates an empty section snapshot.
- [snapshotOfParentItem:](ofparentitem%28__%29.md): Creates a section snapshot containing the child items of the specified parent item, excluding the parent item.
- [snapshotOfParentItem:includingParentItem:](ofparentitem%28__includingparentitem_%29.md): Creates a section snapshot containing the child items of the specified parent item, including the parent item.
- [appendItems:intoParentItem:](appenditems%28__intoparentitem_%29.md): Adds the specified items as child items of the specified parent item in the section snapshot.
