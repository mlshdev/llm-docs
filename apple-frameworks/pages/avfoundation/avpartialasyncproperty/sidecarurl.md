> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/sidecarurl](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/sidecarurl)

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
