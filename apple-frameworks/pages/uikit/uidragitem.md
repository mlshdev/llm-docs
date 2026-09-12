> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragitem](https://developer.apple.com/documentation/uikit/uidragitem)

# UIDragItem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A representation of an underlying data item as a person drags it from one location to another.

## Declaration

```swift
@MainActor class UIDragItem
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md)
- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md)

## Topics

### Initializing a drag item

- [init(itemProvider:)](uidragitem/init%28itemprovider_%29.md): Initializes a new drag item with a specified item provider.

### Accessing the drag item’s data

- [itemProvider](uidragitem/itemprovider.md): The item provider associated with the drag item.
- [localObject](uidragitem/localobject.md): A custom object associated with the drag item.

### Changing the drag item preview

- [previewProvider](uidragitem/previewprovider.md): A visual preview of the drag item, displayed while the user drags the item across the screen.
- [setNeedsDropPreviewUpdate()](uidragitem/setneedsdroppreviewupdate%28%29.md): Notifies the operating system that an updated drop preview is available for the item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Drag sources

- [UIDragDropSession](uidragdropsession.md): The common interface for querying the state of both drag sessions and drop sessions.
- [UIDragSession](uidragsession.md): The interface for configuring a drag session.
- [UIDragAnimating](uidraganimating.md): The interface for providing custom animation alongside the system’s lift, drop, and cancellation animations.

# UIDragItem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A representation of an underlying data item as a person drags it from one location to another.

## Declaration

```objectivec
@interface UIDragItem : NSObject
```

## Mentioned In

- [Supporting Drag and Drop in Collection Views](supporting-drag-and-drop-in-collection-views.md)
- [Supporting drag and drop in table views](supporting-drag-and-drop-in-table-views.md)

## Topics

### Initializing a drag item

- [initWithItemProvider:](uidragitem/init%28itemprovider_%29.md): Initializes a new drag item with a specified item provider.

### Accessing the drag item’s data

- [itemProvider](uidragitem/itemprovider.md): The item provider associated with the drag item.
- [localObject](uidragitem/localobject.md): A custom object associated with the drag item.

### Changing the drag item preview

- [previewProvider](uidragitem/previewprovider.md): A visual preview of the drag item, displayed while the user drags the item across the screen.
- [setNeedsDropPreviewUpdate](uidragitem/setneedsdroppreviewupdate%28%29.md): Notifies the operating system that an updated drop preview is available for the item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Drag sources

- [UIDragDropSession](uidragdropsession.md): The common interface for querying the state of both drag sessions and drop sessions.
- [UIDragSession](uidragsession.md): The interface for configuring a drag session.
- [UIDragAnimating](uidraganimating.md): The interface for providing custom animation alongside the system’s lift, drop, and cancellation animations.
