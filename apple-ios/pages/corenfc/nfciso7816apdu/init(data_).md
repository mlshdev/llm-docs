> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816apdu/init(data:)](https://developer.apple.com/documentation/corenfc/nfciso7816apdu/init(data:))

# init(data:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates an APDU object with the data buffer containing the full APDU.

## Declaration

```swift
init?(data: Data)
```

## Parameters

- `data`: A data buffer containing the full APDU.

<a id="return-value"></a>

## Return Value

A newly initialized APDU object.

## See Also

### Creating an APDU Object

- [init(instructionClass:instructionCode:p1Parameter:p2Parameter:data:expectedResponseLength:)](init%28instructionclass_instructioncode_p1parameter_p2parameter_data_expectedresponselength_%29.md): Creates an APDU object with the instruction class and code, parameter bytes, and expected response length.

# initWithData: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates an APDU object with the data buffer containing the full APDU.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

## Parameters

- `data`: A data buffer containing the full APDU.

<a id="return-value"></a>

## Return Value

A newly initialized APDU object.

## See Also

### Creating an APDU Object

- [initWithInstructionClass:instructionCode:p1Parameter:p2Parameter:data:expectedResponseLength:](init%28instructionclass_instructioncode_p1parameter_p2parameter_data_expectedresponselength_%29.md): Creates an APDU object with the instruction class and code, parameter bytes, and expected response length.
