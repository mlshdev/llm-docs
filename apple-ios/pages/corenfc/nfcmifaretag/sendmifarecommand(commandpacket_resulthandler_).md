> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcmifaretag/sendmifarecommand(commandpacket:resulthandler:)](https://developer.apple.com/documentation/corenfc/nfcmifaretag/sendmifarecommand(commandpacket:resulthandler:))

# sendMiFareCommand(commandPacket:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func sendMiFareCommand(commandPacket command: Data, resultHandler: @escaping @Sendable (Result<Data, any Error>) -> Void)
```

```swift
func sendMiFareCommand(commandPacket command: Data, resultHandler: @escaping (Result<Data, any Error>) -> Void)
```
