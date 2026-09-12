> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/writeafi(requestflags:afi:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/writeafi(requestflags:afi:completionhandler:))

# writeAFI(requestFlags:afi:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Write AFI command (0x27 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func writeAFI(requestFlags flags: NFCISO15693RequestFlag, afi: UInt8, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAFI(requestFlags flags: NFCISO15693RequestFlag, afi: UInt8) async throws
```

## See Also

### Sending Application Family Identifier Commands

- [lockAFI(requestFlags:completionHandler:)](lockafi%28requestflags_completionhandler_%29.md): Sends the Lock AFI command (0x28 command code), as defined in the ISO 15693-3 specification, to the tag.

# writeAFIWithRequestFlag:afi:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Write AFI command (0x27 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) writeAFIWithRequestFlag:(NFCISO15693RequestFlag) flags afi:(uint8_t) afi completionHandler:(void (^)(NSError *error)) completionHandler;
```

## See Also

### Sending Application Family Identifier Commands

- [lockAFIWithRequestFlag:completionHandler:](lockafi%28requestflags_completionhandler_%29.md): Sends the Lock AFI command (0x28 command code), as defined in the ISO 15693-3 specification, to the tag.
