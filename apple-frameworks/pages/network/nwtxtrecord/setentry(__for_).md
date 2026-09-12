> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwtxtrecord/setentry(_:for:)](https://developer.apple.com/documentation/network/nwtxtrecord/setentry(_:for:))

# setEntry(\_:for:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets an entry in a TXT record dictionary.

## Declaration

```swift
@discardableResult mutating func setEntry(_ entry: NWTXTRecord.Entry, for key: String) -> Bool
```

## See Also

### Creating TXT Records

- [init(\_:)](init%28__%29-566pd.md): Initializes a TXT record with a dictionary of strings.
- [removeEntry(key:)](removeentry%28key_%29.md): Removes an entry from a TXT record dictionary.
- [NWTXTRecord.Entry](entry.md): A type of entry in a TXT record dictionary.
