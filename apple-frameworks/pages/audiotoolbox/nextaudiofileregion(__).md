> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/nextaudiofileregion(_:)](https://developer.apple.com/documentation/audiotoolbox/nextaudiofileregion(_:))

# NextAudioFileRegion(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Finds the next audio file region in a region list.

## Declaration

```swift
func NextAudioFileRegion(_ inAFRegionPtr: UnsafePointer<AudioFileRegion>) -> UnsafeMutablePointer<AudioFileRegion>
```

## Parameters

- `inAFRegionPtr`: A pointer to an audio file region in the region list.

<a id="return-value"></a>

## Return Value

A pointer to the next region after the region pointed to by the `inAFRegionPtr` parameter. This value can be beyond the end of the list, so pay attention to the total number of regions in the list.

<a id="Discussion"></a>

## Discussion

Because audio file regions are of variable length, you cannot easily walk the list. Use this convenience function when you call the [AudioFileGetProperty(\_:\_:\_:\_:)](audiofilegetproperty%28________%29.md) function with the [kAudioFilePropertyRegionList](kaudiofilepropertyregionlist.md) property to walk through the list of regions returned.

## See Also

### Related Documentation

- [AudioFileSetProperty(\_:\_:\_:\_:)](audiofilesetproperty%28________%29.md): Sets the value of an audio file property

### Parsing Audio File Content

- [NumAudioFileMarkersToNumBytes(\_:)](numaudiofilemarkerstonumbytes%28__%29.md): Returns the number of bytes corresponding to a specified number of audio file markers.
- [NumBytesToNumAudioFileMarkers(\_:)](numbytestonumaudiofilemarkers%28__%29.md): A macro that returns the number of audio file markers represented by a specified number of bytes.

# NextAudioFileRegion (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Finds the next audio file region in a region list.

## Declaration

```objectivec
static AudioFileRegion *NextAudioFileRegion(const AudioFileRegion *inAFRegionPtr);
```

## Parameters

- `inAFRegionPtr`: A pointer to an audio file region in the region list.

<a id="return-value"></a>

## Return Value

A pointer to the next region after the region pointed to by the `inAFRegionPtr` parameter. This value can be beyond the end of the list, so pay attention to the total number of regions in the list.

<a id="Discussion"></a>

## Discussion

Because audio file regions are of variable length, you cannot easily walk the list. Use this convenience function when you call the [AudioFileGetProperty](audiofilegetproperty%28________%29.md) function with the [kAudioFilePropertyRegionList](kaudiofilepropertyregionlist.md) property to walk through the list of regions returned.

## See Also

### Related Documentation

- [AudioFileSetProperty](audiofilesetproperty%28________%29.md): Sets the value of an audio file property

### Parsing Audio File Content

- [NumAudioFileMarkersToNumBytes](numaudiofilemarkerstonumbytes%28__%29.md): Returns the number of bytes corresponding to a specified number of audio file markers.
- [NumBytesToNumAudioFileMarkers](numbytestonumaudiofilemarkers%28__%29.md): A macro that returns the number of audio file markers represented by a specified number of bytes.
