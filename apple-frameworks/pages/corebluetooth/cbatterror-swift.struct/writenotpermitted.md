> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbatterror-swift.struct/writenotpermitted](https://developer.apple.com/documentation/corebluetooth/cbatterror-swift.struct/writenotpermitted)

# writeNotPermitted

**Framework:** Core Bluetooth  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The permissions prohibit writing the attribute’s value.

## Declaration

```swift
static var writeNotPermitted: CBATTError.Code { get }
```

## See Also

### Error Codes

- [success](success.md): The ATT command or request successfully completed.
- [invalidHandle](invalidhandle.md): The attribute handle is invalid on this peripheral.
- [readNotPermitted](readnotpermitted.md): The permissions prohibit reading the attribute’s value.
- [invalidPdu](invalidpdu.md): The attribute Protocol Data Unit (PDU) is invalid.
- [insufficientAuthentication](insufficientauthentication.md): Reading or writing the attribute’s value failed for lack of authentication.
- [requestNotSupported](requestnotsupported.md): The attribute server doesn’t support the request received from the client.
- [invalidOffset](invalidoffset.md): The specified offset value was past the end of the attribute’s value.
- [insufficientAuthorization](insufficientauthorization.md): Reading or writing the attribute’s value failed for lack of authorization.
- [prepareQueueFull](preparequeuefull.md): The prepare queue is full, as a result of there being too many write requests in the queue.
- [attributeNotFound](attributenotfound.md): The attribute wasn’t found within the specified attribute handle range.
- [attributeNotLong](attributenotlong.md): The ATT read blob request can’t read or write the attribute.
- [insufficientEncryptionKeySize](insufficientencryptionkeysize.md): The encryption key size used for encrypting this link is insufficient.
- [invalidAttributeValueLength](invalidattributevaluelength.md): The length of the attribute’s value is invalid for the intended operation.
- [unlikelyError](unlikelyerror.md): The ATT request encountered an unlikely error and wasn’t completed.
- [insufficientEncryption](insufficientencryption.md): Reading or writing the attribute’s value failed for lack of encryption.
