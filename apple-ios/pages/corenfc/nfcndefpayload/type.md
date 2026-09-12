> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefpayload/type](https://developer.apple.com/documentation/corenfc/nfcndefpayload/type)

# type (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The type of the payload, as defined by the NDEF specification.

## Declaration

```swift
var type: Data { get set }
```

## Mentioned In

- [Adding Support for Background Tag Reading](../adding-support-for-background-tag-reading.md)

## See Also

### Getting Information About a Payload Record

- [identifier](identifier.md): The identifier of the payload, as defined by the NDEF specification.
- [payload](payload.md): The payload, as defined by the NDEF specification.
- [typeNameFormat](typenameformat.md): The Type Name Format field of the payload, as defined by the NDEF specification.
- [NFCTypeNameFormat](../nfctypenameformat.md): The Type Name Format values that specify the content type for the payload data in an NFC NDEF message.

# type (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The type of the payload, as defined by the NDEF specification.

## Declaration

```objectivec
@property (nonatomic, copy) NSData * type;
```

## Mentioned In

- [Adding Support for Background Tag Reading](../adding-support-for-background-tag-reading.md)

## See Also

### Getting Information About a Payload Record

- [identifier](identifier.md): The identifier of the payload, as defined by the NDEF specification.
- [payload](payload.md): The payload, as defined by the NDEF specification.
- [typeNameFormat](typenameformat.md): The Type Name Format field of the payload, as defined by the NDEF specification.
- [NFCTypeNameFormat](../nfctypenameformat.md): The Type Name Format values that specify the content type for the payload data in an NFC NDEF message.
