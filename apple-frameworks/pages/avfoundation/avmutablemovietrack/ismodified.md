> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/ismodified](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/ismodified)

# isModified (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether a track is in a modified state.

## Declaration

```swift
var isModified: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property is `YES` when the `AVMutableMovieTrack` object has been modified since it was created, was last written, or had its modified state cleared.

## See Also

### Configuring track information

- [alternateGroupID](alternategroupid.md): A number that identifies the track as a member of a particular alternate group.
- [mediaDataStorage](mediadatastorage.md): A storage container for the media data to be added to a track.
- [sampleReferenceBaseURL](samplereferencebaseurl.md): The base URL for sample references.

# modified (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether a track is in a modified state.

## Declaration

```objectivec
@property (nonatomic, getter=isModified) BOOL modified;
```

<a id="Discussion"></a>

## Discussion

This property is `YES` when the `AVMutableMovieTrack` object has been modified since it was created, was last written, or had its modified state cleared.

## See Also

### Configuring track information

- [alternateGroupID](alternategroupid.md): A number that identifies the track as a member of a particular alternate group.
- [mediaDataStorage](mediadatastorage.md): A storage container for the media data to be added to a track.
- [sampleReferenceBaseURL](samplereferencebaseurl.md): The base URL for sample references.
