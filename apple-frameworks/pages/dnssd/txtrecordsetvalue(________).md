> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/txtrecordsetvalue(_:_:_:_:)](https://developer.apple.com/documentation/dnssd/txtrecordsetvalue(_:_:_:_:))

# TXTRecordSetValue(\_:\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Adds a key (optionally with value) to a TXTRecordRef.

## Declaration

```swift
func TXTRecordSetValue(_ txtRecord: UnsafeMutablePointer<TXTRecordRef>!, _ key: UnsafePointer<CChar>!, _ valueSize: UInt8, _ value: UnsafeRawPointer!) -> DNSServiceErrorType
```

## Parameters

- `txtRecord`: A TXTRecordRef initialized by calling TXTRecordCreate().
- `key`: A null-terminated string which only contains printable ASCII values (0x20-0x7E), excluding ‘=’ (0x3D). Keys should be 9 characters or fewer (not counting the terminating null).
- `valueSize`: The size of the value.
- `value`: Any binary value. For values that represent textual data, UTF-8 is STRONGLY recommended. For values that represent textual data, valueSize should NOT include the terminating null (if any) at the end of the string. If NULL, then “key” will be added with no value. If non-NULL but valueSize is zero, then “key=” will be added with empty value.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success. Returns kDNSServiceErr_Invalid if the “key” string contains illegal characters. Returns kDNSServiceErr_NoMemory if adding this key would exceed the available storage.

<a id="Discussion"></a>

## Discussion

If the “key” already exists in the TXTRecordRef, then the current value will be replaced with the new value. Keys may exist in four states with respect to a given TXT record: - Absent (key does not appear at all) - Present with no value (“key” appears alone) - Present with empty value (“key=” appears in TXT record) - Present with non-empty value (“key=value” appears in TXT record) For more details refer to “Data Syntax for DNS-SD TXT Records” in [dns-sd.org](http://files.dns-sd.org/draft-cheshire-dnsext-dns-sd.txt)

## See Also

### TXT Record Construction Functions

- [TXTRecordCreate(\_:\_:\_:)](txtrecordcreate%28______%29.md): Creates a new empty TXTRecordRef referencing the specified storage.
- [TXTRecordDeallocate(\_:)](txtrecorddeallocate%28__%29.md): Releases resources associated with a TXT record.
- [TXTRecordGetBytesPtr(\_:)](txtrecordgetbytesptr%28__%29.md): Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.
- [TXTRecordGetLength(\_:)](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordRemoveValue(\_:\_:)](txtrecordremovevalue%28____%29.md): Removes a key from a TXTRecordRef.

# TXTRecordSetValue (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Adds a key (optionally with value) to a TXTRecordRef.

## Declaration

```objectivec
DNSServiceErrorType TXTRecordSetValue(TXTRecordRef *txtRecord, const char *key, uint8_t valueSize, const void *value);
```

## Parameters

- `txtRecord`: A TXTRecordRef initialized by calling TXTRecordCreate().
- `key`: A null-terminated string which only contains printable ASCII values (0x20-0x7E), excluding ‘=’ (0x3D). Keys should be 9 characters or fewer (not counting the terminating null).
- `valueSize`: The size of the value.
- `value`: Any binary value. For values that represent textual data, UTF-8 is STRONGLY recommended. For values that represent textual data, valueSize should NOT include the terminating null (if any) at the end of the string. If NULL, then “key” will be added with no value. If non-NULL but valueSize is zero, then “key=” will be added with empty value.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success. Returns kDNSServiceErr_Invalid if the “key” string contains illegal characters. Returns kDNSServiceErr_NoMemory if adding this key would exceed the available storage.

<a id="Discussion"></a>

## Discussion

If the “key” already exists in the TXTRecordRef, then the current value will be replaced with the new value. Keys may exist in four states with respect to a given TXT record: - Absent (key does not appear at all) - Present with no value (“key” appears alone) - Present with empty value (“key=” appears in TXT record) - Present with non-empty value (“key=value” appears in TXT record) For more details refer to “Data Syntax for DNS-SD TXT Records” in [dns-sd.org](http://files.dns-sd.org/draft-cheshire-dnsext-dns-sd.txt)

## See Also

### TXT Record Construction Functions

- [TXTRecordCreate](txtrecordcreate%28______%29.md): Creates a new empty TXTRecordRef referencing the specified storage.
- [TXTRecordDeallocate](txtrecorddeallocate%28__%29.md): Releases resources associated with a TXT record.
- [TXTRecordGetBytesPtr](txtrecordgetbytesptr%28__%29.md): Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.
- [TXTRecordGetLength](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordRemoveValue](txtrecordremovevalue%28____%29.md): Removes a key from a TXTRecordRef.
