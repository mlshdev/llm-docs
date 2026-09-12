> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/getsysteminfo(requestflags:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/getsysteminfo(requestflags:completionhandler:))

# getSystemInfo(requestFlags:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Sends the Get System Information command (0x2B command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func getSystemInfo(requestFlags flags: NFCISO15693RequestFlag, completionHandler: @escaping (Int, Int, Int, Int, Int, (any Error)?) -> Void)
```

# getSystemInfoWithRequestFlag:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Sends the Get System Information command (0x2B command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) getSystemInfoWithRequestFlag:(NFCISO15693RequestFlag) flags completionHandler:(void (^)(NSInteger dsfid, NSInteger afi, NSInteger blockSize, NSInteger blockCount, NSInteger icReference, NSError *error)) completionHandler;
```
