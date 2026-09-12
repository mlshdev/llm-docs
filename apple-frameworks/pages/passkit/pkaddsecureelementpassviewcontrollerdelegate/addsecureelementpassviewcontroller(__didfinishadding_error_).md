> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpassviewcontrollerdelegate/addsecureelementpassviewcontroller(_:didfinishadding:error:)](https://developer.apple.com/documentation/passkit/pkaddsecureelementpassviewcontrollerdelegate/addsecureelementpassviewcontroller(_:didfinishadding:error:))

# addSecureElementPassViewController(\_:didFinishAdding:error:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ (deprecated in 14.0) · iPadOS 13.4+ (deprecated in 14.0) · Mac Catalyst 13.4+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate when PassKit finishes adding a Secure Element pass.

> Use [addSecureElementPassViewController(\_:didFinishAddingSecureElementPasses:error:)](addsecureelementpassviewcontroller%28__didfinishaddingsecureelementpasses_error_%29.md) instead.

## Declaration

```swift
optional func addSecureElementPassViewController(_ controller: PKAddSecureElementPassViewController, didFinishAdding pass: PKSecureElementPass?, error: (any Error)?)
```

## Parameters

- `controller`: The view controller that requests PassKit to add a pass.
- `pass`: If addition succeeds, the Secure Element pass that PassKit adds; otherwise, `nil`.
- `error`: If addition fails, an error that describes the failure; otherwise, `nil`. See [PKAddSecureElementPassError](../pkaddsecureelementpasserror.md) for more information.

## See Also

### Responding to pass addition

- [addSecureElementPassViewController(\_:didFinishAddingSecureElementPasses:error:)](addsecureelementpassviewcontroller%28__didfinishaddingsecureelementpasses_error_%29.md): Tells the delegate when PassKit finishes adding one or more Secure Element passes.

# addSecureElementPassViewController:didFinishAddingSecureElementPass:error: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ (deprecated in 14.0) · iPadOS 13.4+ (deprecated in 14.0) · Mac Catalyst 13.4+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate when PassKit finishes adding a Secure Element pass.

> Use [addSecureElementPassViewController:didFinishAddingSecureElementPasses:error:](addsecureelementpassviewcontroller%28__didfinishaddingsecureelementpasses_error_%29.md) instead.

## Declaration

```objectivec
- (void) addSecureElementPassViewController:(PKAddSecureElementPassViewController *) controller didFinishAddingSecureElementPass:(PKSecureElementPass *) pass error:(NSError *) error;
```

## Parameters

- `controller`: The view controller that requests PassKit to add a pass.
- `pass`: If addition succeeds, the Secure Element pass that PassKit adds; otherwise, `nil`.
- `error`: If addition fails, an error that describes the failure; otherwise, `nil`. See [PKAddSecureElementPassError](../pkaddsecureelementpasserror.md) for more information.

## See Also

### Responding to pass addition

- [addSecureElementPassViewController:didFinishAddingSecureElementPasses:error:](addsecureelementpassviewcontroller%28__didfinishaddingsecureelementpasses_error_%29.md): Tells the delegate when PassKit finishes adding one or more Secure Element passes.
