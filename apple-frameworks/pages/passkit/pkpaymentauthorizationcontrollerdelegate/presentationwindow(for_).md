> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/presentationwindow(for:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/presentationwindow(for:))

# presentationWindow(for:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the window in which to present a payment authorization sheet.

## Declaration

```swift
optional func presentationWindow(for controller: PKPaymentAuthorizationController) -> UIWindow?
```

```swift
func presentationWindow(for controller: PKPaymentAuthorizationController) -> UIWindow?
```

```swift
func presentationWindow(for controller: PKPaymentAuthorizationController) -> NSWindow?
```

## Parameters

- `controller`: The controller for the payment authorization sheet.

<a id="return-value"></a>

## Return Value

The window in which to present the payment authorization sheet.

# presentationWindowForPaymentAuthorizationController: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the window in which to present a payment authorization sheet.

## Declaration

```objectivec
- (UIWindow *) presentationWindowForPaymentAuthorizationController:(PKPaymentAuthorizationController *) controller;
```

```objectivec
- (NSWindow *) presentationWindowForPaymentAuthorizationController:(PKPaymentAuthorizationController *) controller;
```

## Parameters

- `controller`: The controller for the payment authorization sheet.

<a id="return-value"></a>

## Return Value

The window in which to present the payment authorization sheet.
