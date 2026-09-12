> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/writedsfid(requestflags:dsfid:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/writedsfid(requestflags:dsfid:completionhandler:))

# writeDSFID(requestFlags:dsfid:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Write DSFID command (0x29 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func writeDSFID(requestFlags flags: NFCISO15693RequestFlag, dsfid: UInt8, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeDSFID(requestFlags flags: NFCISO15693RequestFlag, dsfid: UInt8) async throws
```

## See Also

### Sending Data Storage Format Identifier Commands

- [lockDFSID(requestFlags:completionHandler:)](lockdfsid%28requestflags_completionhandler_%29.md): Deprecated. Sends the Lock DSFID command (0x2A command code), as defined in the ISO 15693-3 specification, to the tag.

# writeDSFIDWithRequestFlag:dsfid:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Write DSFID command (0x29 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) writeDSFIDWithRequestFlag:(NFCISO15693RequestFlag) flags dsfid:(uint8_t) dsfid completionHandler:(void (^)(NSError *error)) completionHandler;
```

## See Also

### Sending Data Storage Format Identifier Commands

- [lockDFSIDWithRequestFlag:completionHandler:](lockdfsid%28requestflags_completionhandler_%29.md): Deprecated. Sends the Lock DSFID command (0x2A command code), as defined in the ISO 15693-3 specification, to the tag.
