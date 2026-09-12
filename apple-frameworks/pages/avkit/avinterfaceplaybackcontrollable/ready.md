> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfaceplaybackcontrollable/ready](https://developer.apple.com/documentation/avkit/avinterfaceplaybackcontrollable/ready)

# ready

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Property

Indicates whether the media source is ready for playback operations. Returns YES when the source has sufficient data and is prepared to begin playback. Use this property to determine when playback controls should be enabled and when the media can respond to play requests. Must be key-value observable.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReady) BOOL ready;
```

## See Also

### Inspecting playback state

- [playing](playing.md): Indicates whether the media is currently playing. Setting this property starts or pauses playback. Must be key-value observable.
- [buffering](buffering.md): Indicates whether the media source is currently buffering content. Returns YES when the source is loading data and cannot immediately continue playback. Must be key-value observable.
- [state](state.md): The current operational state of the interface source. Must be key-value observable.
- [playbackError](playbackerror.md): Error information when the source encounters a playback failure. Nil when playback is functioning normally. Must be key-value observable.
- [containsLiveStreamingContent](containslivestreamingcontent.md): Indicates whether the content contains live streaming content. Returns YES for live streams and NO for on-demand content. Must be key-value observable.
