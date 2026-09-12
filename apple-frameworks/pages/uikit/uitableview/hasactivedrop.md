> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/hasactivedrop](https://developer.apple.com/documentation/uikit/uitableview/hasactivedrop)

# hasActiveDrop (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the table view is currently tracking a drop session.

## Declaration

```swift
var hasActiveDrop: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the table view is tracking a drop session.

## See Also

### Managing drop interactions

- [dropDelegate](dropdelegate.md): The delegate object that manages the dropping of content into the table view.
- [UITableViewDropDelegate](../uitableviewdropdelegate.md): The interface for handling drops in a table view.

# hasActiveDrop (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the table view is currently tracking a drop session.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasActiveDrop;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the table view is tracking a drop session.

## See Also

### Managing drop interactions

- [dropDelegate](dropdelegate.md): The delegate object that manages the dropping of content into the table view.
- [UITableViewDropDelegate](../uitableviewdropdelegate.md): The interface for handling drops in a table view.
