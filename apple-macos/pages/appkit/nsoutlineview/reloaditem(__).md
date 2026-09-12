> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/reloaditem(_:)](https://developer.apple.com/documentation/appkit/nsoutlineview/reloaditem(_:))

# reloadItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reloads and redisplays the data for the given item.

## Declaration

```swift
func reloadItem(_ item: Any?)
```

## Parameters

- `item`: The item to reload and display.

<a id="Discussion"></a>

## Discussion

Reloading the cell views associated with `item` occurs only in apps that link against macOS 10.12 and later.

This method may cause the outline view to change its selection without calling the [outlineViewSelectionDidChange(\_:)](../nsoutlineviewdelegate/outlineviewselectiondidchange%28__%29.md) delegate method.

## See Also

### Redisplaying Information

- [reloadItem(\_:reloadChildren:)](reloaditem%28__reloadchildren_%29.md): Reloads a given item and, optionally, its children.

# reloadItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reloads and redisplays the data for the given item.

## Declaration

```objectivec
- (void) reloadItem:(id) item;
```

## Parameters

- `item`: The item to reload and display.

<a id="Discussion"></a>

## Discussion

Reloading the cell views associated with `item` occurs only in apps that link against macOS 10.12 and later.

This method may cause the outline view to change its selection without calling the [outlineViewSelectionDidChange:](../nsoutlineviewdelegate/outlineviewselectiondidchange%28__%29.md) delegate method.

## See Also

### Redisplaying Information

- [reloadItem:reloadChildren:](reloaditem%28__reloadchildren_%29.md): Reloads a given item and, optionally, its children.
