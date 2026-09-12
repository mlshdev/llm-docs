> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/naturalsize](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/naturalsize)

# naturalSize

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The natural dimensions of the media data that the track references.

## Declaration

```swift
var naturalSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

For visual tracks, like video or subtitle tracks, this property value is the natural size of the media. For nonvisual tracks, like audio or chapter tracks, the value is [zero](../../corefoundation/cgsize/zero.md).

## See Also

### Accessing visual characteristics

- [preferredTransform](preferredtransform.md): The track’s transform preference to apply to its visual content during presentation or processing.
