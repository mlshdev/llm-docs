> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityerror-swift.struct/code/cancelled](https://developer.apple.com/documentation/passkit/pkidentityerror-swift.struct/code/cancelled)

# PKIdentityError.Code.cancelled (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

An error that indicates the user cancels the presented sheet.

## Declaration

```swift
case cancelled
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../../requesting-identity-data-from-a-wallet-pass.md)

## See Also

### Error codes

- [PKIdentityError.Code.invalidElement](invalidelement.md): An error that indicates an element the app requests isn’t valid.
- [PKIdentityError.Code.invalidNonce](invalidnonce.md): An error that indicates the number is too large or unsuitable.
- [PKIdentityError.Code.notSupported](notsupported.md): An error that indicates the request originates from a device the framework doesn’t support.
- [PKIdentityError.Code.networkUnavailable](networkunavailable.md): An error that indicates a network isn’t available.
- [PKIdentityError.Code.noElementsRequested](noelementsrequested.md): An error that indicates the elements aren’t supported.
- [PKIdentityError.Code.requestAlreadyInProgress](requestalreadyinprogress.md): An error that indicates a request is already in progress.
- [PKIdentityError.Code.unknown](unknown.md): An error that indicates an unknown error.

# PKIdentityErrorCancelled (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

An error that indicates the user cancels the presented sheet.

## Declaration

```objectivec
PKIdentityErrorCancelled
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../../requesting-identity-data-from-a-wallet-pass.md)

## See Also

### Error codes

- [PKIdentityErrorInvalidElement](invalidelement.md): An error that indicates an element the app requests isn’t valid.
- [PKIdentityErrorInvalidNonce](invalidnonce.md): An error that indicates the number is too large or unsuitable.
- [PKIdentityErrorNotSupported](notsupported.md): An error that indicates the request originates from a device the framework doesn’t support.
- [PKIdentityErrorNetworkUnavailable](networkunavailable.md): An error that indicates a network isn’t available.
- [PKIdentityErrorNoElementsRequested](noelementsrequested.md): An error that indicates the elements aren’t supported.
- [PKIdentityErrorRequestAlreadyInProgress](requestalreadyinprogress.md): An error that indicates a request is already in progress.
- [PKIdentityErrorUnknown](unknown.md): An error that indicates an unknown error.
