> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/challenge(requestflags:cryptosuiteidentifier:message:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/challenge(requestflags:cryptosuiteidentifier:message:completionhandler:))

# challenge(requestFlags:cryptoSuiteIdentifier:message:completionHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func challenge(requestFlags flags: NFCISO15693RequestFlag, cryptoSuiteIdentifier: Int, message: Data, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func challenge(requestFlags flags: NFCISO15693RequestFlag, cryptoSuiteIdentifier: Int, message: Data, completionHandler: @escaping ((any Error)?) -> Void)
```
