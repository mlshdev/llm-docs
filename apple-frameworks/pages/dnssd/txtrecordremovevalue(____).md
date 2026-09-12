> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/txtrecordremovevalue(_:_:)](https://developer.apple.com/documentation/dnssd/txtrecordremovevalue(_:_:))

# TXTRecordRemoveValue(\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Removes a key from a TXTRecordRef.

## Declaration

```swift
func TXTRecordRemoveValue(_ txtRecord: UnsafeMutablePointer<TXTRecordRef>!, _ key: UnsafePointer<CChar>!) -> DNSServiceErrorType
```

## Parameters

- `txtRecord`: A TXTRecordRef initialized by calling TXTRecordCreate().
- `key`: A key name. This value must be an ASCII string that exists in the TXTRecordRef.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success. Returns kDNSServiceErr_NoSuchKey if the “key” does not exist in the TXTRecordRef.

## See Also

### TXT Record Construction Functions

- [TXTRecordCreate(\_:\_:\_:)](txtrecordcreate%28______%29.md): Creates a new empty TXTRecordRef referencing the specified storage.
- [TXTRecordDeallocate(\_:)](txtrecorddeallocate%28__%29.md): Releases resources associated with a TXT record.
- [TXTRecordGetBytesPtr(\_:)](txtrecordgetbytesptr%28__%29.md): Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.
- [TXTRecordGetLength(\_:)](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordSetValue(\_:\_:\_:\_:)](txtrecordsetvalue%28________%29.md): Adds a key (optionally with value) to a TXTRecordRef.

# TXTRecordRemoveValue (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Removes a key from a TXTRecordRef.

## Declaration

```objectivec
DNSServiceErrorType TXTRecordRemoveValue(TXTRecordRef *txtRecord, const char *key);
```

## Parameters

- `txtRecord`: A TXTRecordRef initialized by calling TXTRecordCreate().
- `key`: A key name. This value must be an ASCII string that exists in the TXTRecordRef.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success. Returns kDNSServiceErr_NoSuchKey if the “key” does not exist in the TXTRecordRef.

## See Also

### TXT Record Construction Functions

- [TXTRecordCreate](txtrecordcreate%28______%29.md): Creates a new empty TXTRecordRef referencing the specified storage.
- [TXTRecordDeallocate](txtrecorddeallocate%28__%29.md): Releases resources associated with a TXT record.
- [TXTRecordGetBytesPtr](txtrecordgetbytesptr%28__%29.md): Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.
- [TXTRecordGetLength](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordSetValue](txtrecordsetvalue%28________%29.md): Adds a key (optionally with value) to a TXTRecordRef.
