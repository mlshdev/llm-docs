> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmbufferhandlers/version

# version

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The version number.

## Declaration

```objectivec
uintptr_t version;
```

<a id="Discussion"></a>

## Discussion

This value must be `1`.

## See Also

### Buffer Handlers

- [compare](compare.md): A handler callback the queue uses to perform an insertion sort of the queue.
- [CMBufferCompareHandler](../cmbuffercomparehandler.md)
- [getDuration](getduration.md)
- [getDecodeTimeStamp](getdecodetimestamp.md)
- [getPresentationTimeStamp](getpresentationtimestamp.md)
- [CMBufferGetTimeHandler](../cmbuffergettimehandler.md)
- [getSize](getsize.md)
- [CMBufferGetSizeHandler](../cmbuffergetsizehandler.md)
- [isDataReady](isdataready.md)
- [CMBufferGetBooleanHandler](../cmbuffergetbooleanhandler.md)
- [dataBecameReadyNotification](databecamereadynotification.md)
