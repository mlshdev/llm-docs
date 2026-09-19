> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693tag/resettoready(requestflags:completionhandler:)

# resetToReady(requestFlags:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Reset To Ready command (0x26 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func resetToReady(requestFlags flags: NFCISO15693RequestFlag, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func resetToReady(requestFlags flags: NFCISO15693RequestFlag) async throws
```

# resetToReadyWithRequestFlags:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Reset To Ready command (0x26 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) resetToReadyWithRequestFlags:(NFCISO15693RequestFlag) flags completionHandler:(void (^)(NSError *error)) completionHandler;
```
