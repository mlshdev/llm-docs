> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avsamplecursorsyncinfo/init(sampleisfullsync:sampleispartialsync:sampleisdroppable:)

# init(sampleIsFullSync:sampleIsPartialSync:sampleIsDroppable:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a sample cursor sync information structure with media sample information.

## Declaration

```swift
init(sampleIsFullSync: ObjCBool, sampleIsPartialSync: ObjCBool, sampleIsDroppable: ObjCBool)
```

## Parameters

- `sampleIsFullSync`: A Boolean value that indicates whether a sample is a full sync sample.
- `sampleIsPartialSync`: A Boolean value that indicates whether a sample is a partial sync sample.
- `sampleIsDroppable`: A Boolean value that indicates whether a sample is droppable.
