> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/numbytestonumaudiofilemarkers(_:)](https://developer.apple.com/documentation/audiotoolbox/numbytestonumaudiofilemarkers(_:))

# NumBytesToNumAudioFileMarkers(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A macro that returns the number of audio file markers represented by a specified number of bytes.

## Declaration

```swift
func NumBytesToNumAudioFileMarkers(_ inNumBytes: Int) -> Int
```

## Parameters

- `inNumBytes`: The number of bytes for which you wish to know the equivalent number of audio file markers.

<a id="return-value"></a>

## Return Value

The number of audio file markers that can be contained in the specified number of bytes.

<a id="Discussion"></a>

## Discussion

Use this convenience macro when you call the [AudioFileGetProperty(\_:\_:\_:\_:)](audiofilegetproperty%28________%29.md) function with the [kAudioFilePropertyMarkerList](kaudiofilepropertymarkerlist.md) property to calculate the number of markers that will be returned.

## See Also

### Related Documentation

- [AudioFileGetProperty(\_:\_:\_:\_:)](audiofilegetproperty%28________%29.md): Gets the value of an audio file property.

### Parsing Audio File Content

- [NextAudioFileRegion(\_:)](nextaudiofileregion%28__%29.md): Finds the next audio file region in a region list.
- [NumAudioFileMarkersToNumBytes(\_:)](numaudiofilemarkerstonumbytes%28__%29.md): Returns the number of bytes corresponding to a specified number of audio file markers.

# NumBytesToNumAudioFileMarkers (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A macro that returns the number of audio file markers represented by a specified number of bytes.

## Declaration

```objectivec
static size_t NumBytesToNumAudioFileMarkers(size_t inNumBytes);
```

## Parameters

- `inNumBytes`: The number of bytes for which you wish to know the equivalent number of audio file markers.

<a id="return-value"></a>

## Return Value

The number of audio file markers that can be contained in the specified number of bytes.

<a id="Discussion"></a>

## Discussion

Use this convenience macro when you call the [AudioFileGetProperty](audiofilegetproperty%28________%29.md) function with the [kAudioFilePropertyMarkerList](kaudiofilepropertymarkerlist.md) property to calculate the number of markers that will be returned.

## See Also

### Related Documentation

- [AudioFileGetProperty](audiofilegetproperty%28________%29.md): Gets the value of an audio file property.

### Parsing Audio File Content

- [NextAudioFileRegion](nextaudiofileregion%28__%29.md): Finds the next audio file region in a region list.
- [NumAudioFileMarkersToNumBytes](numaudiofilemarkerstonumbytes%28__%29.md): Returns the number of bytes corresponding to a specified number of audio file markers.
