> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteraction/delegate](https://developer.apple.com/documentation/uikit/uicontextmenuinteraction/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

The object that provides the preview and contextual menu for your content and responds to interaction-related events.

## Declaration

```swift
weak var delegate: (any UIContextMenuInteractionDelegate)? { get }
```

## See Also

### Previewing and managing the content

- [UIContextMenuInteractionDelegate](../uicontextmenuinteractiondelegate.md): The methods for providing the set of actions to perform on your content, and for customizing the preview of that content.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

The object that provides the preview and contextual menu for your content and responds to interaction-related events.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) id<UIContextMenuInteractionDelegate> delegate;
```

## See Also

### Previewing and managing the content

- [UIContextMenuInteractionDelegate](../uicontextmenuinteractiondelegate.md): The methods for providing the set of actions to perform on your content, and for customizing the preview of that content.
