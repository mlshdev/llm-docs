> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcfelicatag/sendfelicacommand(commandpacket:completionhandler:)

# sendFeliCaCommand(commandPacket:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the FeliCa command packet data to the tag.

## Declaration

```swift
func sendFeliCaCommand(commandPacket: Data, completionHandler: @escaping @Sendable (Data, (any Error)?) -> Void)
```

```swift
func sendFeliCaCommand(commandPacket: Data) async throws -> Data
```

# sendFeliCaCommandPacket:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the FeliCa command packet data to the tag.

## Declaration

```objectivec
- (void) sendFeliCaCommandPacket:(NSData *) commandPacket completionHandler:(void (^)(NSData *responsePacket, NSError *error)) completionHandler;
```
