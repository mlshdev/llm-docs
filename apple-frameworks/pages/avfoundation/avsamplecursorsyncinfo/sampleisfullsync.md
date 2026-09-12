> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursorsyncinfo/sampleisfullsync](https://developer.apple.com/documentation/avfoundation/avsamplecursorsyncinfo/sampleisfullsync)

# sampleIsFullSync (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether a sample is a full sync sample.

## Declaration

```swift
var sampleIsFullSync: ObjCBool
```

<a id="Discussion"></a>

## Discussion

A full sync sample, also called a Instantaneous Decoder Refresh sample, is sufficient in itself to completely resynchronize a decoder.

## See Also

### Sync information

- [sampleIsPartialSync](sampleispartialsync.md): A Boolean value that indicates whether a sample is a partial sync sample.
- [sampleIsDroppable](sampleisdroppable.md): A Boolean value that indicates whether a sample is droppable.

# sampleIsFullSync (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether a sample is a full sync sample.

## Declaration

```objectivec
BOOL sampleIsFullSync;
```

<a id="Discussion"></a>

## Discussion

A full sync sample, also called a Instantaneous Decoder Refresh sample, is sufficient in itself to completely resynchronize a decoder.

## See Also

### Sync information

- [sampleIsPartialSync](sampleispartialsync.md): A Boolean value that indicates whether a sample is a partial sync sample.
- [sampleIsDroppable](sampleisdroppable.md): A Boolean value that indicates whether a sample is droppable.
