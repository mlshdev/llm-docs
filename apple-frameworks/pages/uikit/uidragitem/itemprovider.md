> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragitem/itemprovider](https://developer.apple.com/documentation/uikit/uidragitem/itemprovider)

# itemProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The item provider associated with the drag item.

## Declaration

```swift
var itemProvider: NSItemProvider { get }
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)
- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

The item provider conveys the data, or file, that the drag-and-drop activity shares between processes. The property is set when the [UIDragItem](../uidragitem.md) instance is created. For more information, see [init(itemProvider:)](init%28itemprovider_%29.md).

## See Also

### Accessing the drag item’s data

- [localObject](localobject.md): A custom object associated with the drag item.

# itemProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The item provider associated with the drag item.

## Declaration

```objectivec
@property (nonatomic, readonly) NSItemProvider * itemProvider;
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)
- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

The item provider conveys the data, or file, that the drag-and-drop activity shares between processes. The property is set when the [UIDragItem](../uidragitem.md) instance is created. For more information, see [initWithItemProvider:](init%28itemprovider_%29.md).

## See Also

### Accessing the drag item’s data

- [localObject](localobject.md): A custom object associated with the drag item.
