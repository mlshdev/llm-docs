> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/paymentmethodbinding/init(id:)](https://developer.apple.com/documentation/storekit/paymentmethodbinding/init(id:))

# init(id:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

Creates the payment method binding for eligible apps and users.

## Declaration

```swift
init(id: String) async throws
```

## Parameters

- `id`: The in-app binding identifier that your server receives from the Apple server when your server initiates payment method binding.

<a id="Discussion"></a>

## Discussion

This method succeeds if the app is entitled to use this API, the `id` is valid and unexpired, and the user is eligible. Otherwise, it throws an error. See [PaymentMethodBinding.PaymentMethodBindingError](paymentmethodbindingerror.md) and [StoreKitError.userCancelled](../storekiterror/usercancelled.md) for the error information.

This method determines if the user is eligible, and requires that they’re signed in to the App Store.

> **Important**

>  This method may display a system prompt that asks users to sign in with their Apple Account. Call this method only after an explicit user action, like tapping or clicking a button.

Note that it’s possible that the system determines a user isn’t eligible after it prompts for authentication.
