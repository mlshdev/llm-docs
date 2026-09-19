> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-81n66/containslivestreamingcontent

# containsLiveStreamingContent

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether the content is a live stream. Returns YES for live streams and NO for on-demand content. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL containsLiveStreamingContent;
```
