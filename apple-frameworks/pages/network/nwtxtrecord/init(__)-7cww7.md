> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwtxtrecord/init(_:)-7cww7

# init(\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Create an NWTXTRecord object from a Dictionary\<String, NWTXTRecord.Entry\>.

## Declaration

```swift
init(_ entryDictionary: [String : NWTXTRecord.Entry])
```

<a id="discussion"></a>

## Discussion

Invalid keys will be ignored.
