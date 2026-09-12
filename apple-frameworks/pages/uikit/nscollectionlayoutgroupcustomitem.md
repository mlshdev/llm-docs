> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutgroupcustomitem](https://developer.apple.com/documentation/uikit/nscollectionlayoutgroupcustomitem)

# NSCollectionLayoutGroupCustomItem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Advanced layouts

- [NSCollectionLayoutGroupCustomItemProvider](nscollectionlayoutgroupcustomitemprovider.md): A closure that creates and returns each of the custom group’s items.

# NSCollectionLayoutGroupCustomItem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Advanced layouts

- [NSCollectionLayoutGroupCustomItemProvider](nscollectionlayoutgroupcustomitemprovider.md): A closure that creates and returns each of the custom group’s items.
