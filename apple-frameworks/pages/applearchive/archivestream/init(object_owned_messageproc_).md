> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestream/init(object:owned:messageproc:)](https://developer.apple.com/documentation/applearchive/archivestream/init(object:owned:messageproc:))

# init(object:owned:messageProc:)

**Framework:** Apple Archive  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new archive stream from the specified traits and entry message processing callback.

## Declaration

```swift
override init(object aaObject: _AAOptionalObjectWrapperWithFilter<_AAArchiveStreamTraits>.AAType?, owned aaObjectOwned: Bool, messageProc filter: ArchiveHeader._EntryFilterWrapper? = nil)
```

## Parameters

- `aaObject`: An object wrapper that contains the blob traits.
- `aaObjectOwned`: A Boolean value that specifies whether the archive stream owns the traits object.
- `filter`: An object wrapper that contains the entry message processing callback.
