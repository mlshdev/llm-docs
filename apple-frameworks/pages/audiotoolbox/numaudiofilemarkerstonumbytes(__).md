> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/numaudiofilemarkerstonumbytes(_:)](https://developer.apple.com/documentation/audiotoolbox/numaudiofilemarkerstonumbytes(_:))

# NumAudioFileMarkersToNumBytes(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns the number of bytes corresponding to a specified number of audio file markers.

## Declaration

```swift
func NumAudioFileMarkersToNumBytes(_ inNumMarkers: Int) -> Int
```

## Parameters

- `inNumMarkers`: The number of audio file markers for which you wish to know the equivalent number of bytes.

<a id="return-value"></a>

## Return Value

The number of bytes required to contain the specified number of audio file markers.

<a id="Discussion"></a>

## Discussion

Use this convenience function when you call the [AudioFileSetProperty(\_:\_:\_:\_:)](audiofilesetproperty%28________%29.md) function with the [kAudioFilePropertyMarkerList](kaudiofilepropertymarkerlist.md) property to calculate the size of buffer needed to hold a specific number of audio file markers.

## See Also

### Related Documentation

- [AudioFileSetProperty(\_:\_:\_:\_:)](audiofilesetproperty%28________%29.md): Sets the value of an audio file property

### Parsing Audio File Content

- [NextAudioFileRegion(\_:)](nextaudiofileregion%28__%29.md): Finds the next audio file region in a region list.
- [NumBytesToNumAudioFileMarkers(\_:)](numbytestonumaudiofilemarkers%28__%29.md): A macro that returns the number of audio file markers represented by a specified number of bytes.

# NumAudioFileMarkersToNumBytes (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns the number of bytes corresponding to a specified number of audio file markers.

## Declaration

```objectivec
static size_t NumAudioFileMarkersToNumBytes(size_t inNumMarkers);
```

## Parameters

- `inNumMarkers`: The number of audio file markers for which you wish to know the equivalent number of bytes.

<a id="return-value"></a>

## Return Value

The number of bytes required to contain the specified number of audio file markers.

<a id="Discussion"></a>

## Discussion

Use this convenience function when you call the [AudioFileSetProperty](audiofilesetproperty%28________%29.md) function with the [kAudioFilePropertyMarkerList](kaudiofilepropertymarkerlist.md) property to calculate the size of buffer needed to hold a specific number of audio file markers.

## See Also

### Related Documentation

- [AudioFileSetProperty](audiofilesetproperty%28________%29.md): Sets the value of an audio file property

### Parsing Audio File Content

- [NextAudioFileRegion](nextaudiofileregion%28__%29.md): Finds the next audio file region in a region list.
- [NumBytesToNumAudioFileMarkers](numbytestonumaudiofilemarkers%28__%29.md): A macro that returns the number of audio file markers represented by a specified number of bytes.
