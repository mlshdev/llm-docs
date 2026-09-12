> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursorstoragerange/init(offset:length:)](https://developer.apple.com/documentation/avfoundation/avsamplecursorstoragerange/init(offset:length:))

# init(offset:length:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a storage range structure with offset and length values.

## Declaration

```swift
init(offset: Int64, length: Int64)
```

## Parameters

- `offset`: The offset of the first byte of storage that a media sample or its chunk occupies.
- `length`: The number of storage bytes that a media sample or its chunk occupies.
