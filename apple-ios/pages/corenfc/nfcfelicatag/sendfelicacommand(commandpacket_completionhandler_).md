> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/sendfelicacommand(commandpacket:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/sendfelicacommand(commandpacket:completionhandler:))

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
