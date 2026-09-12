> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/select(requestflags:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/select(requestflags:completionhandler:))

# select(requestFlags:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Select command (0x25 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func select(requestFlags flags: NFCISO15693RequestFlag, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func select(requestFlags flags: NFCISO15693RequestFlag) async throws
```

# selectWithRequestFlags:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Select command (0x25 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) selectWithRequestFlags:(NFCISO15693RequestFlag) flags completionHandler:(void (^)(NSError *error)) completionHandler;
```
