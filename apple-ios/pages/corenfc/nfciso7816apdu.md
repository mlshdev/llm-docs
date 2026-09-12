> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816apdu](https://developer.apple.com/documentation/corenfc/nfciso7816apdu)

# NFCISO7816APDU (Swift)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An object representing an ISO 7816 application protocol data unit (APDU).

## Declaration

```swift
class NFCISO7816APDU
```

## Topics

### Creating an APDU Object

- [init(instructionClass:instructionCode:p1Parameter:p2Parameter:data:expectedResponseLength:)](nfciso7816apdu/init%28instructionclass_instructioncode_p1parameter_p2parameter_data_expectedresponselength_%29.md): Creates an APDU object with the instruction class and code, parameter bytes, and expected response length.
- [init(data:)](nfciso7816apdu/init%28data_%29.md): Creates an APDU object with the data buffer containing the full APDU.

### Getting the Instruction Bytes

- [instructionClass](nfciso7816apdu/instructionclass.md): The value of the instruction class (CLA) byte.
- [instructionCode](nfciso7816apdu/instructioncode.md): The value of the instruction code (INS) byte.

### Get the Parameter Bytes

- [p1Parameter](nfciso7816apdu/p1parameter.md): The value of the P1 parameter byte.
- [p2Parameter](nfciso7816apdu/p2parameter.md): The value of the P2 parameter byte.

### Getting the APDU Data

- [data](nfciso7816apdu/data.md): The data to transmit.

### Getting the Expected Response Length

- [expectedResponseLength](nfciso7816apdu/expectedresponselength.md): The expected response data length (Le) in bytes.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Sending a Command

- [sendCommand(apdu:resultHandler:)](nfciso7816tag/sendcommand%28apdu_resulthandler_%29.md): Sends an application protocol data unit (APDU) to the tag and receives a response APDU.
- [sendCommand(apdu:completionHandler:)](nfciso7816tag/sendcommand%28apdu_completionhandler_%29.md): Sends an application protocol data unit (APDU) to the tag and receives a response APDU.
- [NFCISO7816ResponseAPDU](nfciso7816responseapdu.md): An object containing the response from the tag.

# NFCISO7816APDU (Objective-C)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An object representing an ISO 7816 application protocol data unit (APDU).

## Declaration

```objectivec
@interface NFCISO7816APDU : NSObject
```

## Topics

### Creating an APDU Object

- [initWithInstructionClass:instructionCode:p1Parameter:p2Parameter:data:expectedResponseLength:](nfciso7816apdu/init%28instructionclass_instructioncode_p1parameter_p2parameter_data_expectedresponselength_%29.md): Creates an APDU object with the instruction class and code, parameter bytes, and expected response length.
- [initWithData:](nfciso7816apdu/init%28data_%29.md): Creates an APDU object with the data buffer containing the full APDU.

### Getting the Instruction Bytes

- [instructionClass](nfciso7816apdu/instructionclass.md): The value of the instruction class (CLA) byte.
- [instructionCode](nfciso7816apdu/instructioncode.md): The value of the instruction code (INS) byte.

### Get the Parameter Bytes

- [p1Parameter](nfciso7816apdu/p1parameter.md): The value of the P1 parameter byte.
- [p2Parameter](nfciso7816apdu/p2parameter.md): The value of the P2 parameter byte.

### Getting the APDU Data

- [data](nfciso7816apdu/data.md): The data to transmit.

### Getting the Expected Response Length

- [expectedResponseLength](nfciso7816apdu/expectedresponselength.md): The expected response data length (Le) in bytes.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Sending a Command

- [sendCommandAPDU:completionHandler:](nfciso7816tag/sendcommand%28apdu_completionhandler_%29.md): Sends an application protocol data unit (APDU) to the tag and receives a response APDU.
