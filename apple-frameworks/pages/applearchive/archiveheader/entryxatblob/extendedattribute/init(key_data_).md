> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entryxatblob/extendedattribute/init(key:data:)](https://developer.apple.com/documentation/applearchive/archiveheader/entryxatblob/extendedattribute/init(key:data:))

# init(key:data:)

**Framework:** Apple Archive  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a new extended attribute structure.

## Declaration

```swift
init(key: String, data: ContiguousArray<UInt8>)
```

## Parameters

- `key`: The attribute key.
- `data`: The attribute data.
