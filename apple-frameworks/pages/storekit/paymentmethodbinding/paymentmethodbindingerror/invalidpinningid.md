> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/paymentmethodbinding/paymentmethodbindingerror/invalidpinningid

# PaymentMethodBinding.PaymentMethodBindingError.invalidPinningID

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

The in-app binding identifier is invalid or expired.

## Declaration

```swift
case invalidPinningID
```

<a id="Discussion"></a>

## Discussion

For more information about the identifier, see [id](../id.md).

## See Also

### Getting error codes

- [PaymentMethodBinding.PaymentMethodBindingError.failed](failed.md): The initialization or binding operation failed.
- [PaymentMethodBinding.PaymentMethodBindingError.notEligible](noteligible.md): The user isn’t eligible.
