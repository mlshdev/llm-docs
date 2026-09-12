> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewplaceholder](https://developer.apple.com/documentation/uikit/uitableviewplaceholder)

# UITableViewPlaceholder (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that contains information about a placeholder cell being inserted into a table.

## Declaration

```swift
@MainActor class UITableViewPlaceholder
```

<a id="overview"></a>

## Overview

During a drop operation, create a [UITableViewDropPlaceholder](uitableviewdropplaceholder.md) object (instead of this one) to insert placeholders into your table.

## Topics

### Creating a placeholder cell

- [init(insertionIndexPath:reuseIdentifier:rowHeight:)](uitableviewplaceholder/init%28insertionindexpath_reuseidentifier_rowheight_%29.md): Creates a placeholder object with the specified index path and cell-related information.

### Updating the cell’s content

- [cellUpdateHandler](uitableviewplaceholder/cellupdatehandler.md): The block that updates the contents of the placeholder cell.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UITableViewDropPlaceholder](uitableviewdropplaceholder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Placeholder cells

- [UITableViewDropPlaceholderContext](uitableviewdropplaceholdercontext.md): An object for tracking a placeholder cell that you added to your table during a drop operation.
- [UITableViewDropPlaceholder](uitableviewdropplaceholder.md): A placeholder cell that supports customizing the drop preview parameters.

# UITableViewPlaceholder (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that contains information about a placeholder cell being inserted into a table.

## Declaration

```objectivec
@interface UITableViewPlaceholder : NSObject
```

<a id="overview"></a>

## Overview

During a drop operation, create a [UITableViewDropPlaceholder](uitableviewdropplaceholder.md) object (instead of this one) to insert placeholders into your table.

## Topics

### Creating a placeholder cell

- [initWithInsertionIndexPath:reuseIdentifier:rowHeight:](uitableviewplaceholder/init%28insertionindexpath_reuseidentifier_rowheight_%29.md): Creates a placeholder object with the specified index path and cell-related information.

### Updating the cell’s content

- [cellUpdateHandler](uitableviewplaceholder/cellupdatehandler.md): The block that updates the contents of the placeholder cell.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UITableViewDropPlaceholder](uitableviewdropplaceholder.md)

## See Also

### Placeholder cells

- [UITableViewDropPlaceholderContext](uitableviewdropplaceholdercontext.md): An object for tracking a placeholder cell that you added to your table during a drop operation.
- [UITableViewDropPlaceholder](uitableviewdropplaceholder.md): A placeholder cell that supports customizing the drop preview parameters.
