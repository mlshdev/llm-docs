> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefmessage/init(data:)](https://developer.apple.com/documentation/corenfc/nfcndefmessage/init(data:))

# init(data:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates an NDEF message from raw data representing the message.

## Declaration

```swift
convenience init?(data: Data)
```

## Parameters

- `data`: A data object containing the raw bytes of a complete NDEF message. The data must contain only one NDEF message, and the message must contain NDEF payloads that are valid according to the NFC Forum NDEF RTD specification.

<a id="return-value"></a>

## Return Value

An NDEF message, or `nil` when the raw data is invalid.

## See Also

### Creating an NDEF Message

- [init(records:)](init%28records_%29.md): Creates an NDEF message with the specified records.

# ndefMessageWithData: (Objective-C)

**Framework:** Core NFC  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates an NDEF message from raw data representing the message.

## Declaration

```objectivec
+ (instancetype) ndefMessageWithData:(NSData *) data;
```

## Parameters

- `data`: A data object containing the raw bytes of a complete NDEF message. The data must contain only one NDEF message, and the message must contain NDEF payloads that are valid according to the NFC Forum NDEF RTD specification.

<a id="return-value"></a>

## Return Value

An NDEF message, or `nil` when the raw data is invalid.

## See Also

### Creating an NDEF Message

- [initWithNDEFRecords:](init%28records_%29.md): Creates an NDEF message with the specified records.
