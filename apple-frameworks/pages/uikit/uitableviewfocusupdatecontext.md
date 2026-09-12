> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewfocusupdatecontext](https://developer.apple.com/documentation/uikit/uitableviewfocusupdatecontext)

# UITableViewFocusUpdateContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A context object that provides information relevant to a specific focus update from one view to another.

## Declaration

```swift
@MainActor class UITableViewFocusUpdateContext
```

<a id="overview"></a>

## Overview

A focus update context provides extra information that’s only relevant to focus updates involving table views. Instances of this class are ephemeral and are usually discarded after the update is finished.

## Topics

### Locating focusable items in a table view

- [previouslyFocusedIndexPath](uitableviewfocusupdatecontext/previouslyfocusedindexpath.md): Returns the index path of the cell containing the context’s previously focused view.
- [nextFocusedIndexPath](uitableviewfocusupdatecontext/nextfocusedindexpath.md): Returns the index path of the cell containing the context’s next focused view.

## Relationships

### Inherits From

- [UIFocusUpdateContext](uifocusupdatecontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Table management

- [Estimating the height of a table’s scrolling area](estimating-the-height-of-a-table-s-scrolling-area.md): Provide height estimates for your table view’s headers, footers, and rows to ensure that scrolling accurately reflects the size of your content.
- [UITableViewController](uitableviewcontroller.md): A view controller that specializes in managing a table view.
- [UITableViewDelegate](uitableviewdelegate.md): Methods for managing selections, configuring section headers and footers, deleting and reordering cells, and performing other actions in a table view.

# UITableViewFocusUpdateContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A context object that provides information relevant to a specific focus update from one view to another.

## Declaration

```objectivec
@interface UITableViewFocusUpdateContext : UIFocusUpdateContext
```

<a id="overview"></a>

## Overview

A focus update context provides extra information that’s only relevant to focus updates involving table views. Instances of this class are ephemeral and are usually discarded after the update is finished.

## Topics

### Locating focusable items in a table view

- [previouslyFocusedIndexPath](uitableviewfocusupdatecontext/previouslyfocusedindexpath.md): Returns the index path of the cell containing the context’s previously focused view.
- [nextFocusedIndexPath](uitableviewfocusupdatecontext/nextfocusedindexpath.md): Returns the index path of the cell containing the context’s next focused view.

## Relationships

### Inherits From

- [UIFocusUpdateContext](uifocusupdatecontext.md)

## See Also

### Table management

- [Estimating the height of a table’s scrolling area](estimating-the-height-of-a-table-s-scrolling-area.md): Provide height estimates for your table view’s headers, footers, and rows to ensure that scrolling accurately reflects the size of your content.
- [UITableViewController](uitableviewcontroller.md): A view controller that specializes in managing a table view.
- [UITableViewDelegate](uitableviewdelegate.md): Methods for managing selections, configuring section headers and footers, deleting and reordering cells, and performing other actions in a table view.
