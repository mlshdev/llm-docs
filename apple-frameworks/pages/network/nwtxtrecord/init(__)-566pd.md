> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwtxtrecord/init(_:)-566pd

# init(\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes a TXT record with a dictionary of strings.

## Declaration

```swift
init(_ dictionary: [String : String] = [:])
```

## See Also

### Creating TXT Records

- [removeEntry(key:)](removeentry%28key_%29.md): Removes an entry from a TXT record dictionary.
- [setEntry(\_:for:)](setentry%28__for_%29.md): Sets an entry in a TXT record dictionary.
- [NWTXTRecord.Entry](entry.md): A type of entry in a TXT record dictionary.
