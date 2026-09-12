> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontroller/present(completion:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller/present(completion:))

# present(completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Presents the payment sheet modally over your app.

## Declaration

```swift
func present(completion: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func present() async -> Bool
```

## Parameters

- `completion`: A block that is called after the sheet is presented. This block is passed the following parameters:

  - **success**: A Boolean value that indicates whether the payment sheet was successfully presented. [true](https://developer.apple.com/documentation/swift/true) if the payment sheet was presented successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You are responsible for dismissing the payment sheet.

## See Also

### Handling user interactions

- [delegate](delegate.md): The controller’s delegate.
- [PKPaymentAuthorizationControllerDelegate](../pkpaymentauthorizationcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization controller.
- [dismiss(completion:)](dismiss%28completion_%29.md): Dismisses the payment sheet.

# presentWithCompletion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Presents the payment sheet modally over your app.

## Declaration

```objectivec
- (void) presentWithCompletion:(void (^)(BOOL success)) completion;
```

## Parameters

- `completion`: A block that is called after the sheet is presented. This block is passed the following parameters:

  - **success**: A Boolean value that indicates whether the payment sheet was successfully presented. [true](https://developer.apple.com/documentation/swift/true) if the payment sheet was presented successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You are responsible for dismissing the payment sheet.

## See Also

### Handling user interactions

- [delegate](delegate.md): The controller’s delegate.
- [PKPaymentAuthorizationControllerDelegate](../pkpaymentauthorizationcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization controller.
- [dismissWithCompletion:](dismiss%28completion_%29.md): Dismisses the payment sheet.
