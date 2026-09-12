> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassesviewcontroller/delegate](https://developer.apple.com/documentation/passkit/pkaddpassesviewcontroller/delegate)

# delegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The view controller’s delegate.

## Declaration

```swift
weak var delegate: (any PKAddPassesViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

For information about the protocol that the delegate must implement, see [PKAddPassesViewControllerDelegate](../pkaddpassesviewcontrollerdelegate.md).

## See Also

### Adding passes

- [PKAddPassesViewControllerDelegate](../pkaddpassesviewcontrollerdelegate.md): Methods that an add-passes view controller’s delegate implements.

# delegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The view controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<PKAddPassesViewControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

For information about the protocol that the delegate must implement, see [PKAddPassesViewControllerDelegate](../pkaddpassesviewcontrollerdelegate.md).

## See Also

### Adding passes

- [PKAddPassesViewControllerDelegate](../pkaddpassesviewcontrollerdelegate.md): Methods that an add-passes view controller’s delegate implements.
