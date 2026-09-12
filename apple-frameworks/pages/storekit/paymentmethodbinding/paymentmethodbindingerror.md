> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/paymentmethodbinding/paymentmethodbindingerror](https://developer.apple.com/documentation/storekit/paymentmethodbinding/paymentmethodbindingerror)

# PaymentMethodBinding.PaymentMethodBindingError

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

Error information for payment method binding.

## Declaration

```swift
enum PaymentMethodBindingError
```

<a id="overview"></a>

## Overview

The methods of [PaymentMethodBinding](../paymentmethodbinding.md) may return these errors, as well as the [StoreKitError.userCancelled](../storekiterror/usercancelled.md) error.

## Topics

### Getting error codes

- [PaymentMethodBinding.PaymentMethodBindingError.failed](paymentmethodbindingerror/failed.md): The initialization or binding operation failed.
- [PaymentMethodBinding.PaymentMethodBindingError.invalidPinningID](paymentmethodbindingerror/invalidpinningid.md): The in-app binding identifier is invalid or expired.
- [PaymentMethodBinding.PaymentMethodBindingError.notEligible](paymentmethodbindingerror/noteligible.md): The user isn’t eligible.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
