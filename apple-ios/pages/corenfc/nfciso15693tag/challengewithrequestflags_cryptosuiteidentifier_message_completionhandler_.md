> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693tag/challengewithrequestflags:cryptosuiteidentifier:message:completionhandler:

# challengeWithRequestFlags:cryptoSuiteIdentifier:message:completionHandler:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
- (void) challengeWithRequestFlags:(NFCISO15693RequestFlag) flags cryptoSuiteIdentifier:(NSInteger) cryptoSuiteIdentifier message:(NSData *) message completionHandler:(void (^)(NSError *error)) completionHandler;
```
