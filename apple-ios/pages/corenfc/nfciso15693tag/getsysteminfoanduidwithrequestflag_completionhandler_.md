> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/getsysteminfoanduidwithrequestflag:completionhandler:](https://developer.apple.com/documentation/corenfc/nfciso15693tag/getsysteminfoanduidwithrequestflag:completionhandler:)

# getSystemInfoAndUIDWithRequestFlag:completionHandler:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
- (void) getSystemInfoAndUIDWithRequestFlag:(NFCISO15693RequestFlag) flags completionHandler:(void (^)(NSData *uid, NSInteger dsfid, NSInteger afi, NSInteger blockSize, NSInteger blockCount, NSInteger icReference, NSError *error)) completionHandler;
```
