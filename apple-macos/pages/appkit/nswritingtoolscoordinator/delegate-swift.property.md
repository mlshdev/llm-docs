> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/delegate-swift.property](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/delegate-swift.property)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The object that handles Writing Tools interactions for your view.

## Declaration

```swift
weak var delegate: (any NSWritingToolsCoordinator.Delegate)? { get }
```

<a id="discussion"></a>

## Discussion

Specify this object at initialization time when creating your `NSWritingToolsCoordinator` object. The object must adopt the [NSWritingToolsCoordinator.Delegate](delegate-swift.protocol.md) protocol, and be capable of modifying your view’s text storage and refreshing the view’s layout and appearance.

## See Also

### Managing Writing Tools interactions

- [NSWritingToolsCoordinator.Delegate](delegate-swift.protocol.md): An interface that you use to manage interactions between Writing Tools and your custom text view.
- [view](view.md): The view that currently uses the writing tools coordinator.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The object that handles Writing Tools interactions for your view.

## Declaration

```objectivec
@property (weak, readonly, nullable) id<NSWritingToolsCoordinatorDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

Specify this object at initialization time when creating your `NSWritingToolsCoordinator` object. The object must adopt the [NSWritingToolsCoordinatorDelegate](delegate-swift.protocol.md) protocol, and be capable of modifying your view’s text storage and refreshing the view’s layout and appearance.

## See Also

### Managing Writing Tools interactions

- [NSWritingToolsCoordinatorDelegate](delegate-swift.protocol.md): An interface that you use to manage interactions between Writing Tools and your custom text view.
- [view](view.md): The view that currently uses the writing tools coordinator.
