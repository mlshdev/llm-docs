> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693tag/lockdsfid(requestflags:completionhandler:)

# lockDSFID(requestFlags:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
func lockDSFID(requestFlags flags: NFCISO15693RequestFlag, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func lockDSFID(requestFlags flags: NFCISO15693RequestFlag) async throws
```

# lockDSFIDWithRequestFlag:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
- (void) lockDSFIDWithRequestFlag:(NFCISO15693RequestFlag) flags completionHandler:(void (^)(NSError *error)) completionHandler;
```
