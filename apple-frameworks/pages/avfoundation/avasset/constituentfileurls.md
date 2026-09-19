> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avasset/constituentfileurls

# constituentFileURLs

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The list of file URLs that collectively represent the media asset.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSURL *> * constituentFileURLs;
```

<a id="discussion"></a>

## Discussion

The list of file URLs that constitute the asset are returned only for QuickTime reference movies, or if the MediaExtension format reader implements this property \[MEFileInfo setConstituentFileNames:\].
