> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutgroupcustomitem](https://developer.apple.com/documentation/appkit/nscollectionlayoutgroupcustomitem)

# NSCollectionLayoutGroupCustomItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

An item used in a group with a custom layout arrangement.

## Declaration

```swift
@MainActor class NSCollectionLayoutGroupCustomItem
```

<a id="overview"></a>

## Overview

You use a custom item if you want to specify a layout with a custom arrangement, like a radial or diagonal layout. You use custom items within a group that’s created with [custom(layoutSize:itemProvider:)](nscollectionlayoutgroup/custom%28layoutsize_itemprovider_%29.md).

Instead of providing a layout size for the custom item, like you do when you create an [NSCollectionLayoutItem](nscollectionlayoutitem.md), you provide a frame instead.

## Topics

### Creating a custom item

- [init(frame:)](nscollectionlayoutgroupcustomitem/init%28frame_%29.md): Creates a custom item with the specified frame.
- [init(frame:zIndex:)](nscollectionlayoutgroupcustomitem/init%28frame_zindex_%29.md): Creates a custom item with the specified frame and vertical stacking order in relation to other items in the group.

### Getting the frame

- [frame](nscollectionlayoutgroupcustomitem/frame.md): The frame of the custom item.

### Specifying stacking order

- [zIndex](nscollectionlayoutgroupcustomitem/zindex.md): The vertical stacking order of the custom item in relation to other items in the group.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Advanced layouts

- [NSCollectionLayoutGroupCustomItemProvider](nscollectionlayoutgroupcustomitemprovider.md): A closure that creates and returns each of the custom group’s items.

# NSCollectionLayoutGroupCustomItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

An item used in a group with a custom layout arrangement.

## Declaration

```objectivec
@interface NSCollectionLayoutGroupCustomItem : NSObject
```

<a id="overview"></a>

## Overview

You use a custom item if you want to specify a layout with a custom arrangement, like a radial or diagonal layout. You use custom items within a group that’s created with [customGroupWithLayoutSize:itemProvider:](nscollectionlayoutgroup/custom%28layoutsize_itemprovider_%29.md).

Instead of providing a layout size for the custom item, like you do when you create an [NSCollectionLayoutItem](nscollectionlayoutitem.md), you provide a frame instead.

## Topics

### Creating a custom item

- [customItemWithFrame:](nscollectionlayoutgroupcustomitem/init%28frame_%29.md): Creates a custom item with the specified frame.
- [customItemWithFrame:zIndex:](nscollectionlayoutgroupcustomitem/init%28frame_zindex_%29.md): Creates a custom item with the specified frame and vertical stacking order in relation to other items in the group.

### Getting the frame

- [frame](nscollectionlayoutgroupcustomitem/frame.md): The frame of the custom item.

### Specifying stacking order

- [zIndex](nscollectionlayoutgroupcustomitem/zindex.md): The vertical stacking order of the custom item in relation to other items in the group.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Advanced layouts

- [NSCollectionLayoutGroupCustomItemProvider](nscollectionlayoutgroupcustomitemprovider.md): A closure that creates and returns each of the custom group’s items.
