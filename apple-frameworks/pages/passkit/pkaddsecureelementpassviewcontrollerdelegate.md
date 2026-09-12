> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpassviewcontrollerdelegate](https://developer.apple.com/documentation/passkit/pkaddsecureelementpassviewcontrollerdelegate)

# PKAddSecureElementPassViewControllerDelegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

The methods for responding to the life cycle events of a Secure Element pass.

## Declaration

```swift
protocol PKAddSecureElementPassViewControllerDelegate : NSObjectProtocol
```

## Topics

### Responding to pass addition

- [addSecureElementPassViewController(\_:didFinishAddingSecureElementPasses:error:)](pkaddsecureelementpassviewcontrollerdelegate/addsecureelementpassviewcontroller%28__didfinishaddingsecureelementpasses_error_%29.md): Tells the delegate when PassKit finishes adding one or more Secure Element passes.
- [addSecureElementPassViewController(\_:didFinishAdding:error:)](pkaddsecureelementpassviewcontrollerdelegate/addsecureelementpassviewcontroller%28__didfinishadding_error_%29.md): Deprecated. Tells the delegate when PassKit finishes adding a Secure Element pass.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to the life cycle of a pass

- [delegate](pkaddsecureelementpassviewcontroller/delegate.md): An object that acts as the view controller’s delegate.

# PKAddSecureElementPassViewControllerDelegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

The methods for responding to the life cycle events of a Secure Element pass.

## Declaration

```objectivec
@protocol PKAddSecureElementPassViewControllerDelegate <NSObject>
```

## Topics

### Responding to pass addition

- [addSecureElementPassViewController:didFinishAddingSecureElementPasses:error:](pkaddsecureelementpassviewcontrollerdelegate/addsecureelementpassviewcontroller%28__didfinishaddingsecureelementpasses_error_%29.md): Tells the delegate when PassKit finishes adding one or more Secure Element passes.
- [addSecureElementPassViewController:didFinishAddingSecureElementPass:error:](pkaddsecureelementpassviewcontrollerdelegate/addsecureelementpassviewcontroller%28__didfinishadding_error_%29.md): Deprecated. Tells the delegate when PassKit finishes adding a Secure Element pass.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to the life cycle of a pass

- [delegate](pkaddsecureelementpassviewcontroller/delegate.md): An object that acts as the view controller’s delegate.
