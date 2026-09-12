> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tkcompacttlvrecord/init(tag:value:)](https://developer.apple.com/documentation/cryptotokenkit/tkcompacttlvrecord/init(tag:value:))

# init(tag:value:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a TLV record with the specified tag and value.

## Declaration

```swift
init(tag: UInt8, value: Data)
```

## Parameters

- `tag`: The tag field of the record.
- `value`: The value field of the record.

<a id="return-value"></a>

## Return Value

A new TLV record containing the specified tag and value fields.

# initWithTag:value: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a TLV record with the specified tag and value.

## Declaration

```objectivec
- (instancetype) initWithTag:(UInt8) tag value:(NSData *) value;
```

## Parameters

- `tag`: The tag field of the record.
- `value`: The value field of the record.

<a id="return-value"></a>

## Return Value

A new TLV record containing the specified tag and value fields.
