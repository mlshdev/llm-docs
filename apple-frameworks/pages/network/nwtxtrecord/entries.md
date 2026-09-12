> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwtxtrecord/entries](https://developer.apple.com/documentation/network/nwtxtrecord/entries)

# entries

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Get all entries present in the TXT record.

## Declaration

```swift
var entries: [String : NWTXTRecord.Entry] { get }
```

<a id="return-value"></a>

## Return Value

A dictionary representing all entries in the TXT record, preserving original key case.
