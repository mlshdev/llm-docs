> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbatterror-swift.struct](https://developer.apple.com/documentation/corebluetooth/cbatterror-swift.struct)

# CBATTError

**Framework:** Core Bluetooth  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

An error that Core Bluetooth returns while using Attribute Protocol (ATT).

## Declaration

```swift
struct CBATTError
```

## Topics

### Error Codes

- [success](cbatterror-swift.struct/success.md): The ATT command or request successfully completed.
- [invalidHandle](cbatterror-swift.struct/invalidhandle.md): The attribute handle is invalid on this peripheral.
- [readNotPermitted](cbatterror-swift.struct/readnotpermitted.md): The permissions prohibit reading the attribute’s value.
- [writeNotPermitted](cbatterror-swift.struct/writenotpermitted.md): The permissions prohibit writing the attribute’s value.
- [invalidPdu](cbatterror-swift.struct/invalidpdu.md): The attribute Protocol Data Unit (PDU) is invalid.
- [insufficientAuthentication](cbatterror-swift.struct/insufficientauthentication.md): Reading or writing the attribute’s value failed for lack of authentication.
- [requestNotSupported](cbatterror-swift.struct/requestnotsupported.md): The attribute server doesn’t support the request received from the client.
- [invalidOffset](cbatterror-swift.struct/invalidoffset.md): The specified offset value was past the end of the attribute’s value.
- [insufficientAuthorization](cbatterror-swift.struct/insufficientauthorization.md): Reading or writing the attribute’s value failed for lack of authorization.
- [prepareQueueFull](cbatterror-swift.struct/preparequeuefull.md): The prepare queue is full, as a result of there being too many write requests in the queue.
- [attributeNotFound](cbatterror-swift.struct/attributenotfound.md): The attribute wasn’t found within the specified attribute handle range.
- [attributeNotLong](cbatterror-swift.struct/attributenotlong.md): The ATT read blob request can’t read or write the attribute.
- [insufficientEncryptionKeySize](cbatterror-swift.struct/insufficientencryptionkeysize.md): The encryption key size used for encrypting this link is insufficient.
- [invalidAttributeValueLength](cbatterror-swift.struct/invalidattributevaluelength.md): The length of the attribute’s value is invalid for the intended operation.
- [unlikelyError](cbatterror-swift.struct/unlikelyerror.md): The ATT request encountered an unlikely error and wasn’t completed.
- [insufficientEncryption](cbatterror-swift.struct/insufficientencryption.md): Reading or writing the attribute’s value failed for lack of encryption.
- [unsupportedGroupType](cbatterror-swift.struct/unsupportedgrouptype.md): The attribute type isn’t a supported grouping attribute as defined by a higher-layer specification.
- [insufficientResources](cbatterror-swift.struct/insufficientresources.md): Resources are insufficient to complete the ATT request.

### Enumerations

- [CBATTError.Code](cbatterror-swift.struct/code.md): The possible errors returned by a GATT server (a remote peripheral) during Bluetooth low energy ATT transactions.

### Type Properties

- [errorDomain](cbatterror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [CBError](cberror-swift.struct.md): An error that Core Bluetooth returns during Bluetooth transactions.
- [CBErrorDomain](cberrordomain.md): The domain for Core Bluetooth errors.
- [CBError.Code](cberror-swift.struct/code.md): The codes for errors that Core Bluetooth returns during Bluetooth transactions.
- [CBATTErrorDomain](cbatterrordomain.md): The domain for Core Bluetooth ATT errors.
- [CBATTError.Code](cbatterror-swift.struct/code.md): The possible errors returned by a GATT server (a remote peripheral) during Bluetooth low energy ATT transactions.
