> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/txtrecordgetbytesptr(_:)](https://developer.apple.com/documentation/dnssd/txtrecordgetbytesptr(_:))

# TXTRecordGetBytesPtr(\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.

## Declaration

```swift
func TXTRecordGetBytesPtr(_ txtRecord: UnsafePointer<TXTRecordRef>!) -> UnsafeRawPointer!
```

## Parameters

- `txtRecord`: A TXTRecordRef initialized by calling TXTRecordCreate().

<a id="return-value"></a>

## Return Value

Returns a pointer to the raw bytes inside the TXTRecordRef which you can pass directly to [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md) or to [DNSServiceUpdateRecord(\_:\_:\_:\_:\_:\_:)](dnsserviceupdaterecord%28____________%29.md).

## See Also

### TXT Record Construction Functions

- [TXTRecordCreate(\_:\_:\_:)](txtrecordcreate%28______%29.md): Creates a new empty TXTRecordRef referencing the specified storage.
- [TXTRecordDeallocate(\_:)](txtrecorddeallocate%28__%29.md): Releases resources associated with a TXT record.
- [TXTRecordGetLength(\_:)](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordRemoveValue(\_:\_:)](txtrecordremovevalue%28____%29.md): Removes a key from a TXTRecordRef.
- [TXTRecordSetValue(\_:\_:\_:\_:)](txtrecordsetvalue%28________%29.md): Adds a key (optionally with value) to a TXTRecordRef.

# TXTRecordGetBytesPtr (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.

## Declaration

```objectivec
const void *TXTRecordGetBytesPtr(const TXTRecordRef *txtRecord);
```

## Parameters

- `txtRecord`: A TXTRecordRef initialized by calling TXTRecordCreate().

<a id="return-value"></a>

## Return Value

Returns a pointer to the raw bytes inside the TXTRecordRef which you can pass directly to [DNSServiceRegister](dnsserviceregister%28________________________%29.md) or to [DNSServiceUpdateRecord](dnsserviceupdaterecord%28____________%29.md).

## See Also

### TXT Record Construction Functions

- [TXTRecordCreate](txtrecordcreate%28______%29.md): Creates a new empty TXTRecordRef referencing the specified storage.
- [TXTRecordDeallocate](txtrecorddeallocate%28__%29.md): Releases resources associated with a TXT record.
- [TXTRecordGetLength](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordRemoveValue](txtrecordremovevalue%28____%29.md): Removes a key from a TXTRecordRef.
- [TXTRecordSetValue](txtrecordsetvalue%28________%29.md): Adds a key (optionally with value) to a TXTRecordRef.
