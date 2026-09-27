> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693tag/getsysteminfoanduidwithrequestflag:completionhandler:

# getSystemInfoAndUIDWithRequestFlag:completionHandler:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
- (void) getSystemInfoAndUIDWithRequestFlag:(NFCISO15693RequestFlag) flags completionHandler:(void (^)(NSData *uid, NSInteger dsfid, NSInteger afi, NSInteger blockSize, NSInteger blockCount, NSInteger icReference, NSError *error)) completionHandler;
```
