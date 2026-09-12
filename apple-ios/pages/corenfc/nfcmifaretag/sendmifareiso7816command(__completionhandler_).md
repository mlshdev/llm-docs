> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcmifaretag/sendmifareiso7816command(_:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcmifaretag/sendmifareiso7816command(_:completionhandler:))

# sendMiFareISO7816Command(\_:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends an ISO 7816 command APDU to the tag and receives a response APDU.

## Declaration

```swift
func sendMiFareISO7816Command(_ apdu: NFCISO7816APDU, completionHandler: @escaping @Sendable (Data, UInt8, UInt8, (any Error)?) -> Void)
```

```swift
func sendMiFareISO7816Command(_ apdu: NFCISO7816APDU) async throws -> (Data, UInt8, UInt8)
```

## Parameters

- `apdu`: An ISO 7816-4 command APDU object.
- `completionHandler`: A handler that the reader session invokes after the operation completes. The session calls `completionHandler` on the dispatch queue that you provided when creating the [NFCTagReaderSession](../nfctagreadersession.md) object.

  The handler has the following parameters:

  - **responseData**: An [NSData](https://developer.apple.com/documentation/foundation/nsdata) object containing the APDU response.
  - **sw1**: The SW1 command-processing status byte.
  - **sw2**: The SW2 command-processing status byte.
  - **error**: `nil` when the operation is successful; otherwise, an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating that a problem occurred while communicating with the tag, or that the tag doesn’t support ISO 7816-4 commands.

<a id="Discussion"></a>

## Discussion

Use this method to send commands to tags that have a [mifareFamily](mifarefamily.md) value of either [NFCMiFareFamily.plus](../nfcmifarefamily/plus.md) or [NFCMiFareFamily.desfire](../nfcmifarefamily/desfire.md).

## Default Implementations

### NFCMiFareTag Implementations

- [sendMiFareISO7816Command(\_:)](sendmifareiso7816command%28__%29.md)

## See Also

### Sending Commands

- [sendMiFareCommand(commandPacket:completionHandler:)](sendmifarecommand%28commandpacket_completionhandler_%29.md): Sends a native MIFARE command to the tag.

# sendMiFareISO7816Command:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends an ISO 7816 command APDU to the tag and receives a response APDU.

## Declaration

```objectivec
- (void) sendMiFareISO7816Command:(NFCISO7816APDU *) apdu completionHandler:(void (^)(NSData *responseData, uint8_t sw1, uint8_t sw2, NSError *error)) completionHandler;
```

## Parameters

- `apdu`: An ISO 7816-4 command APDU object.
- `completionHandler`: A handler that the reader session invokes after the operation completes. The session calls `completionHandler` on the dispatch queue that you provided when creating the [NFCTagReaderSession](../nfctagreadersession.md) object.

  The handler has the following parameters:

  - **responseData**: An [NSData](https://developer.apple.com/documentation/foundation/nsdata) object containing the APDU response.
  - **sw1**: The SW1 command-processing status byte.
  - **sw2**: The SW2 command-processing status byte.
  - **error**: `nil` when the operation is successful; otherwise, an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating that a problem occurred while communicating with the tag, or that the tag doesn’t support ISO 7816-4 commands.

<a id="Discussion"></a>

## Discussion

Use this method to send commands to tags that have a [mifareFamily](mifarefamily.md) value of either [NFCMiFarePlus](../nfcmifarefamily/plus.md) or [NFCMiFareDESFire](../nfcmifarefamily/desfire.md).

## Default Implementations

### NFCMiFareTag Implementations

- [sendMiFareISO7816Command(\_:)](sendmifareiso7816command%28__%29.md)

## See Also

### Sending Commands

- [sendMiFareCommand:completionHandler:](sendmifarecommand%28commandpacket_completionhandler_%29.md): Sends a native MIFARE command to the tag.
