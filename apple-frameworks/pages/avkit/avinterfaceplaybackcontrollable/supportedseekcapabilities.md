> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfaceplaybackcontrollable/supportedseekcapabilities

# supportedSeekCapabilities

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

An option set indicating which timeline navigation operations are supported by this media source. This property defines the available navigation capabilities, including precise seeking to specific time positions and accelerated scanning for fast-forward/rewind operations. The supported modes may vary based on content type, licensing restrictions, or technical limitations of the underlying media format. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readonly) AVInterfaceSeekCapabilities supportedSeekCapabilities;
```
