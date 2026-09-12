> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwtxtrecord/entry](https://developer.apple.com/documentation/network/nwtxtrecord/entry)

# NWTXTRecord.Entry

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type of entry in a TXT record dictionary.

## Declaration

```swift
enum Entry
```

## Topics

### Entry Types

- [NWTXTRecord.Entry.none](entry/none.md): The key is not mapped to any value.
- [NWTXTRecord.Entry.empty](entry/empty.md): The key is mapped to an empty value.
- [NWTXTRecord.Entry.string(\_:)](entry/string%28__%29.md): The key is mapped to a string.

### Enumeration Cases

- [NWTXTRecord.Entry.data(\_:)](entry/data%28__%29.md)

### Initializers

- [init(\_:)](entry/init%28__%29.md)

### Instance Properties

- [data](entry/data.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating TXT Records

- [init(\_:)](init%28__%29-566pd.md): Initializes a TXT record with a dictionary of strings.
- [removeEntry(key:)](removeentry%28key_%29.md): Removes an entry from a TXT record dictionary.
- [setEntry(\_:for:)](setentry%28__for_%29.md): Sets an entry in a TXT record dictionary.
