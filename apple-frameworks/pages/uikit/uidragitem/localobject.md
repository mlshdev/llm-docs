> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragitem/localobject](https://developer.apple.com/documentation/uikit/uidragitem/localobject)

# localObject (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A custom object associated with the drag item.

## Declaration

```swift
var localObject: Any? { get set }
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)
- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

The `localObject` property gives you the option to associate a custom object, such as a model object, with the drag item. The local object is available only to the app that initiates the drag activity.

## See Also

### Accessing the drag item’s data

- [itemProvider](itemprovider.md): The item provider associated with the drag item.

# localObject (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A custom object associated with the drag item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id localObject;
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](../supporting-drag-and-drop-in-collection-views.md)
- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

The `localObject` property gives you the option to associate a custom object, such as a model object, with the drag item. The local object is available only to the app that initiates the drag activity.

## See Also

### Accessing the drag item’s data

- [itemProvider](itemprovider.md): The item provider associated with the drag item.
