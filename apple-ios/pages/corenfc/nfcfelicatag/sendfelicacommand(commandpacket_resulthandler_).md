> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/sendfelicacommand(commandpacket:resulthandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/sendfelicacommand(commandpacket:resulthandler:))

# sendFeliCaCommand(commandPacket:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func sendFeliCaCommand(commandPacket: Data, resultHandler: @escaping @Sendable (Result<Data, any Error>) -> Void)
```

```swift
func sendFeliCaCommand(commandPacket: Data, resultHandler: @escaping (Result<Data, any Error>) -> Void)
```
