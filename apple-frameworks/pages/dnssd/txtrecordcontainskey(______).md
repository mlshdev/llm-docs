> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/txtrecordcontainskey(_:_:_:)](https://developer.apple.com/documentation/dnssd/txtrecordcontainskey(_:_:_:))

# TXTRecordContainsKey(\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Allows you to determine if a given TXT Record contains a specified key.

## Declaration

```swift
func TXTRecordContainsKey(_ txtLen: UInt16, _ txtRecord: UnsafeRawPointer!, _ key: UnsafePointer<CChar>!) -> Int32
```

## Parameters

- `txtLen`: The size of the received TXT Record.
- `txtRecord`: Pointer to the received TXT Record bytes.
- `key`: A null-terminated ASCII string containing the key name.

<a id="return-value"></a>

## Return Value

Returns 1 if the TXT Record contains the specified key. Otherwise, it returns 0.

## See Also

### TXT Record Parsing Functions

- [DNSServiceCreateDelegateConnection](dnsservicecreatedelegateconnection.md): Create a delegate connection to the daemon allowing efficient registration of multiple individual records.
- [DNSServiceSetDispatchQueue(\_:\_:)](dnsservicesetdispatchqueue%28____%29.md): Allows you to schedule a DNSServiceRef on a serial dispatch queue for receiving asynchronous callbacks.
- [TXTRecordGetCount(\_:\_:)](txtrecordgetcount%28____%29.md): Returns the number of keys stored in the TXT Record.
- [TXTRecordGetItemAtIndex(\_:\_:\_:\_:\_:\_:\_:)](txtrecordgetitematindex%28______________%29.md): Allows you to retrieve a key name and value pointer, given an index into a TXT Record.
- [TXTRecordGetValuePtr(\_:\_:\_:\_:)](txtrecordgetvalueptr%28________%29.md): Allows you to retrieve the value for a given key from a TXT Record.

# TXTRecordContainsKey (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Allows you to determine if a given TXT Record contains a specified key.

## Declaration

```objectivec
int TXTRecordContainsKey(uint16_t txtLen, const void *txtRecord, const char *key);
```

## Parameters

- `txtLen`: The size of the received TXT Record.
- `txtRecord`: Pointer to the received TXT Record bytes.
- `key`: A null-terminated ASCII string containing the key name.

<a id="return-value"></a>

## Return Value

Returns 1 if the TXT Record contains the specified key. Otherwise, it returns 0.

## See Also

### TXT Record Parsing Functions

- [DNSServiceCreateDelegateConnection](dnsservicecreatedelegateconnection.md): Create a delegate connection to the daemon allowing efficient registration of multiple individual records.
- [DNSServiceSetDispatchQueue](dnsservicesetdispatchqueue%28____%29.md): Allows you to schedule a DNSServiceRef on a serial dispatch queue for receiving asynchronous callbacks.
- [TXTRecordGetCount](txtrecordgetcount%28____%29.md): Returns the number of keys stored in the TXT Record.
- [TXTRecordGetItemAtIndex](txtrecordgetitematindex%28______________%29.md): Allows you to retrieve a key name and value pointer, given an index into a TXT Record.
- [TXTRecordGetValuePtr](txtrecordgetvalueptr%28________%29.md): Allows you to retrieve the value for a given key from a TXT Record.
