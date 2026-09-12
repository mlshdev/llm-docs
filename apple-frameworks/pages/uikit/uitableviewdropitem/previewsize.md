> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropitem/previewsize](https://developer.apple.com/documentation/uikit/uitableviewdropitem/previewsize)

# previewSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The size of the drag item’s preview.

## Declaration

```swift
var previewSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

You might use this property when configuring animations. If the item doesn’t have an associated preview, this property is set to `CGSizeZero`.

## See Also

### Getting the item information

- [sourceIndexPath](sourceindexpath.md): The index path of the item in the table view, if any.

# previewSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The size of the drag item’s preview.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize previewSize;
```

<a id="Discussion"></a>

## Discussion

You might use this property when configuring animations. If the item doesn’t have an associated preview, this property is set to `CGSizeZero`.

## See Also

### Getting the item information

- [sourceIndexPath](sourceindexpath.md): The index path of the item in the table view, if any.
