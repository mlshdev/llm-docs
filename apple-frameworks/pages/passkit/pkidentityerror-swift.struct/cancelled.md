> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityerror-swift.struct/cancelled](https://developer.apple.com/documentation/passkit/pkidentityerror-swift.struct/cancelled)

# cancelled

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

An error that indicates the user cancels the presented sheet.

## Declaration

```swift
static var cancelled: PKIdentityError.Code { get }
```

## See Also

### Constants

- [invalidElement](invalidelement.md): An error that indicates an element the app requests isn’t valid.
- [invalidNonce](invalidnonce.md): An error that indicates the number is too large or unsuitable.
- [notSupported](notsupported.md): An error that indicates the request originates from a device the framework doesn’t support.
- [networkUnavailable](networkunavailable.md): An error that indicates a network isn’t available.
- [noElementsRequested](noelementsrequested.md): An error that indicates the elements aren’t supported.
- [requestAlreadyInProgress](requestalreadyinprogress.md): An error that indicates a request is already in progress.
- [unknown](unknown.md): An error that indicates an unknown error.
