> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/extendedgetmultipleblocksecuritystatus(requestflags:blockrange:resulthandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/extendedgetmultipleblocksecuritystatus(requestflags:blockrange:resulthandler:))

# extendedGetMultipleBlockSecurityStatus(requestFlags:blockRange:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func extendedGetMultipleBlockSecurityStatus(requestFlags flags: NFCISO15693RequestFlag, blockRange: NSRange, resultHandler: @escaping @Sendable (Result<NFCISO15693MultipleBlockSecurityStatus, any Error>) -> Void)
```

```swift
func extendedGetMultipleBlockSecurityStatus(requestFlags flags: NFCISO15693RequestFlag, blockRange: NSRange, resultHandler: @escaping (Result<NFCISO15693MultipleBlockSecurityStatus, any Error>) -> Void)
```
