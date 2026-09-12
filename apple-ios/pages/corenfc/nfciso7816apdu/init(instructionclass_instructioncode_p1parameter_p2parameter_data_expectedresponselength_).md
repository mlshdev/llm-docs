> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816apdu/init(instructionclass:instructioncode:p1parameter:p2parameter:data:expectedresponselength:)](https://developer.apple.com/documentation/corenfc/nfciso7816apdu/init(instructionclass:instructioncode:p1parameter:p2parameter:data:expectedresponselength:))

# init(instructionClass:instructionCode:p1Parameter:p2Parameter:data:expectedResponseLength:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates an APDU object with the instruction class and code, parameter bytes, and expected response length.

## Declaration

```swift
init(instructionClass: UInt8, instructionCode: UInt8, p1Parameter: UInt8, p2Parameter: UInt8, data: Data, expectedResponseLength: Int)
```

## Parameters

- `instructionClass`: The instruction class (CLA) byte value.
- `instructionCode`: The instruction code (INS) byte value.
- `p1Parameter`: The P1 parameter byte value.
- `p2Parameter`: The P2 parameter byte value.
- `data`: The data to transmit. The APDU object specifies the length of the transmission data in the Lc field.
- `expectedResponseLength`: The expected response data length (Le) in bytes. The value should be one of the following:

  - A length between 1 and 65536 inclusively.
  - –1 when you expect no response data.
  - 256 to send `00` as the short Le field value, assuming the data field is less than 256 bytes.
  - 65536 to send `0000` as the extended Le field.

<a id="return-value"></a>

## Return Value

A newly initialized ISO 7816 APDU object.

<a id="Discussion"></a>

## Discussion

If your app needs more precise control of the APDU format, use [init(data:)](init%28data_%29.md) to create the APDU object.

## See Also

### Creating an APDU Object

- [init(data:)](init%28data_%29.md): Creates an APDU object with the data buffer containing the full APDU.

# initWithInstructionClass:instructionCode:p1Parameter:p2Parameter:data:expectedResponseLength: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates an APDU object with the instruction class and code, parameter bytes, and expected response length.

## Declaration

```objectivec
- (instancetype) initWithInstructionClass:(uint8_t) instructionClass instructionCode:(uint8_t) instructionCode p1Parameter:(uint8_t) p1Parameter p2Parameter:(uint8_t) p2Parameter data:(NSData *) data expectedResponseLength:(NSInteger) expectedResponseLength;
```

## Parameters

- `instructionClass`: The instruction class (CLA) byte value.
- `instructionCode`: The instruction code (INS) byte value.
- `p1Parameter`: The P1 parameter byte value.
- `p2Parameter`: The P2 parameter byte value.
- `data`: The data to transmit. The APDU object specifies the length of the transmission data in the Lc field.
- `expectedResponseLength`: The expected response data length (Le) in bytes. The value should be one of the following:

  - A length between 1 and 65536 inclusively.
  - –1 when you expect no response data.
  - 256 to send `00` as the short Le field value, assuming the data field is less than 256 bytes.
  - 65536 to send `0000` as the extended Le field.

<a id="return-value"></a>

## Return Value

A newly initialized ISO 7816 APDU object.

<a id="Discussion"></a>

## Discussion

If your app needs more precise control of the APDU format, use [initWithData:](init%28data_%29.md) to create the APDU object.

## See Also

### Creating an APDU Object

- [initWithData:](init%28data_%29.md): Creates an APDU object with the data buffer containing the full APDU.
