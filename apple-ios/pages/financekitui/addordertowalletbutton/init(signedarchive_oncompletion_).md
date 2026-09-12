> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekitui/addordertowalletbutton/init(signedarchive:oncompletion:)](https://developer.apple.com/documentation/financekitui/addordertowalletbutton/init(signedarchive:oncompletion:))

# init(signedArchive:onCompletion:)

**Framework:** FinanceKitUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Returns an initialized Add to Order Button.

## Declaration

```swift
@MainActor @preconcurrency init(signedArchive: Data, onCompletion: @escaping (Result<FinanceStore.SaveOrderResult, any Error>) -> Void)
```
