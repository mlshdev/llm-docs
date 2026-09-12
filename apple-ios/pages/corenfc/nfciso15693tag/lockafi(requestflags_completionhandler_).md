> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/lockafi(requestflags:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/lockafi(requestflags:completionhandler:))

# lockAFI(requestFlags:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Lock AFI command (0x28 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func lockAFI(requestFlags flags: NFCISO15693RequestFlag, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func lockAFI(requestFlags flags: NFCISO15693RequestFlag) async throws
```

## See Also

### Sending Application Family Identifier Commands

- [writeAFI(requestFlags:afi:completionHandler:)](writeafi%28requestflags_afi_completionhandler_%29.md): Sends the Write AFI command (0x27 command code), as defined in the ISO 15693-3 specification, to the tag.

# lockAFIWithRequestFlag:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Lock AFI command (0x28 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) lockAFIWithRequestFlag:(NFCISO15693RequestFlag) flags completionHandler:(void (^)(NSError *error)) completionHandler;
```

## See Also

### Sending Application Family Identifier Commands

- [writeAFIWithRequestFlag:afi:completionHandler:](writeafi%28requestflags_afi_completionhandler_%29.md): Sends the Write AFI command (0x27 command code), as defined in the ISO 15693-3 specification, to the tag.
