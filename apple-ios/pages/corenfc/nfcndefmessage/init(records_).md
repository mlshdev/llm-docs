> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcndefmessage/init(records:)

# init(records:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates an NDEF message with the specified records.

## Declaration

```swift
init(records: [NFCNDEFPayload])
```

## Parameters

- `records`: An array of payload objects for the message. To create an empty message, pass in an empty array.

<a id="return-value"></a>

## Return Value

A newly initialized NDEF message object.

## See Also

### Creating an NDEF Message

- [init(data:)](init%28data_%29.md): Creates an NDEF message from raw data representing the message.

# initWithNDEFRecords: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates an NDEF message with the specified records.

## Declaration

```objectivec
- (instancetype) initWithNDEFRecords:(NSArray<NFCNDEFPayload *> *) records;
```

## Parameters

- `records`: An array of payload objects for the message. To create an empty message, pass in an empty array.

<a id="return-value"></a>

## Return Value

A newly initialized NDEF message object.

## See Also

### Creating an NDEF Message

- [ndefMessageWithData:](init%28data_%29.md): Creates an NDEF message from raw data representing the message.
