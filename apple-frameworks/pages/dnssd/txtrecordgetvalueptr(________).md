> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/txtrecordgetvalueptr(_:_:_:_:)](https://developer.apple.com/documentation/dnssd/txtrecordgetvalueptr(_:_:_:_:))

# TXTRecordGetValuePtr(\_:\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Allows you to retrieve the value for a given key from a TXT Record.

## Declaration

```swift
func TXTRecordGetValuePtr(_ txtLen: UInt16, _ txtRecord: UnsafeRawPointer!, _ key: UnsafePointer<CChar>!, _ valueLen: UnsafeMutablePointer<UInt8>!) -> UnsafeRawPointer!
```

## Parameters

- `txtLen`: The size of the received TXT Record
- `txtRecord`: Pointer to the received TXT Record bytes.
- `key`: A null-terminated ASCII string containing the key name.
- `valueLen`: On output, will be set to the size of the “value” data.

<a id="return-value"></a>

## Return Value

Returns NULL if the key does not exist in this TXT record, or exists with no value (to differentiate between these two cases use TXTRecordContainsKey()). Returns pointer to location within TXT Record bytes if the key exists with empty or non-empty value. For empty value, valueLen will be zero. For non-empty value, valueLen will be length of value data.

## See Also

### TXT Record Parsing Functions

- [DNSServiceCreateDelegateConnection](dnsservicecreatedelegateconnection.md): Create a delegate connection to the daemon allowing efficient registration of multiple individual records.
- [DNSServiceSetDispatchQueue(\_:\_:)](dnsservicesetdispatchqueue%28____%29.md): Allows you to schedule a DNSServiceRef on a serial dispatch queue for receiving asynchronous callbacks.
- [TXTRecordContainsKey(\_:\_:\_:)](txtrecordcontainskey%28______%29.md): Allows you to determine if a given TXT Record contains a specified key.
- [TXTRecordGetCount(\_:\_:)](txtrecordgetcount%28____%29.md): Returns the number of keys stored in the TXT Record.
- [TXTRecordGetItemAtIndex(\_:\_:\_:\_:\_:\_:\_:)](txtrecordgetitematindex%28______________%29.md): Allows you to retrieve a key name and value pointer, given an index into a TXT Record.

# TXTRecordGetValuePtr (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Allows you to retrieve the value for a given key from a TXT Record.

## Declaration

```objectivec
const void *TXTRecordGetValuePtr(uint16_t txtLen, const void *txtRecord, const char *key, uint8_t *valueLen);
```

## Parameters

- `txtLen`: The size of the received TXT Record
- `txtRecord`: Pointer to the received TXT Record bytes.
- `key`: A null-terminated ASCII string containing the key name.
- `valueLen`: On output, will be set to the size of the “value” data.

<a id="return-value"></a>

## Return Value

Returns NULL if the key does not exist in this TXT record, or exists with no value (to differentiate between these two cases use TXTRecordContainsKey()). Returns pointer to location within TXT Record bytes if the key exists with empty or non-empty value. For empty value, valueLen will be zero. For non-empty value, valueLen will be length of value data.

## See Also

### TXT Record Parsing Functions

- [DNSServiceCreateDelegateConnection](dnsservicecreatedelegateconnection.md): Create a delegate connection to the daemon allowing efficient registration of multiple individual records.
- [DNSServiceSetDispatchQueue](dnsservicesetdispatchqueue%28____%29.md): Allows you to schedule a DNSServiceRef on a serial dispatch queue for receiving asynchronous callbacks.
- [TXTRecordContainsKey](txtrecordcontainskey%28______%29.md): Allows you to determine if a given TXT Record contains a specified key.
- [TXTRecordGetCount](txtrecordgetcount%28____%29.md): Returns the number of keys stored in the TXT Record.
- [TXTRecordGetItemAtIndex](txtrecordgetitematindex%28______________%29.md): Allows you to retrieve a key name and value pointer, given an index into a TXT Record.
