> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpassviewcontroller/delegate](https://developer.apple.com/documentation/passkit/pkaddsecureelementpassviewcontroller/delegate)

# delegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An object that acts as the view controller’s delegate.

## Declaration

```swift
weak var delegate: (any PKAddSecureElementPassViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [PKAddSecureElementPassViewControllerDelegate](../pkaddsecureelementpassviewcontrollerdelegate.md) protocol. The view controller doesn’t retain the delegate.

## See Also

### Responding to the life cycle of a pass

- [PKAddSecureElementPassViewControllerDelegate](../pkaddsecureelementpassviewcontrollerdelegate.md): The methods for responding to the life cycle events of a Secure Element pass.

# delegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An object that acts as the view controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<PKAddSecureElementPassViewControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [PKAddSecureElementPassViewControllerDelegate](../pkaddsecureelementpassviewcontrollerdelegate.md) protocol. The view controller doesn’t retain the delegate.

## See Also

### Responding to the life cycle of a pass

- [PKAddSecureElementPassViewControllerDelegate](../pkaddsecureelementpassviewcontrollerdelegate.md): The methods for responding to the life cycle events of a Secure Element pass.
