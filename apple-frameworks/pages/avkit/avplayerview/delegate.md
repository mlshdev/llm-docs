> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerview/delegate

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
