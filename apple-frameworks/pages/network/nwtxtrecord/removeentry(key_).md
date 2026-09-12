> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwtxtrecord/removeentry(key:)](https://developer.apple.com/documentation/network/nwtxtrecord/removeentry(key:))

# removeEntry(key:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Removes an entry from a TXT record dictionary.

## Declaration

```swift
@discardableResult mutating func removeEntry(key: String) -> Bool
```

## See Also

### Creating TXT Records

- [init(\_:)](init%28__%29-566pd.md): Initializes a TXT record with a dictionary of strings.
- [setEntry(\_:for:)](setentry%28__for_%29.md): Sets an entry in a TXT record dictionary.
- [NWTXTRecord.Entry](entry.md): A type of entry in a TXT record dictionary.
