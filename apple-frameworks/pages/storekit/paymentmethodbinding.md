> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/paymentmethodbinding](https://developer.apple.com/documentation/storekit/paymentmethodbinding)

# PaymentMethodBinding

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

A binding that makes payment methods available in apps for an Apple Account.

## Declaration

```swift
struct PaymentMethodBinding
```

<a id="overview"></a>

## Overview

This functionality is available only to eligible apps with server entitlements. The initializer [init(id:)](paymentmethodbinding/init%28id_%29.md) throws an error if your app doesn’t have the appropriate entitlement to use this API, or if the user isn’t eligible.

> **Important**

>  The [init(id:)](paymentmethodbinding/init%28id_%29.md) and [bind()](paymentmethodbinding/bind%28%29.md) methods may display a system prompt that asks users to authenticate with their Apple Account. Call these methods only after an explicit user action, like tapping or clicking a button.

Initialize this structure using the in-app binding identifier that your server receives from the Apple server when your server initiates payment method binding. Call the [bind()](paymentmethodbinding/bind%28%29.md) method to prompt users to confirm adding the payment method and making it their primary payment method.

## Topics

### Determining eligiblity

- [init(id:)](paymentmethodbinding/init%28id_%29.md): Creates the payment method binding for eligible apps and users.

### Creating and identifying bindings

- [id](paymentmethodbinding/id.md): The in-app binding identifier.

### Binding payment methods

- [bind()](paymentmethodbinding/bind%28%29.md): Asks the user to confirm whether to add the payment method to their Apple payment methods.

### Reading errors

- [PaymentMethodBinding.PaymentMethodBindingError](paymentmethodbinding/paymentmethodbindingerror.md): Error information for payment method binding.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
