> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragdropsession/items](https://developer.apple.com/documentation/uikit/uidragdropsession/items)

# items (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of drag items in the drag session or drop session.

## Declaration

```swift
var items: [UIDragItem] { get }
```

<a id="Discussion"></a>

## Discussion

The drag item’s [NSItemProvider](../../foundation/nsitemprovider.md) object doesn’t load the data for the item until the drop interaction happens. However, before the interaction happens, you can get the item’s registered type identifiers and metadata. The data is available to you only in the drop interaction delegate’s [dropInteraction(\_:performDrop:)](../uidropinteractiondelegate/dropinteraction%28__performdrop_%29.md) method.

## See Also

### Checking for drag items

- [canLoadObjects(ofClass:)](canloadobjects%28ofclass_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session can create an instance of the specified class.
- [hasItemsConforming(toTypeIdentifiers:)](hasitemsconforming%28totypeidentifiers_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session conforms to at least one of the specified UTIs.

# items (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of drag items in the drag session or drop session.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<UIDragItem *> * items;
```

<a id="Discussion"></a>

## Discussion

The drag item’s [NSItemProvider](../../foundation/nsitemprovider.md) object doesn’t load the data for the item until the drop interaction happens. However, before the interaction happens, you can get the item’s registered type identifiers and metadata. The data is available to you only in the drop interaction delegate’s [dropInteraction:performDrop:](../uidropinteractiondelegate/dropinteraction%28__performdrop_%29.md) method.

## See Also

### Checking for drag items

- [canLoadObjectsOfClass:](canloadobjects%28ofclass_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session can create an instance of the specified class.
- [hasItemsConformingToTypeIdentifiers:](hasitemsconforming%28totypeidentifiers_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session conforms to at least one of the specified UTIs.
