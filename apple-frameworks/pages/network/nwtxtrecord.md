> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwtxtrecord](https://developer.apple.com/documentation/network/nwtxtrecord)

# NWTXTRecord

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A dictionary representing a TXT record in a DNS packet.

## Declaration

```swift
struct NWTXTRecord
```

## Topics

### Creating TXT Records

- [init(\_:)](nwtxtrecord/init%28__%29-566pd.md): Initializes a TXT record with a dictionary of strings.
- [removeEntry(key:)](nwtxtrecord/removeentry%28key_%29.md): Removes an entry from a TXT record dictionary.
- [setEntry(\_:for:)](nwtxtrecord/setentry%28__for_%29.md): Sets an entry in a TXT record dictionary.
- [NWTXTRecord.Entry](nwtxtrecord/entry.md): A type of entry in a TXT record dictionary.

### Examining TXT Records

- [getEntry(for:)](nwtxtrecord/getentry%28for_%29.md): Accesses an entry in a TXT record dictionary.
- [subscript(\_:)](nwtxtrecord/subscript%28__%29.md): Get and set values in a TXT record dictionary, by keys.
- [dictionary](nwtxtrecord/dictionary.md): The TXT record as a dictionary of strings.

### Initializers

- [init(\_:)](nwtxtrecord/init%28__%29-30jy4.md)
- [init(\_:)](nwtxtrecord/init%28__%29-69q7g.md): Create an NWTXTRecord object from a Dictionary\<String, Data\>.
- [init(\_:)](nwtxtrecord/init%28__%29-7cww7.md): Create an NWTXTRecord object from a Dictionary\<String, NWTXTRecord.Entry\>.

### Instance Properties

- [data](nwtxtrecord/data.md)
- [dataDictionary](nwtxtrecord/datadictionary.md): Access the contents of an NWTXTRecord represented by a Dictionary\<String, Data\>.
- [entries](nwtxtrecord/entries.md): Get all entries present in the TXT record.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Evaluating Browser Results

- [endpoint](nwbrowser/result/endpoint.md): The discovered service endpoint.
- [interfaces](nwbrowser/result/interfaces.md): The list of interfaces on which the service was discovered.
- [metadata](nwbrowser/result/metadata-swift.property.md): The metadata associated with the discovered service, such as the TXT record.
- [NWBrowser.Result.Metadata](nwbrowser/result/metadata-swift.enum.md): Values associated with discovered services, such as TXT records.
