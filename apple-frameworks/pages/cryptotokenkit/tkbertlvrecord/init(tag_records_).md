> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tkbertlvrecord/init(tag:records:)](https://developer.apple.com/documentation/cryptotokenkit/tkbertlvrecord/init(tag:records:))

# init(tag:records:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a BER-TLV record with the specified tag and an array of TLV subrecords.

## Declaration

```swift
init(tag: TKTLVTag, records: [TKTLVRecord])
```

## Parameters

- `tag`: The tag field of the record.
- `records`: The TLV subrecords of the record.

<a id="return-value"></a>

## Return Value

A new TLV record containing the specified tag field and subrecords.

## See Also

### Creating TLV Records

- [init(tag:value:)](init%28tag_value_%29.md): Initializes a BER-TLV record with the specified tag and value.
- [TKTLVTag](../tktlvtag.md): The type used to identify TLV format tags.

# initWithTag:records: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a BER-TLV record with the specified tag and an array of TLV subrecords.

## Declaration

```objectivec
- (instancetype) initWithTag:(TKTLVTag) tag records:(NSArray<TKTLVRecord *> *) records;
```

## Parameters

- `tag`: The tag field of the record.
- `records`: The TLV subrecords of the record.

<a id="return-value"></a>

## Return Value

A new TLV record containing the specified tag field and subrecords.

## See Also

### Creating TLV Records

- [initWithTag:value:](init%28tag_value_%29.md): Initializes a BER-TLV record with the specified tag and value.
- [TKTLVTag](../tktlvtag.md): The type used to identify TLV format tags.
