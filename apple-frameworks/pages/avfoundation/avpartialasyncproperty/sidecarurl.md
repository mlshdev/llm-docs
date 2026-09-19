> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/sidecarurl

# sidecarURL

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** macOS 26.0+

The sidecar URL used by the MediaExtension. The sidecar URL is returned only if the MediaExtension format reader supports sidecar files, and implements this property \[MEFileInfo setSidecarFilename:\]. Will return nil otherwise.

## Declaration

```swift
static var sidecarURL: AVAsyncProperty<Root, URL?> { get }
```

## See Also

### Describing a property

- [description](description.md): A description of the object.
