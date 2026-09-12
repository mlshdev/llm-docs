> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/delegate](https://developer.apple.com/documentation/storekit/skoverlay/delegate)

# delegate (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The overlay’s delegate.

## Declaration

```swift
weak var delegate: (any SKOverlayDelegate)? { get set }
```

## See Also

### Setting a delegate

- [SKOverlayDelegate](../skoverlaydelegate.md): Methods for responding to the overlay’s appearance, dismissal, or failure to load.

# delegate (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The overlay’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<SKOverlayDelegate> delegate;
```

## See Also

### Setting a delegate

- [SKOverlayDelegate](../skoverlaydelegate.md): Methods for responding to the overlay’s appearance, dismissal, or failure to load.
