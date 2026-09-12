> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbatterror-swift.struct/code](https://developer.apple.com/documentation/corebluetooth/cbatterror-swift.struct/code)

# CBATTError.Code (Swift)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The possible errors returned by a GATT server (a remote peripheral) during Bluetooth low energy ATT transactions.

## Declaration

```swift
enum Code
```

<a id="overview"></a>

## Overview

These error constants derive from the Bluetooth ATT error codes, defined in the Bluetooth 4.0 specification. For more information, see the Bluetooth 4.0 specification, Volume 3, Part F, Section 3.4.1.1.

## Topics

### Error Codes

- [CBATTError.Code.success](code/success.md): The ATT command or request successfully completed.
- [CBATTError.Code.invalidHandle](code/invalidhandle.md): The attribute handle is invalid on this peripheral.
- [CBATTError.Code.readNotPermitted](code/readnotpermitted.md): The permissions prohibit reading the attribute’s value.
- [CBATTError.Code.writeNotPermitted](code/writenotpermitted.md): The permissions prohibit writing the attribute’s value.
- [CBATTError.Code.invalidPdu](code/invalidpdu.md): The attribute Protocol Data Unit (PDU) is invalid.
- [CBATTError.Code.insufficientAuthentication](code/insufficientauthentication.md): Reading or writing the attribute’s value failed for lack of authentication.
- [CBATTError.Code.requestNotSupported](code/requestnotsupported.md): The attribute server doesn’t support the request received from the client.
- [CBATTError.Code.invalidOffset](code/invalidoffset.md): The specified offset value was past the end of the attribute’s value.
- [CBATTError.Code.insufficientAuthorization](code/insufficientauthorization.md): Reading or writing the attribute’s value failed for lack of authorization.
- [CBATTError.Code.prepareQueueFull](code/preparequeuefull.md): The prepare queue is full, as a result of there being too many write requests in the queue.
- [CBATTError.Code.attributeNotFound](code/attributenotfound.md): The attribute wasn’t found within the specified attribute handle range.
- [CBATTError.Code.attributeNotLong](code/attributenotlong.md): The ATT read blob request can’t read or write the attribute.
- [CBATTError.Code.insufficientEncryptionKeySize](code/insufficientencryptionkeysize.md): The encryption key size used for encrypting this link is insufficient.
- [CBATTError.Code.invalidAttributeValueLength](code/invalidattributevaluelength.md): The length of the attribute’s value is invalid for the intended operation.
- [CBATTError.Code.unlikelyError](code/unlikelyerror.md): The ATT request encountered an unlikely error and wasn’t completed.
- [CBATTError.Code.insufficientEncryption](code/insufficientencryption.md): Reading or writing the attribute’s value failed for lack of encryption.
- [CBATTError.Code.unsupportedGroupType](code/unsupportedgrouptype.md): The attribute type isn’t a supported grouping attribute as defined by a higher-layer specification.
- [CBATTError.Code.insufficientResources](code/insufficientresources.md): Resources are insufficient to complete the ATT request.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [CBError](../cberror-swift.struct.md): An error that Core Bluetooth returns during Bluetooth transactions.
- [CBErrorDomain](../cberrordomain.md): The domain for Core Bluetooth errors.
- [CBError.Code](../cberror-swift.struct/code.md): The codes for errors that Core Bluetooth returns during Bluetooth transactions.
- [CBATTError](../cbatterror-swift.struct.md): An error that Core Bluetooth returns while using Attribute Protocol (ATT).
- [CBATTErrorDomain](../cbatterrordomain.md): The domain for Core Bluetooth ATT errors.
- [CBATTError](../cbatterror-swift.struct.md): An error that Core Bluetooth returns while using Attribute Protocol (ATT).

# CBATTError (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The possible errors returned by a GATT server (a remote peripheral) during Bluetooth low energy ATT transactions.

## Declaration

```objectivec
enum CBATTError : NSInteger;
```

<a id="overview"></a>

## Overview

These error constants derive from the Bluetooth ATT error codes, defined in the Bluetooth 4.0 specification. For more information, see the Bluetooth 4.0 specification, Volume 3, Part F, Section 3.4.1.1.

## Topics

### Error Codes

- [CBATTErrorSuccess](code/success.md): The ATT command or request successfully completed.
- [CBATTErrorInvalidHandle](code/invalidhandle.md): The attribute handle is invalid on this peripheral.
- [CBATTErrorReadNotPermitted](code/readnotpermitted.md): The permissions prohibit reading the attribute’s value.
- [CBATTErrorWriteNotPermitted](code/writenotpermitted.md): The permissions prohibit writing the attribute’s value.
- [CBATTErrorInvalidPdu](code/invalidpdu.md): The attribute Protocol Data Unit (PDU) is invalid.
- [CBATTErrorInsufficientAuthentication](code/insufficientauthentication.md): Reading or writing the attribute’s value failed for lack of authentication.
- [CBATTErrorRequestNotSupported](code/requestnotsupported.md): The attribute server doesn’t support the request received from the client.
- [CBATTErrorInvalidOffset](code/invalidoffset.md): The specified offset value was past the end of the attribute’s value.
- [CBATTErrorInsufficientAuthorization](code/insufficientauthorization.md): Reading or writing the attribute’s value failed for lack of authorization.
- [CBATTErrorPrepareQueueFull](code/preparequeuefull.md): The prepare queue is full, as a result of there being too many write requests in the queue.
- [CBATTErrorAttributeNotFound](code/attributenotfound.md): The attribute wasn’t found within the specified attribute handle range.
- [CBATTErrorAttributeNotLong](code/attributenotlong.md): The ATT read blob request can’t read or write the attribute.
- [CBATTErrorInsufficientEncryptionKeySize](code/insufficientencryptionkeysize.md): The encryption key size used for encrypting this link is insufficient.
- [CBATTErrorInvalidAttributeValueLength](code/invalidattributevaluelength.md): The length of the attribute’s value is invalid for the intended operation.
- [CBATTErrorUnlikelyError](code/unlikelyerror.md): The ATT request encountered an unlikely error and wasn’t completed.
- [CBATTErrorInsufficientEncryption](code/insufficientencryption.md): Reading or writing the attribute’s value failed for lack of encryption.
- [CBATTErrorUnsupportedGroupType](code/unsupportedgrouptype.md): The attribute type isn’t a supported grouping attribute as defined by a higher-layer specification.
- [CBATTErrorInsufficientResources](code/insufficientresources.md): Resources are insufficient to complete the ATT request.

## See Also

### Errors

- [CBErrorDomain](../cberrordomain.md): The domain for Core Bluetooth errors.
- [CBError](../cberror-swift.struct/code.md): The codes for errors that Core Bluetooth returns during Bluetooth transactions.
- [CBATTErrorDomain](../cbatterrordomain.md): The domain for Core Bluetooth ATT errors.
