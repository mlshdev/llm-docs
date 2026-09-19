> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekitui/addordertowalletbutton/init(signedarchive:oncompletion:)

# init(signedArchive:onCompletion:)

**Framework:** FinanceKitUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Returns an initialized Add to Order Button.

## Declaration

```swift
@MainActor @preconcurrency init(signedArchive: Data, onCompletion: @escaping (Result<FinanceStore.SaveOrderResult, any Error>) -> Void)
```
