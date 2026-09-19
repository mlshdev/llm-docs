> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/mediadatastorage

# mediaDataStorage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A storage container for the media data to be added to a track.

## Declaration

```swift
@NSCopying var mediaDataStorage: AVMediaDataStorage? { get set }
```

## See Also

### Configuring track information

- [isModified](ismodified.md): A Boolean value that indicates whether a track is in a modified state.
- [alternateGroupID](alternategroupid.md): A number that identifies the track as a member of a particular alternate group.
- [sampleReferenceBaseURL](samplereferencebaseurl.md): The base URL for sample references.

# mediaDataStorage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A storage container for the media data to be added to a track.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVMediaDataStorage * mediaDataStorage;
```

## See Also

### Configuring track information

- [modified](ismodified.md): A Boolean value that indicates whether a track is in a modified state.
- [alternateGroupID](alternategroupid.md): A number that identifies the track as a member of a particular alternate group.
- [sampleReferenceBaseURL](samplereferencebaseurl.md): The base URL for sample references.
