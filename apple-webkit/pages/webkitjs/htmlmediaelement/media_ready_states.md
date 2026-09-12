> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/htmlmediaelement/media_ready_states](https://developer.apple.com/documentation/webkitjs/htmlmediaelement/media_ready_states)

# Media Ready States

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** API Collection

Possible values for the [readyState](1632439-readystate.md) property.

## Topics

### Constants

- [HAVE_NOTHING](1631033-have_nothing.md): No media data is available for playback at the current time.
- [HAVE_METADATA](1633377-have_metadata.md): Enough of the media resource has been loaded to know the duration, and in the case of a `video` element, the dimensions.
- [HAVE_CURRENT_DATA](1629691-have_current_data.md): Data for the current playback position is available, but not enough to begin playback.
- [HAVE_FUTURE_DATA](1632623-have_future_data.md): Enough data is available to begin playback.
- [HAVE_ENOUGH_DATA](1633359-have_enough_data.md): Enough data is available to play at the default playback rate to the end of the media resource without having to pause to rebuffer.
