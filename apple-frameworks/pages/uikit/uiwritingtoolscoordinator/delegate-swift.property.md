> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/delegate-swift.property](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/delegate-swift.property)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The object that handles Writing Tools interactions for your view.

## Declaration

```swift
weak var delegate: (any UIWritingToolsCoordinator.Delegate)? { get }
```

<a id="discussion"></a>

## Discussion

Specify this object at initialization time when creating your `UIWritingToolsCoordinator` object. The object must adopt the [UIWritingToolsCoordinator.Delegate](delegate-swift.protocol.md) protocol, and be capable of modifying your view’s text storage and refreshing the view’s layout and appearance.

## See Also

### Managing Writing Tools interactions

- [UIWritingToolsCoordinator.Delegate](delegate-swift.protocol.md): An interface that you use to manage interactions between Writing Tools and your custom text view.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The object that handles Writing Tools interactions for your view.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UIWritingToolsCoordinatorDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

Specify this object at initialization time when creating your `UIWritingToolsCoordinator` object. The object must adopt the [UIWritingToolsCoordinatorDelegate](delegate-swift.protocol.md) protocol, and be capable of modifying your view’s text storage and refreshing the view’s layout and appearance.

## See Also

### Managing Writing Tools interactions

- [UIWritingToolsCoordinatorDelegate](delegate-swift.protocol.md): An interface that you use to manage interactions between Writing Tools and your custom text view.
