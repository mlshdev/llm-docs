> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applearchive/archivebytestream/init(object:owned:)

# init(object:owned:)

**Framework:** Apple Archive  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new archive byte stream from the specified traits and entry message processing callback.

## Declaration

```swift
override init(object aaObject: _AAOptionalObjectWrapper<_AAByteStreamTraits>.AAType?, owned aaObjectOwned: Bool)
```

## Parameters

- `aaObject`: An object wrapper that contains the blob traits.
- `aaObjectOwned`: A Boolean value that specifies whether the archive stream owns the traits object.
