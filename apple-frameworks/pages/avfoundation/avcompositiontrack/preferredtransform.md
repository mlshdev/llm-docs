> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcompositiontrack/preferredtransform

# preferredTransform

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The track’s transform preference to apply to its visual content during presentation or processing.

## Declaration

```swift
var preferredTransform: CGAffineTransform { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is typically, but not always, [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md).

## See Also

### Accessing visual characteristics

- [naturalSize](naturalsize.md): The natural dimensions of the media data that the track references.
