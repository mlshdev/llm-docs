> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/lockdfsid(requestflags:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/lockdfsid(requestflags:completionhandler:))

# lockDFSID(requestFlags:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Sends the Lock DSFID command (0x2A command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func lockDFSID(requestFlags flags: NFCISO15693RequestFlag, completionHandler: @escaping ((any Error)?) -> Void)
```

## See Also

### Sending Data Storage Format Identifier Commands

- [writeDSFID(requestFlags:dsfid:completionHandler:)](writedsfid%28requestflags_dsfid_completionhandler_%29.md): Sends the Write DSFID command (0x29 command code), as defined in the ISO 15693-3 specification, to the tag.

# lockDFSIDWithRequestFlag:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Sends the Lock DSFID command (0x2A command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) lockDFSIDWithRequestFlag:(NFCISO15693RequestFlag) flags completionHandler:(void (^)(NSError *error)) completionHandler;
```

## See Also

### Sending Data Storage Format Identifier Commands

- [writeDSFIDWithRequestFlag:dsfid:completionHandler:](writedsfid%28requestflags_dsfid_completionhandler_%29.md): Sends the Write DSFID command (0x29 command code), as defined in the ISO 15693-3 specification, to the tag.
