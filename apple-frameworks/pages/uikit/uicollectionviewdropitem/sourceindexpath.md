> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropitem/sourceindexpath](https://developer.apple.com/documentation/uikit/uicollectionviewdropitem/sourceindexpath)

# sourceIndexPath (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The index path of the item in the collection view, if any.

## Declaration

```swift
var sourceIndexPath: IndexPath? { get }
```

<a id="Discussion"></a>

## Discussion

If the item originated from the collection view, this property contains the item’s original index path.

## See Also

### Getting the Item Information

- [previewSize](previewsize.md): The size of the drag item’s preview.

# sourceIndexPath (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The index path of the item in the collection view, if any.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSIndexPath * sourceIndexPath;
```

<a id="Discussion"></a>

## Discussion

If the item originated from the collection view, this property contains the item’s original index path.

## See Also

### Getting the Item Information

- [previewSize](previewsize.md): The size of the drag item’s preview.
