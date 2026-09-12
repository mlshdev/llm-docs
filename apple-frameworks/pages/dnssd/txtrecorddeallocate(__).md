> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/txtrecorddeallocate(_:)](https://developer.apple.com/documentation/dnssd/txtrecorddeallocate(_:))

# TXTRecordDeallocate(\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Releases resources associated with a TXT record.

## Declaration

```swift
func TXTRecordDeallocate(_ txtRecord: UnsafeMutablePointer<TXTRecordRef>!)
```

## Parameters

- `txtRecord`: A TXTRecordRef initialized by calling TXTRecordCreate().

<a id="Discussion"></a>

## Discussion

Releases any resources allocated in the course of preparing a TXT Record using TXTRecordCreate()/TXTRecordSetValue()/TXTRecordRemoveValue(). Ownership of the buffer provided in TXTRecordCreate() returns to the client.

## See Also

### TXT Record Construction Functions

- [TXTRecordCreate(\_:\_:\_:)](txtrecordcreate%28______%29.md): Creates a new empty TXTRecordRef referencing the specified storage.
- [TXTRecordGetBytesPtr(\_:)](txtrecordgetbytesptr%28__%29.md): Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.
- [TXTRecordGetLength(\_:)](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordRemoveValue(\_:\_:)](txtrecordremovevalue%28____%29.md): Removes a key from a TXTRecordRef.
- [TXTRecordSetValue(\_:\_:\_:\_:)](txtrecordsetvalue%28________%29.md): Adds a key (optionally with value) to a TXTRecordRef.

# TXTRecordDeallocate (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Releases resources associated with a TXT record.

## Declaration

```objectivec
void TXTRecordDeallocate(TXTRecordRef *txtRecord);
```

## Parameters

- `txtRecord`: A TXTRecordRef initialized by calling TXTRecordCreate().

<a id="Discussion"></a>

## Discussion

Releases any resources allocated in the course of preparing a TXT Record using TXTRecordCreate()/TXTRecordSetValue()/TXTRecordRemoveValue(). Ownership of the buffer provided in TXTRecordCreate() returns to the client.

## See Also

### TXT Record Construction Functions

- [TXTRecordCreate](txtrecordcreate%28______%29.md): Creates a new empty TXTRecordRef referencing the specified storage.
- [TXTRecordGetBytesPtr](txtrecordgetbytesptr%28__%29.md): Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.
- [TXTRecordGetLength](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordRemoveValue](txtrecordremovevalue%28____%29.md): Removes a key from a TXTRecordRef.
- [TXTRecordSetValue](txtrecordsetvalue%28________%29.md): Adds a key (optionally with value) to a TXTRecordRef.
