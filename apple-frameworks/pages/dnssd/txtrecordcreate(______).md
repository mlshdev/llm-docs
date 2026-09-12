> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/txtrecordcreate(_:_:_:)](https://developer.apple.com/documentation/dnssd/txtrecordcreate(_:_:_:))

# TXTRecordCreate(\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a new empty TXTRecordRef referencing the specified storage.

## Declaration

```swift
func TXTRecordCreate(_ txtRecord: UnsafeMutablePointer<TXTRecordRef>!, _ bufferLen: UInt16, _ buffer: UnsafeMutableRawPointer!)
```

## Parameters

- `txtRecord`: A pointer to an uninitialized TXTRecordRef.
- `bufferLen`: The size of the storage provided in the “buffer” parameter.
- `buffer`: Optional caller-supplied storage used to hold the TXTRecord data. This storage must remain valid for as long as the TXTRecordRef.

<a id="Discussion"></a>

## Discussion

If the buffer parameter is NULL, or the specified storage size is not large enough to hold a key subsequently added using TXTRecordSetValue(), then additional memory will be added as needed using malloc().

On some platforms, when memory is low, malloc() may fail. In this case, TXTRecordSetValue() will return kDNSServiceErr_NoMemory, and this error condition will need to be handled as appropriate by the caller.

You can avoid the need to handle this error condition if you ensure that the storage you initially provide is large enough to hold all the key/value pairs that are to be added to the record. The caller can precompute the exact length required for all of the key/value pairs to be added, or simply provide a fixed-sized buffer known in advance to be large enough.

A no-value (key-only) key requires (1 + key length) bytes.

A key with empty value requires (1 + key length + 1) bytes.

A key with non-empty value requires (1 + key length + 1 + value length).

For most applications, DNS-SD TXT records are generally less than 100 bytes, so in most cases a simple fixed-sized 256-byte buffer will be more than sufficient.

Recommended size limits for DNS-SD TXT Records are discussed in [dns-sd.org](http://files.dns-sd.org/draft-cheshire-dnsext-dns-sd.txt)

Note: When passing parameters to and from these TXT record APIs, the key name does not include the ‘=’ character. The ‘=’ character is the separator between the key and value in the on-the-wire packet format; it is not part of either the key or the value.

## See Also

### TXT Record Construction Functions

- [TXTRecordDeallocate(\_:)](txtrecorddeallocate%28__%29.md): Releases resources associated with a TXT record.
- [TXTRecordGetBytesPtr(\_:)](txtrecordgetbytesptr%28__%29.md): Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.
- [TXTRecordGetLength(\_:)](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordRemoveValue(\_:\_:)](txtrecordremovevalue%28____%29.md): Removes a key from a TXTRecordRef.
- [TXTRecordSetValue(\_:\_:\_:\_:)](txtrecordsetvalue%28________%29.md): Adds a key (optionally with value) to a TXTRecordRef.

# TXTRecordCreate (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a new empty TXTRecordRef referencing the specified storage.

## Declaration

```objectivec
void TXTRecordCreate(TXTRecordRef *txtRecord, uint16_t bufferLen, void *buffer);
```

## Parameters

- `txtRecord`: A pointer to an uninitialized TXTRecordRef.
- `bufferLen`: The size of the storage provided in the “buffer” parameter.
- `buffer`: Optional caller-supplied storage used to hold the TXTRecord data. This storage must remain valid for as long as the TXTRecordRef.

<a id="Discussion"></a>

## Discussion

If the buffer parameter is NULL, or the specified storage size is not large enough to hold a key subsequently added using TXTRecordSetValue(), then additional memory will be added as needed using malloc().

On some platforms, when memory is low, malloc() may fail. In this case, TXTRecordSetValue() will return kDNSServiceErr_NoMemory, and this error condition will need to be handled as appropriate by the caller.

You can avoid the need to handle this error condition if you ensure that the storage you initially provide is large enough to hold all the key/value pairs that are to be added to the record. The caller can precompute the exact length required for all of the key/value pairs to be added, or simply provide a fixed-sized buffer known in advance to be large enough.

A no-value (key-only) key requires (1 + key length) bytes.

A key with empty value requires (1 + key length + 1) bytes.

A key with non-empty value requires (1 + key length + 1 + value length).

For most applications, DNS-SD TXT records are generally less than 100 bytes, so in most cases a simple fixed-sized 256-byte buffer will be more than sufficient.

Recommended size limits for DNS-SD TXT Records are discussed in [dns-sd.org](http://files.dns-sd.org/draft-cheshire-dnsext-dns-sd.txt)

Note: When passing parameters to and from these TXT record APIs, the key name does not include the ‘=’ character. The ‘=’ character is the separator between the key and value in the on-the-wire packet format; it is not part of either the key or the value.

## See Also

### TXT Record Construction Functions

- [TXTRecordDeallocate](txtrecorddeallocate%28__%29.md): Releases resources associated with a TXT record.
- [TXTRecordGetBytesPtr](txtrecordgetbytesptr%28__%29.md): Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.
- [TXTRecordGetLength](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordRemoveValue](txtrecordremovevalue%28____%29.md): Removes a key from a TXTRecordRef.
- [TXTRecordSetValue](txtrecordsetvalue%28________%29.md): Adds a key (optionally with value) to a TXTRecordRef.
