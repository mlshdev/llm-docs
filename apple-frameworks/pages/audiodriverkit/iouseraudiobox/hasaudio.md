> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/hasaudio](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/hasaudio)

# HasAudio

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns a Boolean value that indicates the box’s audio support.

## Declaration

```objectivec
bool HasAudio();
```

<a id="return-value"></a>

## Return Value

`true` if the box supports audio; `false` otherwise.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Determining Media Support

- [SetHasAudio](sethasaudio.md): Sets a Boolean value that indicates the box’s audio support.
- [SetHasVideo](sethasvideo.md): Sets a Boolean value that indicates the box’s video support.
- [HasVideo](hasvideo.md): Returns a Boolean value that indicates the box’s video support.
- [SetHasMIDI](sethasmidi.md): Sets a Boolean value that indicates the box’s MIDI support.
- [HasMIDI](hasmidi.md): Returns a Boolean value that indicates the box’s MIDI support.
