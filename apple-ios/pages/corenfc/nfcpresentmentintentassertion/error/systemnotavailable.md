> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcpresentmentintentassertion/error/systemnotavailable](https://developer.apple.com/documentation/corenfc/nfcpresentmentintentassertion/error/systemnotavailable)

# NFCPresentmentIntentAssertion.Error.systemNotAvailable

**Framework:** Core NFC  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The system is unavailable because it’s in the cool-down period.

## Declaration

```swift
case systemNotAvailable
```

<a id="Discussion"></a>

## Discussion

CoreNFC enforces a cool-down period after one [NFCPresentmentIntentAssertion](../../nfcpresentmentintentassertion.md) invalidates and before you can acquire another one. If you receive this error, wait a short time before trying to acquire a new [NFCPresentmentIntentAssertion](../../nfcpresentmentintentassertion.md).

## See Also

### Presentment intent assertion errors

- [NFCPresentmentIntentAssertion.Error.systemEligibilityFailed](systemeligibilityfailed.md): The current system isn’t eligible to use this service.
