> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/constituentfileurls

# constituentFileURLs

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** macOS 27.0+

The list of file URLs used by the MediaExtension that constitute the asset. The list of file URLs that constitute the asset are returned only for QuickTime reference movies, or if the MediaExtension format reader implements this property \[MEFileInfo setConstituentFileNames:\].

## Declaration

```swift
static var constituentFileURLs: AVAsyncProperty<Root, [URL]> { get }
```
