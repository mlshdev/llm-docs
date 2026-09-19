> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/paymentmethodbinding/paymentmethodbindingerror/failed

# PaymentMethodBinding.PaymentMethodBindingError.failed

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

The initialization or binding operation failed.

## Declaration

```swift
case failed
```

<a id="Discussion"></a>

## Discussion

The methods of the [PaymentMethodBinding](../../paymentmethodbinding.md) struct can fail if the app isn’t entitled to use this API, or if other errors occur.

## See Also

### Getting error codes

- [PaymentMethodBinding.PaymentMethodBindingError.invalidPinningID](invalidpinningid.md): The in-app binding identifier is invalid or expired.
- [PaymentMethodBinding.PaymentMethodBindingError.notEligible](noteligible.md): The user isn’t eligible.
