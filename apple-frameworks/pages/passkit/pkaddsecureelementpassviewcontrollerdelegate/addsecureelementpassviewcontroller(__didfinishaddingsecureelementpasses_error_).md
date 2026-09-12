> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpassviewcontrollerdelegate/addsecureelementpassviewcontroller(_:didfinishaddingsecureelementpasses:error:)](https://developer.apple.com/documentation/passkit/pkaddsecureelementpassviewcontrollerdelegate/addsecureelementpassviewcontroller(_:didfinishaddingsecureelementpasses:error:))

# addSecureElementPassViewController(\_:didFinishAddingSecureElementPasses:error:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Tells the delegate when PassKit finishes adding one or more Secure Element passes.

## Declaration

```swift
func addSecureElementPassViewController(_ controller: PKAddSecureElementPassViewController, didFinishAddingSecureElementPasses passes: [PKSecureElementPass]?, error: (any Error)?)
```

## Parameters

- `controller`: The view controller that requests PassKit to add passes.
- `passes`: If addition succeeds, the array of Secure Element passes that PassKit adds; otherwise, `nil`.
- `error`: If addition fails, an error that describes the failure; otherwise, `nil`. See [PKAddSecureElementPassError](../pkaddsecureelementpasserror.md) for more information.

## See Also

### Responding to pass addition

- [addSecureElementPassViewController(\_:didFinishAdding:error:)](addsecureelementpassviewcontroller%28__didfinishadding_error_%29.md): Deprecated. Tells the delegate when PassKit finishes adding a Secure Element pass.

# addSecureElementPassViewController:didFinishAddingSecureElementPasses:error: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Tells the delegate when PassKit finishes adding one or more Secure Element passes.

## Declaration

```objectivec
- (void) addSecureElementPassViewController:(PKAddSecureElementPassViewController *) controller didFinishAddingSecureElementPasses:(NSArray<PKSecureElementPass *> *) passes error:(NSError *) error;
```

## Parameters

- `controller`: The view controller that requests PassKit to add passes.
- `passes`: If addition succeeds, the array of Secure Element passes that PassKit adds; otherwise, `nil`.
- `error`: If addition fails, an error that describes the failure; otherwise, `nil`. See [PKAddSecureElementPassError](../pkaddsecureelementpasserror.md) for more information.

## See Also

### Responding to pass addition

- [addSecureElementPassViewController:didFinishAddingSecureElementPass:error:](addsecureelementpassviewcontroller%28__didfinishadding_error_%29.md): Deprecated. Tells the delegate when PassKit finishes adding a Secure Element pass.
