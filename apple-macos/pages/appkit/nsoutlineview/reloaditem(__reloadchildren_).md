> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/reloaditem(_:reloadchildren:)](https://developer.apple.com/documentation/appkit/nsoutlineview/reloaditem(_:reloadchildren:))

# reloadItem(\_:reloadChildren:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reloads a given item and, optionally, its children.

## Declaration

```swift
func reloadItem(_ item: Any?, reloadChildren: Bool)
```

## Parameters

- `item`: An item in the receiver.

  Starting in OS X version 10.5,  passing `'nil'` will reload everything under the root in the outline view.
- `reloadChildren`: If [true](https://developer.apple.com/documentation/swift/true), recursively reloads `item` and its children. If [false](https://developer.apple.com/documentation/swift/false), reloads `item` only (identical to [reloadItem(\_:)](reloaditem%28__%29.md)).

  It is not necessary, or efficient, to reload children if the item is not expanded.

## See Also

### Redisplaying Information

- [reloadItem(\_:)](reloaditem%28__%29.md): Reloads and redisplays the data for the given item.

# reloadItem:reloadChildren: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reloads a given item and, optionally, its children.

## Declaration

```objectivec
- (void) reloadItem:(id) item reloadChildren:(BOOL) reloadChildren;
```

## Parameters

- `item`: An item in the receiver.

  Starting in OS X version 10.5,  passing `'nil'` will reload everything under the root in the outline view.
- `reloadChildren`: If [true](https://developer.apple.com/documentation/swift/true), recursively reloads `item` and its children. If [false](https://developer.apple.com/documentation/swift/false), reloads `item` only (identical to [reloadItem:](reloaditem%28__%29.md)).

  It is not necessary, or efficient, to reload children if the item is not expanded.

## See Also

### Redisplaying Information

- [reloadItem:](reloaditem%28__%29.md): Reloads and redisplays the data for the given item.
