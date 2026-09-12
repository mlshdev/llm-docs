> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/delegate](https://developer.apple.com/documentation/avkit/avplayerview/delegate)

# delegate (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The player view’s delegate object.

## Declaration

```swift
weak var delegate: (any AVPlayerViewDelegate)? { get set }
```

## See Also

### Setting the delegate object

- [AVPlayerViewDelegate](../avplayerviewdelegate.md): A protocol that defines the methods to implement to participate in the player view’s full-screen presentation life cycle.

# delegate (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The player view’s delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, readwrite, nullable) id<AVPlayerViewDelegate> delegate;
```

## See Also

### Setting the delegate object

- [AVPlayerViewDelegate](../avplayerviewdelegate.md): A protocol that defines the methods to implement to participate in the player view’s full-screen presentation life cycle.
