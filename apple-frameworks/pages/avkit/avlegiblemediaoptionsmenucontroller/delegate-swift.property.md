> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avlegiblemediaoptionsmenucontroller/delegate-swift.property](https://developer.apple.com/documentation/avkit/avlegiblemediaoptionsmenucontroller/delegate-swift.property)

# delegate (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
weak var delegate: (any AVLegibleMediaOptionsMenuController.Delegate)? { get set }
```

<a id="discussion"></a>

## Discussion

The delegate for receiving caption preview and state change notifications.

## See Also

### Configuring a delegate

- [AVLegibleMediaOptionsMenuController.Delegate](delegate-swift.protocol.md)

# delegate (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
@property (nonatomic, weak) id<AVLegibleMediaOptionsMenuControllerDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

The delegate for receiving caption preview and state change notifications.

## See Also

### Configuring a delegate

- [AVLegibleMediaOptionsMenuControllerDelegate](delegate-swift.protocol.md)
