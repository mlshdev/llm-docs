> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/txtrecordgetcount(_:_:)](https://developer.apple.com/documentation/dnssd/txtrecordgetcount(_:_:))

# TXTRecordGetCount(\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the number of keys stored in the TXT Record.

## Declaration

```swift
func TXTRecordGetCount(_ txtLen: UInt16, _ txtRecord: UnsafeRawPointer!) -> UInt16
```

## Parameters

- `txtLen`: The size of the received TXT Record.
- `txtRecord`: Pointer to the received TXT Record bytes.

<a id="return-value"></a>

## Return Value

Returns the total number of keys in the TXT Record.

<a id="Discussion"></a>

## Discussion

The count can be used with TXTRecordGetItemAtIndex() to iterate through the keys.

## See Also

### TXT Record Parsing Functions

- [DNSServiceCreateDelegateConnection](dnsservicecreatedelegateconnection.md): Create a delegate connection to the daemon allowing efficient registration of multiple individual records.
- [DNSServiceSetDispatchQueue(\_:\_:)](dnsservicesetdispatchqueue%28____%29.md): Allows you to schedule a DNSServiceRef on a serial dispatch queue for receiving asynchronous callbacks.
- [TXTRecordContainsKey(\_:\_:\_:)](txtrecordcontainskey%28______%29.md): Allows you to determine if a given TXT Record contains a specified key.
- [TXTRecordGetItemAtIndex(\_:\_:\_:\_:\_:\_:\_:)](txtrecordgetitematindex%28______________%29.md): Allows you to retrieve a key name and value pointer, given an index into a TXT Record.
- [TXTRecordGetValuePtr(\_:\_:\_:\_:)](txtrecordgetvalueptr%28________%29.md): Allows you to retrieve the value for a given key from a TXT Record.

# TXTRecordGetCount (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the number of keys stored in the TXT Record.

## Declaration

```objectivec
uint16_t TXTRecordGetCount(uint16_t txtLen, const void *txtRecord);
```

## Parameters

- `txtLen`: The size of the received TXT Record.
- `txtRecord`: Pointer to the received TXT Record bytes.

<a id="return-value"></a>

## Return Value

Returns the total number of keys in the TXT Record.

<a id="Discussion"></a>

## Discussion

The count can be used with TXTRecordGetItemAtIndex() to iterate through the keys.

## See Also

### TXT Record Parsing Functions

- [DNSServiceCreateDelegateConnection](dnsservicecreatedelegateconnection.md): Create a delegate connection to the daemon allowing efficient registration of multiple individual records.
- [DNSServiceSetDispatchQueue](dnsservicesetdispatchqueue%28____%29.md): Allows you to schedule a DNSServiceRef on a serial dispatch queue for receiving asynchronous callbacks.
- [TXTRecordContainsKey](txtrecordcontainskey%28______%29.md): Allows you to determine if a given TXT Record contains a specified key.
- [TXTRecordGetItemAtIndex](txtrecordgetitematindex%28______________%29.md): Allows you to retrieve a key name and value pointer, given an index into a TXT Record.
- [TXTRecordGetValuePtr](txtrecordgetvalueptr%28________%29.md): Allows you to retrieve the value for a given key from a TXT Record.
