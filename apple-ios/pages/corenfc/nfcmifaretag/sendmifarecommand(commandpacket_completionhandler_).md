> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcmifaretag/sendmifarecommand(commandpacket:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcmifaretag/sendmifarecommand(commandpacket:completionhandler:))

# sendMiFareCommand(commandPacket:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends a native MIFARE command to the tag.

## Declaration

```swift
func sendMiFareCommand(commandPacket command: Data, completionHandler: @escaping @Sendable (Data, (any Error)?) -> Void)
```

```swift
func sendMiFareCommand(commandPacket command: Data) async throws -> Data
```

## Parameters

- `command`: A MIFARE command. For [NFCMiFareFamily.ultralight](../nfcmifarefamily/ultralight.md) commands, you must calculate a 2-byte CRC value and append it to the end of the `command` data.
- `completionHandler`: A handler that the reader session invokes after the operation completes. The session calls `completionHandler` on the dispatch queue that you provided when creating the [NFCTagReaderSession](../nfctagreadersession.md) object.

  The handler has the following parameters:

  - **response**: An [NSData](https://developer.apple.com/documentation/foundation/nsdata) object containing the tag’s response data for the command.
  - **error**: `nil` when the operation is successful; otherwise, an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating that a problem occurred while communicating with the tag.

<a id="Discussion"></a>

## Discussion

Use this method to send commands to tags that are from the [NFCMiFareFamily.ultralight](../nfcmifarefamily/ultralight.md), [NFCMiFareFamily.plus](../nfcmifarefamily/plus.md), and [NFCMiFareFamily.desfire](../nfcmifarefamily/desfire.md) product families.

This method supports command chaining, passing the full response composed of the individual fragments to the `completionHandler`.

> **Note**

>  This method doesn’t support the Crypto1 protocol.

## See Also

### Sending Commands

- [sendMiFareISO7816Command(\_:completionHandler:)](sendmifareiso7816command%28__completionhandler_%29.md): Sends an ISO 7816 command APDU to the tag and receives a response APDU.

# sendMiFareCommand:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends a native MIFARE command to the tag.

## Declaration

```objectivec
- (void) sendMiFareCommand:(NSData *) command completionHandler:(void (^)(NSData *response, NSError *error)) completionHandler;
```

## Parameters

- `command`: A MIFARE command. For [NFCMiFareUltralight](../nfcmifarefamily/ultralight.md) commands, you must calculate a 2-byte CRC value and append it to the end of the `command` data.
- `completionHandler`: A handler that the reader session invokes after the operation completes. The session calls `completionHandler` on the dispatch queue that you provided when creating the [NFCTagReaderSession](../nfctagreadersession.md) object.

  The handler has the following parameters:

  - **response**: An [NSData](https://developer.apple.com/documentation/foundation/nsdata) object containing the tag’s response data for the command.
  - **error**: `nil` when the operation is successful; otherwise, an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating that a problem occurred while communicating with the tag.

<a id="Discussion"></a>

## Discussion

Use this method to send commands to tags that are from the [NFCMiFareUltralight](../nfcmifarefamily/ultralight.md), [NFCMiFarePlus](../nfcmifarefamily/plus.md), and [NFCMiFareDESFire](../nfcmifarefamily/desfire.md) product families.

This method supports command chaining, passing the full response composed of the individual fragments to the `completionHandler`.

> **Note**

>  This method doesn’t support the Crypto1 protocol.

## See Also

### Sending Commands

- [sendMiFareISO7816Command:completionHandler:](sendmifareiso7816command%28__completionhandler_%29.md): Sends an ISO 7816 command APDU to the tag and receives a response APDU.
