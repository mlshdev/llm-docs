> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/datasource](https://developer.apple.com/documentation/appkit/nsoutlineview/datasource)

# dataSource (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that provides the data displayed by the receiver.

## Declaration

```swift
weak var dataSource: (any NSOutlineViewDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

The object must implement the appropriate methods of [NSOutlineViewDataSource](../nsoutlineviewdatasource.md). Note that in versions of macOS prior to v10.12, the outline view did not retain the data source in a managed memory environment.

Setting the data source invokes [tile()](../nstableview/tile%28%29.md).

If the data source doesn’t respond to all of the [outlineView(\_:child:ofItem:)](../nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md), [outlineView(\_:isItemExpandable:)](../nsoutlineviewdatasource/outlineview%28__isitemexpandable_%29.md), [outlineView(\_:numberOfChildrenOfItem:)](../nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md), and [outlineView(\_:objectValueFor:byItem:)](../nsoutlineviewdatasource/outlineview%28__objectvaluefor_byitem_%29.md) methods, an [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) may be raised.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [Outline View](../outline-view.md): Display a list-based interface for hierarchical data, where each level of hierarchy is indented from the previous one.

### Accessing the Data Source

- [stronglyReferencesItems](stronglyreferencesitems.md): A Boolean value that indicates whether the outline view retains and releases the objects returned from its data source.

# dataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that provides the data displayed by the receiver.

## Declaration

```objectivec
@property (weak, nullable) id<NSOutlineViewDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

The object must implement the appropriate methods of [NSOutlineViewDataSource](../nsoutlineviewdatasource.md). Note that in versions of macOS prior to v10.12, the outline view did not retain the data source in a managed memory environment.

Setting the data source invokes [tile](../nstableview/tile%28%29.md).

If the data source doesn’t respond to all of the [outlineView:child:ofItem:](../nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md), [outlineView:isItemExpandable:](../nsoutlineviewdatasource/outlineview%28__isitemexpandable_%29.md), [outlineView:numberOfChildrenOfItem:](../nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md), and [outlineView:objectValueForTableColumn:byItem:](../nsoutlineviewdatasource/outlineview%28__objectvaluefor_byitem_%29.md) methods, an [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) may be raised.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [Outline View](../outline-view.md): Display a list-based interface for hierarchical data, where each level of hierarchy is indented from the previous one.

### Accessing the Data Source

- [stronglyReferencesItems](stronglyreferencesitems.md): A Boolean value that indicates whether the outline view retains and releases the objects returned from its data source.
