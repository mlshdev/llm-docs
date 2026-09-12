> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/readsingleblock(requestflags:blocknumber:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/readsingleblock(requestflags:blocknumber:completionhandler:))

# readSingleBlock(requestFlags:blockNumber:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends a Read Single Block command (0x20 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func readSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: UInt8, completionHandler: @escaping @Sendable (Data, (any Error)?) -> Void)
```

```swift
func readSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: UInt8) async throws -> Data
```

## Parameters

- `flags`: The request flags. The [RequestFlagAddress](../nfciso15693requestflag/requestflagaddress.md) flag is enforced by default. However, using the [RequestFlagSelect](../nfciso15693requestflag/requestflagselect.md) flag disables the [RequestFlagAddress](../nfciso15693requestflag/requestflagaddress.md) flag.
- `blockNumber`: The number of the block to read. Blocks are numbered from 0 to 255 inclusively.
- `completionHandler`: A handler that the reader session invokes after the operation completes. The session calls completionHandler on the dispatch queue that you provided when creating the NFCTagReaderSession object.

  The handler has the following parameters:

  - **data**: A [NSData](https://developer.apple.com/documentation/foundation/nsdata) object containing the blocks of data read from the tag. If the request flags include [RequestFlagOption](../nfciso15693requestflag/requestflagoption.md), the first byte of the data contains the associated block security status.
  - **error**: `nil` when the operation is successful; otherwise, an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating that a problem occurred while communicating with the tag.

  When the tag responds with a command error, the error’s [userInfo](https://developer.apple.com/documentation/foundation/nserror/userinfo) directory contains the [NFCISO15693TagResponseErrorKey](../nfciso15693tagresponseerrorkey.md) and the error’s [code](https://developer.apple.com/documentation/foundation/nserror/code) property has a value defined in the ISO15693-3 specification.

<a id="Discussion"></a>

## Discussion

This method sends the tag’s [identifier](identifier.md) with the command.

## See Also

### Sending Single Block Commands

- [writeSingleBlock(requestFlags:blockNumber:dataBlock:completionHandler:)](writesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Write Single Block command (0x21 command code), as defined in the ISO 15693-3 specification, to the tag.
- [lockBlock(requestFlags:blockNumber:completionHandler:)](lockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Lock Block command (0x22 command code), as defined in the ISO 15693-3 specification, to the tag.

# readSingleBlockWithRequestFlags:blockNumber:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends a Read Single Block command (0x20 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) readSingleBlockWithRequestFlags:(NFCISO15693RequestFlag) flags blockNumber:(uint8_t) blockNumber completionHandler:(void (^)(NSData *data, NSError *error)) completionHandler;
```

## Parameters

- `flags`: The request flags. The [RequestFlagAddress](../nfciso15693requestflag/requestflagaddress.md) flag is enforced by default. However, using the [RequestFlagSelect](../nfciso15693requestflag/requestflagselect.md) flag disables the [RequestFlagAddress](../nfciso15693requestflag/requestflagaddress.md) flag.
- `blockNumber`: The number of the block to read. Blocks are numbered from 0 to 255 inclusively.
- `completionHandler`: A handler that the reader session invokes after the operation completes. The session calls completionHandler on the dispatch queue that you provided when creating the NFCTagReaderSession object.

  The handler has the following parameters:

  - **data**: A [NSData](https://developer.apple.com/documentation/foundation/nsdata) object containing the blocks of data read from the tag. If the request flags include [RequestFlagOption](../nfciso15693requestflag/requestflagoption.md), the first byte of the data contains the associated block security status.
  - **error**: `nil` when the operation is successful; otherwise, an [NSError](https://developer.apple.com/documentation/foundation/nserror) object indicating that a problem occurred while communicating with the tag.

  When the tag responds with a command error, the error’s [userInfo](https://developer.apple.com/documentation/foundation/nserror/userinfo) directory contains the [NFCISO15693TagResponseErrorKey](../nfciso15693tagresponseerrorkey.md) and the error’s [code](https://developer.apple.com/documentation/foundation/nserror/code) property has a value defined in the ISO15693-3 specification.

<a id="Discussion"></a>

## Discussion

This method sends the tag’s [identifier](identifier.md) with the command.

## See Also

### Sending Single Block Commands

- [writeSingleBlockWithRequestFlags:blockNumber:dataBlock:completionHandler:](writesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Write Single Block command (0x21 command code), as defined in the ISO 15693-3 specification, to the tag.
- [lockBlockWithRequestFlags:blockNumber:completionHandler:](lockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Lock Block command (0x22 command code), as defined in the ISO 15693-3 specification, to the tag.
