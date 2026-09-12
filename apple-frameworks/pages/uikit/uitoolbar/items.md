> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar/items](https://developer.apple.com/documentation/uikit/uitoolbar/items)

# items (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The items displayed on the toolbar.

## Declaration

```swift
var items: [UIBarButtonItem]? { get set }
```

<a id="Discussion"></a>

## Discussion

The items, instances of [UIBarButtonItem](../uibarbuttonitem.md), that are visible on the toolbar in the order they appear in this array. Any changes to this property aren’t animated. Use the [setItems(\_:animated:)](setitems%28__animated_%29.md) method to animate changes.

The default value is `nil`.

## See Also

### Configuring toolbar items

- [setItems(\_:animated:)](setitems%28__animated_%29.md): Sets the items on the toolbar by animating the changes.

# items (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The items displayed on the toolbar.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<UIBarButtonItem *> * items;
```

<a id="Discussion"></a>

## Discussion

The items, instances of [UIBarButtonItem](../uibarbuttonitem.md), that are visible on the toolbar in the order they appear in this array. Any changes to this property aren’t animated. Use the [setItems:animated:](setitems%28__animated_%29.md) method to animate changes.

The default value is `nil`.

## See Also

### Configuring toolbar items

- [setItems:animated:](setitems%28__animated_%29.md): Sets the items on the toolbar by animating the changes.
