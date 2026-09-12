> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/contentview](https://developer.apple.com/documentation/uikit/uitableviewcell/contentview)

# contentView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The content view of the cell object.

## Declaration

```swift
var contentView: UIView { get }
```

<a id="Discussion"></a>

## Discussion

The content view of a [UITableViewCell](../uitableviewcell.md) object is the default superview for content that the cell displays. If you want to customize cells by simply adding additional views, you should add them to the content view so they position appropriately as the cell transitions in to and out of editing mode.

## See Also

### Related Documentation

- [backgroundView](backgroundview.md): The view to use as the background of the cell.

### Managing the content

- [defaultContentConfiguration()](defaultcontentconfiguration%28%29.md): Retrieves a default list content configuration for the cell’s style.
- [contentConfiguration](contentconfiguration-9ktox.md): The current content configuration of the cell.
- [automaticallyUpdatesContentConfiguration](automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the cell automatically updates its content configuration when its state changes.

# contentView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The content view of the cell object.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIView * contentView;
```

<a id="Discussion"></a>

## Discussion

The content view of a [UITableViewCell](../uitableviewcell.md) object is the default superview for content that the cell displays. If you want to customize cells by simply adding additional views, you should add them to the content view so they position appropriately as the cell transitions in to and out of editing mode.

## See Also

### Related Documentation

- [backgroundView](backgroundview.md): The view to use as the background of the cell.

### Managing the content

- [defaultContentConfiguration](defaultcontentconfiguration.md): Retrieves a default list content configuration for the cell’s style.
- [contentConfiguration](contentconfiguration-2lzvp.md): The current content configuration of the cell.
- [automaticallyUpdatesContentConfiguration](automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the cell automatically updates its content configuration when its state changes.
